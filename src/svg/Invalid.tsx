import * as React from "react";

function SvgInvalid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <circle cx={11.998} cy={12} r={11.25} />
        <path d="M7.498 16.5l8.999-9m.001 9l-9.001-9" />
      </g>
    </svg>
  );
}

export default SvgInvalid;
