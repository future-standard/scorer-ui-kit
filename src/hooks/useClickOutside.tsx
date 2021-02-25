import react, {useEffect, useRef } from 'react';

export type outClickType = (eve: MouseEvent) => void;
export function useClickOutside(elRef : any , elCallback : outClickType) {

  if(!elCallback) {return};

  const callbackRef = useRef<outClickType>(elCallback);
  callbackRef.current = elCallback;
  
  useEffect(() => {
    const handleClickOutside = (eve : MouseEvent)  => {
      if(!(elRef?.current?.contains(eve.target))) {
        callbackRef.current(eve);
      }
    }
    
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click',  handleClickOutside, true);
    }
  }, [elCallback, elRef])
}