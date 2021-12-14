import { useEffect, useState } from 'react';

export const useTitle = (title : string, area? : string, delimiter?: string) => {

  const [baseTitle] = useState<string>(document.title);

  useEffect(() => {
    document.title = makeTitle([
      ...(title ? [title] : []),
      ...(area ? [area] : []),
      baseTitle
    ], delimiter);
  },[title, area]);
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