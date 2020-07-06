/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback, useRef, useReducer, useContext } from 'react';
import styled, { css } from 'styled-components';

import { IBoundary, IPointSet } from './typings';
import LineSet from './LineSet';
import { LineSetContext } from './Contexts';
import WebRTCClient from '../WebRTCClient';


const Container = styled.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  /* box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%); */
  /* border: 10px solid hsla(195deg, 45%, 35%, 45%); */
  /* border-radius:3px; */

  width: auto;
  /* transform: translateY(-70%); */
`;
const Video = styled(WebRTCClient)`
  width:  100%;
  height: 100%;
`

const Frame = styled.svg<{transcalent?: boolean}>`
  touch-action: none;
  user-select: none;
  margin: 0;

  overflow: visible;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: background 250ms ease;
  background: hsla(0deg, 0%, 0%, 0%);

  ${props => props.transcalent && css`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`;


interface LineUIProps {
  ws: string;
  onSizeChange?: (size: {h: number; w: number}) => void;
  onLineMoveEnd?: ()=> void;
}
const LineUI : React.FC<LineUIProps> = ({ws, onSizeChange = ()=>{}, onLineMoveEnd = ()=>{}}) => {

  const frame : any =  useRef();

  const [boundaries, setBoundaries] = useState<IBoundary>({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  const [screenCTM, setScreenCTM] = useState<SVGMatrix>();
  const {state, dispatch} = useContext(LineSetContext);

  const [handleFinder, setHandleFinder] = useState<boolean>(false);


  // Scale Code
  const [videoSize, setVideoSize] = useState({ h: 1, w: 1 });
  const [unit, setUnit] = useState(1);
  // const videoRef = useRef<HTMLVideoElement>(null);



  // Initialization functions.
  const getCanvasBounds = () => {
    const { viewBox } = frame.current;

    let bounds = {
      x: {
        min: viewBox.baseVal.x,
        max: viewBox.baseVal.x + viewBox.baseVal.width
      },
      y: {
        min: viewBox.baseVal.y,
        max: viewBox.baseVal.y + viewBox.baseVal.height
      },
    };

    return bounds;
  };

  const initScaleAndBounds = useCallback((target) => {

    const { videoHeight, videoWidth, clientHeight } = target;
    if(videoHeight !== videoSize.h || videoWidth !== videoSize.w) {
      setVideoSize({ h: videoHeight, w: videoWidth });
      onSizeChange({ h: videoHeight, w: videoWidth });
    }
    if(videoHeight / clientHeight !== unit) {
      setUnit(videoHeight / clientHeight);
    }


  }, [videoSize, unit]);

  const handlePositionTipShow = (e: any) => {
    if(e.target === frame.current){
      setHandleFinder(true);
    }
  };

  const handlePositionTipHide = () => {
    setHandleFinder(false);
  };

  useEffect(() => {
    // Redefine boundaries and screen matrix when the loaded image changes our svg viewbox.
    let ctm = frame.current.getScreenCTM();
    setScreenCTM(ctm);
    setBoundaries(getCanvasBounds());
  }, [videoSize]);

  const loaded = useCallback(({target}) =>{
    initScaleAndBounds(target);
  },[initScaleAndBounds]);

  // useEffect(() => {

  //   // Make sure we always keep scale up to date on resize.
  //   window.addEventListener("resize", initScaleAndBounds);
  //   return () => {
  //     window.removeEventListener("resize", initScaleAndBounds);
  //   };
  // }, [initScaleAndBounds]);

  const options = {
    handleFinderActive: handleFinder,
    revealSetIndex: state.length > 1
  };

  return (
    <Container>
      <Video onLoadedMetadata={loaded} peerAddress={ws} id="1" enabled={true}> </Video>
      <Frame ref={ frame } viewBox={`0 0 ${videoSize.w} ${videoSize.h} `} version="1.1" xmlns="http://www.w3.org/2000/svg" onPointerDown={handlePositionTipShow} onPointerUp={handlePositionTipHide} onPointerLeave={handlePositionTipHide} transcalent={handleFinder}>
        {state.map((lineSet, index) => (
          <LineSet key={index} onLineMoveEnd={onLineMoveEnd} lineSetId={index} lineData={ lineSet } screenCTM={ screenCTM } boundaries={ boundaries } unit={ unit } size={ 30 } options={ options } />
          ))}
      </Frame>
    </Container>
  );

};

export default LineUI;