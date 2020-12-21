import * as React from "react";

function SvgDevicesLiveEndpoint(props: ISvgIcons) {
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
        <path d="M6.75 21.368h10.5m-7.312-6.75l-1.688 6.75m5.813-6.75l1.687 6.75m7.5-12.75a6 6 0 01-6 6H6.75a6 6 0 110-12h10.5c1.591 0 3.117.632 4.243 1.757a6.003 6.003 0 011.757 4.243z" />
        <circle cx={12} cy={8.618} r={3} />
      </g>
    </svg>
  );
}

export default SvgDevicesLiveEndpoint;
