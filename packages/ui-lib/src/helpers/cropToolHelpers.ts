import { clamp } from './index';

// https://developer.mozilla.org/en-US/docs/Web/CSS/cursor //
type ICursorStyles = (
  'ne-resize'
  | 'nw-resize'
  | 'n-resize'
  | 'se-resize'
  | 'sw-resize'
  | 's-resize'
  | 'e-resize'
  | 'w-resize'
  | 'move'
  | 'default'
);

const updateCursorStyle = (
  left: number,
  top: number,
  width: number,
  height: number,
  clientX: number,
  clientY: number
): ICursorStyles => {
  let cursorStyle: ICursorStyles = 'default';

  if (clientY - top < 5) {
    if (width - (clientX - left) < 5) {
      cursorStyle = 'ne-resize';
    } else if (clientX - left < 5) {
      cursorStyle = 'nw-resize';
    } else {
      cursorStyle = 'n-resize';
    }
  } else if (height - (clientY - top) < 5) {
    if (width - (clientX - left) < 5) {
      cursorStyle = 'se-resize';
    } else if (clientX - left < 5) {
      cursorStyle = 'sw-resize';
    } else {
      cursorStyle = 's-resize';
    }
  } else if (width - (clientX - left) < 5) {
    cursorStyle = 'e-resize';
  } else if (clientX - left < 5) {
    cursorStyle = 'w-resize';
  } else {
    cursorStyle = 'move';
  }

  return cursorStyle;
};

const drawImgValues = (img: HTMLImageElement, canvasHeight: number, canvasWidth: number): IDrawArea => {

  const scale = Math.min(
    canvasWidth / img.naturalWidth,
    canvasHeight / img.naturalHeight
  );

  const width = Math.floor(img.naturalWidth * scale);
  const height = Math.floor(img.naturalHeight * scale);
  const top = 0 + Math.floor((canvasHeight - height) / 2);
  const left = 0 + Math.floor((canvasWidth - width) / 2);

  const imageDraw: IDrawArea = {
    left,
    top,
    width,
    height,
  };

  return imageDraw;
};


const calculateAspectSizes = (baseHeight: number, baseWidth: number, aspectRatio: number) => {
  const aspect = aspectRatio ? aspectRatio : 1;
  let height, width;

  if (baseWidth > (baseHeight * aspect)) {
    width = Math.floor(baseHeight * aspect);
    height = baseHeight;
  } else {
    width = baseWidth;
    height = Math.floor(baseWidth / aspect);
  }

  return {
    height,
    width
  };
};

const initialCropValues = (
  cropWidth: number,
  cropHeight: number,
  canvasWidth: number,
  canvasHeight: number,
  imgWidth: number,
  imgHeight: number,
  aspectRatio?: number,
) => {

  let height, width;
  const aspect = aspectRatio ? aspectRatio : 1;
  const minWidth = Math.min(cropWidth, canvasWidth, imgWidth);
  const minHeight = Math.min(cropHeight, canvasHeight, imgHeight);

  if (minWidth > (minHeight * aspect)) {
    width = Math.floor(minHeight * aspect);
    height = minHeight;
  } else {
    width = minWidth;
    height = Math.floor(minWidth / aspect);
  }

  const top = 0 + Math.floor((canvasHeight / 2) - (height / 2));
  const left = 0 + Math.floor((canvasWidth / 2) - (width / 2));

  return {
    left,
    top,
    width,
    height,
  };
};

const isLeftMouseButton = (e: MouseEvent) => {

  let mouseButton;
  if (typeof (e.buttons) !== undefined) {
    mouseButton = e.buttons;
  } else if (typeof (e.button) !== undefined) {
    mouseButton = e.button;
  } else {
    mouseButton = e.which;
  }

  if (mouseButton === 1) {
    return true;
  }

  return false;
};

interface ISelectedArea {
  cropLeft: number
  cropTop: number
  cropWidth: number
  cropHeight: number
  mouseStartX: number
  mouseStartY: number
  imgLeft: number
  imgTop: number
  imgWidth: number
  imgHeight: number
  cursorStart: ICursorStyles
  isResizing: boolean
}

const updateCropValues = (
  oldSelection: ISelectedArea,
  newX: number,
  newY: number,
) => {

  let [updatedLeft, updatedTop, updatedWidth, updatedHeight] =
    [oldSelection.cropLeft, oldSelection.cropTop, oldSelection.cropWidth, oldSelection.cropHeight];

  const diffX = newX - oldSelection.mouseStartX;
  const diffY = newY - oldSelection.mouseStartY;

  switch (oldSelection.cursorStart) {
    case 'ne-resize':
      updatedTop = oldSelection.cropTop + diffY;
      updatedHeight = oldSelection.cropHeight - diffY;
      updatedWidth = oldSelection.cropWidth + diffX;

      break;

    case 'nw-resize':
      updatedTop = oldSelection.cropTop + diffY;
      updatedLeft = oldSelection.cropLeft + diffX;
      updatedHeight = oldSelection.cropHeight - diffY;
      updatedWidth = oldSelection.cropWidth - diffX;
      break;

    case 'n-resize':
      updatedTop = oldSelection.cropTop + diffY;
      updatedHeight = oldSelection.cropHeight - diffY;
      break;

    case 'se-resize':
      updatedHeight = oldSelection.cropHeight + diffY;
      updatedWidth = oldSelection.cropWidth + diffX;
      break;

    case 'sw-resize':
      updatedLeft = oldSelection.cropLeft + diffX;
      updatedHeight = oldSelection.cropHeight + diffY;
      updatedWidth = oldSelection.cropWidth - diffX;
      break;

    case 's-resize':
      updatedHeight = oldSelection.cropHeight + diffY;
      break;

    case 'e-resize':
      updatedWidth = oldSelection.cropWidth + diffX;
      break;

    case 'w-resize':
      updatedLeft = oldSelection.cropLeft + diffX;
      updatedWidth = oldSelection.cropWidth - diffX;
      break;

    case 'move':
      updatedTop = oldSelection.cropTop + diffY;
      updatedLeft = oldSelection.cropLeft + diffX;
      break;

    default:
      break;
  }

  const width = clamp(updatedWidth, 0, oldSelection.imgWidth);
  const height = clamp(updatedHeight, 0, oldSelection.imgHeight);
  const left = clamp(updatedLeft, oldSelection.imgLeft, (oldSelection.imgWidth - oldSelection.cropWidth + oldSelection.imgLeft));
  const top = clamp(updatedTop, oldSelection.imgTop, (oldSelection.imgHeight - oldSelection.cropHeight + oldSelection.imgTop));

  const isUpdateRequired = areDimensionsDiff(oldSelection, {left, top, height, width});

  return {
    left,
    top,
    width,
    height,
    isUpdateRequired,
  };
};

const updateCropWithAspect = (
  oldSelection: ISelectedArea,
  newX: number,
  newY: number,
  aspectRatio?: number,
) => {

  const aspect = aspectRatio ? aspectRatio : 1;
  let [updatedLeft, updatedTop, updatedWidth, updatedHeight] =
    [oldSelection.cropLeft, oldSelection.cropTop, oldSelection.cropWidth, oldSelection.cropHeight];

  const diffX = newX - oldSelection.mouseStartX;
  const diffY = newY - oldSelection.mouseStartY;

  switch (oldSelection.cursorStart) {
    case 'ne-resize':
      updatedTop = oldSelection.cropTop + diffY;
      updatedHeight = oldSelection.cropHeight - diffY;
      updatedWidth = Math.floor(updatedHeight * aspect);

      break;

    case 'nw-resize':
      updatedTop = oldSelection.cropTop + diffY;
      updatedLeft = oldSelection.cropLeft + (diffY * aspect);
      updatedHeight = oldSelection.cropHeight - diffY;
      updatedWidth = Math.floor(updatedHeight * aspect);
      break;

    case 'se-resize':
      updatedHeight = oldSelection.cropHeight + diffY;
      updatedWidth = Math.floor(updatedHeight * aspect);
      break;

    case 'sw-resize':
      updatedLeft = oldSelection.cropLeft + diffX;
      updatedWidth = oldSelection.cropWidth - diffX;
      updatedHeight = Math.floor(updatedWidth / aspect);
      break;

    case 'move':
      updatedTop = oldSelection.cropTop + diffY;
      updatedLeft = oldSelection.cropLeft + diffX;
      break;

    default:
      break;
  }

  /**img values only change if the image is updated */

  const imgBoundLeft = clamp(updatedLeft, oldSelection.imgLeft, (oldSelection.imgWidth - oldSelection.cropWidth + oldSelection.imgLeft));
  const imgBoundTop = clamp(updatedTop, oldSelection.imgTop, (oldSelection.imgHeight - oldSelection.cropHeight + oldSelection.imgTop));
  const imgBoundWidth = clamp(updatedWidth, 0, oldSelection.imgWidth);
  const imgBoundHeight = clamp(updatedHeight, 0, oldSelection.imgHeight);


  let left = imgBoundLeft;
  let top = imgBoundTop;
  let width = imgBoundWidth;
  let height = imgBoundHeight;

  if ((oldSelection.cursorStart !== 'move') && (imgBoundWidth === oldSelection.imgWidth)) {
    height = oldSelection.cropHeight;
    top = oldSelection.cropTop;
  }

  if ((oldSelection.cursorStart !== 'move') && (imgBoundHeight === oldSelection.imgHeight)) {
    width = oldSelection.cropWidth;
    left = oldSelection.cropLeft;
  }

  const isUpdateRequired = areDimensionsDiff(oldSelection, {left, top, height, width});

  return {
    left,
    top,
    width,
    height,
    isUpdateRequired,
  };
};

interface IDrawArea {
  left: number
  top: number
  width: number
  height: number
}

const areDimensionsDiff = (oldDimensions: ISelectedArea, newValues: IDrawArea) => {
  let isDifferent = false;

  if(oldDimensions.cropLeft !== newValues.left) {
    isDifferent = true;
  }

  if(oldDimensions.cropTop !== newValues.top) {
    isDifferent = true;
  }

  if(oldDimensions.cropHeight !== newValues.height) {
    isDifferent = true;
  }

  if(oldDimensions.cropWidth !== newValues.width) {
    isDifferent = true;
  }

  return isDifferent;
};

export type {
  ICursorStyles,
  IDrawArea,
  ISelectedArea,
};

export {
  initialCropValues,
  drawImgValues,
  updateCursorStyle,
  isLeftMouseButton,
  updateCropValues,
  updateCropWithAspect,
  calculateAspectSizes,
};