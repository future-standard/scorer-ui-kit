import * as React from "react";

function SvgLocation(props: ISvgIcons) {
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
        <circle cx={12} cy={7.5} r={3} />
        <path d="M12 .75a6.75 6.75 0 016.75 6.75c0 3.251-5.132 10.527-6.446 12.337a.377.377 0 01-.608 0C10.382 18.027 5.25 10.751 5.25 7.5A6.75 6.75 0 0112 .75z" />
        <path d="M17.979 17.784c2.732.541 4.521 1.444 4.521 2.466 0 1.657-4.7 3-10.5 3s-10.5-1.343-10.5-3c0-1.02 1.781-1.921 4.5-2.463" />
      </g>
    </svg>
  );
}

export default SvgLocation;
