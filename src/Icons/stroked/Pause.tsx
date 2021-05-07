import * as React from 'react';

function SvgPause(props: ISvgIcons) {
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
        <rect width={4.5} height={16.5} x={5.25} y={3.75} rx={1.5} />
        <rect width={4.5} height={16.5} x={14.25} y={3.75} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgPause;
