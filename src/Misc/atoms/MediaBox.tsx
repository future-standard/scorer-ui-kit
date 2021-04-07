import React, { useState, useCallback, VideoHTMLAttributes } from 'react';
import styled, {css} from 'styled-components';
import Spinner from '../../Indicators/Spinner';

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

const Video = styled.video<{ isLoaded?: boolean }>`
  ${mediaStyle};

  ${({theme, isLoaded}) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `.001`};
  `};

`;

const StyledImage = styled.img<{ isLoaded?: boolean }>`
  ${mediaStyle};

  ${({theme, isLoaded}) => css`
    transition: opacity ${theme.animation.speed.slow} ${theme.animation.easing.primary.easeOut};
    opacity: ${isLoaded ? `1` : `.001`};
  `};

`;

type IMediaType = 'img' | 'video'

interface IMediaModal {
  src: string
  mediaType: IMediaType
  alt?: string
  videoOptions?: VideoHTMLAttributes<HTMLVideoElement>
}

const MediaBox: React.FC<IMediaModal> = ({
  src,
  alt,
  videoOptions = {},
  mediaType
}) => {

  const {
    loop = false,
    autoPlay = false,
    controls = false,
    muted = true,
    ...videoValues
  } = videoOptions;

  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
      setLoaded(true);
  },[]);

  return (
    <Container>
      {mediaType === 'video'
        ? <Video
            loop={loop}
            autoPlay={autoPlay}
            controls={controls}
            muted={muted}
            {...videoValues}
            src={src}
            isLoaded={loaded}
            onCanPlay={handleLoad}
          />
        : <StyledImage
            src={src}
            alt={alt}
            onLoad={handleLoad}
            isLoaded={loaded}
          />}
      {(!loaded) && <LoadingOverlay><Spinner size='large' styling='primary' /></LoadingOverlay>}
    </Container>
  );
};

export default MediaBox;