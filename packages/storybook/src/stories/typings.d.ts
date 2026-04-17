declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.svg?url' {
  const content: string;
  export default content;
}
declare module '*.svg?raw' {
  const content: string;
  export default content;
}
