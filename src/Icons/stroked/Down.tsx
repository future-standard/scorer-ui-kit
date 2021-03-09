import * as React from "react";

function SvgDown(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M23.25 6.311L12.53 17.03a.751.751 0 01-1.06 0L.75 6.311"
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

export default SvgDown;
