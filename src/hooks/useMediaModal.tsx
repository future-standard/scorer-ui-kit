import React, { useCallback, VideoHTMLAttributes } from 'react';
import { IMediaType } from '..';
import MediaBox, { IMediaModal } from "../Misc/atoms/MediaBox";
import { useModal } from "./useModal";

export const useMediaModal = () => {

  // default options for media box
  const videoDefaultOptions: VideoHTMLAttributes<HTMLVideoElement> = { controls: true };

  const { createModal } = useModal();

  const createMediaModal = useCallback(async (media: IMediaModal) => {
    const {
      src,
      mediaType,
      alt,
      videoOptions,
    } = media;

    createModal({
      padding: false,
      width: 'auto',
      customComponent: <MediaBox {...{ src, mediaType, alt }} videoOptions={videoOptions || videoDefaultOptions} hasModalLimits/>
    });

  }, [createModal]);

  return {
    createMediaModal,
  }
};