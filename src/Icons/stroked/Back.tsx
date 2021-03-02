import * as React from "react";

function SvgBack(props: ISvgIcons) {
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
        <path d="M7.501 11.997h9m-5.25 3.75l-3.75-3.75 3.75-3.75" />
        <circle cx={12.001} cy={11.997} r={10.5} />
      </g>
    </svg>
  );
}

export default SvgBack;
