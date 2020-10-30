import * as React from "react";

function SvgCopy(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M4.5 17.5A1.5 1.5 0 013 16V2.5A1.5 1.5 0 014.5 1H15a1.5 1.5 0 011.5 1.5" />
        <rect width={13.5} height={16.5} x={8} y={6} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgCopy;
