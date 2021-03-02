import * as React from "react";

function SvgPasswordHide(props: ISvgIcons) {
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
        <path d="M2.783 20l18.75-18M8.964 18.051A9.985 9.985 0 0012 18.5c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226A20.568 20.568 0 0019.75 7.88M14.413 5.282A9.549 9.549 0 0012 5c-4.031-.067-8.2 2.752-10.821 5.635a1.663 1.663 0 000 2.226 20.8 20.8 0 002.6 2.4M8.25 11.75A3.749 3.749 0 0112 8" />
        <path d="M15.75 11.749h0A3.75 3.75 0 0112 15.5" />
      </g>
    </svg>
  );
}

export default SvgPasswordHide;
