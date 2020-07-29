import * as React from "react";

function SvgMenu(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        d='M2.25 18.003h19.5m-19.5-6h19.5m-19.5-6h19.5'
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

export default SvgMenu;
