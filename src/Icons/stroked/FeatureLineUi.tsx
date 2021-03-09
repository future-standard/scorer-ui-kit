import * as React from "react";

function SvgFeatureLineUi(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M3.75 17.25a3 3 0 110 6 3 3 0 010-6zM20 1a3 3 0 110 6 3 3 0 010-6zm-2.53 5.53L6.53 17.47"
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

export default SvgFeatureLineUi;
