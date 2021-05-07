import * as React from 'react';

function SvgPlay(props: ISvgIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size}
      height={props.size}
      viewBox='-4 -3 30 30'
      {...props}
    >
      <path
        d='M2.338 3.255v17.49a1.499 1.499 0 002.209 1.322l16.323-8.745a1.5 1.5 0 000-2.644L4.547 1.933a1.5 1.5 0 00-2.209 1.322z'
        stroke={props.color}
        strokeWidth={props.weight}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}

export default SvgPlay;
