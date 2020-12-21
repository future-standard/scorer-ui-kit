import * as React from "react";

function SvgTemperature(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        transform="translate(.75 .75)"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M10.656 10.6V2.578a2.062 2.062 0 10-4.125 0V10.6a3.093 3.093 0 104.125 0z" />
        <circle cx={8.594} cy={12.891} r={1.031} />
        <path d="M8.594 2.578v9.281m4.125-9.281h1.031m-1.031 3.094h1.031m-1.031 3.094h1.031" />
      </g>
    </svg>
  );
}

export default SvgTemperature;
