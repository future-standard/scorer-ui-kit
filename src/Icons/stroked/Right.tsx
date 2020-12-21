import * as React from "react";

function SvgRight(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        d="M6.5.75l10.72 10.72a.751.751 0 010 1.06L6.5 23.25"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgRight;
