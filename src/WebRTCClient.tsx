import React, { useState, useEffect, useRef, useCallback, VideoHTMLAttributes, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

const Video = styled.video`
  /* width: 800px; */
`;
interface WebRTCMessage {
  sdp?: RTCSessionDescriptionInit;
  ice?: RTCIceCandidate;
}
interface OwnProps {
  enabled: boolean;
  peerAddress: string;
  maxConnectionAttempts?: number;
  rtcConfiguration?: RTCConfiguration
  id?: string;
  setStatus?: (status: string) => void;
  setError?: (error: string | null) => void;
  onResize?: (event: Event) => void;
}
type Props = OwnProps & VideoHTMLAttributes<HTMLVideoElement>

const WebRTCPlayer: React.FC<Props> = ({
  id = "1",
  enabled,
  peerAddress,
  maxConnectionAttempts = 30,
  rtcConfiguration = {},
  setStatus = () => {},
  setError = () => {},
  // Video element defaults
  autoPlay = true,
  muted = true,
  onResize,
  ...props
  }) => {

  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const webSocket = useRef<WebSocket|null>(null);
  const peerConnection = useRef<RTCPeerConnection|null>(null);


  function handleIncomingError(error: string) {
    setError(error);
    closeWebSocket();
  }

  // SDP offer received from peer, set remote description and create an answer
  const onIncomingSDP = async (description: RTCSessionDescriptionInit) => {
    if (!peerConnection.current || !webSocket.current) {
      return;
    }

    try {
      if (description.type === "offer" && peerConnection.current.signalingState !== "stable") {
        await Promise.all([
          peerConnection.current.setLocalDescription({type: "rollback"}),
          peerConnection.current.setRemoteDescription(description)
        ]);

      } else {
        if(description.sdp){
          //HACK: this seems to allow more clients to negotiate.64002a
          // seems to use [codec] H264 (96, level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f)
          description.sdp = description.sdp.replace(/profile-level-id=(640028|64001f|64002a);/,'');
        }
        await peerConnection.current.setRemoteDescription(new RTCSessionDescription(description));
        setStatus('Remote Description set');
      }
    } catch (error){
      console.error('Error:', error);
      setError('Error Setting remote description');
      return;
    }

    // what is this case?
    if (description.type !== 'offer') {
      return;
    }

    setStatus('Creating Answer');
    try {
      const answer = await peerConnection.current.createAnswer();
      console.log('Got local description: ' + JSON.stringify(answer));
      await peerConnection.current.setLocalDescription(answer);
    } catch (error){
      console.error('Error:', error.message);
      setError('Error Creating Answer');
      return;
    }

    // TODO: Why was this being set to null and why AFTER setting it??
    // peerConnection.current.localDescription['ice-option'] = null
    const message = {
      sdp: peerConnection.current.localDescription
    };
    setStatus('Sending Local Description');
    // console.log('Local Description:' + JSON.stringify(message));
    try {
      await webSocket.current.send(JSON.stringify(message));
      setStatus('Connected');
    } catch (error) {
      console.error(error.name + ': ' + error.message);
      setError(error.message);
    }
  };

  // ICE candidate received from peer, add it to the peer connection
  function onIncomingICE(ice:RTCIceCandidateInit) {
    if(!peerConnection.current){
      console.error('peerConnection.current not found onIncomingICE ');
      return;
    }
    const candidate = new RTCIceCandidate(ice);
    peerConnection.current.addIceCandidate(candidate).catch(setError);
  }

  const onServerMessage = ({data = ''}: MessageEvent) => {
    if(data ==='HELLO') {
      console.debug('Received HELLO');
      setStatus('Registered with server, waiting for offer.');
    } else if (data.startsWith('ERROR')) {
      console.error('Received ' + data);
      handleIncomingError(data);
    } else {
      // Handle incoming JSON SDP and ICE messages
      let msg: WebRTCMessage;
      try {
        msg = JSON.parse(data);
      } catch (e) {
        if (e instanceof SyntaxError) {
          handleIncomingError('Error parsing incoming JSON: ' + data);
        } else {
          handleIncomingError('Unknown error parsing response: ' + data);
        }
        return;
      }
      // Incoming JSON signals the beginning of a call
      if (!peerConnection.current) {
        createCall(msg);
      }

      if (msg.sdp != null) {
        console.log('Received Remote SDP:' + JSON.stringify(msg.sdp));
        onIncomingSDP(msg.sdp);
      } else if (msg.ice != null) {
        console.debug('Received Remote ICE:' + JSON.stringify(msg.ice));
        onIncomingICE(msg.ice);
      } else {
        handleIncomingError('Unknown incoming JSON: ' + msg);
      }
    }
  };

  function onServerClose(event: any) {
    console.debug('serverClose');
    if(webSocket.current){
      setStatus('Disconnected from server');
      closePeerConnection();
      //TODO: todo Fix this to clear on close
      if (event !== null && event.code !== 1000 && enabled) {
        window.setTimeout(connectToPeer, 3000);
      }
    }
  }

  function onServerError(event: any) {
    console.debug(event);
    setError('Unable to connect to server');
    closeWebSocket();
  }

  function connectToPeer() {
    console.log('connectToPeer', connectionAttempts);
    if (connectionAttempts >= maxConnectionAttempts) {
      setError('Too many connection attempts, aborting. Refresh page to try again');
      return;
    }
    setError(null);

    const peerId = getPeerId(id);
    setStatus('Connecting to server ' + peerAddress);
    const ws = new WebSocket(peerAddress);
    webSocket.current = ws;
    /* When connected, immediately register with the server */
    ws.addEventListener('open', (event) => {
      const interval = setInterval(() => {
        try {
          ws.send('HELLO ' + peerId);
          clearInterval(interval);
          setStatus('Registering with server (sent HELLO) for peer id: ' + peerId);
        } catch (error) {
          console.log(error);
        }
      }, 3000);
    });
    ws.addEventListener('error', onServerError);
    ws.addEventListener('message', onServerMessage);
    ws.addEventListener('close', onServerClose);
    setConnectionAttempts(connectionAttempts + 1);
  }

  function onRemoteTrack(event: RTCTrackEvent) {
    if (videoRef.current && videoRef.current.srcObject !== event.streams[0]) {
      console.debug('Incoming stream');
      videoRef.current.srcObject = event.streams[0];
      setStatus('Adding Track');
    }
  }

  function createCall(msg: WebRTCMessage) {
    // Reset connection attempts because we connected successfully
    setConnectionAttempts(0);
    console.debug('Creating RTCPeerConnection');

    if (!msg.sdp) {
      console.debug('WARNING: First message wasn\'t an SDP message!?');
      return;
    }

    const pc = new RTCPeerConnection(rtcConfiguration);
    peerConnection.current = pc;
    pc.addEventListener('track', onRemoteTrack);

    pc.addEventListener('icecandidate', ({candidate = null}) => {

      if (!candidate) {
        console.log('All local ICE Candidates sent.');
        return;
      }
      // We have a local ICE candidate, send it to the remote party with the same uuid
      if(webSocket.current){
        webSocket.current.send(JSON.stringify({ 'ice': candidate }));
        //TODO: try catch here?
      } else {
        console.debug('no WS found on peer connection \'icecandidate\' event... how?');
      }
    });
    // pc.addEventListener('negotiationneeded', ()=>{console.log('negotiationneeded')})

    setStatus('RTCPeerConnection created, waiting for SDP');
  }

  const closeWebSocket = async () => {
    console.debug('closeWebSocket');
    await closePeerConnection();
    if(webSocket.current){
      await webSocket.current.close();
      webSocket.current = null;
    }
  };

  const closePeerConnection = async() => {
    console.debug('closePeerConnection');
    if (peerConnection.current) {
      await peerConnection.current.close();
      peerConnection.current = null;
    }
  };

  useEffect(() => {
    if (enabled === true) {
      connectToPeer();
    } else {
      if (webSocket.current) {
        webSocket.current.close(1000, 'WebRTC Disabled');
      }
    }
    return ()=>{
      console.log('cleanup');
      closeWebSocket();
    };
  }, [enabled]);

  useEffect(() => {
    const el = videoRef.current;
    if(el && onResize){
      el.addEventListener('resize', onResize);
      return () => el.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  return (
    <Video {...props} autoPlay={autoPlay} muted={muted} ref={videoRef} />
  );
};

export default WebRTCPlayer;



function getPeerId(id: string) {
  return 'WRP_' + id + '_' + Math.floor(Math.random() * (9000 - 10) + 10).toString();
}