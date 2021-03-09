import * as React from "react";

function SvgLink(props: ISvgIcons) {
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
        <path d="M9.364 18.5l-.932.932a4.5 4.5 0 01-6.364-6.364l4.773-4.774a4.5 4.5 0 016.825 5.825" />
        <path d="M14.818 5.567l.75-.75a4.5 4.5 0 016.364 6.364l-4.773 4.773a4.5 4.5 0 01-6.824-5.826" />
      </g>
    </svg>
  );
}

export default SvgLink;
