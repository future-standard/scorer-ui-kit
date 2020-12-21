import * as React from "react";

function SvgMetaTags(props: ISvgIcons) {
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
        <path d="M1.061 2.56v6.257a3 3 0 00.878 2.121L13.5 22.5a1.5 1.5 0 002.121 0l6.879-6.88a1.5 1.5 0 000-2.121L10.939 1.938a3 3 0 00-2.121-.878H2.561a1.5 1.5 0 00-1.5 1.5z" />
        <circle cx={6.311} cy={6.31} r={1.5} />
      </g>
    </svg>
  );
}

export default SvgMetaTags;
