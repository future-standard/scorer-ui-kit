import React, { useState, useRef, useCallback, Fragment } from 'react';
import styled, { css } from 'styled-components';
import ReactDom from 'react-dom';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Button from '../atoms/Button';
import ButtonWithLoading from '../atoms/ButtonWithLoading';
import useCrop, { ICursorStyles, IDrawArea, updateCursorStyle, isLeftMouseButton } from '../../hooks/useCrop';
import { getImageType } from '../../helpers';
// TODO: Add throttle //

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(202, 33%, 95%, 0.51);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  font-family: ${({ theme }) => theme.fontFamily.ui};
  z-index: 999;
`;

const InnerContainer = styled.div`
  position: relative;
  min-width: 460px; 
  z-index: 99;
`;

const HiddenImage = styled.img`
  display: none;
`;

/** background pattern https://projects.verou.me/css3patterns/# */
const PreviewArea = styled.div<{ canvasHeight?: number, canvasWidth?: number }>`
  position: relative;
  overflow: hidden;
  height: ${({ canvasHeight }) => canvasHeight ? `${canvasHeight}px` : `462px`};
  width: ${({ canvasWidth }) => canvasWidth ? `${canvasWidth}px` : `485px`};
  border-radius: 5px;
  background-color: hsla(202, 33%, 95%, 0.8);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.8) 35px, rgba(255,255,255,.8) 70px);
`;

const CropArea = styled.div<{ cropValues: IDrawArea, cursorStyle: ICursorStyles }>`
  position: absolute;
  border: dashed 1px hsl(0, 0%, 24%);
  box-shadow: 0 0 0 9999em hsla(0, 0%, 32%, 0.75);
  ${({ cropValues }) => css`
    top: ${cropValues.top}px;
    left: ${cropValues.left}px;
    width: ${cropValues.width}px;
    height: ${cropValues.height}px;
  `};
  cursor: ${({ cursorStyle }) => cursorStyle};
`;

const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 17px;
`;

const TextGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: hsl(210, 6%, 47%);
  ${IconWrapper} {
    display: flex;
    align-items: center;
    margin-right: 14px;
  }
`;

const ButtonsGroup = styled.div`
  button + button {
    margin-left: 10px;
  }
`;

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
  border: solid 1px hsl(0, 1%, 28%);
  background-color: hsl(0, 0%, 100%);
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
    left: -5px;
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
  top: 50% -5px;
  left: -5px;
  ${({ isResizable }) => isResizable && css`
    cursor: w-resize;
  `};
`;

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

const initialCropValues = (
  cropWidth: number,
  cropHeight: number,
  canvasWidth: number,
  canvasHeight: number,
  imgWidth: number,
  imgHeight: number,
) => {

  const width = Math.min(cropWidth, canvasWidth, imgWidth);
  const height = Math.min(cropHeight, canvasHeight, imgHeight);
  const top = 0 + Math.floor((canvasHeight / 2) - (height / 2));
  const left = 0 + Math.floor((canvasWidth / 2) - (width / 2));

  return {
    left,
    top,
    width,
    height,
  };
};

interface ICrop {
  title?: string
  cancelBtnTxt?: string
  cropBtnTxt?: string
  imgUrl: string
  isResizable?: boolean
  cropHeight?: number
  cropWidth?: number
  canvasHeight: number
  canvasWidth: number
  onCrop?: (newFileUrl: string) => void
  onClose?: () => void
  onError?: (msg: string) => void
}

const CropTool: React.FC<ICrop> = ({
  title = 'Crop Image',
  cancelBtnTxt = 'Cancel',
  cropBtnTxt = 'Crop & Save',
  isResizable = true,
  cropHeight = 100,
  cropWidth = 100,
  canvasHeight,
  canvasWidth,
  imgUrl,
  onCrop,
  onClose = () => { },
  onError = () => { }
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const {
    state: cropState,
    setDrawAreas,
    startResize,
    resizeCropArea,
    endResize,
  } = useCrop();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cropRef = useRef<HTMLDivElement | null>(null);

  const drawImgOnCanvas = useCallback(() => {
    if (!canvasRef || !imgRef) { return; }
    const newImage = imgRef.current;
    if (!newImage) {
      onError('error loading image');
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      onError('error loading canvas');
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      onError('error drawing image');
      return;
    }

    const newImgDraw = drawImgValues(newImage, canvasHeight, canvasWidth);
    ctx?.drawImage(newImage, newImgDraw.left, newImgDraw.top, newImgDraw.width, newImgDraw.height);
    const newCrop: IDrawArea = initialCropValues(cropWidth, cropHeight, canvasWidth, canvasHeight, newImgDraw.width, newImgDraw.height);
    const newCanvas: IDrawArea = { left: 0, top: 0, width: canvas.width, height: canvas.height };
    setDrawAreas(newCrop, newImgDraw, newCanvas);
  }, [canvasHeight, canvasWidth, cropHeight, cropWidth, onError, setDrawAreas]);

  const handleCrop = useCallback(async (cropArea: IDrawArea) => {
    setIsLoading(true);

    if (!canvasRef || !canvasRef.current || !imgRef) { return; }

    const newImage = imgRef.current;
    if (!newImage) { return; }

    const canvas = canvasRef.current;
    if (!canvas) { return; }

    const ctx = canvas.getContext("2d");
    // ctx.imageSmoothingEnabled = false; </// not sure required
    const cropImageData = ctx?.getImageData(cropArea.left, cropArea.top, cropArea.width, cropArea.height);
    if (!cropImageData) { return; }

    const canvasCropped = document.createElement('canvas');
    const cropContext = canvasCropped.getContext('2d');
    canvasCropped.width = cropArea.width;
    canvasCropped.height = cropArea.height;

    cropContext?.putImageData(cropImageData, 0, 0);
    const newImgUrl = canvasCropped.toDataURL(getImageType(newImage));
    if (onCrop) {
      onCrop(newImgUrl);
    }

    setIsLoading(false);
  }, [onCrop]);

  const handleMouseMove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cropRef) { return; }
    if (!cropState.isResizing) { return; }

    const rect = cropRef.current?.getBoundingClientRect();
    if (!rect) { return; }
    const { width, height } = rect;
    const [posX, posY] = [e.clientX, e.clientY];
    resizeCropArea(posX, posY, height, width);
  }, [cropState.isResizing, resizeCropArea]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cropRef) { return; }
    if (!isLeftMouseButton(e)) { return; }

    const rect = cropRef.current?.getBoundingClientRect();
    if (!rect) { return; }
    const { left, top, width, height } = rect;
    const [posX, posY] = [e.clientX, e.clientY];
    let newCursorStyle: ICursorStyles;
    if (!isResizable) {
      newCursorStyle = 'move';
    } else {
      newCursorStyle = updateCursorStyle(left, top, width, height, posX, posY);
    }
    startResize(newCursorStyle, posX, posY, height, width);
  }, [isResizable, startResize]);


  const handleMouseUp = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    endResize();
  }, [endResize]);

  // End of Mouse Crop selection handlers //

  return (
    ReactDom.createPortal(
      <Container>
        <InnerContainer>
          <ToolHeader>
            <TextGroup>
              <Icon icon='Crop' size={20} color='dimmed' />
              {title}
            </TextGroup>
            <ButtonsGroup>
              <Button
                design='secondary'
                size='small'
                onClick={onClose}
              >
                {cancelBtnTxt}
              </Button>
              <ButtonWithLoading
                loading={isLoading}
                size='small'
                onClick={() => handleCrop(cropState.cropDraw)}
              > {cropBtnTxt}
              </ButtonWithLoading>
            </ButtonsGroup>
          </ToolHeader>
          <PreviewArea
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <HiddenImage ref={imgRef} src={imgUrl} onLoad={drawImgOnCanvas} />
            <canvas
              ref={canvasRef}
              width={`${canvasWidth}px`}
              height={`${canvasHeight}px`}
            />
            <CropArea
              ref={cropRef}
              cropValues={cropState.cropDraw}
              cursorStyle='move'
              onMouseDown={handleMouseDown}
            >
              {isResizable ? (
                <Fragment>
                  {/* This lines are just for cursor css */}
                  <TopLine />
                  <RightLine />
                  <BottomLine />
                  <LeftLine />
                </Fragment>)
                : null}
              <PointNW {...{ isResizable }} />
              <PointN {...{ isResizable }} />
              <PointNE {...{ isResizable }} />
              <PointE {...{ isResizable }} />
              <PointSE {...{ isResizable }} />
              <PointS {...{ isResizable }} />
              <PointSW {...{ isResizable }} />
              <PointW {...{ isResizable }} />
            </CropArea>
          </PreviewArea>
        </InnerContainer>
      </Container>, document.body)
  );
};

export default CropTool;