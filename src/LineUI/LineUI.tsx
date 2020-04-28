/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useCallback, useRef, useReducer } from 'react';
import styled, { css } from 'styled-components';

import { IBoundary, IPointSet, IVector2 } from './typings';
import { LineSetContext } from './Contexts';

import LineSet from './LineSet';
import Control from './Control';

const MasterContainer = styled.div`
  background: hsl(205deg, 15%, 15%);
  padding: 10px 200px 10px 10px;
  margin: 0;
  // touch-action: none;
  height: 100vh;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

const Container = styled.div`
  position: relative;
  line-height: 0;
  user-select: none;
  touch-action: none;
  box-shadow: 0 10px 20px hsla(195deg, 65%, 5%, 35%);
  border: 10px solid hsla(195deg, 45%, 35%, 45%);
  border-radius:3px;
  max-height: 80vh;
  max-width: 100%;
  width: auto;
  display: inline-block;
  margin-top: 40%;
  margin-right: 100px;
  transform: translateY(-70%);

  img {
    width: auto;
    height: auto;
    max-height: inherit;
    max-width: inherit;
  }
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

const initialDataSet : IPointSet[] = [
  {
    name: "First",
    points: [
      { x: 100, y: 400 },
      { x: 254, y: 102 }
    ],
  },
  {
    name: "Second",
    points: [
      { x: 600, y: 300 },
      { x: 640, y: 480 },
      { x: 500, y: 400 }
    ],
  }
];

interface IReducerActions {
  type: string,
  index: number,
  data: IPointSet
}

const getMidpoint = (pointA : IVector2, pointB : IVector2) => {
  return({
    x: pointA.x + (pointB.x - pointA.x) * 0.5,
    y: pointA.y + (pointB.y - pointA.y) * 0.5
  });
};

const reducer = (state : IPointSet[], action: IReducerActions) => {

  let newState : IPointSet[];
  let newPosition : IVector2;

  switch(action.type){

    case "UPDATE":
      newState = [...state];
      newState[action.index] = action.data;
      return [...newState];

    case "ADD_SET":
      return [...state, {
        name: "",
        points: [
          { x: 300, y: 300 },
          { x: 640, y: 480 },
        ],
      }];

    case "REMOVE_SET":
      newState = [...state];
      newState.splice(action.index, 1);
      return newState;

    case "ADD_POINT":
      newState = [...state];
      newPosition = getMidpoint(newState[action.index].points[0], newState[action.index].points[1]);
      newState[action.index].points.splice(1, 0, newPosition);
      return newState;

    case "REMOVE_POINT":
      if(state[action.index].points.length <= 2){ return state; };

      newState = [...state];
      newState[action.index].points.splice( newState[action.index].points.length - 1, 1);
      return newState;

    default:
      console.error(`Action ${action.type} not registered.`);
      return state;
  }
};

const LineUI : React.FC = () => {

  const frame : any =  useRef();

  const [boundaries, setBoundaries] = useState<IBoundary>({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  const [screenCTM, setScreenCTM] = useState<SVGMatrix>();

  const [handleFinder, setHandleFinder] = useState<boolean>(false);

  const [state, dispatch] = useReducer(reducer, initialDataSet);

  // Scale Code
  const [imgSize, setImgSize] = useState({ h: 1, w: 1 });
  const [unit, setUnit] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);
  const [url, setUrl] = useState("https://via.placeholder.com/400");


  // Initialisation functions.
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

  const initScaleAndBounds = useCallback(() => {
    if (!imgRef.current) {
      return;
    }

    const { naturalHeight, naturalWidth, clientHeight } = imgRef.current;
    setImgSize({ h: naturalHeight, w: naturalWidth });
    setUnit(naturalHeight / clientHeight);
  }, []);

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
  }, [imgSize]);

  useEffect(() => {
    // Default handle data.
    setUrl("https://loremflickr.com/640/480/traffic");

    // Make sure we always keep scale up to date on resize.
    window.addEventListener("resize", initScaleAndBounds);
    return () => {
      window.removeEventListener("resize", initScaleAndBounds);
    };
  }, [initScaleAndBounds]);

  const options = {
    handleFinderActive: handleFinder,
    revealSetIndex: state.length > 1
  };

  return (
    <MasterContainer>

      <LineSetContext.Provider value={{state, dispatch}}>

        <Container>
          <img ref={imgRef} onLoad={initScaleAndBounds} src={url} alt="" />
          <Frame ref={ frame } viewBox={`0 0 ${imgSize.w} ${imgSize.h} `} version="1.1" xmlns="http://www.w3.org/2000/svg" onPointerDown={handlePositionTipShow} onPointerUp={handlePositionTipHide} onPointerLeave={handlePositionTipHide} transculent={handleFinder}>
            {state.map((lineSet, index) => (
              <LineSet key={index} lineSetId={index} lineData={ lineSet } screenCTM={ screenCTM } boundaries={ boundaries } unit={ unit } size={ 30 } options={ options } />
              ))}
          </Frame>
        </Container>

        <Control />

      </LineSetContext.Provider>

    </MasterContainer>
  );

};

export default LineUI;