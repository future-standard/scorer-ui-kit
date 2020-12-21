import * as React from "react";

function SvgDevicesScorerCamera(props: ISvgIcons) {
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
        <path d="M17.25 22.424c.207 0 .375.168.375.375m-.75.001c0-.207.168-.375.375-.375m0 .749a.375.375 0 01-.375-.375m.75.001a.375.375 0 01-.375.375m6-7.552a9.54 9.54 0 00-12 0m2.5 3.615a5.568 5.568 0 017 0M17.25 3.75l-16.5 3v-3a3 3 0 013-3h13.786a.75.75 0 01.671 1.085L17.25 3.75z" />
        <path d="M15.75 4.023V7.5a2.25 2.25 0 01-2.25 2.25h-9A2.25 2.25 0 012.25 7.5V6.477m4.5 3.273v1.5a3 3 0 01-3 3h-3m0-1.5v3m18-10.5v3" />
      </g>
    </svg>
  );
}

export default SvgDevicesScorerCamera;
