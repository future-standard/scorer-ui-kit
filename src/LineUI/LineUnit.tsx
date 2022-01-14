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
const Circle = styled.circle`
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
  isUpDirection?: boolean;
}
const LineUnit : React.FC<ILineUnitProps> = (props) => {
  const { x1, y1, x2, y2, unit, lineMoveCallback, lineMoveStartCallback, options, lineSetId, label, styling='primary', moveEndCB=()=>{}, isUpDirection=false} = props;
  const { handleFinderActive, revealSetIndex, showMoveHandle, setIndexOffset, showDirectionMark} = options;
  const a = x1 - x2;
  const b = y1 - y2;
  const distance = Math.sqrt( a*a + b*b );
  //this distance 60 doesn't work now...
  const hideGrabHandle = showMoveHandle === false || (showMoveHandle !== true && distance < 60);
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
    let labelX = 0;
    let labelY = isUpDirection ? 30 : 20;
    let labelRotate = 0;
    let rotatefactor = isUpDirection ? -3 : -8;
    
    const lblMargin = label ? (label.length * 16)/2 : 0;
    isUpDirection ? labelX = -(lblMargin/2) : labelX = (lblMargin/2);
    if(rotate >=0){
      if(rotate >30 && rotate <45){
        if(isUpDirection){
          labelY += 10;
        }
        labelRotate = -20;
      } else if(rotate >=45 && rotate <60){
        if(isUpDirection){
          labelY += 10;
        }
        labelRotate = -20;
      } else if(rotate >=60 && rotate <90){
        if(isUpDirection){
          labelY += 10;
        }
        labelRotate = -30;
      } else if(rotate >=90 && rotate <120){
        if(isUpDirection){
          labelY += 20;
        }
        labelX = 0;
        labelRotate = -70;
      } else if(rotate >=120 && rotate <150){
        if(isUpDirection){
          labelX = (lblMargin/2);
          labelY = 20;
          rotatefactor = -8;
        } else {
          labelX = -(lblMargin/2);
          labelY = 30;
          rotatefactor = -3;
        }
        labelRotate = 180;
        
      } else if(rotate >=150 && rotate <=180){
        if(isUpDirection){
          labelX = (lblMargin/2);
          labelY = 20;
          rotatefactor = -8;
        } else {
          labelX = -(lblMargin/2);
          labelY = 30;
          rotatefactor = -3;
        }
        labelRotate = 180;
      }
    } else {
      if(isUpDirection){
        labelX = (lblMargin/2);
        labelY = 20;
        rotatefactor = -8;
      } else {
        labelX = -(lblMargin/2);
        labelY = 30;
        rotatefactor = -3;
      }
      labelRotate = 180;
      
      if(rotate < -90 && rotate >= -150){
        labelRotate = 150;
        if(isUpDirection){
          labelX = (lblMargin/2);
          labelY = 20;
        } else {
          labelX = -(lblMargin/2);
          labelY = 35;
        }
      } else if(rotate < -45 && rotate >= -90){
        labelRotate = 45;
        if(isUpDirection){
          labelX = -(lblMargin/2);
          labelY = 25;
          rotatefactor = -8;
        } else {
          labelX = (lblMargin/2);
          labelY = 35;
          rotatefactor = -8;
        }
      } else if(rotate < 0 && rotate >= -45){
        labelRotate = 0;
        
        if(isUpDirection){
          labelX = -(lblMargin/2);
          labelY = 30;
          rotatefactor = -3;
        } else {
          labelX = (lblMargin/2);
          labelY = 20;
          rotatefactor = -8;
        }
      }
    }
    rotate = isUpDirection ? rotate : rotate + 180;
    labelRotate = isUpDirection ? labelRotate : labelRotate + 180;
    return {x, y, rotate, labelX, labelY, labelRotate, rotatefactor};
  };
  const getDirectionMarkLine = () => {
    const dmCordinate = directionMarkCoordinate();
    return (
      <g transform={`translate(${dmCordinate.x},${dmCordinate.y}) rotate(${dmCordinate.rotate}) scale(${unit * 1})`}>
        <g transform={`translate(${dmCordinate.rotatefactor},-30) scale(0.8)`}>
          <Circle r={12} cx={6} cy={7} />
          <Icon color='inverse' icon='Up' size={12} weight='heavy' forSvgUsage />
        </g>
        <g transform={`translate(${dmCordinate.labelX},${dmCordinate.labelY}) rotate(${dmCordinate.labelRotate})`}>
          <LabelText styling={styling} fontSize={`${14}px`} x={0} y={0} showIndex={revealSetIndex || handleFinderActive}>
            {label}
          </LabelText>
        </g>
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