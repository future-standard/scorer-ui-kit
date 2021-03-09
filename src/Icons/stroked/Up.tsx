import * as React from "react";

function SvgUp(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M.75 17.189L11.47 6.47a.751.751 0 011.06 0l10.72 10.719"
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

export default SvgUp;
