import * as React from "react";

function SvgZone(props: ISvgIcons) {
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
        <path d="M2.724.827A1.5 1.5 0 00.75 2.25V19.5c0 .593.35 1.13.891 1.371l5.306 2.25c.355.157.757.171 1.122.039l7.143-2.844a1.5 1.5 0 011.07.017l4.911 1.93a1.501 1.501 0 002.057-1.392V4.116c0-.663-.434-1.247-1.069-1.437L16.161.873a1.502 1.502 0 00-.825-.01l-7.4 2.084c-.286.078-.588.07-.869-.024L2.724.827z" />
        <path d="M3.75 4.5v14.25l3.75 1.5 8.25-3 4.5 1.5V5.25l-4.5-1.5L7.5 6z" />
        <path d="M3.75 9.879l3.75 1.5 3.75-1.5m3-5.72v3.904m-10.5 6.316L7.5 15.75l2.25-.621v4.303m4.5-1.637V14.25l1.5-.75 4.5 1.5" />
      </g>
    </svg>
  );
}

export default SvgZone;
