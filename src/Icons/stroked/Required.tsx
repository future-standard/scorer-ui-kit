import * as React from "react";

function SvgRequired(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        d="M21 8.953h-3.8l1.9-3.295a1.5 1.5 0 00-.549-2.049l-2.6-1.5a1.5 1.5 0 00-2.049.549L12 5.953l-1.9-3.3a1.5 1.5 0 00-2.049-.549l-2.6 1.5A1.5 1.5 0 004.9 5.658l1.9 3.295H3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.8l-1.9 3.294c-.2.345-.254.756-.15 1.14.102.386.355.714.701.913l2.6 1.5a1.5 1.5 0 002.049-.549l1.9-3.298 1.9 3.294a1.5 1.5 0 002.049.549l2.6-1.5a1.5 1.5 0 00.549-2.049l-1.9-3.294H21a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgRequired;
