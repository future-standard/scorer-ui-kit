import React, { useState, useCallback} from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';
import Icon, { IconWrapper } from '../../Icons/Icon';
import Button from '../atoms/Button';
import ButtonWithLoading from '../atoms/ButtonWithLoading';
import CropArea from '../atoms/CropArea';

// TODO: Add throttle //

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
  onCrop?: (newFileUrl: string) => void
  onClose?: () => void
  onError?: (msg: string) => void
}

const CropTool: React.FC<ICrop> = ({
  title = 'Crop Image',
  cancelBtnTxt = 'Cancel',
  cropBtnTxt = 'Crop & Save',
  isResizable,
  cropHeight,
  cropWidth,
  canvasHeight,
  canvasWidth,
  imgUrl,
  onCrop,
  onClose = () => { },
  onError = () => { }
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [cropFile, setCropFile] = useState('');


  const handleCropAreaUpdate = useCallback((newFileUrl: string) => {
    setCropFile(newFileUrl);
  },[]);

  const handleCrop = useCallback(() => {
    setIsLoading(true);
    if (onCrop) {
      onCrop(cropFile);
    }
    setIsLoading(false);
  }, [cropFile, onCrop]);

  // End of Mouse Crop selection handlers //

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
                onClick={handleCrop}
              > {cropBtnTxt}
              </ButtonWithLoading>
            </ButtonsGroup>
          </ToolHeader>
          <CropArea
            {...{
              isResizable,
              cropHeight,
              cropWidth,
              canvasHeight,
              canvasWidth,
              imgUrl,
              onError,
              }
            }
            onNewArea={handleCropAreaUpdate}
          />
        </InnerContainer>
      </Container>, document.body)
  );
};

export default CropTool;