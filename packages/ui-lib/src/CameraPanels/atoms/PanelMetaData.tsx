import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { EllipsisStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div`
  display: flex;
  height: 60px;
`;

const LeftData = styled.div<{ hasRightData: boolean }>`
  ${({ hasRightData }) => hasRightData && css`
    border-right: var(--grey-6) 1px solid;
    width: 195px;
  `};

  padding: 0 12px 0 12px;
  display: flex;

  ${IconWrapper} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;

const RightData = styled.div`
  padding: 0 12px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DeviceDataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  justify-content: center;
`;

const LeftTitle = styled.div<{ hasMarginBottom: boolean, hasRightData: boolean }>`
  ${EllipsisStyles};
  ${({ hasRightData }) => hasRightData
    ? `max-margin: 140px;`
    : `max-margin: 250px;`
  }};
  ${({ hasMarginBottom }) => hasMarginBottom && `margin-bottom: 1px;`};

  color: var(--grey-a10);
  font-size: 10px;
`;

const LeftSubTitle = styled.div<{ hasRightData: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.data};
  ${EllipsisStyles};
  ${({ hasRightData }) => hasRightData
    ? `max-width: 140px;`
    : `max-width: 250px;`
  }

  color: var(--grey-11);
  font-size: 16px;
`;

const Title = styled.div<{ hasMarginBottom: boolean }>`
  ${EllipsisStyles};
  max-width: 80px;
  color: var(--grey-a10);
  font-size: 10px;
  ${({ hasMarginBottom }) => hasMarginBottom && `margin-bottom: 6px;`};
`;

const SubTitle = styled.div`
  ${EllipsisStyles};
  max-width: 80px;
  color: var(--grey-11);
  font-size: 12px;
`;

export interface IPanelMetaData {
  deviceIcon?: string
  leftSubTitle?: string
  leftTitle?: string
  rightTitle?: string
  rightSubTitle?: string
  hideIcon?: boolean
}

const PanelMetaData: React.FC<IPanelMetaData> = ({
  deviceIcon = 'Camera',
  leftSubTitle,
  leftTitle,
  rightTitle,
  rightSubTitle,
  hideIcon = false
}) => {

  const hasRightData = useMemo(() => (!!rightTitle || !!rightSubTitle) , [rightSubTitle, rightTitle]);

  return (
    <Container>
      <LeftData {...{ hasRightData }}>
        {!hideIcon && <Icon icon={deviceIcon} color='dimmed' size={18} />}
        <DeviceDataGroup>
          {leftTitle && <LeftTitle hasMarginBottom={!!leftSubTitle} {...{ hasRightData }}>{leftTitle}</LeftTitle>}
          {leftSubTitle && <LeftSubTitle {...{ hasRightData }}>{leftSubTitle}</LeftSubTitle>}
        </DeviceDataGroup>
      </LeftData>
      {hasRightData && (
        <RightData>
          {rightTitle && <Title hasMarginBottom={!!rightSubTitle}>{rightTitle}</Title>}
          {rightSubTitle && <SubTitle>{rightSubTitle}</SubTitle>}
        </RightData>
      )}
    </Container>
  );
};

export default PanelMetaData;