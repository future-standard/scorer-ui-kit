import * as React from "react";

function SvgSearch(props: ISvgIcons) {
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
        <circle cx={9.823} cy={9.823} r={8.823} />
        <path d="M16.062 16.062l6.843 6.844" />
      </g>
    </svg>
  );
}

export default SvgSearch;
