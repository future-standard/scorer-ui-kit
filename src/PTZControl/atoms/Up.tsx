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

const Up: React.FC<Props> = () => {
  const [hover, setHover] = useState(false);
  const { state: {moving}, actions: {move, stop} } = useContext(PTZContext);

  const activeStart = useCallback(()=>{
    setHover(false);
    move({direction: 'up'});
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
        <path d='M97.1695375,0.000553838433 L97.5,0.333477759 L97.5,96.5 L1.33347776,96.5 L1.00279053,96.1695538 L1.01292824,94.904196 C1.86331972,42.4545249 44.5585771,0.176923219 97.1695375,0.000553838433 Z' id='PTZ-Hover-Up' />
      </Hover>

      <Active active={moving === 'up'} transform='translate(-137.792893, -137.500000) translate(40.792893, 40.500000) translate(1.002791, 0.000554)'>
        <path d='M96.1667469,-4.68958206e-13 L96.4972095,0.33292392 L96.4972095,96.4994462 L0.33068723,96.4994462 L2.98427949e-13,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,-4.68958206e-13 Z' id='PTZ-Active-Up-Slice' fillOpacity='0.56' fill='url(#linearGradient-12)' />
        <path d='M96.1667469,9.08073616e-12 L96.4972095,0.33292392 L96.1682095,0.658446162 L96.1835085,4.9999719 C46.8438228,5.16537489 6.62803783,44.4114895 5.04606009,93.4545769 L5.00997725,94.9436996 L4.99983954,96.2090574 L0.655209472,96.1734462 L0.33068723,96.4994462 L1.20792265e-12,96.169 L0.0101377147,94.9036422 C0.860529194,42.4539711 43.5557866,0.176369381 96.1667469,9.08073616e-12 Z' id='PTZ-Active-Up-Highlight' stroke='url(#linearGradient-18)' fill='url(#linearGradient-17)' />
      </Active>

      <g id='PTZ-Arrows-Icons' transform='rotate(-45.000000) translate(-138.146447, -137.146447) translate(68.000000, 68.000000)' fillRule='nonzero'>
        <use fill='url(#linearGradient-19)' xlinkHref='#path-26' />
        <use fill='black' fillOpacity='1' filter='url(#filter-27)' xlinkHref='#path-26' />
      </g>
    </Container>
  );
};

export default Up;