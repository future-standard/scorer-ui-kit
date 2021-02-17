import react, {useEffect, useRef } from 'react';

export type outClickType = (eve: MouseEvent) => void;
export function useClickOutside(elRef : any , callback : outClickType) {

  if(!callback) {return};

  const callbackRef = useRef<outClickType>(callback);
  callbackRef.current = callback;
  
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
  }, [callback, elRef])
}