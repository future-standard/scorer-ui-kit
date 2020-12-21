import * as React from "react";

function SvgUnlocked(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M.75 9.75V6a5.25 5.25 0 1110.5 0v3.75" />
        <rect width={16.5} height={13.5} x={6.75} y={9.75} rx={1.5} />
        <path d="M15 15.75a.375.375 0 100 .75.375.375 0 000-.75h0" />
      </g>
    </svg>
  );
}

export default SvgUnlocked;
