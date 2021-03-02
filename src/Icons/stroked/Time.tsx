import * as React from "react";

function SvgTime(props: ISvgIcons) {
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
        <circle cx={12} cy={12} r={10.5} />
        <path d="M12 12V8.25M12 12l4.687 4.688" />
      </g>
    </svg>
  );
}

export default SvgTime;
