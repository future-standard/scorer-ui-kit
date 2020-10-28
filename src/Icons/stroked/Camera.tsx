import * as React from "react";

function SvgCamera(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox={"0 0 24 24"}
      {...props}
    >
      <defs>
        <filter id="camera_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.345098 0 0 0 0 0.345098 0 0 0 0 0.345098 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#camera_svg__a)"
        transform="translate(-45 -29)"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#000" strokeWidth={1.5}>
          <path d="M53.25 41v3.333a2.848 2.848 0 01-3 2.667h-4.5m0-2.25v3.75M60 38H46.5a.75.75 0 01-.75-.75V33.5a4.5 4.5 0 014.5-4.5h16.5a1.5 1.5 0 011.5 1.5v1.275c0 .593-.35 1.13-.891 1.371L61.5 35.751v.749A1.5 1.5 0 0160 38z" />
          <path d="M65.25 34.084V39.5a1.5 1.5 0 01-1.5 1.5h-13.5a3 3 0 01-3-3h0m21-2.25v3" />
        </g>
      </g>
    </svg>
  );
}

export default SvgCamera;
