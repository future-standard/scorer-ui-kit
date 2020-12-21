import * as React from "react";

function SvgSearch(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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
        <circle cx={9.823} cy={9.823} r={8.823} />
        <path d="M16.062 16.062l6.843 6.844" />
      </g>
    </svg>
  );
}

export default SvgSearch;
