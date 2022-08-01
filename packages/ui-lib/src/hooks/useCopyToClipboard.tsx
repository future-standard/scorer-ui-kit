import { useCallback } from 'react';

export const useCopyToClipboard = () => {
  const copyToClipboard = useCallback((str : string) : boolean => {

      // Make an area to allow for copying.
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);

      const selection = document.getSelection();

      if(selection){
        const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
        el.select();

        const success = document.execCommand('copy');
        document.body.removeChild(el);
        if(selected) {
          selection.removeAllRanges();
          selection.addRange(selected);
        }
        return success;
      }

      return false;

  },[]);

  return {copyToClipboard};
};