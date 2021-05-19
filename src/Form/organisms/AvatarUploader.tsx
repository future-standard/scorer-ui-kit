import React, {useState, useCallback} from 'react';
import styled, {css} from 'styled-components';
import InputFileButton from '../atoms/InputFileButton';
import DropArea from '../atoms/DropArea';
import CropTool from '../molecules/CropTool';
import { AvatarPlaceholder } from '../../svg';
import Label from '../atoms/Label';
import { isValidImage } from '../../helpers';

/** TODO update to useReduce */

const PREVIEW_HEIGHT_AREA = 150;
const PREVIEW_WIDTH_AREA = 142;

const ratio =  Math.round((PREVIEW_WIDTH_AREA / PREVIEW_HEIGHT_AREA) * 100) / 100;

const PHOTO_HEIGHT = `${PREVIEW_HEIGHT_AREA}px`;
const PHOTO_WIDTH = `${PREVIEW_WIDTH_AREA}px`;


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

const StyledInputFileButton = styled(InputFileButton)`
  width: 100%;
`;

interface IAvatar {
  title?: string
  photoText?: string
  buttonText?: string
  buttonTextReplace?: string
  onAvatarUpdate?: (imgFile: File) => void
  onError?: (msg: string) => void
}

const AvatarUploader : React.FC<IAvatar> = ({
  title = 'Photograph',
  photoText = 'Drop Photo',
  buttonText = 'Select File',
  buttonTextReplace = 'Replace Photo',
  onAvatarUpdate,
  onError = () => {},
}) => {
  const [avatarImg, setAvatarImg] = useState('');
  const [cropImg, setCropImg] = useState('');
  const [isCropOpen, setIsCropOpen] = useState(false);

  const handleCrop = useCallback(async (newFileUrl: string, fileType: string) => {
    setAvatarImg(newFileUrl);
    let newFile = await fetch(
      newFileUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "newAvatar", { type: fileType })
      );
    if(onAvatarUpdate) {
      onAvatarUpdate(newFile);
    }
    setIsCropOpen(false);
  },[onAvatarUpdate]);

  const handleCropClose = useCallback(() => {
    setIsCropOpen(false);
    URL.revokeObjectURL(cropImg);
  },[cropImg]);

  const handleFileUpload  = useCallback((newFiles: FileList) => {

    if(newFiles.length === 1) {
      if(!isValidImage(newFiles[0])){ 
        onError('Please upload only jpeg and png file');
        return;
      }
      const prevImg = URL.createObjectURL(newFiles[0]);

      setCropImg(prevImg);
      setIsCropOpen(true);
    } else {
      onError('Drop only one file');
    }
  },[onError]);

  return(
    <Container>
      <Label labelText={title} htmlFor='avatar-upload' />
      <PreviewImageGroup>
        {avatarImg
          ? <PreviewImage src={avatarImg} alt='avatar image' />
          : (
            <NoPhoto>
              <AvatarPlaceholder />
              <PlaceholderText>{photoText}</PlaceholderText>
            </NoPhoto>
            )}
        <DropArea height={PHOTO_HEIGHT} dropCallback={handleFileUpload} />
      </PreviewImageGroup>
      <StyledInputFileButton
        id='avatar-upload'
        text={avatarImg ? buttonTextReplace : buttonText}
        buttonSize='small'
        accept='image/*'
        inputCallback={handleFileUpload}
      />
      {isCropOpen
        ? <CropTool
            imgUrl={cropImg}
            onCrop={handleCrop}
            onClose={handleCropClose}
            onError={onError}
            canvasHeight={490}
            canvasWidth={460}
            cropHeight={PREVIEW_WIDTH_AREA}
            cropWidth={PREVIEW_HEIGHT_AREA}
            aspectRatio={ratio}
            isResizable
          />
        : null}
    </Container>
  );
};

export default AvatarUploader;