import * as React from "react";

function SvgRecognitionPhoto(props: ISvgIcons) {
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
        <rect width={19.5} height={22.5} x={2.25} y={0.75} rx={1.5} />
        <circle cx={12} cy={9.083} r={4.11} />
        <path d="M18.75 19.027a7.63 7.63 0 00-13.5 0" />
      </g>
    </svg>
  );
}

export default SvgRecognitionPhoto;
