import * as React from "react";

function SvgQuestion(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <path d="M9 9a2.999 2.999 0 015.923-.673A3 3 0 0113 11.829a1.5 1.5 0 00-1 1.415v1.006m0 3a.375.375 0 100 .75.375.375 0 000-.75h0" />
        <circle cx={12} cy={12} r={11.25} />
      </g>
    </svg>
  );
}

export default SvgQuestion;
