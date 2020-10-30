import * as React from "react";

function SvgLanguage(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 18 18" {...props}>
      <defs>
        <filter id="language_svg__a">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 0 0.756863 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g
        filter="url(#language_svg__a)"
        transform="translate(-23 -23)"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g stroke="#000" strokeWidth={1.5} transform="translate(23 23)">
          <path d="M7.301 17.267a8.438 8.438 0 1110.063-9.383M6.967 17.192C5.826 15.517 5.063 12.476 5.063 9S5.825 2.484 6.966.81M.581 8.438h8.982m-7.314-4.5H15.75m-14.214 9h6.339M11.033.81a12.123 12.123 0 011.65 4.814" />
          <circle cx={13.5} cy={9.845} r={1.969} />
          <path d="M13.5 12.375a3.938 3.938 0 00-3.938 3.938v1.125h7.876v-1.125a3.937 3.937 0 00-3.938-3.938h0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgLanguage;
