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
const Arrow = styled.g`

`;


interface Props {

}



const Down: React.FC<Props> = () => {
  const [hover, setHover] = useState(false);
  const { state: {moving}, actions: {move, stop} } = useContext(PTZContext);

  const activeStart = useCallback(()=>{
    setHover(false);
    move({direction: 'down'});
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
    <Container onMouseEnter={hoverStart} onMouseLeave={hoverEnd} onMouseDown={activeStart} onMouseUp={activeEnd} transform='translate(138.146447, 137.146447) rotate(45.000000)'>
      <Hover hover={hover} transform='translate(-138.146447, -137.146447) translate(41.146447, 40.646447)' fill='url(#linearGradient-11)' fillOpacity='0.56'>
        <path d='M193.146668,96.3343288 L193.47713,96.6672527 L193.47713,192.833775 L97.3106078,192.833775 L96.9799206,192.503329 L96.9900583,191.237971 C97.8404498,138.7883 140.535707,96.5106982 193.146668,96.3343288 Z' id='PTZ-Hover-Down' transform='translate(145.228525, 144.584052) rotate(180.000000) translate(-145.228525, -144.584052) ' />
      </Hover>

      <Active active={moving === 'down'} transform='translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(96.979921, 96.167076)' fill='url(#linearGradient-12)'>
        <path d='M96.1667469,0.167252749 L96.4972095,0.50017667 L96.4972095,96.6666989 L0.33068723,96.6666989 L2.98427949e-13,96.3362527 L0.0101377147,95.070895 C0.860529194,42.6212238 43.5557866,0.34362213 96.1667469,0.167252749 Z' id='PTZ-Active-Down-Slice' fillOpacity='0.56' transform='translate(48.248605, 48.416976) rotate(180.000000) translate(-48.248605, -48.416976) ' />
        <path d='M0.519854724,96.4994462 L0.189392188,96.1665222 L0.518392188,95.841 L0.50309316,91.4994743 C49.8427789,91.3340713 90.0585638,52.0879566 91.6405416,3.0448693 L91.6766244,1.55574655 L91.6867621,0.290388759 L96.0313922,0.326 L96.3559144,-4.8316906e-13 L96.6866017,0.330446162 L96.6764639,1.59580395 C95.8260725,54.0454751 53.1308151,96.3230768 0.519854724,96.4994462 Z' id='PTZ-Active-Down-Highlight' stroke='url(#linearGradient-15)' />
      </Active>

      <Arrow id='PTZ-Arrows-Icons' transform='rotate(-45) translate(-138.146447, -137.146447) translate(68.000000, 68.000000) translate(71.000000, 125.000000) rotate(180.000000) translate(-71.000000, -125.000000)' fillRule='nonzero'>
        <use fill='url(#linearGradient-19)' xlinkHref='#path-22' />
        <use fill='black' fillOpacity='1' filter='url(#filter-23)' xlinkHref='#path-22' />
      </Arrow>
    </Container>

  );
};

export default Down;