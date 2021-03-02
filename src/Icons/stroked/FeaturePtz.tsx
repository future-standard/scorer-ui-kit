import * as React from "react";

function SvgFeaturePtz(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M12 .75v22.5M9 3.75l3-3 3 3m-6 16.5l3 3 3-3M23.25 12H.75m19.5-3l3 3-3 3M3.75 9l-3 3 3 3"
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

export default SvgFeaturePtz;
