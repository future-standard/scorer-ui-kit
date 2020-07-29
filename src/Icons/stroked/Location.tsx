import * as React from "react";

function SvgLocation({size,color,weight,...props}: ISvgIcons) {
  return (
    <svg width={size} height={size} {...props}>
      <g
        fill='none'
        fillRule='evenodd'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight}
        opacity={0.653}
        transform='translate(.25 .25)'
      >
        <circle cx={9.75} cy={6.094} r={2.438} />
        <path d='M9.75.61a5.484 5.484 0 015.484 5.484c0 2.641-4.17 8.553-5.237 10.024a.306.306 0 01-.494 0C8.435 14.647 4.266 8.735 4.266 6.094A5.483 5.483 0 019.75.609z' />
        <path d='M14.608 14.45c2.22.44 3.673 1.173 3.673 2.003 0 1.346-3.818 2.438-8.531 2.438-4.713 0-8.531-1.092-8.531-2.438 0-.829 1.447-1.56 3.656-2.001' />
      </g>
    </svg>
  );
}

export default SvgLocation;
