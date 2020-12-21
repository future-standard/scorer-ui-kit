import * as React from "react";

function SvgMetaEnabledState(props: ISvgIcons) {
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
        <path d="M18.376 10.5H5.626A4.888 4.888 0 01.751 5.625h0A4.889 4.889 0 015.626.75h12.75a4.89 4.89 0 014.875 4.875h0a4.889 4.889 0 01-4.875 4.875zM18.376 23.25H5.626a4.888 4.888 0 01-4.875-4.875h0A4.889 4.889 0 015.626 13.5h12.75a4.89 4.89 0 014.875 4.875h0a4.889 4.889 0 01-4.875 4.875h0z" />
        <circle cx={5.626} cy={5.625} r={1.875} />
        <circle cx={18.376} cy={18.375} r={1.875} />
      </g>
    </svg>
  );
}

export default SvgMetaEnabledState;
