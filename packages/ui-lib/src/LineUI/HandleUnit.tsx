import React, { useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IDragLineUISharedOptions } from '.';


const HandleTouchReactionKeyframes = keyframes`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(3);
 }

 100% {
   transform: scale(1.75);
 }
`;

const HandleMouseReactionKeyframes = keyframes`
 0% {
    transform: scale(1);
 }

 75% {
    transform: scale(0);
 }

 100% {
   transform: scale(0.5);
 }
`;


const HandleBase = styled.svg<{ mouseDragging: boolean, styling: string}>`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: ${({theme, styling}) => theme.custom.lines[styling].handleBase.fill};
  appearance: none;
`;

const HandleRingLayer = styled.circle<{maskID: string, styling: string}>`
  fill: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].handleRingLayer.stroke};
  mask: url(#${props => (props.maskID)});
`;
const HandleReactiveGroup = styled.g<{touchDragging: boolean, mouseDragging: boolean}>`
  opacity: 0.65;
  cursor: pointer;
  transform: scale(1);

  ${props => props.touchDragging && css`
    animation: ${HandleTouchReactionKeyframes} 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

  ${props => props.mouseDragging && css`
    animation: ${HandleMouseReactionKeyframes} 0.25s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275) 1;
  `}

`;
const HandleReactiveFill = styled.circle<{styling: string}>`
  mix-blend-mode: multiply;
  fill: ${({theme, styling}) => theme.custom.lines[styling].handleReactiveFill.fill};
  stroke: none;
`;
const HandleReactiveRing = styled.circle<{styling: string}>`
  fill: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].handleReactiveRing.stroke};
`;

const HandleContrastLayer = styled.circle<{styling: string}>`
  overflow: visible;
  mix-blend-mode: multiply;
  fill: none;
  stroke: ${({theme, styling}) => theme.custom.lines[styling].handleContrastLayer.stroke};
`;
const HandleShadowLayer = styled.circle<{fillID: string}>`
    mix-blend-mode: multiply;
    fill: url(#${props => (props.fillID)});
`;

const GrabHandleIndexGroup = styled.g<{showIndex: boolean}>`
  opacity: 0;
  pointer-events: none;
  ${props => props.showIndex && css`
    opacity: 1;
  `};

`;

const StopStart = styled.stop<{styling: string}>`
  stop-color: ${({theme, styling}) => theme.custom.lines[styling].stopStart.stopColor };
`;
const StopEnd = styled.stop<{styling: string}>`
  stop-color: ${({theme, styling}) => theme.custom.lines[styling].stopEnd.stopColor };
`;


const GrabHandleIndexText = styled.text<{showIndex: boolean, styling: string}>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  stroke: ${({theme, styling}) => theme.custom.lines[styling].grabHandleText.stroke};
  text-align: center;

  font-weight: bold;
  transition: opacity 250ms ease;
  pointer-events: none;


`;

const IconGroup = styled.g`

`;

interface IHandleUnitProps {
  lineSetId: number
  index: number
  angle: number | null
  useAngles: boolean
  unit: number
  size: number
  x: number;
  y: number;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {rotate?: number};
  rotate?: number;
  moveCallback: any;
  moveEndCB?: ()=>void;
  options: IDragLineUISharedOptions;
  readOnlyHandle?: boolean;
  styling?: string;
}

const HandleUnit : React.FC<IHandleUnitProps> = (props) => {
  // console.log(props.lineSetId, typeof props.lineSetId)
  const { index, useAngles, angle, unit, size, lineSetId, x, y, moveCallback, moveEndCB=()=>{}, Icon, rotate=0, options, readOnlyHandle = false, styling='primary'} = props;
  // console.log("Handle "+ index +" from set "+ lineSetId + " :: " + x, ", " + y)
  const handleInstance = React.createRef<SVGSVGElement>();

  const [ touchDragging, setTouchDragging ] = useState(false);
  const [ mouseDragging, setMouseDragging ] = useState(false);
  const [ touchIndex, setTouchIndex ] = useState<number | null>(null);


  /** --- Toucher Events Section --- */
  const handleTouchStart = useCallback((e: any) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    // Remember what touch event index is for this handle.
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      if(touch.target.parentNode.parentElement === handleInstance || touch.target.parentNode.parentElement.parentElement){
        setTouchDragging(true);
        setTouchIndex(i);
      }
    }
  },[handleInstance, readOnlyHandle]);


  const handleTouchEnd = useCallback(() => {
    if (readOnlyHandle) { return; }
    setTouchDragging(false);
    setTouchIndex(null);
    moveEndCB();
  },[moveEndCB, readOnlyHandle]);

  const handleTouchMove = useCallback((e: React.TouchEvent<SVGSVGElement>) => {
    if (readOnlyHandle) { return; }
    for (let i = 0; i < e.touches.length; i++) {
      if(i === touchIndex){
        moveCallback({ x: e.touches[i].pageX, y: e.touches[i].pageY}, index);
      }
    }
  },[index, moveCallback, readOnlyHandle, touchIndex]);

  /** --- Mouse Events Section --- */

  const handleMouseMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    moveCallback({ x: e.pageX, y: e.pageY}, index);
  },[index, moveCallback, readOnlyHandle]);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    setMouseDragging(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    moveCallback({ x: e.pageX, y: e.pageY}, index);
    setTimeout(moveEndCB);
  },[handleMouseMove, index, moveCallback, moveEndCB, readOnlyHandle]);

  const handleMouseDown = useCallback((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    setMouseDragging(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

  },[handleMouseMove, handleMouseUp, readOnlyHandle]);

  const maskID = useAngles ? "mask-" + lineSetId + '-' + index : '';
  const shadowGradientID = "shadowGradient-" + lineSetId + '-' + index;
  const {showPointHandle = true, showPointLabel= false, pointIndexOffset} = options as IDragLineUISharedOptions;

  return (

    <HandleBase ref={handleInstance} styling={styling} x={x} y={y} mouseDragging={mouseDragging} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown}>
      <defs>
        <mask id={maskID}>
          <rect width='100%' height='100%' x='-50%' y='-50%' fill='white' />
          <rect width={size / 3} height={size / 0.9} x={-((size / 3) /2)} y={-((size / 0.9) + 5)} fill='black' transform={`rotate(${angle || 0} 0 0)`} />
        </mask>
        <radialGradient id={shadowGradientID}>
          <StopStart styling={styling} offset='0%' />
          <StopEnd styling={styling} offset='80%' />
        </radialGradient>
      </defs>

      {
        Icon ?
          <IconGroup transform={`scale(${unit * 1.5 }) translate(-21 -21) rotate(${rotate}, 21, 21 )`}>
            <Icon height='42' width='42' />
          </IconGroup>
        :
          showPointHandle &&
            <g transform={`scale(${ unit })`}>

              <HandleShadowLayer r={size * 1} fillID={shadowGradientID} />
              <HandleContrastLayer styling={styling} r={size / 2.4} strokeWidth={size / 3} />

              <HandleReactiveGroup touchDragging={touchDragging} mouseDragging={mouseDragging}>
                <HandleReactiveFill styling={styling} r={size / 1.8} />
                <HandleReactiveRing styling={styling} r={size / 2.25} strokeWidth={size / 3} />
              </HandleReactiveGroup>

              <HandleRingLayer styling={styling} r={size / 2} strokeWidth={size / 6} maskID={maskID} />

              {showPointLabel &&
                <GrabHandleIndexGroup showIndex>
                  <GrabHandleIndexText styling={styling} transform='translate(-5,6)' fontSize='20px' showIndex>
                    {index + pointIndexOffset}
                  </GrabHandleIndexText>
                </GrabHandleIndexGroup>}

            </g>
      }



    </HandleBase>
  );
};

export default HandleUnit;
