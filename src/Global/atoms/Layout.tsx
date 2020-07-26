import styled, {css} from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const Content = styled.div<{ maxWidth?: string }>`
  padding: 29px 21px 0 21px;
  background-color: hsl(202, 33%, 95%);
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
`
