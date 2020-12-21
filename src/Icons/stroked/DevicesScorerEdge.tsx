import * as React from "react";

function SvgDevicesScorerEdge(props: ISvgIcons) {
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
        <path d="M1.25.75h11a.5.5 0 01.5.5v3a1 1 0 01-1 1h-10a1 1 0 01-1-1v-3a.5.5 0 01.5-.5zm5.5 7.125c.207 0 .375.168.375.375m-.75 0c0-.207.168-.375.375-.375m0 .75a.375.375 0 01-.375-.375m.75 0a.375.375 0 01-.375.375m-4.5 5.625v3m0 3v1.5a1.5 1.5 0 001.5 1.5h1.5m3 0h3" />
        <rect width={7.5} height={12} x={15.75} y={11.25} rx={1.5} />
        <path d="M19.5 19.875h0m.375.375a.375.375 0 00-.375-.375m0 .75a.375.375 0 00.375-.375m-.75 0c0 .207.168.375.375.375m0-.75a.375.375 0 00-.375.375M17.379 7.629a3 3 0 014.242 0M16.5 4.451a6.768 6.768 0 016 0m-20.486.78a5.25 5.25 0 109.472 0" />
      </g>
    </svg>
  );
}

export default SvgDevicesScorerEdge;
