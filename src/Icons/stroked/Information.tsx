import * as React from "react";

function SvgInformation(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
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
        <path d="M11.875 13.75h-.625c-.69 0-1.25-.56-1.25-1.25V9.375a.625.625 0 00-.625-.625H8.75m.938-3.125a.313.313 0 100 .625.313.313 0 000-.625" />
        <circle cx={10} cy={10} r={9.375} />
      </g>
    </svg>
  );
}

export default SvgInformation;
