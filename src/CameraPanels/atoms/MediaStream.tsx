import React from 'react';
import styled, { css } from 'styled-components';
import { MediaBoxWrapper } from '../../Misc/atoms/MediaBox';
import { IFeedbackColor } from '../..';
import Icon, { IconWrapper } from '../../Icons/Icon';
import MediaBox, { IMediaModal } from '../../Misc/atoms/MediaBox';
import { EllipsisStyles } from '../../common';

const Container = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;

  ${MediaBoxWrapper} {
    height: 100%;
    width: 100%;
    text-align: center;
    img, video {
      border-radius: 3px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`;

const EmptyWithIcon = styled.div<{hasPadding: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${({hasPadding})=> hasPadding && `
    padding-bottom: 43px
  `}
;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Notice = styled.div`
  ${({ theme, color }) => color && css`
    background-color: ${theme.colors.feedback[color]};
    color: ${theme.colors.icons.inverse};
  `};
  opacity: 0.85;
  height: 46px;
  width: 300px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const NoticeMessage = styled.div`
  ${EllipsisStyles};
  max-width: 245px;
  font-size: 10px;
`;

const NoticeTitle = styled.div`
  ${EllipsisStyles};
  max-width: 245px;
  font-size: 12px;
`;

const NoticeIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 2px;

  ${IconWrapper} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;

const NoticeTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

const StatusLine = styled.div<{ color: IFeedbackColor }>`
  background-color: ${({ theme, color }) => color && theme.colors.feedback[color]};
  height: 3px;
  width: 100%;
`;

export interface IMediaStream extends IMediaModal {
  isEmptyWithIcon?: boolean
  emptyIcon?: string
  status?: IFeedbackColor
  noticeMessage?: string
  noticeTitle?: string
  noticeIcon?: string
  hasNotice?: boolean
}

const MediaStream: React.FC<IMediaStream> = ({
  isEmptyWithIcon = false,
  status = 'neutral',
  noticeIcon,
  hasNotice = false,
  noticeMessage,
  noticeTitle,
  emptyIcon,
  ...props
}) => {
  return (
    <Container>
      {isEmptyWithIcon
        ? <EmptyWithIcon hasPadding={hasNotice}><Icon icon={emptyIcon ? emptyIcon : 'PasswordHide'} color='dimmed' size={41} /></EmptyWithIcon>
        : <MediaBox {...{ ...props }} />}
      {hasNotice && (
        <Notice color={status}>
          {noticeIcon && <NoticeIcon><Icon icon={noticeIcon} size={20} color='inverse' /></NoticeIcon>}
          <NoticeTextGroup>
            {noticeTitle && <NoticeTitle>{noticeTitle}</NoticeTitle>}
            {noticeMessage && <NoticeMessage>{noticeMessage}</NoticeMessage>}
          </NoticeTextGroup>
        </Notice>
      )}
      <StatusLine color={status} />
    </Container>
  );
};

export default MediaStream;