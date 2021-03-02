import * as React from "react";

function SvgForward(props: ISvgIcons) {
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
        <path d="M16.499 11.997h-9M12.749 15.747l3.75-3.75-3.75-3.75" />
        <circle
          cx={11.999}
          cy={11.997}
          r={10.5}
          transform="matrix(-1 0 0 1 23.998 0)"
        />
      </g>
    </svg>
  );
}

export default SvgForward;
