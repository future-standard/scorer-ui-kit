import * as React from 'react';

function SvgAvatarPlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={48} {...props} viewBox='0 0 48 48'>
      <g fill='none' fillRule='evenodd' strokeLinecap='round' strokeLinejoin='round'>
        <g stroke='#C1C1C1' strokeWidth='1.5'>
          <g>
            <g>
              <g transform='translate(-789 -294) translate(772 277) translate(10.25 10.25) translate(7.688 7.688)'>
                <rect width='37.477' height='43.242' x='4.324' y='1.441' rx='1.5' />
                <circle cx='23.063' cy='17.456' r='7.899' />
                <path d='M36.035 36.568c-2.537-4.814-7.53-7.828-12.972-7.828-5.442 0-10.436 3.014-12.973 7.828' />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgAvatarPlaceholder;