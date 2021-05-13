import * as React from "react";

function SvgCustomAdd(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
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
        <path d="M12 7.5v9M7.5 12h9" />
        <circle cx={12} cy={12} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgCustomAdd;
