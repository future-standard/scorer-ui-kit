import React, { useEffect, useRef } from 'react';

import LineUIVideoBase, { LineUIProps } from './LineUIVideoBase';

const LineUIVideo: React.FC<LineUIProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !props.src) {
      return;
    }
    video.src = props.src;
  }, [props.src]);

  return <LineUIVideoBase videoRef={videoRef} {...props} />;
};

export default LineUIVideo;
