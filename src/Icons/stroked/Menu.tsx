import * as React from "react";

function SvgMenu(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5" />
      </g>
    </svg>
  );
}

export default SvgMenu;
