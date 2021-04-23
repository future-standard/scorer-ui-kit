import React, { useState, useCallback, useContext } from 'react';
import styled, {css} from 'styled-components';
import { PTZContext } from '../state/PTZProvider';

const Active = styled.g<{active:boolean}>`
  opacity: 0;
  ${({active}) => active && css`opacity: 1;`}

`;
const Hover = styled.g<{hover:boolean}>`
  opacity: 0;
  ${({hover}) => hover && css`opacity: 1;`}
`;

const Container = styled.g`
`;


interface Props {

}


const Left: React.FC<Props> = () => {
  const [hover, setHover] = useState(false);
  const { state: {moving}, actions: {move, stop} } = useContext(PTZContext);

  const activeStart = useCallback(()=>{
    setHover(false);
    move({direction: 'left'});
  },[move]);
  const activeEnd = useCallback(()=>{
    stop();
    setHover(true);
  },[stop]);
  const hoverStart = useCallback(()=>{
    setHover(true);
  },[]);
  const hoverEnd = useCallback(()=>{
    setHover(false);
  },[]);

  return (
    <Container onMouseEnter={hoverStart} onMouseLeave={hoverEnd} onMouseDown={activeStart} onMouseUp={activeEnd} onTouchStart={activeStart} onTouchEnd={activeEnd} transform='translate(138.146447, 137.146447) rotate(45.000000)'>
      <Hover hover={hover} transform='translate(-138.146447, -137.146447) translate(41.146447, 40.646447)' fill='url(#linearGradient-11)' fillOpacity='0.56'>
        <path d='M96.9801453,96.3343288 L97.3106078,96.6672527 L97.3106078,192.833775 L1.14408557,192.833775 L0.813398341,192.503329 L0.823536055,191.237971 C1.67392753,138.7883 44.3691849,96.5106982 96.9801453,96.3343288 Z' id='PTZ-Hover-Left' transform='translate(49.062003, 144.584052) rotate(-90.000000) translate(-49.062003, -144.584052) ' />
      </Hover>

      <Active active={moving === 'left'} transform='translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(0.813398, 96.167076)'>
        <path d='M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z' id='PTZ-Active-Up-Slice' fillOpacity='0.56' fill='url(#linearGradient-12)' transform='translate(48.248605, 48.416976) rotate(-90.000000) translate(-48.248605, -48.416976) ' />
        <path d='M0.188273843,0.331580881 L0.521197763,0.00111834491 L0.846720004,0.330118345 L5.18824575,0.314819318 C5.35364873,49.654505 44.5997634,89.87029 93.6428507,91.4522677 L95.1319735,91.4883506 L96.3973312,91.4984883 L96.36172,95.8431183 L96.68772,96.1676406 L96.3572738,96.4983278 L95.0919161,96.4881901 C42.6422449,95.6377986 0.364643223,52.9425412 0.188273843,0.331580881 Z' id='PTZ-Active-Left-Highlight' stroke='url(#linearGradient-14)' fill='url(#linearGradient-13)' />
      </Active>

      <g id='PTZ-Arrows-Icons' transform='rotate(-45.000000) translate(-138.146447, -137.146447)  translate(68.000000, 68.000000) translate(12.000000, 69.000000) rotate(-90.000000) translate(-12.000000, -69.000000)' fillRule='nonzero'>
        <use fill='url(#linearGradient-19)' xlinkHref='#path-20' />
        <use fill='black' fillOpacity='1' filter='url(#filter-21)' xlinkHref='#path-20' />
      </g>
    </Container>

  );
};

export default Left;