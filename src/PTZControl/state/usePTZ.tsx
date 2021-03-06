import { useCallback, useEffect, useReducer } from 'react';
import useWebSocket from 'react-use-websocket';
import reducer from './PTZReducer';

const usePTZ = ({socketUrl='', imageRefresh = 1000}) => {
  const {
    sendJsonMessage,
    lastMessage
  } = useWebSocket(socketUrl);

  const [state, dispatch ] = useReducer(reducer, {
    connection: 'disconnected',
    moving: null,
    zooming: null,
    image: '',
    loading: false,
    stateID: Math.floor(Math.random() * 1000)
  });
  const {address=null} = state;

  const connect = useCallback(async ({username: user, password: pass, host: address, port = 80}: {username: string, password: string, host: string, port?: number})=>{
    dispatch({
      type: 'CONNECTING',
      address
    });
    await sendJsonMessage({
      method: 'connect',
      params: {
        address,
        port,
        user,
        pass
      }
    });
  },[sendJsonMessage]);

  const move = useCallback(({direction}: {direction: 'up'|'down'|'left'|'right'}) => {
    console.debug('move', direction);
    const speed = {
      x: 0,
      y: 0,
      z: 0
    };

    dispatch({
      type: 'MOVE_START',
      direction
    });

    switch (direction){
      case 'up':
        speed.y = 1;
        break;
      case 'down':
        speed.y = -1;
        break;
      case 'left':
        speed.x = -1;
        break;
      case 'right':
        speed.x = 1;
        break;
    }

    sendJsonMessage({
      method: 'ptzMove',
      params: {
        address,
        speed,
        timeout: 30
      }
    });
  },[sendJsonMessage, address]);

  const zoom = useCallback(({zooming}: {zooming: 'in'|'out'}) => {
    console.debug('zoom', zooming);
    const speed = {
      x: 0,
      y: 0,
      z: 0
    };
    dispatch({
      type: 'ZOOM_START',
      zooming
    });
    switch (zooming) {
      case 'in':
        speed.z = 1;
        break;
      case 'out':
        speed.z = -1;
        break;
    }
    sendJsonMessage({
      method: 'ptzMove',
      params: {
        address,
        speed,
        timeout: 30
      }
    });
  },[sendJsonMessage, address]);

  const stop = useCallback(()=>{
    sendJsonMessage({
      method: 'ptzStop',
      params: {
        address
      }
    });
  },[sendJsonMessage, address]);

  const disconnect = useCallback(async () => {
    dispatch({
      type: 'DISCONNECTED',
    });
  },[]);

  const getImage = useCallback(async ()=>{
    if(!address) { return; }
    sendJsonMessage({
      method: 'fetchSnapshot',
      params: {
        address
      }
    });
  },[address, sendJsonMessage]);

  useEffect(()=>{
    const intervalHandler = setInterval(getImage, imageRefresh);
    return () => {
      window.clearInterval(intervalHandler);
    };
  },[getImage, imageRefresh]);


  useEffect(()=>{
    if(!lastMessage){ return; }
    const {id ='', result=null, error} = JSON.parse(lastMessage.data);
    if(error && id !== 'fetchSnapshot'){
      dispatch({
        type: 'PTZ_ERROR',
        errorMessage: error
      });
      return;
    } else if(id === 'connect') {
      getImage();
      dispatch({
        type: 'CONNECTED',
      });
    } else if(id === 'fetchSnapshot'){
      dispatch({
        type: 'SET_IMAGE',
        image: result||''
      });
    } else if(id === 'ptzMove'){
      console.debug('ptzMove');
    } else if(id === 'ptzStop'){
      console.debug('ptzStop');
      dispatch({
        type: 'STOP'
      });
    }
  },[address, getImage, lastMessage]);

  return {state, dispatch, actions: { connect, getImage, disconnect, zoom, stop, move} };
};

export default usePTZ;