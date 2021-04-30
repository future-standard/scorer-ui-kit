import React, {useState} from 'react';
import styled from 'styled-components';
import { CropTool } from 'scorer-ui-kit';
import { action } from '@storybook/addon-actions';
import { text} from "@storybook/addon-knobs";
import photo from '../../assets/placeholder.jpg';


const Container = styled.div`
  max-width: 500px;
`;

const CropResult = styled.img`
`;

const NewImageArea = styled.div``;

export default {
  title: 'Form/File Management',
  component: CropTool,
  decorators:[]
};

export const _CropTool = () => {
  const [cropImg, setCropImg] = useState('');
  const [isCroping, setIsCropping] = useState(true);
  const textVal = text('Title','Crop Image');
  const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');
  

  const onCrop = (newImgUrl: string) => {
    console.log('Crop');
    setCropImg(newImgUrl);
    setIsCropping(false);
    
  };

  return(
    <Container>
      {isCroping ? <CropTool
        title={textVal}
        onCrop={onCrop}
        imgUrl={photo}
        canvasHeight={462}
        canvasWidth={485}
      />
      : null}
      <NewImageArea>
        <h3>Cropped Area</h3>
        <CropResult src={cropImg}/>
      </NewImageArea>

    </Container>
  )
};