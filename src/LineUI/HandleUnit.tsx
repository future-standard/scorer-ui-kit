import React, { useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IDragLineUISharedOptions } from './typings';


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


const HandleBase = styled.svg<{ mouseDragging: boolean }>`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: hsla(235deg, 100%, 80%, 100%);
  appearance: none;
`;

const HandleRingLayer = styled.circle<{maskID: string}>`
    fill: none;
    stroke: hsla(205deg, 100%, 89%, 100%);
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
const HandleReactiveFill = styled.circle`
  mix-blend-mode: multiply;
  fill: hsla(192deg, 100%, 45%, 100%);
  stroke: none;
`;
const HandleReactiveRing = styled.circle`
    fill: none;
    stroke: hsla(205deg, 100%, 36%, 27%);
`;

const HandleContrastLayer = styled.circle`
    overflow: visible;
    mix-blend-mode: multiply;
    fill: none;
    stroke: hsla(205deg, 100%, 36%, 15%);
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

const GrabHandleIndexText = styled.text<{showIndex: boolean}>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  fill: #fff;
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
  options?: IDragLineUISharedOptions;
  readOnlyHandle?: boolean;
}

const HandleUnit : React.FC<IHandleUnitProps> = (props) => {
  // console.log(props.lineSetId, typeof props.lineSetId)
  const { index, useAngles, angle, unit, size, lineSetId, x, y, moveCallback, moveEndCB=()=>{}, Icon, rotate=0, options = {}, readOnlyHandle = false} = props;
  // console.log("Handle "+ index +" from set "+ lineSetId + " :: " + x, ", " + y)

  let handleInstance = React.createRef<SVGSVGElement>();

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

  const handleMouseMove = useCallback((e) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    moveCallback({ x: e.pageX, y: e.pageY}, index);
  },[index, moveCallback, readOnlyHandle]);

  const handleMouseUp = useCallback((e) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    setMouseDragging(false);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    moveCallback({ x: e.pageX, y: e.pageY}, index);
    setTimeout(moveEndCB());
  },[handleMouseMove, index, moveCallback, moveEndCB, readOnlyHandle]);

  const handleMouseDown = useCallback((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    if (readOnlyHandle) { return; }
    setMouseDragging(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

  },[handleMouseMove, handleMouseUp, readOnlyHandle]);

  let maskID = useAngles ? "mask-" + lineSetId + '-' + index : '';
  let shadowGradientID = "shadowGradient-" + lineSetId + '-' + index;
  const {showGrabHandle = true, showPointLabel= false} = options as IDragLineUISharedOptions;

  return (

    <HandleBase ref={handleInstance} x={x} y={y} mouseDragging={mouseDragging} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} onMouseDown={handleMouseDown}>
      <defs>
        <mask id={maskID}>
          <rect width='100%' height='100%' x='-50%' y='-50%' fill='white' />
          <rect width={size / 3} height={size / 0.9} x={-((size / 3) /2)} y={-((size / 0.9) + 5)} fill='black' transform={`rotate(${angle || 0} 0 0)`} />
        </mask>
        <radialGradient id={shadowGradientID}>
          <stop offset='0%' stopColor='hsla(205deg, 100%, 15%, 35%)' />
          <stop offset='80%' stopColor='hsla(205deg, 100%, 15%, 0%)' />
        </radialGradient>
      </defs>

      {
        Icon ?
          <IconGroup transform={`scale(${unit * 1.5 }) translate(-21 -21) rotate(${rotate}, 21, 21 )`}>
            <Icon height='42' width='42' />
          </IconGroup>
        :
          showGrabHandle &&
            <g transform={`scale(${ unit })`}>

              <HandleShadowLayer r={size * 1} fillID={shadowGradientID} />
              <HandleContrastLayer r={size / 2.4} strokeWidth={size / 3} />

              <HandleReactiveGroup touchDragging={touchDragging} mouseDragging={mouseDragging}>
                <HandleReactiveFill r={size / 1.8} />
                <HandleReactiveRing r={size / 2.25} strokeWidth={size / 3} />
              </HandleReactiveGroup>

              <HandleRingLayer r={size / 2} strokeWidth={size / 6} maskID={maskID} />

              {showPointLabel &&
                <GrabHandleIndexGroup showIndex>
                  <GrabHandleIndexText transform='translate(-5,6)' fontSize='20px' showIndex>
                    {index}
                  </GrabHandleIndexText>
                </GrabHandleIndexGroup>}

            </g>
      }



    </HandleBase>
  );
};

export default React.memo(HandleUnit);