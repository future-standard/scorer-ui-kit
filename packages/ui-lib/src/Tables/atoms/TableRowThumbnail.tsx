import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useMediaModal } from '../../hooks/useMediaModal';
import { IMediaType } from '../..';
import Icon, { IconWrapper } from '../../Icons/Icon';
import { NoImage } from '../../svg';

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
      cursor: pointer;

    ${({ theme, hoverZoom }) => theme && hoverZoom && css`
      transform: scale(1.5);
      opacity: 1;
      transition: transform ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut};
    `}
  }

`;
const ImageWrapper = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`;

const NoImageWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 41px;
  width: 55px;
  object-fit: cover;
  display: block;
`;

const PlayableDrop = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--black-a1);
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
        stroke: var(--white-1);
      }
    }
  };
`;

export interface ITableRowThumbnail {
  image?: string
  hoverZoom?: boolean,
  aspect?: VideoAspects
  mediaUrl?: string
  mediaType?: IMediaType
  retryImageLoad?: boolean
  retryLimit?: number;
  closeText?: string;
  onClickThumbnail?: () => void
}

// Image
// No Image Placeholder

const TableRowThumbnail: React.FC<ITableRowThumbnail> = ({ hoverZoom = true, image='', mediaUrl, mediaType, retryImageLoad= false, retryLimit=5, closeText, onClickThumbnail}) => {
  const [showImage, setShowImage] = useState(true);
  const [imgSrc, setImgSrc] = useState(image);
  const { createMediaModal } = useMediaModal();
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<(ReturnType<typeof setTimeout>)|null>(null);

  const handleModal = useCallback(async () => {
      createMediaModal({
        src: showImage && mediaUrl ? mediaUrl :'',
        mediaType: mediaType ? mediaType : 'img',
        minHeight: '240px',
        closeText
      });
  }, [closeText, createMediaModal, mediaType, mediaUrl, showImage]);

  useEffect(()=>{
    setShowImage(false);
    setRetryCount(0);
    setImgSrc(image);
  },[image]);

  useEffect(()=>{
    if(imgRef.current && imgRef.current.complete && imgSrc !== ''){
      timeoutRef.current && clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setShowImage(true);
    }
  },[imgSrc]);

  const retryTimeout = useCallback(()=>{
    timeoutRef.current = null;
    setImgSrc(`${image}?v=${Date.now()}`);
  },[image]);

  const retryImage = useCallback(()=>{
    setShowImage(false);
    if(!retryImageLoad || retryCount >= retryLimit ||timeoutRef.current) return;
    const randomDelay = (1000 * (retryCount ** 2 + Math.random())); // exponential back off retry
    setRetryCount(count => count+1);
    timeoutRef.current = setTimeout(retryTimeout, randomDelay);
  },[retryCount, retryImageLoad, retryLimit, retryTimeout]);

  const onLoad = useCallback(()=>{
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
    setShowImage(true);
  },[]);

  const checkIfImageExists = (url: string, imageExistsCallback: (exists: boolean) => void) => {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      imageExistsCallback(true);
    } else {
      img.onload = () => {
        imageExistsCallback(true);
      };

      img.onerror = () => {
        imageExistsCallback(false);
      };
    }
  };

  useEffect(() => {
    checkIfImageExists(image, (exists) => {
      if (exists) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    });
  },[image]);

  return (
    <Container {...{ hoverZoom, mediaUrl }} aspect='16:9' onClick={ onClickThumbnail || handleModal}>
      {showImage ?
        <ImageWrapper ref={imgRef} src={imgSrc} onError={retryImage} onLoad={onLoad} /> :
        <NoImageWrapper><NoImage /></NoImageWrapper>}
      {mediaUrl && (mediaType === 'video') &&
        <PlayableDrop>
          <Icon size={12} icon='Play' color='inverse' />
        </PlayableDrop>}
    </Container>
  );
};

export default TableRowThumbnail;
