import React, { useState, useCallback, VideoHTMLAttributes, useRef } from 'react';
import styled, {css} from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import {IMediaType} from '../../index';

const Container = styled.div`
  position: relative;
  line-height: 0;
`;

const mediaStyle = `
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video<{ isLoaded?: boolean, maxDimensions: IImageDimensions | null }>`
  ${mediaStyle};
  outline: none;

  ${({theme, isLoaded}) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `0`};
  `};
  ${({maxDimensions}) => (maxDimensions !== null) &&`
    max-width: ${maxDimensions.width};
    max-height: ${maxDimensions.height};
  `}
`;

const StyledImage = styled.img<{ isLoaded?: boolean, maxDimensions: IImageDimensions | null}>`
  ${mediaStyle};

  ${({theme, isLoaded}) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `0`};
  `};

  ${({maxDimensions}) => (maxDimensions !== null) &&`
      max-width: ${maxDimensions.width};
      max-height: ${maxDimensions.height};
  `}
`;



export interface IMediaModal {
  src: string
  mediaType: IMediaType
  alt?: string
  videoOptions?: VideoHTMLAttributes<HTMLVideoElement>
}

interface IImageDimensions {
  width: string
  height: string
};

const getMaxDimensions = (width: number, height: number): IImageDimensions => {

    // 100 will be reduce to prevent the close button to be overloaded
    const maxHeight = window.innerHeight - 100;
    const maxWidth = window.innerWidth - 100;

  // prevent 0 division
  if(width === 0) { return {width: `${maxWidth}px`, height: `${maxHeight}`}}

  const aspectRatio = height / width;

  const modalMaxHeightPx : number = maxWidth * aspectRatio;
  const modalMaxWidthPx : number = maxHeight / aspectRatio;
  const dimensions : IImageDimensions = {width: `${modalMaxWidthPx}px`, height:`${modalMaxHeightPx}px` }

  return dimensions;
}

const MediaBox: React.FC<IMediaModal> = ({
  src,
  alt,
  videoOptions = {},
  mediaType
}) => {

  const {
    loop = false,
    autoPlay = true,
    controls = false,
    muted = true,
    ...videoValues
  } = videoOptions;

  const [loaded, setLoaded] = useState(false);
  const [maxDimensions, setMaxDimensions] = useState<IImageDimensions | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoad = useCallback(() => {

      if(mediaType === 'img' && imgRef.current && imgRef.current.width && imgRef.current.width) {
        const dimensions = getMaxDimensions(imgRef.current.width, imgRef.current.height);

        if(dimensions) {
          setMaxDimensions(dimensions);
        }
      }

      if(mediaType === 'video' && videoRef.current) {
        const dimensions = getMaxDimensions(videoRef.current.videoWidth, videoRef.current.videoHeight);

        if(dimensions) {
          setMaxDimensions(dimensions);
        }
      }

      setLoaded(true);

  },[mediaType]);

  return (
    <Container>
      {mediaType === 'video'
        ? <Video
            ref={videoRef}
            {...{loop, autoPlay, controls, muted, maxDimensions}}
            {...videoValues}
            src={src}
            isLoaded={loaded}
            preload='metadata'
            onCanPlay={handleLoad}
          />
        : <StyledImage
            ref={imgRef}
            {...{src, alt, maxDimensions}}
            onLoad={handleLoad}
            isLoaded={loaded}
          />}
      {(!loaded) && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
    </Container>
  );
};

export default MediaBox;