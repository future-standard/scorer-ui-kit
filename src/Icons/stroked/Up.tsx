import * as React from "react";

function SvgUp(props: ISvgIcons) {
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
        d="M.75 17.189L11.47 6.47a.751.751 0 011.06 0l10.72 10.719"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgUp;
