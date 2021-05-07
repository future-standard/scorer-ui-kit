import * as React from 'react';

function SvgCo2(props: ISvgIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
      >
        <circle cx={12} cy={12} r={11.25} />
        <path d='M9 8.25a3 3 0 00-3 3v1.5a3 3 0 003 3m3.75-7.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 003 0v-4.5a1.5 1.5 0 00-1.5-1.5zm3.75 5.625c0-.621.504-1.125 1.125-1.125h0c.621 0 1.125.504 1.125 1.125h0c0 .363-.124.716-.351 1L16.5 17.25h2.25' />
      </g>
    </svg>
  );
}

export default SvgCo2;
