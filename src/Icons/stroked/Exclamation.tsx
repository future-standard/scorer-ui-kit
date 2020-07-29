import * as React from "react";

function SvgExclamation(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25'
        fill='none'
        fillRule='evenodd'
        stroke={props.color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={props.weight}
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}

export default SvgExclamation;
