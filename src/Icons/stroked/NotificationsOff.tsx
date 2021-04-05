import * as React from "react";

function SvgNotificationsOff(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M22.501 2.25l-21 21M10 21.75a2.086 2.086 0 004.005 0M12.001 3V.75m-1.501 18H21s-1.5-1.2-1.5-8.25a7.386 7.386 0 00-.093-.915M16.212 4.3A7.498 7.498 0 004.5 10.5v5.25"
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

export default SvgNotificationsOff;
