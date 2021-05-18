import { useReducer, useCallback } from 'react';
import { clamp } from '../helpers/index';

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
  ) : ICursorStyles => {
  let cursorStyle : ICursorStyles= 'default';

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

const updateCropValues = (
  oldCropArea: IDrawArea,
  cursorStyle: ICursorStyles,
  lastPoint: ILastPoint,
  newX: number,
  newY: number,
  imgArea: IDrawArea
) => {

  let [updatedLeft, updatedTop, updatedWidth, updatedHeight] = 
  [oldCropArea.left, oldCropArea.top, oldCropArea.width, oldCropArea.height];

  const diffX = newX - lastPoint.posX;
  const diffY = newY - lastPoint.posY;

  switch (cursorStyle) {
    case 'ne-resize':
      updatedTop = oldCropArea.top + diffY;
      updatedHeight = oldCropArea.height - diffY;
      updatedWidth = oldCropArea.width + diffX;

      break;

    case 'nw-resize':
      updatedTop = oldCropArea.top + diffY;
      updatedLeft = oldCropArea.left + diffX;
      updatedHeight = oldCropArea.height - diffY;
      updatedWidth = oldCropArea.width - diffX;
      break;

    case 'n-resize':
      updatedTop = oldCropArea.top + diffY;
      updatedHeight = oldCropArea.height - diffY;
      break;

    case 'se-resize':
      updatedHeight = oldCropArea.height + diffY;
      updatedWidth = oldCropArea.width + diffX;
      break;

    case 'sw-resize':
      updatedLeft = oldCropArea.left + diffX;
      updatedHeight = oldCropArea.height + diffY;
      updatedWidth = oldCropArea.width - diffX;
      break;

    case 's-resize':
      updatedHeight = oldCropArea.height + diffY;
      break;

    case 'e-resize':
      updatedWidth = oldCropArea.width + diffX;
      break;

    case 'w-resize':
      updatedLeft = oldCropArea.left + diffX;
      updatedWidth = oldCropArea.width - diffX;
      break;

    case 'move':
      updatedTop = oldCropArea.top + diffY;
      updatedLeft = oldCropArea.left + diffX;
      break;

    default:
      break;
  }

  const left = clamp(updatedLeft, imgArea.left, (imgArea.width - lastPoint.width + imgArea.left));
  const top = clamp(updatedTop, imgArea.top, (imgArea.height - lastPoint.height + imgArea.top));
  const width = clamp(updatedWidth, 0, imgArea.width);
  const height = clamp(updatedHeight, 0, imgArea.height);

  return {
    left,
    top,
    width,
    height,
  };
};

interface IDrawArea {
  left: number
  top: number
  width: number
  height: number
}

interface ILastPoint {
  posX: number,
  posY: number,
  width: number
  height: number
}

interface ICropState {
  cursorStyle : ICursorStyles,
  resizeCursorStyle: ICursorStyles,
  isResizing: boolean,
  cropDraw: IDrawArea,
  canvasDraw: IDrawArea,
  imageDraw: IDrawArea,
  lastCursorPoint: ILastPoint,
}

const UPDATE_CURSOR = 'UPDATE_CURSOR';
const RESIZE_CROP_AREA = 'RESIZE_CROP_AREA';
const START_RESIZE = 'START_RESIZE';
const END_RESIZE = 'END_RESIZE';
const SET_DRAW_AREAS = 'SET_DRAW_AREAS';

type ICropReducerActions = (
  IUpdateCursor
  | IStartResize
  | IResizeCropArea
  | IEndResize
  | SET_DRAW_AREAS
);

interface IUpdateCursor {
  type: 'UPDATE_CURSOR'
  data: {
    cursorStyle: ICursorStyles
  } 
}

interface IStartResize {
  type: 'START_RESIZE'
  data: {
    resizeCursor: ICursorStyles,
    lastPosX: number,
    lastPosY: number,
    lastHeight: number,
    lastWidth: number,
  }
}

interface IResizeCropArea {
  type: 'RESIZE_CROP_AREA'
  data: {
    newPosX: number
    newPosY: number
    newHeight: number
    newWidth: number
  }
}

interface IEndResize {
  type: 'END_RESIZE'
}

interface SET_DRAW_AREAS {
  type: 'SET_DRAW_AREAS',
  data: {
    canvasDraw: IDrawArea,
    imageDraw: IDrawArea,
    cropDraw: IDrawArea,
  }
}

const defaultCropValues : ICropState = {
  cursorStyle: 'default',
  resizeCursorStyle: 'default',
  isResizing: false,
  cropDraw: {
    left: 0,
    top: 0,
    height: 100,
    width: 100,
  },
  canvasDraw: {
    left: 0,
    top: 0,
    height: 100,
    width: 100,
  },
  imageDraw: {
    left: 0,
    top: 0,
    height: 100,
    width: 100,
  },
  lastCursorPoint: {
    posX: 0,
    posY: 0,
    height: 100,
    width: 100,
  }
};


const cropReducer = (state: ICropState, action: ICropReducerActions) => {
  switch(action.type) {

    case SET_DRAW_AREAS :
      return {...state,
        canvasDraw: action.data.canvasDraw,
        imageDraw: action.data.imageDraw,
        cropDraw: action.data.cropDraw,
      };

    case UPDATE_CURSOR:
      return {...state, cursorStyle: action.data.cursorStyle};

    case START_RESIZE:
      {
      return {...state, 
              cursorStyle: action.data.resizeCursor,
              resizeCursorStyle: action.data.resizeCursor,
              isResizing: true,
              lastCursorPoint: {
                ...state.lastCursorPoint,
                posX: action.data.lastPosX,
                posY: action.data.lastPosY,
                height: action.data.lastHeight,
                width: action.data.lastWidth,
              }
            };
    }
    case RESIZE_CROP_AREA: {

      const newCropValues: IDrawArea = updateCropValues(
        state.cropDraw,
        state.resizeCursorStyle,
        state.lastCursorPoint,
        action.data.newPosX,
        action.data.newPosY,
        state.imageDraw
      );

      return {...state,
        cropDraw: {...state.cropDraw, ...newCropValues},
        lastCursorPoint: {
          ...state.lastCursorPoint,
          posX: action.data.newPosX,
          posY: action.data.newPosY,
          height: newCropValues.height,
          width: newCropValues.width,
        }
      };
    }

    case END_RESIZE: 
      return {...state, isResizing: false};
    
    default:
      console.error(`Action ${action['type']} not registered.`);
      return state;
  }
};

const useCrop = (initialValues = defaultCropValues) => {

  const [state, dispatch] = useReducer(cropReducer, initialValues);

  const setDrawAreas = useCallback((newCrop: IDrawArea, newImgDraw: IDrawArea, newCanvas: IDrawArea) => {
    dispatch({
      type: SET_DRAW_AREAS,
      data: {
        cropDraw: newCrop,
        imageDraw: newImgDraw,
        canvasDraw: newCanvas
      } 
    });
  },[]);

  const startResize = useCallback((newCursorStyle: ICursorStyles, posX: number, posY: number, height: number, width: number) => {
    dispatch({
          type: START_RESIZE,
          data: {
            resizeCursor: newCursorStyle,
            lastPosX: posX,
            lastPosY: posY,
            lastHeight: height,
            lastWidth: width,
          } 
        });
  },[]);

  const resizeCropArea = useCallback(( posX: number, posY: number, height: number, width: number)=>{
    dispatch({
      type: RESIZE_CROP_AREA,
      data:{newPosX: posX, newPosY: posY, newHeight: height, newWidth: width}
    });
  },[]);

  const endResize = useCallback(()=>{
    dispatch({
      type: END_RESIZE
    });
  
  },[]);
  
  return {
    state,
    setDrawAreas,
    startResize,
    resizeCropArea,
    endResize,
  };
};

export type {
  ICursorStyles,
  IDrawArea,
  ICropState,
};

  export {
    updateCursorStyle,
    isLeftMouseButton,
    updateCropValues,
    cropReducer
  };

  export default useCrop;