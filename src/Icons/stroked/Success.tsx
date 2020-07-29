import * as React from "react";

function SvgSuccess(props: ISvgIcons) {
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
        <path d="M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828" />
        <circle cx={12} cy={11.999} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgSuccess;
