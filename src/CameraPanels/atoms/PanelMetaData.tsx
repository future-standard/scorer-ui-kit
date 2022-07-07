import React from 'react';
import styled from 'styled-components';
import { EllipsisStyles } from '../../common';
import Icon, { IconWrapper } from '../../Icons/Icon';

const Container = styled.div`
  display: flex;
`;

const LeftData = styled.div`
  border-right: ${({theme}) => theme.colors.divider} 1px solid;
  padding: 17px 12px 12px 12px;
  width: 195px;
  display: flex;

  ${IconWrapper} {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }
`;

const RightData = styled.div`
  padding: 17px 12px 12px 16px;
`;

const DeviceDataGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`;

const LeftTitle = styled.div`
  ${EllipsisStyles};
  max-width: 140px;
  color: hsla(195, 10%, 52%, 0.72);
  font-size: 10px;
  margin-bottom: 1px;
`;

const LeftSubTitle = styled.div`
  font-family: ${({theme}) => theme.fontFamily.data};
  ${EllipsisStyles};
  max-width: 140px;
  color: hsl(208, 8%, 38%);
  font-size: 16px;
`;

const Title = styled.div`
  ${EllipsisStyles};
  max-width: 80px;
  color: hsla(195, 10%, 52%, 0.72);
  font-size: 10px;
  margin-bottom: 6px;
`;

const SubTitle = styled.div`
  ${EllipsisStyles};
  max-width: 80px;
  color: hsl(195, 10%, 52%);
  font-size: 12px;
`;

export interface IPanelMetaData {
  deviceIcon?: string
  leftSubTitle?: string
  leftTitle?: string
  rightTitle?: string
  rightSubTitle?: string
}

const PanelMetaData: React.FC<IPanelMetaData> = ({
    deviceIcon = 'Camera',
    leftSubTitle,
    leftTitle,
    rightTitle,
    rightSubTitle,
  }) => {

  return (
    <Container>
      <LeftData>
        <Icon icon={deviceIcon} color='dimmed' size={18} />
        <DeviceDataGroup>
          <LeftTitle>{leftTitle}</LeftTitle>
          <LeftSubTitle>{leftSubTitle}</LeftSubTitle>
        </DeviceDataGroup>
      </LeftData>
      <RightData>
        <Title>{rightTitle}</Title>
        <SubTitle>{rightSubTitle}</SubTitle>
      </RightData>
    </Container>
  );
};

export default PanelMetaData;