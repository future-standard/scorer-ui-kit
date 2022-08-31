import * as React from "react";

function SvgRequired(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <path
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 00-.549-2.049l-2.6-1.5a1.5 1.5 0 00-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 00-2.049-.549l-2.6 1.5A1.5 1.5 0 004.9 5.658l1.9 3.295H3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 002.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 002.049.549l2.6-1.5a1.5 1.5 0 00.549-2.049l-1.9-3.294H21a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z'
      />
    </svg>
  );
}

export default SvgRequired;
