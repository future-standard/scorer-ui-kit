import * as React from "react";

function SvgCloseCompact(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M5 18.999l14-14m0 14l-14-14'
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

export default SvgCloseCompact;
