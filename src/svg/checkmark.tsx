import * as React from "react";

function CheckMark(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox='0 0 24 24' {...props}>
      <path
        d='M23.848 5.132l-2.967-2.976a.531.531 0 0 0-.753 0L7.595 14.697a.531.531 0 0 1-.752 0l-2.968-2.975a.531.531 0 0 0-.752 0L.156 14.697a.531.531 0 0 0 0 .752l6.687 6.688a.531.531 0 0 0 .752 0L23.848 5.876a.531.531 0 0 0 0-.744z'
        fill='none'
        fillRule='evenodd'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default CheckMark;
