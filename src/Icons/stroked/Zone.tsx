import * as React from "react";

function SvgZone({size,color,weight,...props}: ISvgIcons) {
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
      >
        <path d='M2.463.922A1.22 1.22 0 00.859 2.078v14.016c0 .482.284.918.724 1.114l4.311 1.828c.289.127.615.139.912.031l5.804-2.31c.281-.103.59-.098.87.014l3.99 1.568a1.217 1.217 0 001.671-1.131V3.594c0-.538-.353-1.013-.869-1.167L13.381.959a1.22 1.22 0 00-.67-.008L6.697 2.644a1.205 1.205 0 01-.706-.02L2.463.923z' />
        <path d='M3.297 3.906v11.578l3.047 1.219 6.703-2.437 3.656 1.218V4.516l-3.656-1.219-6.703 1.828z' />
        <path d='M3.297 8.277l3.047 1.218 3.047-1.218m2.437-4.648v3.172m-8.531 5.132l3.047 1.114 1.828-.505v3.497m3.656-1.331v-2.88l1.219-.609 3.656 1.219' />
      </g>
    </svg>
  );
}

export default SvgZone;
