import styled, {css} from 'styled-components';
import {deviceMediaQuery} from '../../themes/common';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const MobileLayout = styled.div``;


export const Content = styled.div<{ maxWidth?: string, padBottom?: boolean }>`
  padding: ${({padBottom = true}) => padBottom ? '70px 90px' : '70px 90px 0'};
  flex: 1;
  overflow: auto;

  & > div {
    max-width: 1400px;
  }

  ${
    ({ maxWidth }) =>
    maxWidth && css`
      & > div {
        max-width: ${maxWidth};
      }
    `
  }
`;
export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MOBILE_CLOSE_HEIGHT = 50;
export const MOBILE_NAVBAR_HEIGHT = 68;

export const ContentArea = styled.div<{ maxWidth?: string, paddingOverride?: string}>`
  flex: 1;
  overflow: auto;
  width: 100%;
  padding: ${({paddingOverride}) => paddingOverride ? paddingOverride : '40px 20px'};
  margin-top: ${MOBILE_NAVBAR_HEIGHT}px;
  margin-left: auto;
  margin-right: auto;
  height: calc(100vh - ${MOBILE_NAVBAR_HEIGHT}px);

  @media ${deviceMediaQuery.medium} {
    padding: ${({paddingOverride}) => paddingOverride ? paddingOverride : '40px'};
  }

  @media ${deviceMediaQuery.large} {
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : `1200px`};
    padding: ${({paddingOverride}) => paddingOverride ? paddingOverride : '70px 90px'};
    margin-top: 0;
  }
`;