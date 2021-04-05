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
  const { state: {zooming}, actions: {zoom, stop}} = useContext(PTZContext);

  const activeStart = useCallback(()=>{
    setHover(false);
    zoom({zooming: 'out'});
  },[zoom]);
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
    <Container onMouseEnter={hoverStart} onMouseLeave={hoverEnd} onMouseDown={activeStart} onMouseUp={activeEnd} onTouchStart={activeStart} onTouchEnd={activeEnd} transform='translate(10.000000, 10.625000)'>
      <Hover hover={hover} fillOpacity='0.56'>
        <path
          d='M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z'
          id='PTZ-Zoom-Hover-Minus-Slice'
          fill='url(#linearGradient-zoom10)'
        />
      </Hover>
      <Active active={zooming === 'out'}>
        <path
          d='M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z'
          fillOpacity='0.61'
          fill='url(#linearGradient-zoom11)'
        />

        <path
          d='M97,0 L97,5 L33.1164062,5 C18.4302083,5 6.48398392,16.5663708 6.01434007,30.9927914 L6.00363033,31.4308221 L6,31.875 C6,46.5608308 17.8905918,58.5089041 32.6677396,58.746397 L33.1164062,58.75 L97,58.75 L97,63.75 L33.1164062,63.75 C15.3790049,63.75 1,49.4790764 1,31.875 C1,14.2709236 15.3790049,0 33.1164062,0 L97,0 Z'
          stroke='url(#linearGradient-zoom13)'
          fill='url(#linearGradient-zoom12)'
        />
      </Active>
      <g transform='translate(-10.000000, -10.625000) translate(35.000000, 30.000000)' fillRule='nonzero'>
        <path
          d='M2.14992117,10 C0.962552494,10 0,10.960293 0,12.1448744 C0,13.3294558 0.962552494,14.2897488 2.14992117,14.2897488 L21.8500788,14.2897488 C23.0374475,14.2897488 24,13.3294558 24,12.1448744 C24,10.960293 23.0374475,10 21.8500788,10 L2.14992117,10 Z'
          id='PTZ-Zoom-Icon-Minus'
          fill='url(#linearGradient-zoom15)'
        />
      </g>
    </Container>
  );
};

export default Up;