import * as React from "react";

function SvgUsage(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M15.75 23.229c-2.434 0-4.5-1.316-4.5-3.75v-3.75h9v3.75c0 .788-.607 3.75-4.5 3.75zm-7.5-10.5l-1.5 3m4.5-3h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5H18a1.5 1.5 0 011.5 1.5v4.5m-14.25 9h3m-4.5-6h7.5m-6 0v-2.25m3 2.25v-3.75m3 3.75v-6m3.027 6.455c-1.1 1.1 1.089 1.471.015 2.545m3.149-4.46c-1.912 1.911 1.9 2.561.026 4.432" />
        <path d="M20.25 16.479H21a2.25 2.25 0 110 4.5h-1.133" />
      </g>
    </svg>
  );
}

export default SvgUsage;
