import * as React from "react";

function SvgInformation(props: ISvgIcons) {
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
        <path d="M14.25 16.5h-.75A1.5 1.5 0 0112 15v-3.75a.75.75 0 00-.75-.75h-.75m1.125-3.75a.375.375 0 100 .75.375.375 0 000-.75h0" />
        <circle cx={12} cy={12} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgInformation;
