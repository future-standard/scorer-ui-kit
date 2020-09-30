import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';

import LineSet from './LineSet';
import { LineSetContext } from './Contexts';
import { LineUIOptions, IBoundary } from '.';


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

const Frame = styled.svg<{transculent?: boolean}>`
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

  ${props => props.transculent && css`
    background: hsla(0deg, 0%, 0%, 35%);
  `}

`;
const Image = styled.img`
  object-fit: contain;
  width:  100%;
  height: 100%;
`;


interface LineUIProps {
  src: string;
  onSizeChange?: (size: {h: number; w: number}) => void;
  onLineMoveEnd?: ()=> void;
  options?: LineUIOptions;
}
const LineUI : React.FC<LineUIProps> = ({
  src,
  onSizeChange = ()=>{},
  onLineMoveEnd = ()=>{},
  options: {
    showHandleFinder,
    showSetIndex,
    showPointLabel = false,
    showHandle = true,
    showGrabHandle,
    setIndexOffset = 0
  }={}
}) => {


  const [boundaries, setBoundaries] = useState<IBoundary>({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  const {state} = useContext(LineSetContext);

  const [handleFinder, setHandleFinder] = useState<boolean>(false);


  // Scale Code
  const [imgSize, setImgSize] = useState({ h: 1, w: 1 });
  const [unit, setUnit] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);
  const frame =  useRef<SVGSVGElement>(null);



  // Initialization functions.
  const initScaleAndBounds = useCallback(() => {
    if (!imgRef.current) {
      return;
    }

    const { naturalHeight, naturalWidth, clientHeight } = imgRef.current;
    if(naturalHeight !== imgSize.h || naturalWidth !== imgSize.w) {
      setImgSize({ h: naturalHeight, w: naturalWidth });
      onSizeChange({ h: naturalHeight, w: naturalWidth });
    }

    if(naturalHeight / clientHeight !== unit) {
      setUnit(naturalHeight / clientHeight);
    }
  }, [imgSize, onSizeChange, unit]);

  const calculateCTM = useCallback(()=>{
    if(!frame.current) {return null;}
    //On size change make sure to refresh CTM
    return frame.current.getScreenCTM();
  },[]);

  const handlePositionTipShow = (e: any) => {
    if(e.target === frame.current){
      setHandleFinder((!handleFinder === false) && true);
    }
  };

  const handlePositionTipHide = () => {
    setHandleFinder(showHandleFinder ||false);
  };

  useEffect(() => {
    if(!frame.current) {return;}

    // Redefine boundaries loaded image changes our svg viewbox.
    const { viewBox } = frame.current;
    const bounds = {
      x: {
        min: viewBox.baseVal.x,
        max: viewBox.baseVal.x + viewBox.baseVal.width
      },
      y: {
        min: viewBox.baseVal.y,
        max: viewBox.baseVal.y + viewBox.baseVal.height
      },
    };

    setBoundaries(bounds);
  }, [imgSize]);

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
    showHandle,
    showGrabHandle,
    setIndexOffset
  };

  return (
    <Container>
      <Image ref={imgRef} onLoad={initScaleAndBounds} src={src} alt='' />
      <Frame ref={frame} viewBox={`0 0 ${imgSize.w} ${imgSize.h} `} version='1.1' xmlns='http://www.w3.org/2000/svg' onPointerDown={handlePositionTipShow} onPointerUp={handlePositionTipHide} onPointerLeave={handlePositionTipHide} transculent={handleFinder}>
        {state.map((lineSet, index) => (
          <LineSet key={index} onLineMoveEnd={onLineMoveEnd} lineSetId={index} lineData={lineSet} getCTM={calculateCTM} boundaries={boundaries} unit={unit} size={30} options={options} />
          ))}
      </Frame>
    </Container>
  );

};

export default LineUI;