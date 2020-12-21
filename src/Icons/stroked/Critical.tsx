import * as React from "react";

function SvgCritical(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M10 15.625a.312.312 0 100 .625.312.312 0 000-.625m0-2.5v-6.25" />
        <path d="M11.35 1.467a1.505 1.505 0 00-2.7 0L.754 17.548a1.268 1.268 0 001.138 1.827h16.214a1.268 1.268 0 001.138-1.827L11.351 1.467z" />
      </g>
    </svg>
  );
}

export default SvgCritical;
