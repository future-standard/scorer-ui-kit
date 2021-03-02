import * as React from "react";

function SvgBroken(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M8.25 5.249l-3-3m1.5 6h-1.5m6-4.5v-1.5m3 4.5h4.5a4.5 4.5 0 010 9h-4.5m-9.53-4.334l-2.652 2.652a4.5 4.5 0 006.364 6.364l2.652-2.652"
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgBroken;
