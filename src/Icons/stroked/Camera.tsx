import * as React from "react";

function SvgCamera(props: ISvgIcons) {
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
        <path d="M8.25 12v3.333a2.848 2.848 0 01-3 2.667H.75m0-2.25v3.75M15 9H1.5a.75.75 0 01-.75-.75V4.5A4.5 4.5 0 015.25 0h16.5a1.5 1.5 0 011.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L16.5 6.751V7.5A1.5 1.5 0 0115 9z" />
        <path d="M20.25 5.084V10.5a1.5 1.5 0 01-1.5 1.5H5.25a3 3 0 01-3-3h0m21-2.25v3" />
      </g>
    </svg>
  );
}

export default SvgCamera;
