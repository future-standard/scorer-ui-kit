import React, {useCallback, VideoHTMLAttributes } from 'react';
import { IMediaType } from '..';
import MediaBox, { IMediaModal } from "../Misc/atoms/MediaBox";
import { useModal, IModal } from "./useModal";


export type ICreateMediaModal = IMediaModal & IModal;

const videoDefaultOptions: VideoHTMLAttributes<HTMLVideoElement> = { controls: true };

export const useMediaModal = () => {

  // default options for media box
  const { createModal, isModalOpen, setModalOpen } = useModal();

  async function isMediaUrlValid(src: string, mediaType: IMediaType): Promise<boolean> {
    let isValid = false;

    if (mediaType === 'img') {
      const img = new Image();
      img.src = src;
      try {
        await new Promise((resolve, reject) => {
          img.onload = () => resolve(isValid = true);
          img.onerror = reject;
        });
      } catch (error) {
        isValid = false;
      }
    }

    if (mediaType === 'video') {
      const videoElement = document.createElement('video');
      videoElement.src = src;

      try {
        await new Promise((resolve, reject) => {
          videoElement.oncanplaythrough = () => resolve(isValid = true);
          videoElement.onerror = reject;
        });

      } catch (error) {
        isValid = false;
      }
    }

    return isValid;
  }


  const createMediaModal = useCallback(async (mediaModal: ICreateMediaModal) => {
    const {
      src,
      mediaType,
      alt,
      videoOptions = videoDefaultOptions,
      onError,
      onMediaLoad,
      closeText,
      dismissCallback,
      retryLoading = false,
      retryLimit=5,
      minHeight='300px',
      minWidth='300px',
    } = mediaModal;

    createModal({
      padding: false,
      width: 'auto',
      closeText,
      dismissCallback,
      customComponent: (
        <MediaBox
          {...{
            src,
            mediaType,
            alt,
            videoOptions,
            onError,
            onMediaLoad,
            retryLoading,
            retryLimit,
            minHeight,
            minWidth,
          }}
          hasModalLimits
        />
      )
    });

  }, [createModal]);

  return {
    createMediaModal,
    isMediaUrlValid,
    isMediaModalOpen: isModalOpen,
    setMediaModalOpen: setModalOpen,
  };
};