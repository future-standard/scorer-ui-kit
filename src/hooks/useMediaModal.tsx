import React, { ReactElement, useCallback, VideoHTMLAttributes } from 'react';
import { IMediaType } from '..';
import MediaBox, { IMediaModal } from "../Misc/atoms/MediaBox";
import { useModal } from "./useModal";


let hasMediaError = false

export const useMediaModal = () => {

  // default options for media box
  const videoDefaultOptions: VideoHTMLAttributes<HTMLVideoElement> = { controls: true };
  const { createModal } = useModal();


  async function isMediaUrlValid(src: string, mediaType: IMediaType): Promise<boolean> {
    let isValid = false;

    if (mediaType === 'img') {
      const img = new Image();
      img.src = src;
      try {
        await new Promise((resolve, reject) => {
          img.onload = () => resolve(isValid = true);
          img.onerror = reject;
        })
      } catch (error) {
        isValid = false;
        console.log(`[useMediaModal Hook] ${src} load image failed`, error);
      }
    }

    if (mediaType === 'video') {
      const videoElement = document.createElement('video');
      videoElement.src = src;

      try {
        await new Promise((resolve, reject) => {
          videoElement.oncanplaythrough = () => resolve(isValid = true);
          videoElement.onerror = reject;
        })

      } catch (error) {
        isValid = false;
        console.log(`[useMediaModal Hook] ${src} load image failed`, error);
      }
    }

    return isValid;
  }


  const createMediaModal = useCallback(async (media: IMediaModal) => {
    const { videoOptions } = media;

    createModal({
      padding: false,
      width: 'auto',
      customComponent: (
        <MediaBox
          {...media}
          videoOptions={videoOptions || videoDefaultOptions}
          hasModalLimits
        />
      )
    });

  }, [createModal, hasMediaError]);

  return {
    createMediaModal,
    isMediaUrlValid,
  }
};