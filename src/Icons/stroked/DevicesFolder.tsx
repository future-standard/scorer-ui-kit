import * as React from "react";

function SvgDevicesFolder(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M20.25 11.75v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v16.3a1.7 1.7 0 003.336.438l2.351-9.657a1.5 1.5 0 011.442-1.081H21.75a1.5 1.5 0 011.45 1.886l-2.2 9a1.5 1.5 0 01-1.45 1.114H2.447"
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgDevicesFolder;
