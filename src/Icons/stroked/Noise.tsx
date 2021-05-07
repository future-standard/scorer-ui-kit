import * as React from 'react';

function SvgNoise(props: ISvgIcons) {
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
        strokeLinejoin='round'
        vectorEffect='non-scaling-stroke'
      >
        <path
          d='M6.75 15.25H4.5a3.75 3.75 0 010-7.5h2.25v7.5zm0 0c4.401 0 8.704 1.303 12.366 3.744l1.134.756V3.25l-1.134.756A22.304 22.304 0 016.75 7.75v7.5zM23.25 10v3m-16.5 2.25A7.241 7.241 0 009 20.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}

export default SvgNoise;
