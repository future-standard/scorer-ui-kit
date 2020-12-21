import * as React from "react";

function SvgUserProfile(props: ISvgIcons) {
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
        <circle cx={12} cy={6} r={5.25} />
        <path d="M2.25 23.25c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75" />
      </g>
    </svg>
  );
}

export default SvgUserProfile;
