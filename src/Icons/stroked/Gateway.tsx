import * as React from "react";

function SvgGateway(props: ISvgIcons) {
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
        <path d="M8.25 18v3.1a1.518 1.518 0 001.5 1.4h12a1.557 1.557 0 001.5-1.607V3.111a1.555 1.555 0 00-1.5-1.611h-12a1.619 1.619 0 00-1.5 1.808V6" />
        <path d="M6.75 12.004h12v3m-3 0v-3" />
        <circle cx={3.75} cy={12.004} r={3} />
      </g>
    </svg>
  );
}

export default SvgGateway;
