import React from 'react';

interface Props {

}

const ZoomBase: React.FC<Props> = ({ children }) => {
  return (
    <svg width='239px' height='121px' viewBox='0 0 239 121'>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-zoom1'>
          <stop stopColor='var(--info-12)' offset='0%' />
          <stop stopColor='var(--info-12)' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-zoom2'>
          <stop stopColor='var(--grey-a2)' offset='0%' />
          <stop stopColor='var(--info-12)' offset='100%' />
        </linearGradient>
        <path
          d='M42.6,0 L170.4,0 C193.92733,0 213,19.0278981 213,42.5 C213,65.9721019 193.92733,85 170.4,85 L42.6,85 C19.0726697,85 0,65.9721019 0,42.5 C0,19.0278981 19.0726697,0 42.6,0 Z'
          id='path-zoom3'
        />
        <filter x='-9.9%' y='-30.6%' width='119.7%' height='161.2%' filterUnits='objectBoundingBox' id='filter-zoom4'>
          <feMorphology radius='1.5' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter1' />
          <feOffset dx='0' dy='5' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feGaussianBlur stdDeviation='5' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
          <feComposite in='shadowBlurOuter1' in2='SourceAlpha' operator='out' result='shadowBlurOuter1' />
          <feColorMatrix values='0 0 0 0 0.107227805   0 0 0 0 0.154449538   0 0 0 0 0.188179348  0 0 0 0.242706512 0' type='matrix' in='shadowBlurOuter1' result='shadowMatrixOuter1' />
          <feMorphology radius='0.5' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter2' />
          <feOffset dx='0' dy='-5' in='shadowSpreadOuter2' result='shadowOffsetOuter2' />
          <feGaussianBlur stdDeviation='5' in='shadowOffsetOuter2' result='shadowBlurOuter2' />
          <feComposite in='shadowBlurOuter2' in2='SourceAlpha' operator='out' result='shadowBlurOuter2' />
          <feColorMatrix values='0 0 0 0 0.225481289   0 0 0 0 0.324960407   0 0 0 0 0.399569746  0 0 0 0.400923295 0' type='matrix' in='shadowBlurOuter2' result='shadowMatrixOuter2' />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='shadowMatrixOuter2' />
          </feMerge>
        </filter>
        <linearGradient x1='50%' y1='100%' x2='50%' y2='2.48363598%' id='linearGradient-zoom5'>
          <stop stopColor='var(--success-12)' stopOpacity='0.65' offset='0%' />
          <stop stopColor='var(--success-12)' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <path
          d='M32.1164062,0.625 L160.582031,0.625 C178.319433,0.625 192.698438,14.8959236 192.698438,32.5 C192.698438,50.1040764 178.319433,64.375 160.582031,64.375 L32.1164062,64.375 C14.3790049,64.375 0,50.1040764 0,32.5 C0,14.8959236 14.3790049,0.625 32.1164062,0.625 Z'
          id='path-zoom6'
        />
        <filter x='-0.8%' y='-2.4%' width='101.6%' height='104.7%' filterUnits='objectBoundingBox' id='filter-zoom7'>
          <feGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1' />
          <feOffset dx='0' dy='1' in='shadowBlurInner1' result='shadowOffsetInner1' />
          <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1' />
          <feColorMatrix values='0 0 0 0 0.168627451   0 0 0 0 0.215686275   0 0 0 0 0.262745098  0 0 0 0.0113090035 0' type='matrix' in='shadowInnerInner1' result='shadowMatrixInner1' />
          <feGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner2' />
          <feOffset dx='0' dy='-1' in='shadowBlurInner2' result='shadowOffsetInner2' />
          <feComposite in='shadowOffsetInner2' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner2' />
          <feColorMatrix values='0 0 0 0 0.162705208   0 0 0 0 0.231672463   0 0 0 0 0.300639719  0 0 0 1 0' type='matrix' in='shadowInnerInner2' result='shadowMatrixInner2' />
          <feMerge>
            <feMergeNode in='shadowMatrixInner1' />
            <feMergeNode in='shadowMatrixInner2' />
          </feMerge>
        </filter>
        <linearGradient x1='-103.741879%' y1='13.7528099%' x2='211.711869%' y2='82.6324827%' id='linearGradient-zoom8'>
          <stop stopColor='var(--grey-a2)' offset='0%' />
          <stop stopColor='var(--grey-a2)' offset='100%' />
        </linearGradient>
        <linearGradient x1='12.2402545%' y1='50%' x2='57.7520941%' y2='28.4033239%' id='linearGradient-zoom9'>
          <stop stopColor='var(--grey-11)' stopOpacity='0.65' offset='0%' />
          <stop stopColor='var(--grey-11)' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='92.8257893%' y1='51.9201456%' x2='57.7520941%' y2='28.4033239%' id='linearGradient-zoom10'>
          <stop stopColor='var(--grey-11)' stopOpacity='0.65' offset='0%' />
          <stop stopColor='var(--grey-11)' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='65.5323776%' y1='100%' x2='65.5323776%' y2='0%' id='linearGradient-zoom11'>
          <stop stopColor='var(--primary-8)' stopOpacity='0.65' offset='0%' />
          <stop stopColor='var(--primary-7)' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='112.326836%' y1='50%' x2='-13.3174936%' y2='50%' id='linearGradient-zoom12'>
          <stop stopColor='var(--primary-8)' stopOpacity='0.65' offset='0%' />
          <stop stopColor='var(--primary-7)' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='-15.3833763%' y1='43.598779%' x2='72.9059278%' y2='57.6171557%' id='linearGradient-zoom13'>
          <stop stopColor='var(--primary-6)' offset='0%' />
          <stop stopColor='var(--primary-8)' stopOpacity='0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0.918284083%' x2='50%' y2='98.6410535%' id='linearGradient-zoom14'>
          <stop stopColor='var(--primary-2)' offset='0%' />
          <stop stopColor='var(--grey-8)' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0.918284083%' x2='50%' y2='98.6410535%' id='linearGradient-zoom15'>
          <stop stopColor='var(--primary-2)' offset='0%' />
          <stop stopColor='var(--grey-8)' offset='100%' />
        </linearGradient>
      </defs>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform='translate(-200.000000, -490.000000) translate(213.000000, 508.000000)'>
        <g id='PTZ-Zoom-Base-Outer'>
          <use fill='black' fillOpacity='1' filter='url(#filter-zoom4)' xlinkHref='#path-zoom3' />
          <use stroke='url(#linearGradient-zoom2)' strokeWidth='1' fill='url(#linearGradient-zoom1)' fillRule='evenodd' xlinkHref='#path-zoom3' />
        </g>

        <g id='PTZ-Zoom-Divider-Section' transform='translate(10.000000, 10.000000)'>
          <g id='PTZ-Zoom-Base-Inner'>
            <use fillOpacity='0.56' fill='url(#linearGradient-zoom5)' fillRule='evenodd' xlinkHref='#path-zoom6' />
            <use fill='black' fillOpacity='1' filter='url(#filter-zoom7)' xlinkHref='#path-zoom6' />
          </g>
          <path d='M105.820053,40.7088832 L99.6638296,34.5975949 C102.060022,31.621888 101.697137,27.3062591 98.8371361,24.766097 C95.9771351,22.2259349 91.6163355,22.346137 88.902734,25.0399314 C86.1891326,27.7337257 86.0680466,32.0626948 88.6268862,34.90182 C91.1857259,37.7409453 95.5330871,38.1011814 98.5306741,35.7224793 L104.686898,41.8337675 C105.002147,42.1387442 105.504804,42.1387442 105.820053,41.8337675 C106.132899,41.5231118 106.132899,41.0195389 105.820053,40.7088832 Z M88.425235,30.1282878 C88.425235,27.0527607 90.9367746,24.5595534 94.0349157,24.5595534 C97.1330568,24.5595534 99.6445964,27.0527607 99.6445964,30.1282878 C99.6445964,33.2038149 97.1330568,35.6970222 94.0349157,35.6970222 C90.9382392,35.693515 88.428768,33.202361 88.425235,30.1282878 Z' id='PTZ-Zoom-Divider-Section-Icon' fill='var(--grey-10)' fillRule='nonzero' />
          <line x1='95.3544271' y1='1.5' x2='95.3544271' y2='13.5' id='PTZ-Zoom-Divider-Section-Top-Line' stroke='url(#linearGradient-zoom8)' strokeLinecap='square' />
          <line x1='95.3544271' y1='50.5' x2='95.3544271' y2='62.5' id='PTZ-Zoom-Divider-Section-Bottom-Line' stroke='url(#linearGradient-zoom8)' strokeLinecap='square' />
        </g>
        {children}
      </g>

    </svg>
  );
};

export default ZoomBase;