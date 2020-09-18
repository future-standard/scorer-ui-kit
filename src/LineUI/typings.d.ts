
export interface IVector2 {
  x: number,
  y: number
}

export interface IPointSet {
  name?: string;
  points: IVector2[];
  readOnly?: boolean;
  icon: React.FunctionComponent;
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
  revealSetIndex: boolean,
  handleFinderActive: boolean
  showHandle: boolean;
  showPointLabel: boolean;
  showGrabHandle?: boolean;
}