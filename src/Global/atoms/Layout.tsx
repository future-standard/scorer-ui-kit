import styled, {css} from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const Content = styled.div<{ maxWidth?: string }>`
  padding: 70px 90px 0 90px;
  flex: 1;
  overflow: auto;
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