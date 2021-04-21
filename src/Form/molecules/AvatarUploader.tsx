import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import InputFileButton from '../atoms/InputFileButton';
import DropArea from '../atoms/DropArea';
import { AvatarPlaceholder } from '../../svg';
import Label from '../atoms/Label';


const Container = styled.div`
  position: relative;
  width: 110px;
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
`;

const PreviewImageGroup = styled.div`
  position: relative;
  margin-bottom: 17px;
`;

const PhotoContainerStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: hsl(0, 0%, 90%);
`; 
const PreviewImage = styled.img`
  ${PhotoContainerStyle}
`;

const PlaceholderText = styled.div`
  color: hsl(207, 5%, 57%);
  font-size: 14px;
`;

const NoPhoto = styled.div`
  ${PhotoContainerStyle}
  padding-top: 15px;
  ${PlaceholderText} {
    margin-top: 18px;
  }
`;

/**
 * TODO Free memory for  URL.createObjectURL(); 
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
 * 
*/

const StyledInputFileButton = styled(InputFileButton)`
  width: 100%;
`;

const AvatarUploader : React.FC = () => {
  const [avatarImg, setAvatarImg] = useState('');

  // cosnt handleCrop = () => {
  // }

  const handleFileUpload  = (newFiles: FileList) => {
    console.log('file', newFiles);
    if(newFiles.length === 1) {
      console.log(newFiles[0].name);
      const prevImg = URL.createObjectURL(newFiles[0]);
      console.log(prevImg);
      setAvatarImg(prevImg);
    } else {
      console.log(newFiles);
      // We need some notice to let the user that can only drop one
      // Maybe after trying to 
    }
  };

  return(
    <Container>
      <Label labelText='Photograph' htmlFor='avatar-upload' />
      <PreviewImageGroup>
        {avatarImg
          ? <PreviewImage src={avatarImg} alt='avatar image' />
          : (
            <NoPhoto>
              <AvatarPlaceholder />
              <PlaceholderText>Drop Photo</PlaceholderText>
            </NoPhoto>
            )}
        <DropArea height='150px' dropCallback={handleFileUpload} />
      </PreviewImageGroup>
      <StyledInputFileButton
        id='avatar-upload'
        text='Select File'
        buttonSize='small'
        accept='image/*'
        callback={handleFileUpload}
      />
    </Container>
  );
};

export default AvatarUploader;