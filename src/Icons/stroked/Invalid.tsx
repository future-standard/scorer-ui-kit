import * as React from "react";

function SvgInvalid(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        fillRule='evenodd'
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={props.weight}
        vectorEffect='non-scaling-stroke'
      >
        <circle cx={11.998} cy={12} r={11.25} />
        <path d='M7.498 16.5l8.999-9m.001 9l-9.001-9' />
      </g>
    </svg>
  );
}

export default SvgInvalid;
