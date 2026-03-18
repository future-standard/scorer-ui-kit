import { useEffect, useLayoutEffect } from 'react';

export const useTitle = (title : string, area? : string, delimiter?: string, update= true) => {

// Index Title
const baseTitle = document.title.split('|').slice(-1)[0].trim();

// on unmount will return the baseTitle to Index Title for pages not using this hook.
// useLayoutEffect ensures the cleanup (title restore) runs synchronously on unmount,
// before the browser paints and before the next page's effects set their own title.
// With plain useEffect the async cleanup could overwrite the incoming page's title.
useLayoutEffect(() => {
  return () => {
    document.title = baseTitle;
  };
}, [baseTitle]);

  useEffect(() => {
    if(!update) return;
    document.title = makeTitle([
      ...(title ? [title] : []),
      ...(area ? [area] : []),
      ...(baseTitle? [baseTitle] : [])
    ], delimiter);

  },[title, area, delimiter, update, baseTitle]);
};

/**
 * Put the parts together for title use.
 * @param parts Each part to make up the title.
 * @param delimiter Character used for delimiting
 */
const makeTitle = (parts: string[], delimiter : string = '|') : string => {

  let title = '';
  delimiter = ' ' + delimiter + ' ';

  parts.forEach((part, key) => {
    title += part;
    if(parts.length - 1 !== key){
      title += delimiter;
    }
  });

  return title;

};