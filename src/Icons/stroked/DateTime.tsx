import * as React from "react";

function SvgDateTime(props: ISvgIcons) {
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
        <path d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M.75 6.75h16.5m-12-3v-3m7.5 3v-3" />
        <circle cx={17.25} cy={17.25} r={6} />
        <path d="M19.902 17.25H17.25v-2.651" />
      </g>
    </svg>
  );
}

export default SvgDateTime;
