import * as React from "react";

function SvgDataRetention(props: ISvgIcons) {
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
        <circle cx={17.25} cy={17.25} r={6} />
        <path d="M19.902 17.25H17.25v-2.651m5.229-6.357a4.867 4.867 0 00-6.868-1.377 7.5 7.5 0 00-8.3-6.057 7.5 7.5 0 00.938 14.941" />
      </g>
    </svg>
  );
}

export default SvgDataRetention;
