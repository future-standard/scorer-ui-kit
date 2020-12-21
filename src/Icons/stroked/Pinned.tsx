import * as React from "react";

function SvgPinned(props: ISvgIcons) {
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
        <path d="M4.949 8.783a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.5 1.5 0 002.356-.3 7.522 7.522 0 00.81-5.54l6.529-4.155a1.5 1.5 0 00.256-2.326L16.97 1.188a1.5 1.5 0 00-2.326.255l-4.155 6.53a7.522 7.522 0 00-5.54.81zM8.753 15.246L.75 23.249" />
      </g>
    </svg>
  );
}

export default SvgPinned;
