import * as React from "react";

function SvgCloseCompact(props: ISvgIcons) {
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
        <path d="M5 18.999l14-14M19 18.999l-14-14" />
      </g>
    </svg>
  );
}

export default SvgCloseCompact;
