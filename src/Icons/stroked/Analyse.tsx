import * as React from "react";

function SvgAnalyse(props: ISvgIcons) {
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
        <path d="M6.726.75h10.5M15.726 8.25V.75h-7.5v7.5L1.489 18.615A3 3 0 004 23.25h15.948a3 3 0 002.515-4.635L15.726 8.25zM5.301 12.75h13.35M14.226 17.25h3M15.726 15.75v3M6.726 19.125c.207 0 .374.168.374.375M6.351 19.5c0-.207.168-.375.375-.375M6.726 19.875a.375.375 0 01-.375-.375M7.1 19.5a.375.375 0 01-.375.375M9.726 16.125c.207 0 .375.168.375.375M9.351 16.5c0-.207.168-.375.375-.375M9.726 16.875a.375.375 0 01-.375-.375M10.1 16.5a.375.375 0 01-.375.375M15.726 3.75h-3M15.726 6.75h-3" />
      </g>
    </svg>
  );
}

export default SvgAnalyse;
