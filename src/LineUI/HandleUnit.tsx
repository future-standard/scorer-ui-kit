import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';


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
`

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
`


const HandleBase = styled.svg<{ mouseDragging: boolean }>`
  touch-action: none;
  user-select: none;
  overflow: visible;
  cursor: pointer;
  fill: hsla(235deg, 100%, 80%, 100%);
  appearance: none;
`

const HandleRingLayer = styled.circle<{maskID: string}>`
    fill: none;
    stroke: hsla(205deg, 100%, 89%, 100%);
    mask: url(#${props => (props.maskID)});
`
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

`
const HandleReactiveFill = styled.circle`
  mix-blend-mode: multiply;
  fill: hsla(192deg, 100%, 45%, 100%);
  stroke: none;
`
const HandleReactiveRing = styled.circle`
    fill: none;
    stroke: hsla(205deg, 100%, 36%, 27%);
`

const HandleContrastLayer = styled.circle`
    overflow: visible;
    mix-blend-mode: multiply;
    fill: none;
    stroke: hsla(205deg, 100%, 36%, 15%);
`
const HandleShadowLayer = styled.circle<{fillID: string}>`
    mix-blend-mode: multiply;
    fill: url(#${props => (props.fillID)});
`

interface IHandleUnitProps {
  lineSetId: number
  index: number
  angle: number | null
  useAngles: boolean
  unit: number
  size: number
  x: number
  y: number
  moveCallback: any
}

const HandleUnit : React.FC<IHandleUnitProps> = (props) => {
  // console.log(props.lineSetId, typeof props.lineSetId)
  const { index, useAngles, angle, unit, size, lineSetId, x, y, moveCallback } = props
  // console.log("Handle "+ index +" from set "+ lineSetId + " :: " + x, ", " + y)

  let handleInstance : any = React.createRef();

  const [ touchDragging, setTouchDragging ] = useState(false);
  const [ mouseDragging, setMouseDragging ] = useState(false);
  const [ touchIndex, setTouchIndex ] = useState<number | null>(null);


  /** --- Toucher Events Section --- */
  const handleTouchStart = (e: any) => {
    // Remember what touch event index is for this handle.
    for (let i = 0; i < e.touches.length; i++) {
      const touch = e.touches[i];
      if(touch.target.parentNode.parentElement === handleInstance || touch.target.parentNode.parentElement.parentElement){
        setTouchDragging(true);
        setTouchIndex(i);
      }
    }
    e.preventDefault();
  }

  const handleTouchEnd = (_e: any) => {
    setTouchDragging(false);
    setTouchIndex(null);
  }

  const handleTouchMove = (e: any) => {
    for (let i = 0; i < e.touches.length; i++) {
      if(i === touchIndex){
        moveCallback({ x: e.touches[i].pageX, y: e.touches[i].pageY}, index);
      }
    }
  }

  /** --- Mouse Events Section --- */
  const handleMouseDown = (e: any) => {
    setMouseDragging(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    e.preventDefault();
  }

  const handleMouseUp = (e: any) => {
    setMouseDragging(false);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    moveCallback({ x: e.pageX, y: e.pageY}, index);
    e.preventDefault();
  }

  const handleMouseMove = (e: any) => {
    moveCallback({ x: e.pageX, y: e.pageY}, index);
    e.preventDefault();
  }



  let maskID = useAngles ? "mask-" + lineSetId + '-' + index : '';
  let shadowGradientID = "shadowGradient-" + lineSetId + '-' + index;

  return (

    <HandleBase ref={ (ref) => handleInstance = ref } x={ x } y={ y } mouseDragging={mouseDragging} onTouchStart={ handleTouchStart } onTouchEnd={ handleTouchEnd } onTouchMove={ handleTouchMove } onMouseDown={ handleMouseDown }>
        <defs>
            <mask id={ maskID }>
                <rect width={ '100%' } height={ '100%' } x="-50%" y="-50%" fill="white" />
                <rect width={ size / 3 } height={ size / 0.9 } x={ -((size / 3) /2) } y={ -((size / 0.9) + 5) } fill="black" transform={`rotate(${angle || 0} 0 0)`} />
            </mask>
            <radialGradient id={ shadowGradientID }>
              <stop offset="0%" stopColor="hsla(205deg, 100%, 15%, 35%)" />
              <stop offset="80%" stopColor="hsla(205deg, 100%, 15%, 0%)" />
            </radialGradient>
        </defs>

        <g transform={`scale(${ unit })`}>

          <HandleShadowLayer r={ size * 1} fillID={ shadowGradientID } />
          <HandleContrastLayer r={ size / 2.4 } strokeWidth={ size / 3 } />

          <HandleReactiveGroup touchDragging={touchDragging} mouseDragging={mouseDragging}>
              <HandleReactiveFill r={ size / 1.8 } />
              <HandleReactiveRing r={ size / 2.25 } strokeWidth={ size / 3 } />
          </HandleReactiveGroup>

          <HandleRingLayer r={ size / 2 } strokeWidth={ size / 6 } maskID={ maskID } />
        </g>

    </HandleBase>
  );
}

export default React.memo(HandleUnit);