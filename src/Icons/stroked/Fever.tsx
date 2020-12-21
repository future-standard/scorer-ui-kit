import * as React from "react";

function SvgFever(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M6.021 3.75c-1.942 2.337-3.05 5.8-4.47 9.48a.75.75 0 00.7 1.02h1.9v3a3 3 0 003 3h1.5v3m10.5 0v-6.265a9.36 9.36 0 00.5-13.235m-9.5-3c-1.5 3 2.25 3 .75 6m4.138-6c-1.5 3 2.25 3 .75 6"
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgFever;
