import React, { useState, useCallback, VideoHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import { IMediaType } from '../../index';
import Icon from '../../Icons/Icon';

export const MediaBoxWrapper = styled.div<{minWidth?: string, minHeight?: string}>`
  position: relative;
  line-height: 0;
  ${({minHeight}) => minHeight && `min-height: ${minHeight}`};
  ${({minWidth}) => minWidth && `min-width: ${minWidth}`};
`;

const mediaStyle = `
  max-width:  100%;
  max-height: 100%;
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

const Video = styled.video<{ isLoaded?: boolean, hasModalLimits?: boolean }>`
  ${mediaStyle};
  outline: none;

  ${({ theme, isLoaded, hasModalLimits }) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `0`};

    ${hasModalLimits && css`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`;

const StyledImage = styled.img<{ isLoaded?: boolean, hasModalLimits?: boolean }>`
  ${mediaStyle};

  ${({ theme, isLoaded, hasModalLimits }) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `0`};

    ${hasModalLimits && css`
      max-height: calc(100vh - 100px);
      max-width: calc(100vw - 100px);
    `};
  `};
`;

export interface IMediaModal {
  src: string
  mediaType: IMediaType
  alt?: string
  videoOptions?: VideoHTMLAttributes<HTMLVideoElement>
  hasModalLimits?: boolean
  retryLoading?: boolean
  retryLimit?: number
  minWidth?: string
  minHeight?: string
  onError?: (e: Event) => void
  onMediaLoad?: () => void
}

const MediaBox: React.FC<IMediaModal> = ({
  src: incomingSrc,
  alt,
  videoOptions = {},
  mediaType,
  hasModalLimits,
  retryLoading= false,
  retryLimit=5,
  minWidth,
  minHeight,
  onError: onErrorCallback = () => { },
  onMediaLoad = () => { },
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [src, setSrc] = useState(incomingSrc);
  const [loadFailed, setLoadFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const {
    loop = false,
    autoPlay = true,
    controls = false,
    muted = true,
    ...videoValues
  } = videoOptions;

  const onError = useCallback((e)=>{
    if(!retryLoading || retryCount >= retryLimit) {
      onErrorCallback(e);
      setLoaded(true);
      setLoadFailed(true);
    } else {
      const randomDelay = (1000 * (retryCount ** 2 + Math.random())); // exponential back off retry
      setRetryCount(count => count+1);
      setTimeout(()=>{
        setSrc(`${incomingSrc}?v=${Date.now()}`);
      }, randomDelay);
    }

  },[incomingSrc, onErrorCallback, retryCount, retryLoading, retryLimit]);

  const handleLoad = useCallback(() => {
    onMediaLoad();
    setLoaded(true);
  }, [onMediaLoad, setLoaded]);

  return (
    <MediaBoxWrapper {...{minWidth, minHeight}}>
      {mediaType === 'video'
        ? <Video
            {...{ src, loop, autoPlay, controls, muted, onError, hasModalLimits }}
            {...videoValues}
            isLoaded={loaded && !loadFailed}
            preload='metadata'
            onCanPlayThrough={handleLoad}
          />
        : <StyledImage
            {...{ src, alt, onError, hasModalLimits }}
            onLoad={handleLoad}
            isLoaded={loaded && !loadFailed}
          />}
      {(!loaded) && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
      {loadFailed && <LoadingOverlay><Icon icon='MissingImage' size={48} /></LoadingOverlay>}
    </MediaBoxWrapper>
  );
};

export default MediaBox;