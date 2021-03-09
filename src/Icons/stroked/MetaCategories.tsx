import * as React from "react";

function SvgMetaCategories(props: ISvgIcons) {
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
        <circle cx={5.25} cy={5.255} r={4.5} />
        <circle cx={5.25} cy={18.755} r={4.5} />
        <circle cx={18.75} cy={5.255} r={4.5} />
        <circle cx={18.75} cy={18.755} r={4.5} />
      </g>
    </svg>
  );
}

export default SvgMetaCategories;
