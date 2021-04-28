import React from 'react';
import styled from 'styled-components';
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

const BaseImage = styled.img``;

const PreviewArea = styled.div<{canvasHeight?: string, canvasWidth?: string}>`
  height: ${({canvasHeight}) => canvasHeight ? canvasHeight : `462px`};
  width: ${({canvasWidth}) => canvasWidth ? canvasWidth : `485px`};
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
`;

const CropArea = styled.div`
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
  saveBtnTxt?: string
  isLoading?: boolean
  scaleX?: number
  scaleY?: number
  enable?: number
  zoomTo?: number
  imgUrl?: string
  canvasHeight?: string
  canvasWidth?: string
  onCrop?: () => void
}

const CropTool : React.FC<ICrop> = ({
  title='Crop Image',
  cancelBtnTxt='Cancel',
  saveBtnTxt='Crop & Save',
  isLoading = false,
  canvasHeight,
  canvasWidth,
}) => {

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
              <Button design='secondary' size='small'>{cancelBtnTxt}</Button>
              <ButtonWithLoading loading={isLoading} size='small'>{saveBtnTxt}</ButtonWithLoading>
            </ButtonsGroup>
          </ToolHeader>
          <PreviewArea canvasHeight={canvasHeight} canvasWidth={canvasWidth}>
            <BaseImage />
            <CropArea />
          </PreviewArea>
        </InnerContainer>
      </Container>, document.body)
  );
};

export default CropTool;