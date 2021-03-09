import * as React from "react";

function SvgTemperatureNormal(props: ISvgIcons) {
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
        <path d="M15.5 15.418V3.75a3 3 0 10-6 0v11.668a4.501 4.501 0 106 0z" />
        <circle cx={12.5} cy={18.75} r={1.5} />
        <path d="M12.5 8.25v9m6-9H20m-1.5 4.5H20" />
      </g>
    </svg>
  );
}

export default SvgTemperatureNormal;
