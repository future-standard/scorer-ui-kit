import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';

import { IBoundary } from './typings';
import LineSet from './LineSet';
import { LineSetContext } from './Contexts';
import WebRTCClient from '../WebRTCClient';
import Spinner from '../Indicators/Spinner';


const Container = styled.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;

  width: auto;
`;

const Video = styled(WebRTCClient)`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`;

const SnapshotImage = styled.img`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`;

const LoadingOverlay = styled.div`
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
  snapshotUrl?: string;
  streamName?: string;
  snapshotPollInterval?: number;
  onSizeChange?: (size: {h: number; w: number}) => void;
  onLineMoveEnd?: ()=> void;
  onLoaded?: (metadata: {height: number; width: number; }) => void;
  onFallbackActivated?: () => void;
  options?: {
    showHandleFinder?: boolean;
    showSetIndex?: boolean;
    showPointLabel?: boolean;
    showHandle?: boolean;
    showGrabHandle?: boolean;
  }
}

const LineUIRTCWithFallback : React.FC<LineUIProps> = ({
  ws,
  snapshotUrl,
  streamName = 'RTSPcam1',
  snapshotPollInterval = 500,
  onSizeChange = ()=>{},
  onLineMoveEnd = ()=>{},
  onLoaded = ()=>{},
  onFallbackActivated = ()=>{},
  options: {
    showHandleFinder,
    showSetIndex,
    showPointLabel = false,
    showHandle = true,
    showGrabHandle
  }={}
}) => {

  const frame : any =  useRef();
  const imageRef = useRef<HTMLImageElement>(null);
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [boundaries, setBoundaries] = useState<IBoundary>({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  const [screenCTM, setScreenCTM] = useState<SVGMatrix>();
  const {state} = useContext(LineSetContext);

  const [handleFinder, setHandleFinder] = useState<boolean>(false);

  // Scale Code
  const [videoSize, setVideoSize] = useState({ h: 768, w: 1024 });
  const [unit, setUnit] = useState(1);
  const [loaded, setLoaded] = useState(false);

  // Fallback state - start with fallback, upgrade to WebRTC when ready
  const [useFallback, setUseFallback] = useState(true);
  const [rtcConnected, setRtcConnected] = useState(false);
  const [snapshotSrc, setSnapshotSrc] = useState<string>('');

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

  const initScaleAndBounds = useCallback((target: HTMLVideoElement | HTMLImageElement) => {
    let videoHeight: number, videoWidth: number, clientHeight: number;

    if (target instanceof HTMLVideoElement) {
      videoHeight = target.videoHeight;
      videoWidth = target.videoWidth;
      clientHeight = target.clientHeight;
    } else {
      videoHeight = target.naturalHeight;
      videoWidth = target.naturalWidth;
      clientHeight = target.clientHeight;
    }

    if(videoHeight !== videoSize.h || videoWidth !== videoSize.w) {
      setVideoSize({ h: videoHeight, w: videoWidth });
      onSizeChange({ h: videoHeight, w: videoWidth });
    }
    if(clientHeight > 0 && videoHeight / clientHeight !== unit) {
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

  useEffect(() => {
    // Redefine boundaries and screen matrix when the loaded image changes our svg viewbox.
    if(loaded){
      const ctm = frame.current.getScreenCTM();
      setScreenCTM(ctm);
      setBoundaries(getCanvasBounds());
    }
  }, [videoSize, loaded]);

  const onLoadedMetadata = useCallback(({target}) =>{
    if(target && target.videoWidth > 50 && target.videoHeight > 50){
      setLoaded(true);
      setRtcConnected(true);
      setUseFallback(false); // Upgrade from snapshot to WebRTC
      initScaleAndBounds(target);
      const {videoHeight=1, videoWidth=1} = target;
      onLoaded({height: videoHeight, width: videoWidth});
    }
  },[initScaleAndBounds, onLoaded]);

  const onImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    if(target && target.naturalWidth > 50 && target.naturalHeight > 50){
      if (!loaded) {
        setLoaded(true);
      }
      initScaleAndBounds(target);
      onLoaded({height: target.naturalHeight, width: target.naturalWidth});
    }
  }, [initScaleAndBounds, onLoaded, loaded]);

  // Handle RTC errors - just log them since we start with fallback anyway
  const handleRTCError = useCallback((error: string | null) => {
    if (error) {
      console.log('WebRTC connection issue:', error);
      // We're already in fallback mode, so just stay there
      if (rtcConnected) {
        onFallbackActivated();
      }
    }
  }, [rtcConnected, onFallbackActivated]);

  // Snapshot polling logic - preload to avoid showing broken images on 404
  useEffect(() => {
    if (useFallback && snapshotUrl) {
      const updateSnapshot = () => {
        const timestamp = Date.now();
        const url = `${snapshotUrl}${streamName}/snapshot?width=auto&height=270&timestamp=${timestamp}`;
        const img = new Image();
        img.onload = () => setSnapshotSrc(url);
        img.src = url;
      };

      // Initial load
      updateSnapshot();

      // Set up polling
      pollIntervalRef.current = setInterval(updateSnapshot, snapshotPollInterval);

      return () => {
        if (pollIntervalRef.current) {
          clearInterval(pollIntervalRef.current);
        }
      };
    }
  }, [useFallback, snapshotUrl, streamName, snapshotPollInterval]);

  const options = {
    handleFinderActive: handleFinder,
    revealSetIndex:  showSetIndex || state.length > 1,
    showPointLabel,
    showHandle,
    showGrabHandle
  };

  return (
    <Container>
      {/* Always try WebRTC in background */}
      <Video
        style={{ display: useFallback ? 'none' : 'block' }}
        onResize={onLoadedMetadata}
        onLoadedMetadata={onLoadedMetadata}
        peerAddress={ws}
        id='1'
        enabled
        setError={handleRTCError}
      />

      {/* Show snapshot while WebRTC connects */}
      {useFallback && (
        <React.Fragment>
          {snapshotSrc && (
            <SnapshotImage
              ref={imageRef}
              src={snapshotSrc}
              onLoad={onImageLoad}
              alt="Camera snapshot"
            />
          )}
          {!loaded && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
        </React.Fragment>
      )}

      {
        loaded &&
          <Frame ref={frame} viewBox={`0 0 ${videoSize.w} ${videoSize.h} `} version='1.1' xmlns='http://www.w3.org/2000/svg' onPointerDown={handlePositionTipShow} onPointerUp={handlePositionTipHide} onPointerLeave={handlePositionTipHide} transcalent={handleFinder}>
            {state.map((lineSet, index) => (
              <LineSet key={index} onLineMoveEnd={onLineMoveEnd} lineSetId={index} lineData={lineSet} screenCTM={screenCTM} boundaries={boundaries} unit={unit} size={30} options={options} />
              ))}
          </Frame>
      }
    </Container>
  );

};

export default LineUIRTCWithFallback;
