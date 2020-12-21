import * as React from "react";

function SvgPinned(props: ISvgIcons) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M4.949 8.783a1.5 1.5 0 00-.3 2.356l8.213 8.213a1.502 1.502 0 002.356-.3 7.521 7.521 0 00.81-5.54l6.529-4.155a1.501 1.501 0 00.256-2.326L16.97 1.188a1.498 1.498 0 00-2.326.255l-4.155 6.53a7.521 7.521 0 00-5.54.81zm3.804 6.463L.75 23.249"
        fill="none"
        fillRule="evenodd"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.weight}
        vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
}

export default SvgPinned;
