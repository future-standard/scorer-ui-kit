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

const Right: React.FC<Props> = () => {
  const [hover, setHover] = useState(false);
  const { state: {moving}, actions: {move, stop} } = useContext(PTZContext);

  const activeStart = useCallback(()=>{
    setHover(false);
    move({direction: 'right'});
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
        <path d='M193.146668,0.167806588 L193.47713,0.500730508 L193.47713,96.6672527 L97.3106078,96.6672527 L96.9799206,96.3368066 L96.9900583,95.0714488 C97.8404498,42.6217777 140.535707,0.344175968 193.146668,0.167806588 Z' id='PTZ-Hover-Right' transform='translate(145.228525, 48.417530) rotate(90.000000) translate(-145.228525, -48.417530) ' />
      </Hover>

      <Active active={moving === 'right'} transform='translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 0.000554)'>
        <path d='M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z' id='PTZ-Active-Right-Slice' fillOpacity='0.56' fill='url(#linearGradient-12)' transform='translate(48.248605, 48.416976) rotate(90.000000) translate(-48.248605, -48.416976) ' />
        <path d='M96.68772,96.1678653 L96.3547961,96.4983278 L96.0292738,96.1693278 L91.6877481,96.1846268 C91.5223451,46.8449411 52.2762305,6.62915618 3.23314314,5.04717843 L1.74402039,5.0110956 L0.478662601,5.00095788 L0.514273843,0.656327817 L0.188273843,0.331805575 L0.518720004,0.00111834491 L1.78407779,0.0112560596 C54.2337489,0.861647539 96.5113506,43.5569049 96.68772,96.1678653 Z' id='PTZ-Active-Right-Highlight' stroke='url(#linearGradient-16)' fill='url(#linearGradient-13)' />
      </Active>

      <g id='PTZ-Arrows-Icons' transform='rotate(-45.000000) translate(-137.792893, -137.500000) translate(68.000000, 68.000000) translate(127.000000, 69.000000) rotate(90.000000) translate(-127.000000, -69.000000)' fillRule='nonzero'>
        <use fill='url(#linearGradient-19)' xlinkHref='#path-24' />
        <use fill='black' fillOpacity='1' filter='url(#filter-25)' xlinkHref='#path-24' />
      </g>
    </Container>

  );
};

export default Right;