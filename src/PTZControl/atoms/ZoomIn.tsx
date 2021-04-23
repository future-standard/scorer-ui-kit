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
    zoom({zooming: 'in'});
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
          d='M96,0 L96,63.75 L160.883594,63.75 C178.620995,63.75 193,49.4790764 193,31.875 C193,14.2709236 178.620995,0 160.883594,0 L96,0 Z'
          id='PTZ-Zoom-Hover-Plus-Slice'
          fill='url(#linearGradient-zoom9)'
        />
        {/* <path d="M97,0 L97,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L97,0 Z" id="PTZ-Zoom-Hover-Minus-Slice" fill="url(#linearGradient-zoom10)"></path> */}
      </Hover>
      <Active active={zooming === 'in'} transform='translate(96.000000, 0.000000)'>
        <path
          d='M0,0 L0,63.75 L64.8835938,63.75 C82.6209951,63.75 97,49.4790764 97,31.875 C97,14.2709236 82.6209951,0 64.8835938,0 L0,0 Z' id='PTZ-Zoom-Active-Plus-Slice'
          fillOpacity='0.61'
          fill='url(#linearGradient-zoom11)'
        />
        <path
          d='M96,0 L96,5 L32.1164062,5 C17.4302083,5 5.48398392,16.5663708 5.01434007,30.9927914 L5.00363033,31.4308221 L5,31.875 C5,46.5608308 16.8905918,58.5089041 31.6677396,58.746397 L32.1164062,58.75 L96,58.75 L96,63.75 L32.1164062,63.75 C14.3790049,63.75 0,49.4790764 0,31.875 C0,14.2709236 14.3790049,0 32.1164062,0 L96,0 Z'
          stroke='url(#linearGradient-zoom13)'
          fill='url(#linearGradient-zoom12)'
          transform='translate(48.000000, 31.875000) scale(-1, 1) translate(-48.000000, -31.875000) '
        />


      </Active>
      <g id='PTZ-Zoom-Icons-Section' transform='translate(-10.000000, -10.625000) translate(35.000000, 30.000000)' fillRule='nonzero'>
        <path d='M117.149921,14.1184213 L124.420095,14.1184213 C124.657568,14.1184213 124.850079,14.3104799 124.850079,14.5473962 L124.850079,21.8005035 C124.850079,22.9850849 125.812631,23.9453779 127,23.9453779 C128.187369,23.9453779 129.149921,22.9850849 129.149921,21.8005035 L129.149921,14.5473962 C129.149921,14.3104799 129.342432,14.1184213 129.579905,14.1184213 L136.850079,14.1184213 C138.037448,14.1184213 139,13.1581283 139,11.9735469 C139,10.7889655 138.037448,9.82867248 136.850079,9.82867248 L129.579905,9.82867248 C129.342432,9.82867248 129.149921,9.63661388 129.149921,9.3996976 L129.149921,2.14487441 C129.149921,0.960292981 128.187369,-3.55271368e-15 127,-3.55271368e-15 C125.812631,-3.55271368e-15 124.850079,0.960292981 124.850079,2.14487441 L124.850079,9.3996976 C124.850079,9.63661388 124.657568,9.82867248 124.420095,9.82867248 L117.149921,9.82867248 C115.962552,9.82867248 115,10.7889655 115,11.9735469 C115,13.1581283 115.962552,14.1184213 117.149921,14.1184213 L117.149921,14.1184213 Z' id='PTZ-Zoom-Icon-Plus' fill='url(#linearGradient-zoom14)' />
      </g>
    </Container>
  );
};

export default Up;