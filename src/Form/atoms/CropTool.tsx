import React, {useState, useRef, useCallback, useEffect} from 'react';
import styled, {css} from 'styled-components';
import ReactDom from 'react-dom';
import Icon, {IconWrapper} from '../../Icons/Icon';
import Button from '../atoms/Button';
import ButtonWithLoading from '../atoms/ButtonWithLoading';

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

/** https://projects.verou.me/css3patterns/# */
const PreviewArea = styled.div<{canvasHeight?: number, canvasWidth?: number}>`
  height: ${({canvasHeight}) => canvasHeight ? `${canvasHeight}px` : `462px`};
  width: ${({canvasWidth}) => canvasWidth ? `${canvasWidth}px` : `485px`};
  border-radius: 5px;
  background-color: hsla(202, 33%, 95%, 0.8);
  background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.8) 35px, rgba(255,255,255,.8) 70px);
`;

const CropArea = styled.div<{cropValues: IDrawArea}>`
  position: absolute;
  border: dashed yellow 2px;
  ${({cropValues}) => css`
    top: ${cropValues.top}px;
    left: ${cropValues.left}px;
    width: ${cropValues.width}px;
    height: ${cropValues.height}px;
  `};
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

// function clamp(value: number, minValue: number, maxValue: number) {
//   return Math.min( Math.max(value, minValue), maxValue);
// }

interface IDimensions {
  height: number
  width: number
}

interface IFocalPoint {
  x: number
  y: number
}

interface ICoordinates {
  inputDimensions: IDimensions
  outputDimensions: IDimensions
  focalPoint: IFocalPoint
  zoom: number 
}

// const defaultDrawValues = {
//   x: 0,
//   y: 0,
//   width: 0,
//   height: 0,
//   unit: 'px',
// };

function drawImgValues(img: HTMLImageElement, canvasHeight: number, canvasWidth: number) {

  const scale = Math.min(
    canvasWidth / img.naturalWidth,
    canvasHeight / img.naturalHeight
  );

  const width = Math.floor(img.naturalWidth * scale);
  const height = Math.floor(img.naturalHeight * scale);
  const top = 0 + Math.floor((canvasHeight - height)/2);
  const left = 0 + Math.floor((canvasWidth - width)/2);

  return {
    left,
    top,
    width,
    height,
  };
}

function initialCropValues(cropHeight: number, cropWidth: number, canvasHeight: number, canvasWidth: number) {

  const width =  Math.min(cropWidth, canvasWidth);
  const height = Math.min(cropHeight, canvasHeight);
  const top = 0 + Math.floor( (canvasHeight/2) - (height/2) );
  const left = 0 + Math.floor( (canvasWidth/2) - (width/2) );

  return {
    left,
    top,
    width,
    height,
  };

}

function getImageType(img: HTMLImageElement) {
  var dataType = img.src.substr(0,20);
  if (dataType.includes('data')){
      return dataType.split('/')[1].split(';')[0];
  }
  return 'image/jpeg';
}

interface IDrawArea {
  left: number
  top: number
  width: number
  height: number
}

interface ICrop {
  title?: string
  cancelBtnTxt?: string
  cropBtnTxt?: string
  scaleX?: number
  scaleY?: number
  enable?: number
  zoomTo?: number
  imgUrl: string
  isResizable?: boolean
  cropHeight?: number
  cropWidth?: number
  canvasHeight: number
  canvasWidth: number
  onCrop?: (newFileUrl: string) => void
  onClose?: () => void
}

const CropTool : React.FC<ICrop> = ({
  title='Crop Image',
  cancelBtnTxt='Cancel',
  cropBtnTxt='Crop & Save',
  cropHeight = 100,
  cropWidth = 100,
  canvasHeight,
  canvasWidth,
  imgUrl,
  onCrop,
  onClose = () => {},
}) => {

  const [cropValues, setCropValues] = useState<IDrawArea>(initialCropValues(cropHeight, cropWidth, canvasHeight, canvasWidth));
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleOnLoad = useCallback(()=> {
    if(!canvasRef || !imgRef) { return; }
    const newImage = imgRef.current;
    if(!newImage) {return; }

    const { left, top, width, height } = drawImgValues(newImage, canvasHeight, canvasWidth);
    const canvas = canvasRef.current;
    console.log('getting values', left, top, width, height);
    if(canvas) {
      const ctx = canvas.getContext("2d");
      // ctx.imageSmoothingEnabled = false; </// not sure if required
      ctx?.drawImage(newImage, left, top, width, height);
    }
  },[canvasHeight, canvasWidth]);

  const handleCrop = useCallback((cropArea: IDrawArea) => {
    setIsLoading(true);

    if(!canvasRef || !canvasRef.current|| !imgRef) { return; }

    const newImage = imgRef.current;
    if(!newImage) {return; }

    const canvas = canvasRef.current;
    if(!canvas) { return; }

    const ctx = canvas.getContext("2d");
    // ctx.imageSmoothingEnabled = false; </// not sure required
    const cropImageData = ctx?.getImageData(cropArea.left, cropArea.top, cropArea.width, cropArea.height);
    if(!cropImageData) {return;}

    const canvasCropped = document.createElement('canvas');
    const cropContext = canvasCropped.getContext('2d');
    canvasCropped.width = cropArea.width;
    canvasCropped.height = cropArea.height;

    cropContext?.putImageData(cropImageData,0,0);
    const newImgUrl = canvasCropped.toDataURL(getImageType(newImage));
    if(onCrop) {
      onCrop(newImgUrl);
    }
    
    setIsLoading(false);
  },[onCrop]);

  useEffect(() => {
    setCropValues(initialCropValues(cropHeight, cropWidth, canvasHeight, canvasWidth));
    handleOnLoad();
  }, [canvasHeight, canvasWidth, cropHeight, cropWidth, handleOnLoad]);

  return(
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
                onClick={() => handleCrop(cropValues)}
              > {cropBtnTxt}
              </ButtonWithLoading>
            </ButtonsGroup>
          </ToolHeader>
          <PreviewArea canvasHeight={canvasHeight} canvasWidth={canvasWidth}>
            <HiddenImage ref={imgRef} src={imgUrl} onLoad={handleOnLoad} />
            <canvas ref={canvasRef} width={`${canvasWidth}px`} height={`${canvasHeight}px`} />
            <CropArea cropValues={cropValues} />
          </PreviewArea>
        </InnerContainer>
      </Container>, document.body)
  );
};

export default CropTool;