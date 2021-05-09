import React, {useState, useCallback} from 'react';
import styled, {css} from 'styled-components';
import InputFileButton from '../atoms/InputFileButton';
import DropArea from '../atoms/DropArea';
import CropTool from '../atoms/CropTool';
import { AvatarPlaceholder } from '../../svg';
import Label from '../atoms/Label';

const PHOTO_HEGHT = `150px`;
const PHOTO_WIDTH = `142px`;

const Container = styled.div`
  position: relative;
  width: ${PHOTO_WIDTH};
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
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
 * validate image type and size
 * validateImageMimeType
 * https://product.voxmedia.com/2020/10/23/21520222/building-an-in-browser-image-editor-with-react
 * 
*/

const StyledInputFileButton = styled(InputFileButton)`
  width: 100%;
`;

interface IAvatar {
  title?: string
  innerText?: string
  buttonText?: string
  onAvatarReady?: (imgFile: File) => void
}

const AvatarUploader : React.FC<IAvatar> = ({
  title = 'Photograph',
  innerText = 'Drop Photo',
  buttonText = 'Select File',
  onAvatarReady,
}) => {
  const [avatarImg, setAvatarImg] = useState('');
  const [isCropOpen, setIsCropOpen] = useState(false);

  const handleCrop = useCallback(async (newFileUrl: string) => {
    setAvatarImg(newFileUrl);
    let newFile = await fetch(newFileUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "newAvatar", { type: "image/png" }));
    if(onAvatarReady) {
      onAvatarReady(newFile);
    }
    setIsCropOpen(false);
  },[onAvatarReady]);

  const handleCropClose = useCallback(() => {
    setIsCropOpen(false);
  },[]);

  const handleFileUpload  = useCallback((newFiles: FileList) => {
    console.log('file', newFiles);
    if(newFiles.length === 1) {
      console.log(newFiles[0].name);
      const prevImg = URL.createObjectURL(newFiles[0]);
      console.log(prevImg);
      setAvatarImg(prevImg);
      setIsCropOpen(true);
    } else {
      console.log(newFiles);
      // We need some notice to let the user that can only drop one
      // Maybe after trying to 
    }
  },[]);

  return(
    <Container>
      <Label labelText={title} htmlFor='avatar-upload' />
      <PreviewImageGroup>
        {avatarImg
          ? <PreviewImage src={avatarImg} alt='avatar image' />
          : (
            <NoPhoto>
              <AvatarPlaceholder />
              <PlaceholderText>{innerText}</PlaceholderText>
            </NoPhoto>
            )}
        <DropArea height={PHOTO_HEGHT} dropCallback={handleFileUpload} />
      </PreviewImageGroup>
      <StyledInputFileButton
        id='avatar-upload'
        text={buttonText}
        buttonSize='small'
        accept='image/*'
        callback={handleFileUpload}
      />
      {isCropOpen
        ? <CropTool
            imgUrl={avatarImg}
            onCrop={handleCrop}
            onClose={handleCropClose}
            canvasHeight={490}
            canvasWidth={460}
            cropHeight={360}
            cropWidth={360}
          />
        : null}
    </Container>
  );
};

export default AvatarUploader;