import { useEffect } from 'react';

export const useTitle = (title : string, area? : string, delimiter?: string, update= true) => {


  useEffect(() => {
    if(!update) return;
    document.title = makeTitle([
      ...(title ? [title] : []),
      ...(area ? [area] : [])
    ], delimiter);
  },[title, area, delimiter, update]);
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