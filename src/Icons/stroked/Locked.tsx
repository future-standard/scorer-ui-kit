import * as React from "react";

function SvgLocked(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={"0 0 24 24"}
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M10 9.75V6a5.25 5.25 0 0110.5 0v3.75" />
        <rect width={16.5} height={13.5} x={6.75} y={9.75} rx={1.5} />
        <path d="M15 15.75a.375.375 0 100 .75.375.375 0 000-.75" />
      </g>
    </svg>
  );
}

export default SvgLocked;
