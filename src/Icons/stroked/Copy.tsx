import * as React from "react";

function SvgCopy(props: ISvgIcons) {
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
        <path d="M4.5 17.5A1.5 1.5 0 013 16V2.5A1.5 1.5 0 014.5 1H15a1.5 1.5 0 011.5 1.5" />
        <rect x={8} y={6} width={13.5} height={16.5} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgCopy;
