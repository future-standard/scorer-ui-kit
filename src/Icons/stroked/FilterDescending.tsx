import * as React from "react";

function SvgFilterDescending(props: ISvgIcons) {
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
        <path d="M8.25 23.248V.748M3.75 4.5L8.25 0l4.5 4.5M15.75.248h3.6a.899.899 0 01.836 1.234l-4.372 6.531a.9.9 0 00.836 1.235h3.6m0 14.5V17a2.25 2.25 0 10-4.5 0v6.75m0-3.002h4.5" />
      </g>
    </svg>
  );
}

export default SvgFilterDescending;
