import * as React from "react";

function SvgCritical(props: ISvgIcons) {
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
        <path d="M12 18.75a.375.375 0 100 .75.375.375 0 000-.75h0m0-3v-7.5" />
        <path d="M13.621 1.76a1.806 1.806 0 00-3.242 0L.906 21.058a1.52 1.52 0 001.366 2.192h19.456a1.52 1.52 0 001.366-2.192L13.621 1.76z" />
      </g>
    </svg>
  );
}

export default SvgCritical;
