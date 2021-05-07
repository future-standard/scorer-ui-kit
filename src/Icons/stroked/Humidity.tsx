import * as React from 'react';

function SvgHumidity(props: ISvgIcons) {
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
        <path d='M15.424 19.337a3.913 3.913 0 007.826 0c0-2.935-1.957-6.848-3.913-8.8a13.4 13.4 0 00-3.913 8.8h0z' />
        <circle cx={9.75} cy={9.75} r={1.5} />
        <path
          strokeLinecap='round'
          d='M10.858 8.739L14.25 4.5m-2.376 14a9 9 0 01-10.826-6.46 9 9 0 0117.316-4.902'
        />
        <path
          strokeLinecap='round'
          d='M13.213 5.8a5.247 5.247 0 00-7.763 6.95m8.6 0c.618-.878.95-1.926.95-3'
        />
      </g>
    </svg>
  );
}

export default SvgHumidity;
