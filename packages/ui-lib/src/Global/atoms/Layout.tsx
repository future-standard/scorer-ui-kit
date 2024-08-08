import styled, {css} from 'styled-components';
import {deviceMediaQuery} from '../../theme/common';

export const MOBILE_CLOSE_HEIGHT = 50;
export const MOBILE_NAVBAR_HEIGHT = 68;

export const Layout = styled.div`
  display: flex;
`;

export const MobileLayout = styled.div``;


export const Content = styled.div<{ maxWidth?: string, padBottom?: boolean }>`
  padding: 0;
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

export const ContentArea = styled.div<{ maxWidth?: string, paddingOverride?: string, legacyLayout?: boolean }>`
  flex: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({legacyLayout, paddingOverride, maxWidth}) => legacyLayout && css`
    padding: ${paddingOverride ? paddingOverride : '40px 20px'};

    @media ${deviceMediaQuery.medium} {
      padding: ${paddingOverride ? paddingOverride : '40px'};
    }

    @media ${deviceMediaQuery.large} {
      max-width: ${maxWidth ? maxWidth : `1200px`};
      padding: ${paddingOverride ? paddingOverride : '70px 90px'};
    }
  `}
`;