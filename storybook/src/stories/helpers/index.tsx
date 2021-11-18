export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

/**
 * Overrides the toString on a function so that it addon-jsx prints
 * the callbacks in a copy-paste-able way.
 */
 export const emptyCallbackForStory = <T extends Function>(fn: T): T => {
  /** A toString to render the function in storybook */
  // eslint-disable-next-line no-param-reassign
  fn.toString = () => '() => {}';
  return fn;
};
