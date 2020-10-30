import * as React from "react";

function SvgLeft(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        d="M17.25 23.25L6.53 12.53a.751.751 0 010-1.06L17.25.75"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgLeft;
