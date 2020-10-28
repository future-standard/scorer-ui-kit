import LineUI from "./LineUI";
import LineUIRTC from "./LineUIRTC";
import LineReducer from "./LineReducer";
import { LineSetContext } from './Contexts';

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
  // Note this is display only (noes not apply to state indices)
  setIndexOffset?: number;
}

export {
  LineUI,
  LineUIRTC,
  LineReducer,
  LineSetContext,
};
