import * as React from "react";

function SvgBigWarning(props: ISvgIcons) {
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
        <path d="M12 16.5a.375.375 0 100 .75.375.375 0 000-.75h0m0-3V6" />
        <path d="M1.28 13.281a1.811 1.811 0 010-2.561l9.44-9.439a1.81 1.81 0 012.56 0l9.44 9.439a1.811 1.811 0 010 2.561l-9.44 9.439a1.812 1.812 0 01-2.56 0l-9.44-9.439z" />
      </g>
    </svg>
  );
}

export default SvgBigWarning;
