import React, {useState} from 'react';
import styled from 'styled-components';
import { CropTool } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text, boolean, number} from "@storybook/addon-knobs";
import photo from '../../assets/placeholder.jpg';


const Container = styled.div`
    margin: 20px;
`;

const CropResult = styled.img`
`;

const NewImageArea = styled.div``;

export default {
  title: 'Form/File Management',
  component: CropTool,
  decorators:[],
  escapeHTML: false,
};

export const _CropTool = () => {
  const [cropImg, setCropImg] = useState('');
  const [isCroping, setIsCropping] = useState(true);
  const textVal = text('Title','Crop Image');
  const cancelText = text('Cancel Button Text', 'Cancel');
  const cropText = text('Crop Button Text', `Crop and Save`);
  const resizableCropArea = boolean('Resizable', false);
  const heightCanvasVal = number('Canvas Height', 450);
  const widthCanvasVal = number('Canvas Width', 500);
  const initalCropHeight = number('Crop Height', 150);
  const initalCropWidth = number('Crop Width', 150);
  const errorValue = action ('Error');

  const onCrop = (newImgUrl: string) => {
    console.log('Crop');
    setCropImg(newImgUrl);
    setIsCropping(false);
  };

  const handleClose = () => {
    setIsCropping(false);
  }
  const errorCallback = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };

  return(
    <Container>
      {isCroping ? <CropTool
        title={textVal}
        onCrop={onCrop}
        onClose={handleClose}
        cancelBtnTxt={cancelText}
        cropBtnTxt={cropText}
        isResizable={resizableCropArea}
        imgUrl={photo}
        canvasHeight={heightCanvasVal}
        canvasWidth={widthCanvasVal}
        cropHeight={initalCropHeight}
        cropWidth={initalCropWidth}
        onError={errorCallback}
      />
      : null}
      <NewImageArea>
        <h3>Cropped Area</h3>
        <CropResult src={cropImg}/>
      </NewImageArea>

    </Container>
  )
};