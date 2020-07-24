import * as React from "react";

function SvgClose(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={"0 0 24 24"}
      {...props}
    >
      <path
        d="M.75 23.249l22.5-22.5m0 22.5L.75.749"
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgClose;
