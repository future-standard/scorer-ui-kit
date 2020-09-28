import React from 'react';

interface Props {

}

const PTZControl: React.FC<Props> = ({children}) => {
  return (
    <svg width='237px' height='245px' viewBox='0 0 237 245' version='1.1'>
      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-1'>
          <stop stopColor='#2E3F4B' offset='0%' />
          <stop stopColor='#273743' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='linearGradient-2'>
          <stop stopColor='#2F4555' offset='0%' />
          <stop stopColor='#1F2F3A' offset='100%' />
        </linearGradient>
        <circle id='path-3' cx='138.5' cy='137.5' r='106.5' />
        <filter x='-9.9%' y='-12.2%' width='119.7%' height='124.4%' filterUnits='objectBoundingBox' id='filter-4'>
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
        <linearGradient x1='50%' y1='100%' x2='50%' y2='2.48363598%' id='linearGradient-5'>
          <stop stopColor='#262E37' stopOpacity='0.65' offset='0%' />
          <stop stopColor='#262E37' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <path d='M96.5,0 C149.795478,0 193,43.2045216 193,96.5 C193,149.795478 149.795478,193 96.5,193 C43.2045216,193 0,149.795478 0,96.5 C0,43.2045216 43.2045216,0 96.5,0 Z' id='path-6' />
        <filter x='-0.8%' y='-0.8%' width='101.6%' height='101.6%' filterUnits='objectBoundingBox' id='filter-8'>
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
        <linearGradient x1='49.8274193%' y1='13.7528099%' x2='50.1815273%' y2='82.6324827%' id='linearGradient-9'>
          <stop stopColor='#324659' offset='0%' />
          <stop stopColor='#263647' offset='100%' />
        </linearGradient>
        <linearGradient x1='50.170103%' y1='15.6407997%' x2='49.8181984%' y2='84.5265853%' id='linearGradient-10'>
          <stop stopColor='#324659' offset='0%' />
          <stop stopColor='#263647' offset='100%' />
        </linearGradient>
        <linearGradient x1='99.9976822%' y1='100%' x2='30.4274195%' y2='28.550434%' id='linearGradient-11'>
          <stop stopColor='#46596D' stopOpacity='0.65' offset='0%' />
          <stop stopColor='#577393' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='87.5668564%' y1='87.9295401%' x2='33.2810997%' y2='28.936849%' id='linearGradient-12'>
          <stop stopColor='#508ED3' stopOpacity='0.65' offset='0%' />
          <stop stopColor='#79AEEB' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='87.568598%' y1='87.9277819%' x2='33.2803247%' y2='28.9378254%' id='linearGradient-13'>
          <stop stopColor='#508ED3' stopOpacity='0.65' offset='0%' />
          <stop stopColor='#79AEEB' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='22.297939%' y1='79.0413218%' x2='39.761035%' y2='60.7027769%' id='linearGradient-14'>
          <stop stopColor='#A2B9FF' offset='0%' />
          <stop stopColor='#3393FF' stopOpacity='0' offset='100%' />
        </linearGradient>
        <linearGradient x1='80.348219%' y1='76.4229599%' x2='62.8569051%' y2='60.0361013%' id='linearGradient-15'>
          <stop stopColor='#A2B9FF' offset='0%' />
          <stop stopColor='#3393FF' stopOpacity='0' offset='100%' />
        </linearGradient>
        <linearGradient x1='77.520937%' y1='22.5831044%' x2='57.8137717%' y2='41.946341%' id='linearGradient-16'>
          <stop stopColor='#A2B9FF' offset='0%' />
          <stop stopColor='#3393FF' stopOpacity='0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='43.428843%' x2='25.1751595%' y2='28.0552504%' id='linearGradient-17'>
          <stop stopColor='#508ED3' stopOpacity='0.65' offset='0%' />
          <stop stopColor='#79AEEB' stopOpacity='0.66' offset='100%' />
        </linearGradient>
        <linearGradient x1='30.6678499%' y1='23.1406239%' x2='41.9194217%' y2='34.4210798%' id='linearGradient-18'>
          <stop stopColor='#A2B9FF' offset='0%' />
          <stop stopColor='#3393FF' stopOpacity='0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0.918284083%' x2='50%' y2='98.6410535%' id='linearGradient-19'>
          <stop stopColor='#F0F7FF' offset='0%' />
          <stop stopColor='#B2C9D9' offset='100%' />
        </linearGradient>
        <path d='M25.6553811,77.370593 L14.0428746,58.1532717 C13.6102476,57.4373681 12.8355055,57 12,57 C11.1644945,57 10.3897524,57.4373681 9.95712537,58.1532717 L-1.65538114,77.370593 C-2.10132346,78.1091204 -2.11539958,79.0310048 -1.69221345,79.7828447 C-1.26902733,80.5346846 -0.474230758,81 0.387493489,81 L23.6125065,81 C24.4742308,81 25.2690273,80.5346846 25.6922135,79.7828447 C26.1153996,79.0310048 26.1013235,78.1091204 25.6553811,77.370593 Z' id='path-20' />
        <filter x='-3.6%' y='-4.2%' width='107.1%' height='108.3%' filterUnits='objectBoundingBox' id='filter-21'>
          <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner1' />
          <feOffset dx='0' dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' />
          <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1' />
          <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0' type='matrix' in='shadowInnerInner1' />
        </filter>
        <path d='M84.6553811,133.370593 L73.0428746,114.153272 C72.6102476,113.437368 71.8355055,113 71,113 C70.1644945,113 69.3897524,113.437368 68.9571254,114.153272 L57.3446189,133.370593 C56.8986765,134.10912 56.8846004,135.031005 57.3077865,135.782845 C57.7309727,136.534685 58.5257692,137 59.3874935,137 L82.6125065,137 C83.4742308,137 84.2690273,136.534685 84.6922135,135.782845 C85.1153996,135.031005 85.1013235,134.10912 84.6553811,133.370593 Z' id='path-22' />
        <filter x='-3.6%' y='-4.2%' width='107.1%' height='108.3%' filterUnits='objectBoundingBox' id='filter-23'>
          <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner1' />
          <feOffset dx='0' dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' />
          <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1' />
          <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0' type='matrix' in='shadowInnerInner1' />
        </filter>
        <path d='M140.655381,77.370593 L129.042875,58.1532717 C128.610248,57.4373681 127.835505,57 127,57 C126.164495,57 125.389752,57.4373681 124.957125,58.1532717 L113.344619,77.370593 C112.898677,78.1091204 112.8846,79.0310048 113.307787,79.7828447 C113.730973,80.5346846 114.525769,81 115.387493,81 L138.612507,81 C139.474231,81 140.269027,80.5346846 140.692213,79.7828447 C141.1154,79.0310048 141.101323,78.1091204 140.655381,77.370593 Z' id='path-24' />
        <filter x='-3.6%' y='-4.2%' width='107.1%' height='108.3%' filterUnits='objectBoundingBox' id='filter-25'>
          <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner1' />
          <feOffset dx='0' dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' />
          <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1' />
          <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0' type='matrix' in='shadowInnerInner1' />
        </filter>
        <path d='M84.6553811,20.370593 L73.0428746,1.15327173 C72.6102476,0.437368074 71.8355055,0 71,0 C70.1644945,0 69.3897524,0.437368074 68.9571254,1.15327173 L57.3446189,20.370593 C56.8986765,21.1091204 56.8846004,22.0310048 57.3077865,22.7828447 C57.7309727,23.5346846 58.5257692,24 59.3874935,24 L82.6125065,24 C83.4742308,24 84.2690273,23.5346846 84.6922135,22.7828447 C85.1153996,22.0310048 85.1013235,21.1091204 84.6553811,20.370593 Z' id='path-26' />
        <filter x='-3.6%' y='-4.2%' width='107.1%' height='108.3%' filterUnits='objectBoundingBox' id='filter-27'>
          <feGaussianBlur stdDeviation='0.5' in='SourceAlpha' result='shadowBlurInner1' />
          <feOffset dx='0' dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1' />
          <feComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1' />
          <feColorMatrix values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.495629371 0' type='matrix' in='shadowInnerInner1' />
        </filter>
      </defs>
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' transform='translate(-20, -16)'>
        <g id='PTZ-Base-Outer'>
          <use fill='black' fillOpacity='1' filter='url(#filter-4)' xlinkHref='#path-3' />
          <use stroke='url(#linearGradient-2)' strokeWidth='1' fill='url(#linearGradient-1)' fillRule='evenodd' xlinkHref='#path-3' />
        </g>

        <g id='PTZ-Base-Inner' transform='translate(138.500000, 137.500000) rotate(45.000000) translate(-138.500000, -137.500000) translate(42.000000, 41.000000)'>
          <mask id='mask-7' fill='white'>
            <use xlinkHref='#path-6' />
          </mask>
          <g>
            <use fillOpacity='0.56' fill='url(#linearGradient-5)' fillRule='evenodd' xlinkHref='#path-6' />
            <use fill='black' fillOpacity='1' filter='url(#filter-8)' xlinkHref='#path-6' />
          </g>
          <line x1='96.5' y1='0.333477759' x2='96.5' y2='192.666522' id='PTZ-Base-Division-B' stroke='url(#linearGradient-9)' strokeLinecap='square' mask='url(#mask-7)' />
          <line x1='96.5' y1='0.333477759' x2='96.5' y2='192.666522' id='PTZ-Base-Division-A' stroke='url(#linearGradient-10)' strokeLinecap='square' mask='url(#mask-7)' transform='translate(96.500000, 96.500000) rotate(-90.000000) translate(-96.500000, -96.500000) ' />
        </g>
        {children}
      </g>
    </svg>
  );
};

export default PTZControl;