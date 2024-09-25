import { css } from 'styled-components';

export const animationVariables = css`
  :root {

    --easing-primary-in-out: cubic-bezier(0.87, 0, 0.13, 1);
    --easing-primary-in: cubic-bezier(0.16, 1, 0.3, 1);
    --easing-primary-out: cubic-bezier(0.7, 0, 0.84, 0);
    
    --speed-faster: 0.085s;
    --speed-fast: 0.175s;
    --speed-normal: 0.35s;
    --speed-slow: 0.7s;
    --speed-slower: 1.4s;
    --speed-slowest: 2.8s;
    
  }
`;