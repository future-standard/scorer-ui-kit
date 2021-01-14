import React, { useState, useEffect, useCallback, useContext, useRef } from 'react';
import HandleUnit from './HandleUnit';
import LineUnit from './LineUnit';
import update from 'immutability-helper';
import { LineSetContext } from './Contexts';
import { IPointSet, IDragLineUISharedOptions, IVector2 } from '.';
import styled from 'styled-components';

const Point = styled.circle<{styling: string}>`
  fill: ${({theme, styling}) => theme.custom.lines[styling].point.fill};
`;

interface ILineSetProps {
  lineSetId: number,
  boundaries: any,
  size: number,
  unit: number,
  lineData: IPointSet,
  options: IDragLineUISharedOptions,
  onLineMoveEnd: () => void;
  getCTM: () => DOMMatrix | null;
}

const LineSet : React.FC<ILineSetProps> = ({ getCTM, boundaries, unit, size, lineSetId, options , onLineMoveEnd}) => {
  // console.log("Unit " + lineSetId + ", reporting in...")

  const {state, dispatch} = useContext(LineSetContext);
  const lineSetData = state[lineSetId];

  const [handleAngles, setHandleAngles] = useState<number[]>([]);

  const handleRelation = useRef<{offsetX: number, offsetY: number}[]>([]);
  const handleRadius : number = size / 2;
  const handleUsesAngles : boolean = lineSetData.points.length === 2;

  /**
   * Ensure provided position vector is within the boundaries (of the container)
   * @param {IVector2} position Vector to be enforced.
   * @returns {IVector2} The position updated clamped to range.
   */
  const enforceBoundaries = useCallback((position: IVector2) => {

    if(position.x < boundaries.x.min){
      position.x = boundaries.x.min;
    } else if (position.x > boundaries.x.max){
        position.x = boundaries.x.max;
    }

    if(position.y < boundaries.y.min){
        position.y = boundaries.y.min;
    } else if (position.y > boundaries.y.max){
        position.y = boundaries.y.max;
    }

    return position;

  }, [boundaries]);


  const handleMoveCallback = useCallback((pointerPosition: IVector2, index: number) => {
    const screenCTM = getCTM();
    if(!screenCTM){ return; }

    const pointer = enforceBoundaries({
      x: ((pointerPosition.x - screenCTM.e ) / screenCTM.a),
      y: ((pointerPosition.y - screenCTM.f ) / screenCTM.d)
    });
    const point ={
      x: Math.round(pointer.x),
      y: Math.round(pointer.y)
    };
    const newLineSetData = update(lineSetData, {points:{[index]: {$merge: point}}});

    dispatch({type: "UPDATE", index: lineSetId, data: newLineSetData });

  }, [getCTM, enforceBoundaries, lineSetData, dispatch, lineSetId]);

  const lineDragStart = useCallback((pointerPosition: IVector2) => {
    const screenCTM = getCTM();
    if(!screenCTM){ return; }

    let pointer = {
      x: ((pointerPosition.x - screenCTM.e ) / screenCTM.a) - handleRadius,
      y: ((pointerPosition.y - screenCTM.f ) / screenCTM.d) - handleRadius
    };

    handleRelation.current = lineSetData.points.map((handle) => {
      const xDiff = pointer.x - handle.x;
      const yDiff = pointer.y - handle.y;
      return {
        offsetX: xDiff,
        offsetY: yDiff
      };
    });

  },[handleRadius, lineSetData.points, getCTM]);

  const lineDragUpdate = useCallback((pointerPosition: IVector2) => {
    const screenCTM = getCTM();
    if(!screenCTM){ return; }

    const { points } = lineSetData;

    const pointer = {
      x: ((pointerPosition.x - screenCTM.e ) / screenCTM.a) - handleRadius,
      y: ((pointerPosition.y - screenCTM.f ) / screenCTM.d) - handleRadius
    };

    const newPoints = points.map((_handle, index) => {
      const {offsetX=0, offsetY=0} = handleRelation.current[index]||{};

      return enforceBoundaries({
        x: Math.round(pointer.x - offsetX),
        y: Math.round(pointer.y - offsetY)
      });

    });

    dispatch({type: "UPDATE", index: lineSetId, data: { ...lineSetData, points: [...newPoints] } });

  }, [getCTM, lineSetData, handleRadius, dispatch, lineSetId, enforceBoundaries]);



  const calcAngle = (originX: number, originY: number, towardsX: number, towardsY: number) => {
    let angle = Math.atan2(towardsY-originY,towardsX-originX);
    let degrees = angle*180/Math.PI + 90;
    return degrees;
  };

  // useCallback maybe to reduce unchanged deals?
  const updateHandleAngles = useCallback((inputHandleData: IPointSet) => {
    const { points } = inputHandleData;
    let outputData : number[] = [];

    // Update all handle angles in data set.
    inputHandleData.points.forEach((handle, index) => {
      const nextIndex = ( index + 2 > points.length ) ? 0 : index + 1 ;
      const nextHandle =  points[nextIndex];
      const angle = calcAngle(handle.x, handle.y, nextHandle.x, nextHandle.y);
      outputData.push(angle);
    });

    setHandleAngles(outputData);
  }, []);


  useEffect(() => {
    // Update angles when the line's data set has changed.
    if(handleUsesAngles){
      updateHandleAngles(lineSetData);
    }
  }, [lineSetData, updateHandleAngles, handleUsesAngles]);

  const handles = lineSetData.points.map(({x,y}, index) =>
    <HandleUnit
      key={index+lineSetId}
      lineSetId={lineSetId}
      rotate={lineSetData.rotate}
      Icon={lineSetData.icon}
      index={index}
      unit={unit}
      size={size}
      useAngles={handleUsesAngles}
      angle={handleAngles[index]}
      x={x}
      y={y}
      moveEndCB={onLineMoveEnd}
      moveCallback={handleMoveCallback}
      options={options}
      styling={lineSetData.styling}
      readOnlyHandle={lineSetData.readOnly}
    />
  );

  const points = options.showPoint && (lineSetData.points.map(({x,y}, index) => <Point styling={lineSetData.styling||'primary'} key={index} r={2*unit} cx={x} cy={y} />));

  const lines = lineSetData.points.map(({x:x1,y:y1}, index) => {
    const {points, name, styling = 'primary'} = lineSetData;
    //nextIndex  index is next Point's index
    const nextIndex = ( index + 1 >= points.length ) ? 0 : index + 1 ;
    //in the case of a line don't draw line back from second point
    if(index === 1 && nextIndex === 0){
      return null;
    }
    const {x:x2,y:y2} = points[nextIndex];

  return (
    <LineUnit
      key={index}
      moveEndCB={onLineMoveEnd}
      lineSetId={lineSetId}
      options={options}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      unit={unit}
      label={name}
      styling={styling}
      lineMoveCallback={lineDragUpdate}
      lineMoveStartCallback={lineDragStart}
    />
  );});

  return (
    <g>
      {lines}
      {handles}
      {points}

    </g>
  );
};

export default LineSet;