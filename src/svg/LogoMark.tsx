import * as React from "react";

function SvgLogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={35} height={41} {...props}>
      <defs>
        <radialGradient
          cx='6.224%'
          cy='137.135%'
          fx='6.224%'
          fy='137.135%'
          r='327.859%'
          gradientTransform='matrix(.59228 0 0 1 .025 0)'
          id='LogoMark_svg__a'
        >
          <stop stopColor='#80FFFF' offset='0%' />
          <stop stopColor='#7CF8FD' offset='5.03%' />
          <stop stopColor='#4CA1EB' offset='70.34%' />
          <stop stopColor='#397FE3' offset='100%' />
        </radialGradient>
        <radialGradient
          cx='-22.935%'
          cy='-106.479%'
          fx='-22.935%'
          fy='-106.479%'
          r='387.936%'
          gradientTransform='matrix(.58998 0 0 1 -.094 0)'
          id='LogoMark_svg__b'
        >
          <stop stopColor='#80FFFF' offset='0%' />
          <stop stopColor='#7CF8FD' offset='5.03%' />
          <stop stopColor='#4CA1EB' offset='70.34%' />
          <stop stopColor='#397FE3' offset='100%' />
        </radialGradient>
        <radialGradient
          cx='-65.136%'
          cy='146.74%'
          fx='-65.136%'
          fy='146.74%'
          r='489.858%'
          gradientTransform='matrix(1 0 0 .85477 0 .213)'
          id='LogoMark_svg__c'
        >
          <stop stopColor='#80FFFF' offset='0%' />
          <stop stopColor='#7CF8FD' offset='5.03%' />
          <stop stopColor='#4CA1EB' offset='70.34%' />
          <stop stopColor='#397FE3' offset='100%' />
        </radialGradient>
        <radialGradient
          cx='6.224%'
          cy='137.134%'
          fx='6.224%'
          fy='137.134%'
          r='330.105%'
          gradientTransform='matrix(.58804 0 0 1 .026 0)'
          id='LogoMark_svg__d'
        >
          <stop stopColor='#80FFFF' offset='0%' />
          <stop stopColor='#7CF8FD' offset='5.03%' />
          <stop stopColor='#4CA1EB' offset='70.34%' />
          <stop stopColor='#397FE3' offset='100%' />
        </radialGradient>
      </defs>
      <g
        style={{
          mixBlendMode: "luminosity",
        }}
        fillRule='nonzero'
        fill='none'
      >
        <path
          d='M.558 29.679l16.662-9.747 16.662 9.747a.311.311 0 010 .537l-16.305 9.538a.706.706 0 01-.714 0L.558 30.216a.311.311 0 010-.537z'
          fill='url(#LogoMark_svg__a)'
          opacity={0.5}
        />
        <path
          d='M.098 19.932L17.22 9.917l16.685 9.76a.296.296 0 010 .51l-16.685 9.76L.098 19.932z'
          fill='url(#LogoMark_svg__b)'
          opacity={0.79}
        />
        <path
          fill='url(#LogoMark_svg__c)'
          opacity={0.95}
          d='M.098 19.932V9.917L17.22 19.932v10.015z'
        />
        <path
          d='M.098 9.917L16.902.087a.63.63 0 01.636 0l16.28 9.524a.354.354 0 010 .612l-16.598 9.71L.098 9.916z'
          fill='url(#LogoMark_svg__d)'
          opacity={0.9}
        />
      </g>
    </svg>
  );
}

export default SvgLogoMark;
