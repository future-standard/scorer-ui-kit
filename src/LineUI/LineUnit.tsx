import React from 'react';
import styled, { css } from 'styled-components';
import { IDragLineUISharedOptions } from '.';
import Icon from '../Icons/Icon';


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

const DMCircle = styled.circle`
  fill: hsla(203, 100%, 35%, 0.49);
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
  lineMoveStartCallback: any,
  moveEndCB?: () => void;
  label?: string;
  styling?: string;
  showSmallDirectionMark?: boolean;
  overrideShowMoveHandle?: boolean;
}



const LineUnit : React.FC<ILineUnitProps> = (props) => {
  const { x1, y1, x2, y2, unit, lineMoveCallback, lineMoveStartCallback, options, lineSetId, label, styling = 'primary', moveEndCB = () => { }, showSmallDirectionMark = false, overrideShowMoveHandle = true } = props;
  const { handleFinderActive, revealSetIndex, showMoveHandle, setIndexOffset, showDirectionMark} = options;

  const a = x1 - x2;
  const b = y1 - y2;
  const distance = Math.sqrt( a*a + b*b );
  //this distance 60 doesn't work now...
  const hideGrabHandle = (!showMoveHandle || !overrideShowMoveHandle);


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
    lineMoveStartCallback({ x: e.pageX, y: e.pageY });
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

  const directionMarkCoordinate = () => {
    const angle = Math.atan2((y2 - y1), (x2 - x1));
    const angleMode = (Math.PI / 2) - angle;
    const x = midpoint.x + Math.sin(angleMode) -5;
    const y = midpoint.y + Math.cos(angleMode);
    let rotate = (180 / Math.PI) * Math.atan2(y2 - y1, x2 - x1);
    let labelRotate = -rotate;
    return {x, y, rotate, labelRotate};
  };

  const getDirectionMarkLine = () => {
    const dmCoordinate = directionMarkCoordinate();
    return (
      <g transform={`translate(${dmCoordinate.x},${dmCoordinate.y}) rotate(${dmCoordinate.rotate}) scale(${unit * 1})`}>
        <g transform='translate(-3,-30) scale(0.8)'>
          <DMCircle r={12} cx={6} cy={7} />
          <Icon color='inverse' icon='Up' size={12} weight='heavy' forSvgUsage />
        </g>
        {showSmallDirectionMark &&
          <g transform='translate(5,25) rotate(-180) scale(0.8)'>
            <DMCircle r={8} cx={3.5} cy={4.5} />
            <Icon color='inverse' icon='Up' size={7} weight='heavy' forSvgUsage />
          </g>}
        {label &&
          <g transform={`translate(0,${showSmallDirectionMark ? 45 : 30}) rotate(${dmCoordinate.labelRotate})`}>
            <LabelText textAnchor='middle' dominantBaseline='middle' styling={styling} fontSize={`${14}px`} x={0} y={0} showIndex={revealSetIndex || handleFinderActive}>
              {label}
            </LabelText>
          </g>}
      </g>
    );
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

      {showDirectionMark ?
        getDirectionMarkLine()
        :
        label &&
          <LabelText styling={styling} fontSize={`${unit * 14}px`} x={midpoint.x - (16 * unit)} y={midpoint.y - (15 * unit)} showIndex={revealSetIndex || handleFinderActive}>
            {label}
          </LabelText>}
    </g>
  );

};

export default LineUnit;
