import React, {useCallback, VideoHTMLAttributes} from 'react';
import styled, { css } from 'styled-components';
import MediaBox  from '../../Misc/atoms/MediaBox';
import  { useModal } from '../../hooks/useModal';
import { IMediaType } from '../..';

type VideoAspects = '4:3' | '16:9';

const Container = styled.div<{ hoverZoom?: boolean, aspect?: VideoAspects, mediaUrl?: string }>`
  position: relative;
  height: inherit;
  background: grey;
  border-radius: 3px;
  overflow: hidden;
  width: 55px;
  height: auto;
  opacity: 0.65;
  margin-right: 10px;

  &::after {
    content: '';
    display: block;
    padding-bottom: 75%;
    ${({aspect}) => aspect === '16:9' && css`
      padding-left: 56.25%;
    `}
  }

  ${({theme}) => theme && css`
    transition:
      opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut},
      transform ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeOut};
  `}

  &:hover {
    ${({mediaUrl}) => mediaUrl && css`
      cursor: pointer;  
    `};

    ${({theme, hoverZoom}) => theme && hoverZoom && css`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }

`;
const Image = styled.div<{ image?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${p => p.image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${p => p.image ? 'block' : 'none'};
`;

interface IProps {
  image?: string
  hoverZoom?: boolean,
  aspect?: VideoAspects
  mediaUrl?: string
  mediaType?: IMediaType
}

// Image
// No Image Placeholder

// default options for media box
const videoDefaultOptions : VideoHTMLAttributes<HTMLVideoElement> = {controls: true};

const TableRowThumbnail : React.FC<IProps> = ({hoverZoom = true, image, mediaUrl, mediaType }) => {

  const {createModal} = useModal();

  const handleModal = useCallback(() => {
    if(mediaUrl && mediaType) {
      createModal({
        padding:false,
        width:'1080px',
        customComponent: <MediaBox src={mediaUrl} mediaType={mediaType} videoOptions={videoDefaultOptions} />
      });
    }
  },[createModal, mediaType, mediaUrl]);

  return (
    <Container {...{hoverZoom}} mediaUrl={mediaUrl} aspect='16:9' onClick={handleModal}>
      <Image {...{image}} />
    </Container>
  );
};

export default TableRowThumbnail;
