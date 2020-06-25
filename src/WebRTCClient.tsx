import React, { useState, useEffect, useRef } from 'react';


// interface WebRTCStatus {
//     status: string;
//     error?: string;
// }
interface Props {
  enabled: boolean;
  peerAddress: string;
  maxConnectionAttempts?: number;
  id: string;
  setStatus: (status: string) => void;
  setError: (error: string | null) => void;
}
const WebRTCPlayer: React.FC<Props> = ({ id, enabled, peerAddress, maxConnectionAttempts = 30, setStatus = () => { }, setError = () => { } }) => {

  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const [connectionAttempts, setConnectionAttempts] = useState(0);
  const rtcConfiguration = {};
  const videoRef = useRef<HTMLVideoElement>();
  const [webSocket, setWebSocket] = useState<WebSocket>();

  useEffect(() => {
    if (enabled === true) {
      // videoContainer.style.display = 'block';
      connectToPeer();
    } else {
      // videoContainer.style.display = 'none';
      if (webSocket) {
        webSocket.close(1000, 'WebRTC Disabled');
      }
    }
  }, [enabled]);


  function handleIncomingError(error: string) {
    setError(error);
    closeWebSocket();
  }

  // SDP offer received from peer, set remote description and create an answer
  const onIncomingSDP = async (sdp) => {
    if (!peerConnection || !webSocket) {
      return;
    }
    await peerConnection.setRemoteDescription(sdp)
    setStatus('Remote Description set');
    if (sdp.type !== 'offer') {
      return;
    }
    setStatus('Sending Answer');

    const answer = await peerConnection.createAnswer()
    console.log('Got local description: ' + JSON.stringify(answer));
    await peerConnection.setLocalDescription(answer);
    const message = {
      sdp: {
        ...peerConnection.localDescription,
        'ice-option': null
      }
    }
    setStatus('Sending Local Description');
    console.log('Local Description:' + JSON.stringify(message));
    try {
      await webSocket.send(JSON.stringify(message));
      setStatus('Connected');
    } catch (error) {
      console.log(error.name + ': ' + error.message);
      setError(error.message)
    }




  };

  // ICE candidate received from peer, add it to the peer connection
  function onIncomingICE(ice:RTCIceCandidateInit) {
    if(!peerConnection){
      return;
    }
    const candidate = new RTCIceCandidate(ice);
    peerConnection.addIceCandidate(candidate).catch(setError);
  }

  function onServerMessage(event: { data: string }) {
    switch (event.data) {
      case 'HELLO':
        console.log('Received HELLO');
        setStatus('Registered with server, waiting for offer.');
        return;
      default:
        if (event.data.startsWith('ERROR')) {
          console.error('Received ' + event.data);
          handleIncomingError(event.data);
          return;
        }
        // Handle incoming JSON SDP and ICE messages
        let msg: {
          sdp?: any;
          ice?: any;
        };
        try {
          msg = JSON.parse(event.data);
        } catch (e) {
          if (e instanceof SyntaxError) {
            handleIncomingError('Error parsing incoming JSON: ' + event.data);
          } else {
            handleIncomingError('Unknown error parsing response: ' + event.data);
          }
          return;
        }

        // Incoming JSON signals the beginning of a call
        if (!peerConnection) {
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
    if (connectionAttempts > maxConnectionAttempts) {
      setError('Too many connection attempts, aborting. Refresh page to try again');
      return;
    }
    // // Clear errors in the status span
    // const span = document.getElementById('status');
    // if(span !== null){
    //     span.classList.remove('error');
    //     span.textContent = '';
    // }

    const peerId = getPeerId(id);
    setStatus('Connecting to server ' + peerAddress);
    const ws = new WebSocket(peerAddress);
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
    setWebSocket(ws);
    setConnectionAttempts(connectionAttempts + 1);
  }

  function onRemoteTrack(event: RTCTrackEvent) {
    if (videoRef.current && videoRef.current.srcObject !== event.streams[0]) {
      console.log('Incoming stream');
      videoRef.current.srcObject = event.streams[0];
    }
  }

  function createCall(msg) {
    // Reset connection attempts because we connected successfully
    setConnectionAttempts(0);
    console.log('Creating RTCPeerConnection');

    const pc = new RTCPeerConnection(rtcConfiguration);
    pc.ontrack = onRemoteTrack;

    if (!msg.sdp) {
      console.log('WARNING: First message wasn\'t an SDP message!?');
    }

    pc.onicecandidate = (event) => {
      if (event.candidate == null) {
        console.log('All local ICE Candidates sent.');
        return;
      }
      // We have a local ICE candidate, send it to the remote party with the same uuid
      console.debug('Sending ICE Candidate:', event.candidate, event);
      if(webSocket){
        webSocket.send(JSON.stringify({ 'ice': event.candidate }));
        //TODO: try catch here?
      } else {
        console.log('no WS found on pc.icecandidate? how?')
      }
    };

    setStatus('RTCPeerConnection created, waiting for SDP');
    setPeerConnection(pc);
  }

  const closeWebSocket = () => {
    closePeerConnection();
    if(webSocket){
      webSocket.close();
    }
  }

  const closePeerConnection = () => {
    if (peerConnection) {
      peerConnection.close();
      setPeerConnection(null);
    }
  }

  return (
    <video ref={videoRef}></video>
  )
}

export default WebRTCPlayer;



function getPeerId(id: string) {
  return 'WRP_' + id + '_' + Math.floor(Math.random() * (9000 - 10) + 10).toString();
}