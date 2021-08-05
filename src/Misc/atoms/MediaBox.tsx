import React, { useState, useCallback, VideoHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import { IMediaType } from '../../index';

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
  onError?: () => void
  onMediaLoad?: () => void
}

const MediaBox: React.FC<IMediaModal> = ({
  src,
  alt,
  videoOptions = {},
  mediaType,
  hasModalLimits,
  onError = () => { },
  onMediaLoad = () => { },
}) => {

  const {
    loop = false,
    autoPlay = true,
    controls = false,
    muted = true,
    ...videoValues
  } = videoOptions;

  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    onMediaLoad();
    setLoaded(true);
  }, [onMediaLoad, setLoaded]);

  return (
    <Container>
      {mediaType === 'video'
        ? <Video
          {...{ src, loop, autoPlay, controls, muted, onError, hasModalLimits }}
          {...videoValues}
          isLoaded={loaded}
          preload='metadata'
          onCanPlayThrough={handleLoad}
        />
        : <StyledImage
          {...{ src, alt, onError, hasModalLimits }}
          onLoad={handleLoad}
          isLoaded={loaded}
        />}
      {(!loaded) && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
    </Container>
  );
};

export default MediaBox;