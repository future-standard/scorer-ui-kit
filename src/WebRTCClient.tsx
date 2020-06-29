import React, { useState, useEffect, useRef, useCallback, VideoHTMLAttributes, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

// interface WebRTCStatus {
//     status: string;
//     error?: string;
// }
const Video = styled.video`
  /* width: 800px; */
`
interface WebRTCMessage {
  sdp?: RTCSessionDescriptionInit;
  ice?: RTCIceCandidate;
}
interface OwnProps {
  enabled: boolean;
  peerAddress: string;
  maxConnectionAttempts?: number;
  rtcConfiguration?: RTCConfiguration
  id: string; //Why is this required ??? just for uuid? can be internal if we want...
  setStatus?: (status: string) => void;
  setError?: (error: string | null) => void;
}
type Props = OwnProps & VideoHTMLAttributes<HTMLVideoElement>

const WebRTCPlayer: React.FC<Props> = ({
  id,
  enabled,
  peerAddress,
  maxConnectionAttempts = 30,
  rtcConfiguration = {},
  setStatus = () => {},
  setError = () => {},
  // Video element defaults
  autoPlay = true,
  muted = true,
  ...props
  }) => {

  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const webSocket = useRef<WebSocket|null>(null);
  const peerConnection = useRef<RTCPeerConnection|null>(null);

  useEffect(() => {
    if (enabled === true) {
      connectToPeer();
    } else {
      if (webSocket.current) {
        webSocket.current.close(1000, 'WebRTC Disabled');
      }
    }
    return ()=>{
      closeWebSocket();
    }
  }, [enabled]);


  function handleIncomingError(error: string) {
    setError(error);
    closeWebSocket();
  }

  // SDP offer received from peer, set remote description and create an answer
  const onIncomingSDP = async (sdp: RTCSessionDescriptionInit) => {
    if (!peerConnection.current || !webSocket.current) {
      return;
    }
    try {
      await peerConnection.current.setRemoteDescription(sdp);
      setStatus('Remote Description set');
    } catch (error){
      console.error('Error:', error.message);
      setError('Error Setting remote description');
      return;
    }


    if (sdp.type !== 'offer') {
      return;
    }
    setStatus('Creating Answer');
    try {
      const answer = await peerConnection.current.createAnswer()
      console.debug('Got local description: ' + JSON.stringify(answer));
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
    }
    setStatus('Sending Local Description');
    // console.log('Local Description:' + JSON.stringify(message));
    try {
      await webSocket.current.send(JSON.stringify(message));
      setStatus('Connected');
    } catch (error) {
      console.error(error.name + ': ' + error.message);
      setError(error.message)
    }
  };

  // ICE candidate received from peer, add it to the peer connection
  function onIncomingICE(ice:RTCIceCandidateInit) {
    if(!peerConnection.current){
      console.error('peerConnection.current not found onIncomingICE ')
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
  }

  function onServerClose(event: any) {
    setStatus('Disconnected from server');
    closePeerConnection();
    // Do not retry when WebRTC is disabled (Toggle is OFF)
    if (event !== null && event.code !== 1000) {
      window.setTimeout(connectToPeer, 3000);
    }
  }

  function onServerError(event: any) {
    setError('Unable to connect to server')
    closeWebSocket();
  }

  function connectToPeer() {
    console.log('connectToPeer', connectionAttempts)
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
      console.log('Incoming stream');
      videoRef.current.srcObject = event.streams[0];
      setStatus('Adding Track');
    }
  }

  function createCall(msg: WebRTCMessage) {
    // Reset connection attempts because we connected successfully
    setConnectionAttempts(0);
    console.log('Creating RTCPeerConnection');

    if (!msg.sdp) {
      console.log('WARNING: First message wasn\'t an SDP message!?');
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
        console.log('no WS found on peer connection \'icecandidate\' event... how?')
      }
    });

    setStatus('RTCPeerConnection created, waiting for SDP');
  }

  const closeWebSocket = () => {
    console.log('closeWebSocket')
    closePeerConnection();
    if(webSocket.current){
      webSocket.current.close();
      webSocket.current = null;
    }
  }

  const closePeerConnection = () => {
    console.log('closePeerConnection')
    if (peerConnection.current) {
      peerConnection.current.close();
      peerConnection.current = null;
    }
  }

  return (
    <Video {...props} autoPlay={autoPlay} muted={muted} ref={videoRef}></Video>
  )
}

export default WebRTCPlayer;



function getPeerId(id: string) {
  return 'WRP_' + id + '_' + Math.floor(Math.random() * (9000 - 10) + 10).toString();
}