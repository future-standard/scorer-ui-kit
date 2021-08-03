import React, { useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import InputFileButton from '../atoms/InputFileButton';
import Button from '../atoms/Button';
import DropArea from '../atoms/DropArea';
import CropTool from '../molecules/CropTool';
import { AvatarPlaceholder } from '../../svg';
import Label from '../atoms/Label';
import { isValidImage } from '../../helpers';

/** TODO update to useReduce for better state  management*/

const CROP_HEIGHT_AREA = 500;
const CROP_WIDTH_AREA = 475;
const CANVAS_HEIGHT = 490;
const CANVAS_WIDTH = 460;

// 0.95
const ratio = Math.round((CROP_WIDTH_AREA / CROP_HEIGHT_AREA) * 100) / 100;

const PHOTO_HEIGHT = `150px`;
const PHOTO_WIDTH = `142px`;


const Container = styled.div`
  position: relative;
  width: ${PHOTO_WIDTH};
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`;

const PreviewImageGroup = styled.div`
  position: relative;
  margin-bottom: 17px;
  height: ${PHOTO_HEIGHT};
  width: ${PHOTO_WIDTH};
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
  uploaderTitle?: string
  photoText?: string
  buttonText?: string
  buttonTextReplace?: string
  cropToolTitle?: string
  cropToolCancelTxt?: string
  cropToolConfirmTxt?: string
  uploaderCropText?: string
  defaultImg?: string
  hasCrop?: boolean
  onAvatarUpdate?: (imgFile: File) => void
  onError?: (msg: string) => void
}

const AvatarUploader: React.FC<IAvatar> = ({
  uploaderTitle = 'Photograph',
  photoText = 'Drop Photo',
  buttonText = 'Select File',
  buttonTextReplace = 'Replace Photo',
  uploaderCropText = 'Crop Image',
  cropToolTitle,
  cropToolCancelTxt,
  cropToolConfirmTxt,
  defaultImg,
  hasCrop = true,
  onAvatarUpdate = () => { },
  onError = () => { },
}) => {

  const [avatarImg, setAvatarImg] = useState(defaultImg);
  const [cropImg, setCropImg] = useState('');
  const [isCropOpen, setIsCropOpen] = useState(false);

  const handleCrop = useCallback(async (newFileUrl: string, fileType: string) => {
    setAvatarImg(newFileUrl);
    let newFile = await fetch(
      newFileUrl).then(r => r.blob()).then(blobFile => new File([blobFile], "newAvatar", { type: fileType })
      );

    onAvatarUpdate(newFile);

    setIsCropOpen(false);
  }, [onAvatarUpdate]);

  const handleCropClose = useCallback(() => {
    setIsCropOpen(false);
    setCropImg('');
    URL.revokeObjectURL(cropImg);
  }, [cropImg]);

  const handleFileUpload = useCallback((newFiles: FileList) => {
    if (newFiles.length === 1) {
      if (!isValidImage(newFiles[0])) {
        onError('Please upload only jpeg and png file');
        return;
      }
      const prevImg = URL.createObjectURL(newFiles[0]);

      if (hasCrop) {
        setCropImg(prevImg);
        setIsCropOpen(true);
      } else {
        onAvatarUpdate(newFiles[0]);
        setAvatarImg(prevImg);
      }

    } else {
      onError('Drop only one file');
    }
  }, [onError, hasCrop]);

  const handleEdit = useCallback((fileUrl: string) => {
    setCropImg(fileUrl);
    setIsCropOpen(true);
  }, []);

  useEffect(() => {
    setAvatarImg(defaultImg);
    return () => {
      setAvatarImg('');
    }
  }, [defaultImg])

  const renderButton = useCallback(() => {
    if ((defaultImg && (!hasCrop)) || !defaultImg) {
      return (
        <StyledInputFileButton
          id='avatar-upload'
          text={avatarImg ? buttonTextReplace : buttonText}
          buttonSize='small'
          accept='image/*'
          inputCallback={handleFileUpload}
        />
      )
    }
    return <Button size='small' onClick={() => handleEdit(defaultImg)}>{uploaderCropText}</Button>

  }, [defaultImg, avatarImg, hasCrop]);

  return (
    <Container>
      <Label labelText={uploaderTitle} htmlFor='avatar-upload' />
      <PreviewImageGroup>
        {avatarImg
          ? <PreviewImage src={avatarImg} alt='avatar image' />
          : (
            <NoPhoto>
              <AvatarPlaceholder />
              <PlaceholderText>{photoText}</PlaceholderText>
            </NoPhoto>
          )}
        {((defaultImg && (!hasCrop)) || !defaultImg) && <DropArea height={PHOTO_HEIGHT} dropCallback={handleFileUpload} />}
      </PreviewImageGroup>
      {renderButton()}
      {isCropOpen && hasCrop
        ? <CropTool
          imgUrl={cropImg}
          onCrop={handleCrop}
          onClose={handleCropClose}
          onError={onError}
          canvasHeight={CANVAS_HEIGHT}
          canvasWidth={CANVAS_WIDTH}
          cropHeight={CROP_WIDTH_AREA}
          cropWidth={CROP_HEIGHT_AREA}
          aspectRatio={ratio}
          title={cropToolTitle}
          cancelBtnTxt={cropToolCancelTxt}
          cropBtnTxt ={cropToolConfirmTxt}
          isResizable
        />
        : null}
    </Container>
  );
};

export default AvatarUploader;