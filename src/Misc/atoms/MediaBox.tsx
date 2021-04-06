import React, { VideoHTMLAttributes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  line-height: 0;
`;

const Video = styled.video`
  width:  100%;
  height: 100%;
  border-radius: 3px;
  background-color: hsla(0deg, 0%, 0%, 35%);
`;

interface IMediaModal  {
  src: string
  videoOptions: VideoHTMLAttributes<HTMLVideoElement>
}

const MediaBox : React.FC<IMediaModal> = ({
  src,
  videoOptions: {
    loop = false,
    autoPlay = false,
    controls = false,
    muted = true,
    ...videoOptions
  }
}) => {

  return(
    <Container>
      <Video
        loop={loop}
        autoPlay={autoPlay}
        controls={controls}
        muted={muted}
        {...videoOptions}
        src={src}
      />
    </Container>
  );
};

export default MediaBox;