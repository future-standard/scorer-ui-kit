import { useRef, useCallback, useEffect } from 'react';


export const usePoll = (callback = ()=>{}, interval = 1000) => {
  const timeoutIDRef = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const callbackRef = useRef<()=>void>(callback);
  const canceled = useRef<boolean>(false);


  const pollOnce = useCallback(async()=>{
    if(timeoutIDRef.current !== null){
      console.debug('Clearing previous');
      clearTimeout(timeoutIDRef.current);
      timeoutIDRef.current = null;
    }

    await callbackRef.current();
    //Start next one in the chain
    if(!canceled.current){
      console.debug('Starting next timeout');
      timeoutIDRef.current = setTimeout(pollOnce, interval);
    }
  },[interval]);

  useEffect(()=>{
    callbackRef.current = callback;
  },[callback]);

  useEffect(()=>{

    pollOnce();

    return () => {
      console.debug('canceled');
      canceled.current = true;
      if(timeoutIDRef.current !== null){
        console.debug('clearing final', timeoutIDRef.current);
        clearTimeout(timeoutIDRef.current);
        timeoutIDRef.current = null;
      }
    };
  },[pollOnce]);
};
