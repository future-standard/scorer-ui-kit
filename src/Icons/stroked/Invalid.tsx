import * as React from "react";

function SvgInvalid(props: ISvgIcons) {
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
        <circle cx={11.998} cy={12} r={11.25} />
        <path d="M7.498 16.5l8.999-9m.001 9l-9.001-9" />
      </g>
    </svg>
  );
}

export default SvgInvalid;
