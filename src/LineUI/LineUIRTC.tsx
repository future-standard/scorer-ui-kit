import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';

import LineSet from './LineSet';
import { LineSetContext } from './Contexts';
import WebRTCClient from '../WebRTCClient';
import Spinner from '../Indicators/Spinner';
import { LineUIOptions, IBoundary, LineUIVideoOptions } from '.';


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
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`;
const LoadingOverlay =styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
  onLineClick?: (lineSetId: number) => void;
  onLoaded?: (metadata: {height: number; width: number; }) => void;
  options?: LineUIOptions;
  videoOptions?: LineUIVideoOptions;
  lineClickSensingBorder?: string;
  hasClickSensingBorder?: boolean;
}
const LineUI : React.FC<LineUIProps> = ({
  ws,
  onSizeChange = ()=>{},
  onLineMoveEnd = ()=>{},
  onLineClick = ()=>{},
  onLoaded = ()=>{},
  lineClickSensingBorder = '65',
  hasClickSensingBorder = true,
  videoOptions,
  options: {
    showHandleFinder,
    showSetIndex,
    showPointLabel = false,
    showLabelShadow = false,
    showPointHandle,
    showMoveHandle,
    showGrabHandle,
    setIndexOffset = 0,
    pointIndexOffset = 0,
    showPoint = false,
    boundaryOffset = 0,
    showDirectionMark = false
  }={}
}) => {

  const frame =  useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement>();

  const [boundaries, setBoundaries] = useState<IBoundary>({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  const {state} = useContext(LineSetContext);

  const [handleFinder, setHandleFinder] = useState<boolean>(false);


  // Scale Code
  const [videoSize, setVideoSize] = useState({ h: 768, w: 1024 });
  const [unit, setUnit] = useState(1);
  const [loaded, setLoaded] = useState(false);

  // Initialization functions.
  const initScaleAndBounds = useCallback(() => {
    if(!videoRef.current) {return;}
    const { videoHeight, videoWidth, clientHeight } = videoRef.current;

    if(videoHeight !== videoSize.h || videoWidth !== videoSize.w) {
      setVideoSize({ h: videoHeight, w: videoWidth });
      onSizeChange({ h: videoHeight, w: videoWidth });
    }

    if(videoHeight / clientHeight !== unit) {
      setUnit(videoHeight / clientHeight);
    }
  }, [videoSize.h, videoSize.w, unit, onSizeChange]);

  const handlePositionTipShow = (e: any) => {
    if(e.target === frame.current){
      setHandleFinder((!handleFinder === false) && true);
    }
  };

  const handlePositionTipHide = () => {
    setHandleFinder(showHandleFinder ||false);
  };

  const calculateCTM = useCallback(()=>{
    if(!frame.current) {return null;}
    //On size change make sure to refresh CTM
    return frame.current.getScreenCTM();
  },[]);

  useEffect(() => {
    // Redefine boundaries and screen matrix when the loaded video changes our svg viewbox.
    if(!frame.current || !loaded) {return;}
    const { viewBox } = frame.current;
    const bounds = {
      x: {
        min: viewBox.baseVal.x + boundaryOffset,
        max: viewBox.baseVal.x + viewBox.baseVal.width - boundaryOffset
      },
      y: {
        min: viewBox.baseVal.y + boundaryOffset,
        max: viewBox.baseVal.y + viewBox.baseVal.height - boundaryOffset
      },
    };
    setBoundaries(bounds);
  }, [videoSize, loaded, boundaryOffset]);

  const onLoadedMetadata = useCallback(({target}) =>{
    if(target){
      setLoaded(true);
      videoRef.current = target;
      initScaleAndBounds();
      const {videoHeight=1, videoWidth=1} = target;
      onLoaded({height: videoHeight, width: videoWidth});
    }
  },[initScaleAndBounds, onLoaded]);

  useEffect(() => {
    // Make sure we always keep scale up to date on resize.
    window.addEventListener('resize', initScaleAndBounds);
    return () => {
      window.removeEventListener('resize', initScaleAndBounds);
    };
  }, [initScaleAndBounds]);

  const options = {
    handleFinderActive: handleFinder,
    revealSetIndex: showSetIndex !== false && (showSetIndex || state.length > 1),
    showPointLabel,
    showLabelShadow,
    showPointHandle:  showPointHandle || (showPointHandle !== false && showGrabHandle !== false),
    showMoveHandle:  showMoveHandle || (showMoveHandle !== false && showGrabHandle !== false),
    setIndexOffset,
    pointIndexOffset,
    showPoint,
    showDirectionMark
  };

  return (
    <Container>
      <Video onLoadedMetadata={onLoadedMetadata} peerAddress={ws} id='1' {...videoOptions} enabled> </Video>
      {!loaded && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
      {
        loaded &&
          <Frame ref={frame} viewBox={`0 0 ${videoSize.w} ${videoSize.h} `} version='1.1' xmlns='http://www.w3.org/2000/svg' onPointerDown={handlePositionTipShow} onPointerUp={handlePositionTipHide} onPointerLeave={handlePositionTipHide} transcalent={handleFinder}>
            {state.map((lineSet, index) => (
              <LineSet key={index} hasClickSensingBorder={hasClickSensingBorder} lineClickSensingBorder={lineClickSensingBorder} onLineMoveEnd={onLineMoveEnd} onLineClick={onLineClick} lineSetId={index} lineData={lineSet} getCTM={calculateCTM} boundaries={boundaries} unit={unit} size={30} options={options} />
              ))}
          </Frame>
      }
    </Container>
  );

};

export default LineUI;
