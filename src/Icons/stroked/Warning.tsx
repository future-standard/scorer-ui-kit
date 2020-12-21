import * as React from "react";

function SvgWarning(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
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
        <path d="M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V5.25" />
        <circle cx={12} cy={12} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgWarning;
