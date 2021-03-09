import * as React from "react";

function SvgLayoutList(props: ISvgIcons) {
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
        <rect width={22.5} height={4.5} x={0.75} y={0.747} rx={1.5} />
        <rect width={22.5} height={4.5} x={0.75} y={9.747} rx={1.5} />
        <rect width={22.5} height={4.5} x={0.75} y={18.747} rx={1.5} />
      </g>
    </svg>
  );
}

export default SvgLayoutList;
