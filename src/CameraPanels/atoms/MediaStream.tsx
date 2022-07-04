import React from 'react';
import styled from 'styled-components';
import { IStatusLine } from '../..';
import Icon, {IconWrapper} from '../../Icons/Icon';
import MediaBox, { IMediaModal } from '../../Misc/atoms/MediaBox';

const Container = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const EmptyWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${IconWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Notice = styled.div``;

const StatusLine = styled.div<{color: IStatusLine}>`
  background-color: ${({ theme, color }) => color && theme.colors.status[color] };
  height: 3px;
  width: 100%;
`;

export interface IMediaStream extends IMediaModal {
  hasCustomState?: boolean
  status?: IStatusLine
}

const MediaStream: React.FC<IMediaStream> = ({
  hasCustomState = false,
  status = 'neutral',
  ...props
}) => {
  return (
    <Container>
      {hasCustomState
        ? <EmptyWithIcon><Icon icon='PasswordHide' color='dimmed' size={41} /></EmptyWithIcon>
        : <MediaBox {...{ ...props }} />}
      <Notice />
      <StatusLine color={status} />
    </Container>
  );
};

export default MediaStream;