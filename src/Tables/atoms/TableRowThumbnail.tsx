import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useMediaModal } from '../../hooks/useMediaModal';
import { IMediaType } from '../..';
import Icon, { IconWrapper } from '../../Icons/Icon';

type VideoAspects = '4:3' | '16:9';

const Container = styled.div<{ hoverZoom?: boolean, aspect?: VideoAspects, mediaUrl?: string}>`
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
    ${({ aspect }) => aspect === '16:9' && css`
      padding-left: 56.25%;
    `}
  }

  ${({ theme }) => theme && css`
    transition:
      opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut},
      transform ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeOut};
  `}

  &:hover {
    ${({ mediaUrl }) => mediaUrl && css`
      cursor: pointer;
    `};

    ${({ theme, hoverZoom }) => theme && hoverZoom && css`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }

`;
const Image = styled.img<{ showImage: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  display: ${({showImage})=>showImage===true ? 'block': 'none'};
`;

const PlayableDrop = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: hsla(0, 0%, 0%, .5);
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${IconWrapper} {
    display: flex;
    svg {
      padding-left: 2px;
      path {
        stroke: hsla(0, 0%, 100%, 1.000);
      }
    }
  };
`;

interface IProps {
  image?: string
  hoverZoom?: boolean,
  aspect?: VideoAspects
  mediaUrl?: string
  mediaType?: IMediaType
  retryImageLoad?: boolean
  retryLimit?: number;
}

// Image
// No Image Placeholder

const TableRowThumbnail: React.FC<IProps> = ({ hoverZoom = true, image='', mediaUrl, mediaType, retryImageLoad= false, retryLimit=5}) => {
  const [showImage, setShowImage] = useState(true);
  const [imgSrc, setImgSrc] = useState(image);
  const { createMediaModal } = useMediaModal();
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleModal = useCallback(async () => {
    if (mediaUrl && mediaType ) {
      createMediaModal({ src: mediaUrl, mediaType });
    }
  }, [createMediaModal, mediaType, mediaUrl]);

  useEffect(()=>{
    setShowImage(false);
    setRetryCount(0);
    setImgSrc(image);
  },[image]);

  useEffect(()=>{
    if(imgRef.current && imgRef.current.complete){
      setShowImage(true);
    }
  },[]);

  const retryImage = useCallback(()=>{
    if(!retryImageLoad || retryCount >= retryLimit) return;
    const randomDelay = (1000 * (retryCount ** 2 + Math.random())); // exponential back off retry
    setRetryCount(count => count+1);
    setTimeout(()=>{
      setImgSrc(`${image}?v=${Date.now()}`);
    }, randomDelay);

  },[image, retryCount, retryImageLoad, retryLimit]);

  return (
    <Container {...{ hoverZoom, mediaUrl }} aspect='16:9' onClick={handleModal}>
      <Image ref={imgRef} src={imgSrc} onError={retryImage} onLoad={()=>setShowImage(true)} showImage={showImage} />
      {mediaUrl && (mediaType === 'video') &&
        <PlayableDrop>
          <Icon size={12} icon='Play' color='inverse' />
        </PlayableDrop>}
    </Container>
  );
};

export default TableRowThumbnail;
