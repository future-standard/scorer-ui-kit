import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const CropLineStyle = css`
  position: absolute;
  display: block;
  opacity: 0.1;
`;
const TopLine = styled.div`
  ${CropLineStyle};
  cursor: n-resize;
  width: 100%;
  height: 5px;
  left: 0;
  top: -3px;
`;

const RightLine = styled.div`
  ${CropLineStyle};
  cursor: e-resize;
  right: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;

const BottomLine = styled.div`
  ${CropLineStyle}
  cursor: s-resize;
  bottom: -3px;
  height: 5px;
  width: 100%;
  left: 0;
`;

const LeftLine = styled.div`
  ${CropLineStyle};
  cursor: w-resize;
  left: -3px;
  top: 0;
  width: 5px;
  height: 100%;
`;

const resizeSquaresCss = css`
  position: absolute;
  width: 10px;
  height: 10px;
  border: solid 1px var(--success-12);
  background-color: var(--white-a12);
`;

const PointN = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  top: -5px;
  margin-left: -5px;
  left: 50%;
  ${({ isResizable }) => isResizable && css`
    cursor: n-resize;
  `};
`;
const PointNW = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  top: -5px;
  left: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: nw-resize;
  `};
`;

const PointNE = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  top: -5px;
  right: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: ne-resize;
  `};
`;
const PointE = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
    margin-top: -5px;
    top: 50%;
    right: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: e-resize;
  `};
`;
const PointSE = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  bottom: -5px;
  right: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: se-resize;
  `};
`;
const PointS = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: s-resize;
  `};
`;
const PointSW = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  bottom: -5px;
  left: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: sw-resize;
  `};
`;
const PointW = styled.div<{ isResizable: boolean }>`
  ${resizeSquaresCss};
  margin-top: -5px;
  top: 50%;
  left: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: w-resize;
  `};
`;

interface ICropArea {
  isResizable: boolean
  hasAspectRatio: boolean
}

const CropArea: React.FC<ICropArea> = ({
  isResizable,
  hasAspectRatio
}) => {

  return (
    <Fragment>
      {(isResizable && (!hasAspectRatio)) ? (
        <Fragment>
          {/* This lines are just for cursor css */}
          <TopLine />
          <RightLine />
          <BottomLine />
          <LeftLine />
        </Fragment>)
        : null}

      {hasAspectRatio ? null
        : (
          <Fragment>
            <PointN data-point='cursor-n' {...{ isResizable }} />
            <PointE data-point='cursor-e' {...{ isResizable }} />
            <PointS data-point='cursor-s' {...{ isResizable }} />
            <PointW data-point='cursor-w' {...{ isResizable }} />
          </Fragment>
        )}


      <PointNW data-point='cursor-nw' {...{ isResizable }} />
      <PointNE data-point='cursor-ne' {...{ isResizable }} />
      <PointSE data-point='cursor-se' {...{ isResizable }} />
      <PointSW data-point='cursor-sw' {...{ isResizable }} />
    </Fragment>
  );
};

export default CropArea;