import React from 'react';
import styled, { css } from 'styled-components';
import { IDragLineUISharedOptions } from '.';


const ContrastLine = styled.line<{styling: string}>`
  pointer-events: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].contrastLine.stroke};
  mix-blend-mode: multiply;
`;

const HighlightLine = styled.line<{styling: string}>`
  pointer-events: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].highlightLine.stroke};
`;



const GrabHandle = styled.circle<{hide: boolean, styling: string}>`
  fill: ${({theme, styling}) => theme.custom.lines[styling].grabHandle.fill};
  stroke: ${({theme, styling}) => theme.custom.lines[styling].grabHandle.stroke};
  opacity: 1;
  transition: opacity 250ms ease;
  cursor: grab;

  ${props => props.hide && css`
    pointer-events: none;
    opacity: 0;
  `};
`;


const GrabHandleIndexGroup = styled.g<{showIndex: boolean}>`
  opacity: 0;
  pointer-events: none;
  ${props => props.showIndex && css`
    opacity: 1;
  `};

`;

const GrabHandleIndexText = styled.text<{showIndex: boolean, styling: string}>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  fill: ${({theme, styling}) => theme.custom.lines[styling].grabHandleText.stroke};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`;

const LabelText = styled.text<{showIndex: boolean, styling: string}>`
  text-align: center;
  fill: ${({theme, styling}) => theme.custom.lines[styling].label.fill};
  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;
`;

const GrabHandleContrast = styled(GrabHandle)`
  fill: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].grabHandleContrast.stroke};
`;

const GrabHandleGroup = styled.g<{ showIndex: boolean, originalRadius: number, styling: string}>`

  ${GrabHandle}, ${GrabHandleContrast} {
    transition: r 250ms ease;
  }

  ${props => props.showIndex && css`
    ${GrabHandle}, ${GrabHandleContrast} {
      pointer-events: none;
      r: ${props.originalRadius * 1.75};
    }
  `};
`;

interface ILineUnitProps {
  lineSetId: number,
  options: IDragLineUISharedOptions,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  unit: number,
  lineMoveCallback: any,
  lineMoveStartCallback: any
  moveEndCB?: () => void;
  label?: string;
  styling?: string;
  CenterIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  centerIconPosition?: string;
}



const LineUnit : React.FC<ILineUnitProps> = (props) => {
  const { x1, y1, x2, y2, unit, lineMoveCallback, lineMoveStartCallback, options, lineSetId, label, styling='primary', moveEndCB=()=>{}, CenterIcon, centerIconPosition} = props;
  const { handleFinderActive, revealSetIndex, showMoveHandle, setIndexOffset } = options;

  const a = x1 - x2;
  const b = y1 - y2;
  const distance = Math.sqrt( a*a + b*b );
  //this distance 60 doesn't work now...
  const hideGrabHandle = showMoveHandle === false ||  (showMoveHandle !== true  && distance < 60);


  /** --- Toucher Events Section --- */
  const grabTouchMove = (e: any) => {
    for (let i = 0; i < e.touches.length; i++) {
      // if(i === touchIndex){
        lineMoveCallback({ x: e.touches[i].pageX, y: e.touches[i].pageY});
      // }
    }
    moveEndCB();
  };

  const grabTouchStart = (e: any) => {
    for (let i = 0; i < e.touches.length; i++) {
    // if(i === touchIndex){
      lineMoveStartCallback({ x: e.touches[i].pageX, y: e.touches[i].pageY});
    // }
    }
  };


  /** --- Mouse Events Section --- */
  const handleMouseDown = (e: any) => {
    lineMoveStartCallback({ x: e.pageX, y: e.pageY});
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    e.preventDefault();
  };

  const handleMouseUp = (e: any) => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    lineMoveCallback({ x: e.pageX, y: e.pageY });
    moveEndCB();
    e.preventDefault();
  };

  const handleMouseMove = (e: any) => {
    lineMoveCallback({ x: e.pageX, y: e.pageY });
    e.preventDefault();
  };
  const midpoint = {
    x: (x2 + x1) / 2,
    y: (y2 + y1) / 2
  };

  const ArrowCordinates = () => {
    const angle = Math.atan2((y2 - y1), (x2 - x1));
    const angleMode = (Math.PI / 2) - angle;
    const x = midpoint.x + Math.sin(angleMode) * (-50);
    const y = midpoint.y + Math.cos(angleMode) * (-50);
    return {x, y};
  };

  return (
    <g>
      <ContrastLine styling={styling} strokeLinecap='round' x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={4 * unit} />
      <HighlightLine styling={styling} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={2 * unit} />

      <GrabHandleGroup styling={styling} showIndex={handleFinderActive && revealSetIndex} originalRadius={8 * unit}>
        <GrabHandleContrast styling={styling} r={8 * unit} strokeWidth={4 * unit} cx={midpoint.x} cy={midpoint.y} hide={hideGrabHandle} />
        <GrabHandle styling={styling} textAnchor='middle' r={8 * unit} strokeWidth={1 * unit} cx={midpoint.x} cy={midpoint.y} hide={hideGrabHandle} onTouchMove={grabTouchMove} onTouchStart={grabTouchStart} onMouseDown={handleMouseDown} />
      </GrabHandleGroup>

      <GrabHandleIndexGroup showIndex={!hideGrabHandle && (handleFinderActive || revealSetIndex)}>
        <GrabHandleIndexText styling={styling} fontSize={`${unit * 10}px`} x={midpoint.x - (3 * unit)} y={midpoint.y + (4 * unit)} showIndex={revealSetIndex || handleFinderActive}>
          {lineSetId + setIndexOffset}
        </GrabHandleIndexText>
      </GrabHandleIndexGroup>

      {/* <circle r={1* unit} cx={x1} cy={y1} fill='white' /> */}
      {/* <circle r={1* unit} cx={x2} cy={y2} fill='white' /> */}

      {label &&
          <LabelText styling={styling} fontSize={`${unit * 14}px`} x={centerIconPosition === 'UP' ? midpoint.x - (10 * unit) : midpoint.x - (20 * unit)} y={centerIconPosition === 'UP' ? midpoint.y + (30 * unit) : midpoint.y - (15 * unit)} showIndex={revealSetIndex || handleFinderActive}>
            {label}
          </LabelText>
      }
      
      {centerIconPosition && CenterIcon &&
        <g transform={`translate(${ArrowCordinates().x},${ArrowCordinates().y}) rotate(${(180 / Math.PI) * Math.atan2(y2 - y1, x2 - x1) + (centerIconPosition === 'UP' ? 0 : 180)}) scale(${unit * 1.5})`} >
          <g transform={centerIconPosition === 'UP' ? `translate(${Math.ceil(4-unit) > 2 ? 10 : 5 - unit}, -35)` : `translate(${(-25 + 1.5 * unit) < -21 ? -28 : -25 + 1.5 * unit}, -35)`}>
            <CenterIcon height='20' width='20' />
          </g>
        </g>
      }
    </g>
  );

};

export default LineUnit;
