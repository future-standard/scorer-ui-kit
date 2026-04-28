import type React from 'react';
import { useEffect, useRef } from 'react';

export type outClickType = (eve: MouseEvent) => void;
export function useClickOutside(elRef: React.RefObject<Element | null>, elCallback: outClickType) {
  const callbackRef = useRef<outClickType>(elCallback);
  callbackRef.current = elCallback;

  useEffect(() => {
    const handleClickOutside = (eve: MouseEvent) => {
      if (!elRef?.current?.contains(eve.target as Node | null)) {
        callbackRef.current(eve);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [elRef]);
}
