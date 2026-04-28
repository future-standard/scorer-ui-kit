declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  import type React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
