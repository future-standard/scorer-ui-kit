import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

import LineUIVideoBase, { LineUIProps } from '../LineUI/LineUIVideoBase';

const HLS_URL_PATTERN = /\.m3u8(?:$|[?#])/i;
const NATIVE_HLS_MIME = 'application/vnd.apple.mpegurl';

const LineUIVideoHLS: React.FC<LineUIProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !props.src) {
      return;
    }

    if (!HLS_URL_PATTERN.test(props.src)) {
      video.src = props.src;
      return;
    }

    let hls: Hls | null = null;

    const tryAutoplay = () => {
      const el = videoRef.current;
      if (!el || !el.autoplay) {
        return;
      }
      const result = el.play();
      if (result && typeof result.catch === 'function') {
        result.catch(() => {});
      }
    };

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hlsRef.current = hls;
      hls.loadSource(props.src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, tryAutoplay);

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal || !hls) {
          return;
        }
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            hls.destroy();
            hlsRef.current = null;
            hls = null;
            break;
        }
      });
    } else if (video.canPlayType(NATIVE_HLS_MIME)) {
      video.src = props.src;
    } else {
      console.error(
        '[LineUIVideoHLS] HLS playback is not supported in this browser.',
      );
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
      hlsRef.current = null;
    };
  }, [props.src]);

  return <LineUIVideoBase videoRef={videoRef} {...props} />;
};

export default LineUIVideoHLS;
