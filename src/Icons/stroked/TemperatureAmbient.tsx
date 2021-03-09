import * as React from "react";

function SvgTemperatureAmbient(props: ISvgIcons) {
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
        <path d="M8.25 15.418V3.75a3 3 0 10-6 0v11.668a4.493 4.493 0 107.5 3.332 4.47 4.47 0 00-1.5-3.332h0zm-3-10.168v12" />
        <circle cx={5.25} cy={18.75} r={1.5} />
        <circle cx={15} cy={11.25} r={3.75} />
        <path d="M15.75 4.5V3m4.023 3.477l1.061-1.061m.916 5.834h1.5m-3.477 4.773l1.061 1.061M15.75 18v1.5" />
      </g>
    </svg>
  );
}

export default SvgTemperatureAmbient;
