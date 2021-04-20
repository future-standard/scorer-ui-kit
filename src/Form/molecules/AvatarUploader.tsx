import React from 'react';
import styled from 'styled-components';
import InputFileButton from '../atoms/InputFileButton';
import DropArea from '../atoms/DropArea';

const Container = styled.div`
  position: relative;
`;
const ImageDisplay = styled.div``;

const BackgroundGroup = styled.div`
  border-radius: 5px;
  background-color: hsl(201, 33%, 92%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AvatarUploader : React.FC = () => {

  // cosnt handleCrop = () => {
  // }

  const handleFileUpload  = () => {
  };

  return(
    <Container>
      <ImageDisplay />
      <InputFileButton text='Select File' callback={handleFileUpload} />
      <DropArea dropCallback={handleFileUpload} />
    </Container>
  );
};

export default AvatarUploader;