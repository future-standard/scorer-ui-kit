import * as React from "react";

function SvgSwitchAccount(props: ISvgIcons) {
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
        <path d="M.75 14.248h20.689a.751.751 0 01.531 1.281L18 19.5M6 4.5L2.03 8.468a.75.75 0 00.531 1.28H23.25" />
      </g>
    </svg>
  );
}

export default SvgSwitchAccount;
