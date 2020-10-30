import * as React from "react";

function SvgNotifications(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <path
        d="M10 21.75a2.086 2.086 0 004.005 0M12 3V.75M12 3a7.5 7.5 0 017.5 7.5c0 7.046 1.5 8.25 1.5 8.25H3s1.5-1.916 1.5-8.25A7.5 7.5 0 0112 3z"
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgNotifications;
