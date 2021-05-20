import React, { useState } from 'react';
import styled from 'styled-components';
import { CropTool } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from "@storybook/addon-knobs";
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
  decorators: [],
  escapeHTML: false,
};

export const _CropTool = () => {
  const isResizable = boolean('Is Resizable', true);
  const [cropImg, setCropImg] = useState('');
  const [isCropping, setIsCropping] = useState(true);
  const title = text('Title', 'Crop Image');
  const cancelBtnTxt = text('Cancel Button Text', 'Cancel');
  const cropBtnTxt = text('Crop Button Text', `Crop and Save`);
  const canvasHeight = number('Canvas Height', 400);
  const canvasWidth = number('Canvas Width', 450);
  const cropHeight = number('Crop Height', 300);
  const cropWidth = number('Crop Width', 300);
  const aspectRatio = number('Aspect Ratio', 0);
  const errorValue = action('Error');

  const onCrop = (newImgUrl: string) => {
    setCropImg(newImgUrl);
    setIsCropping(false);
  };

  const onClose = () => {
    setIsCropping(false);
  }
  const onError = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };

  return (
    <Container>
      {isCropping ? <CropTool // this key is to force the re-render in storybook
        key={`${isResizable} - ${canvasHeight} - ${canvasWidth} - ${cropHeight} - ${cropWidth} - ${aspectRatio}`}
        imgUrl={photo}
        {...{
          title,
          onCrop,
          onClose,
          cancelBtnTxt,
          cropBtnTxt,
          isResizable,
          canvasHeight,
          canvasWidth,
          cropHeight,
          cropWidth,
          onError,
          aspectRatio,
        }}
      />
        : null}
      <NewImageArea>
        <h3>Cropped Area</h3>
        <CropResult src={cropImg} />
      </NewImageArea>
    </Container>
  )
};