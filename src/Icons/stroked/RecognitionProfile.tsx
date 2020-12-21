import * as React from "react";

function SvgRecognitionProfile(props: ISvgIcons) {
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
        <path d="M5.25 22.5a6.75 6.75 0 1113.5 0H5.25zM8.458 8.043a6.859 6.859 0 007.612 1.532" />
        <circle cx={12} cy={10.125} r={4.125} />
        <path d="M.75 5.249V3a1.5 1.5 0 011.5-1.5H4.5m0 13.5H2.25a1.5 1.5 0 01-1.5-1.5v-2.25m22.5 0v2.25a1.5 1.5 0 01-1.5 1.5H19.5m0-13.5h2.25a1.5 1.5 0 011.5 1.5v2.25" />
      </g>
    </svg>
  );
}

export default SvgRecognitionProfile;
