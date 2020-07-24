import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.p`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
  `}
  font-size: 14px;
  font-style: italic;
  line-height: 25px;
  color: #8b9196;
`

interface IProps {}

const IntroductionText : React.FC<IProps> = ({children}) => {
  return <Container>
    {children}
  </Container>
}

export default IntroductionText;