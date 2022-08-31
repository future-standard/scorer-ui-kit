import defaultsDeep from 'lodash.defaultsdeep';

interface ThemeLike {
  [key: string]: string|number|ThemeLike;
}
export default function themeFallbackHelper(theme: ThemeLike, themeFallback: ThemeLike){
  return defaultsDeep({}, theme, themeFallback);
}