import * as React from "react";

function SvgPasswordShow(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={"0 0 24 24"}
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
        <path d="M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 000 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637.57-.633.57-1.593 0-2.226C20.2 8 16.031 5.183 12 5.251z" />
        <path d="M15.75 12a3.75 3.75 0 11-7.5-.002 3.75 3.75 0 017.5.002z" />
      </g>
    </svg>
  );
}

export default SvgPasswordShow;
