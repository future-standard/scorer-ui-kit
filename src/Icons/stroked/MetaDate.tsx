import * as React from "react";

function SvgMetaDate(props: ISvgIcons) {
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
        <rect x={0.752} y={3.75} width={22.5} height={19.5} rx={1.5} />
        <path d="M.752 9.75h22.5M6.752 6V.75M17.252 6V.75" />
      </g>
    </svg>
  );
}

export default SvgMetaDate;
