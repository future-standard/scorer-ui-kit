import * as React from "react";

function SvgHome(props: ISvgIcons) {
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
        <path d="M3.754 13.923v8.25h6v-6a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5v6h6v-8.25M.754 12.423l10.19-10.189a1.5 1.5 0 012.121 0l10.189 10.189M16.504 5.673v-1.5h3.75v5.25" />
      </g>
    </svg>
  );
}

export default SvgHome;
