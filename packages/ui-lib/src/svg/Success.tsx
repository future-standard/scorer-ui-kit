import * as React from "react";

function SvgSuccess(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <g
        fill='none'
        fillRule='evenodd'
        stroke='var(--white-a1)'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      >
        <path d='M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828' />
        <circle cx={12} cy={11.999} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgSuccess;
