import * as React from "react";

function SvgLogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={35} height={35} {...props}>
      <defs>
        <linearGradient
          id="LogoMark_svg__a"
          x1="36.708%"
          x2="69.959%"
          y1="2.579%"
          y2="98.009%"
        >
          <stop offset="0%" stopColor="#7DB8DB" />
          <stop offset="100%" stopColor="#5CA0D1" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect width={35} height={35} fill="url(#LogoMark_svg__a)" rx={5} />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M14.42 25.12c4.4 0 6.42-3.06 6.42-7.02v-7.3h-3.9v7.3c0 1.84-.68 3.56-2.52 3.56-1.8 0-2.5-1.68-2.5-3.56v-7.3h-3.9v7.3c0 3.76 1.86 7.02 6.4 7.02zM26.98 25V10.8h-3.9V25h3.9z"
        />
      </g>
    </svg>
  );
}

export default SvgLogoMark;
