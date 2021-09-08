import React, { useState, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import ReactDom from 'react-dom';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Button from '../atoms/Button';
import ButtonWithLoading from '../atoms/ButtonWithLoading';
import {
  ICursorStyles,
  IDrawArea,
  ISelectedArea,
  updateCursorStyle,
  isLeftMouseButton,
  updateCropValues,
  drawImgValues,
  initialCropValues,
  updateCropWithAspect,
} from '../../helpers/cropToolHelpers';
import { getImageType } from '../../helpers';
import CropArea from '../atoms/CropArea';

// TODO: Add throttle  or window.requestAnimationFrame()//
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
  z-index: 99;
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

const PreviewArea = styled.div<{ canvasHeight?: number, canvasWidth?: number }>`
  position: relative;
  overflow: hidden;
  height: ${({ canvasHeight }) => canvasHeight ? `${canvasHeight}px` : `462px`};
  width: ${({ canvasWidth }) => canvasWidth ? `${canvasWidth}px` : `485px`};
  border-radius: 5px;
  background-color: hsla(202, 33%, 95%, 0.8);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.8) 35px, rgba(255,255,255,.8) 70px);
`;

const HiddenImage = styled.img`
  display: none;
`;

const SelectedArea = styled.div<{ cropLeft: number, cropTop: number, cropWidth: number, cropHeight: number }>`
  position: absolute;
  border: dashed 1px hsl(0, 0%, 24%);
  box-shadow: 0 0 0 9999em hsla(0, 0%, 32%, 0.75);
  ${({ cropLeft, cropTop, cropWidth, cropHeight }) => css`
    top: ${cropTop}px;
    left: ${cropLeft}px;
    width: ${cropWidth}px;
    height: ${cropHeight}px;
  `};
  cursor: move;
`;

const viewDimensions: ISelectedArea = {
  cropLeft: 0,
  cropTop: 0,
  cropWidth: 350,
  cropHeight: 300,
  mouseStartX: 0,
  mouseStartY: 0,
  imgLeft: 0,
  imgTop: 0,
  imgWidth: 400,
  imgHeight: 400,
  cursorStart: 'default',
  isResizing: false,
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
  aspectRatio?: number
  onCrop?: (newFileUrl: string, fileType: string) => void
  onClose?: () => void
  onError?: (msg: string) => void
}

const CropTool: React.FC<ICrop> = ({
  title = 'Crop Image',
  cancelBtnTxt = 'Cancel',
  cropBtnTxt = 'Crop & Save',
  isResizable = true,
  cropHeight = 300,
  cropWidth = 350,
  canvasHeight = 400,
  canvasWidth = 450,
  aspectRatio,
  imgUrl,
  onCrop,
  onClose = () => { },
  onError = () => { }
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [loadDimensions, setLoadDimensions] = useState(viewDimensions);
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
    const newCrop: IDrawArea = initialCropValues(
      cropWidth,
      cropHeight,
      canvasWidth,
      canvasHeight,
      newImgDraw.width,
      newImgDraw.height,
      aspectRatio
    );
    // triggers a render to repaint canvas
    setLoadDimensions((prevState) =>
    ({
      ...prevState,
      cropLeft: newCrop.left,
      cropTop: newCrop.top,
      cropWidth: newCrop.width,
      cropHeight: newCrop.height,
      imgLeft: newImgDraw.left,
      imgTop: newImgDraw.top,
      imgWidth: newImgDraw.width,
      imgHeight: newImgDraw.height,
    })
    );

    viewDimensions.cropLeft = newCrop.left;
    viewDimensions.cropTop = newCrop.top;
    viewDimensions.cropWidth = newCrop.width;
    viewDimensions.cropHeight = newCrop.height;
    viewDimensions.imgLeft = newImgDraw.left;
    viewDimensions.imgTop = newImgDraw.top;
    viewDimensions.imgWidth = newImgDraw.width;
    viewDimensions.imgHeight = newImgDraw.height;
    viewDimensions.cursorStart = 'default';
    viewDimensions.isResizing = false;
    setIsLoading(false);
  }, [aspectRatio, canvasHeight, canvasWidth, cropHeight, cropWidth, onError]);

  // Mouse handlers //
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
    const imgType = getImageType(newImage);
    const newImgUrl = canvasCropped.toDataURL(imgType);
    if (onCrop) {
      onCrop(newImgUrl, imgType);
    }
  }, [onCrop]);

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

    viewDimensions.mouseStartX = posX;
    viewDimensions.mouseStartY = posY;
    viewDimensions.cursorStart = newCursorStyle;
    viewDimensions.isResizing = true;
  }, [isResizable]);

  const handleMouseUp = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!viewDimensions.isResizing) { return; }
    viewDimensions.isResizing = false;
  }, []);

  const updateSelect = useCallback((left, top, width, height) => {
    if (!cropRef.current) { return; }
    cropRef.current.style.left = `${left}px`;
    cropRef.current.style.top = `${top}px`;
    cropRef.current.style.width = `${width}px`;
    cropRef.current.style.height = `${height}px`;

  }, []);

  const handleMouseMove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!cropRef) { return; }
    if (!viewDimensions.isResizing) { return; }

    const rect = cropRef.current?.getBoundingClientRect();
    if (!rect) { return; }

    const [posX, posY] = [e.clientX, e.clientY];
    const newDimensions = aspectRatio
      ? updateCropWithAspect(viewDimensions, posX, posY, aspectRatio)
      : updateCropValues(viewDimensions, posX, posY);

    if (!newDimensions.isUpdateRequired) { return; }

    viewDimensions.cropTop = newDimensions.top;
    viewDimensions.cropLeft = newDimensions.left;
    viewDimensions.cropWidth = newDimensions.width;
    viewDimensions.cropHeight = newDimensions.height;
    viewDimensions.mouseStartX = posX;
    viewDimensions.mouseStartY = posY;

    updateSelect(viewDimensions.cropLeft,
      viewDimensions.cropTop,
      viewDimensions.cropWidth,
      viewDimensions.cropHeight);

  }, [aspectRatio, updateSelect]);

  const handleOnMouseLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!viewDimensions.isResizing) { return; }
    viewDimensions.isResizing = false;
  }, []);
  //End of Mouse handlers//

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
                onClick={() => handleCrop({
                  left: viewDimensions.cropLeft,
                  top: viewDimensions.cropTop,
                  width: viewDimensions.cropWidth,
                  height: viewDimensions.cropHeight
                })}
              > {cropBtnTxt}
              </ButtonWithLoading>
            </ButtonsGroup>
          </ToolHeader>
          <PreviewArea
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleOnMouseLeave}
          >
            <HiddenImage ref={imgRef} src={imgUrl} onLoad={drawImgOnCanvas} crossOrigin='anonymous' />
            <canvas
              ref={canvasRef}
              width={`${canvasWidth}px`}
              height={`${canvasHeight}px`}
            />
            <SelectedArea
              ref={cropRef}
              onMouseDown={handleMouseDown}
              {...{
                cropLeft: viewDimensions.cropLeft,
                cropTop: viewDimensions.cropTop,
                cropWidth: viewDimensions.cropWidth,
                cropHeight: viewDimensions.cropHeight,
                isResizing: viewDimensions.isResizing,
              }}
            >
              <CropArea
                {...{ isResizable }}
                hasAspectRatio={aspectRatio ? true : false}
              />
            </SelectedArea>
          </PreviewArea>
        </InnerContainer>
      </Container>, document.body)
  );
};

export default CropTool;