import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.p`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.pageHeader.introduction};
  `}
`;

interface IProps {}

const IntroductionText : React.FC<IProps> = ({children}) => {
  return <Container>
    {children}
  </Container>;
};

export default IntroductionText;