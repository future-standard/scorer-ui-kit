import LineUI from './LineUI';
import LineUIVideo from './LineUIVideo';
import LineUIRTC from './LineUIRTC';
import LineReducer from './LineReducer';
import { LineSetContext } from './Contexts';
import { VideoHTMLAttributes } from 'react';

export interface IVector2 {
  x: number,
  y: number
}

export interface IPointSet {
  name?: string;
  points: IVector2[];
  readOnly?: boolean;
  icon?: React.FunctionComponent;
  rotate?: number;
  showOrientation?: boolean;
  styling?: string;
  areaName?: string;
  showPointHandle?: boolean;
  showSmallDirectionMark?: boolean;
  showMoveHandle?: boolean;
  color?: string;
  opacity?: string;
}

export interface IMinMax {
  min: number,
  max: number
}

export interface IBoundary {
  x: IMinMax,
  y: IMinMax,
}

export interface IDragLineUISharedOptions {
  revealSetIndex: boolean;
  handleFinderActive: boolean;
  showPointLabel: boolean;
  showPointHandle: boolean;
  showMoveHandle: boolean;
  setIndexOffset: number;
  pointIndexOffset: number;
  showPoint: boolean;
  showDirectionMark?: boolean;
}

export interface LineUIOptions {
  showHandleFinder?: boolean;
  showSetIndex?: boolean;
  showPointLabel?: boolean;
  // Show/Hide Point Handle
  showPointHandle?: boolean;
  // Show/Hide Move Handle
  showMoveHandle?: boolean;
  // Show all handles (this is true by default)
  showGrabHandle?: boolean;
  // Note this is display only (does not apply to state indices)
  setIndexOffset?: number;
  // Note this is display only (does not apply to state indices)
  pointIndexOffset?: number;

  showPoint?: boolean;

  fixedImgDimensions?: {
    x: number;
    y: number;
  };

  boundaryOffset?: number,
  showDirectionMark?: boolean
}

export type  LineUIVideoOptions = VideoHTMLAttributes<HTMLVideoElement>

export {
  LineUI,
  LineUIVideo,
  LineUIRTC,
  LineReducer,
  LineSetContext
};
