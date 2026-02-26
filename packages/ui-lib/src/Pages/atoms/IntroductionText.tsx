import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  font-family: var(--font-ui);
  color: var(--grey-11);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

interface IProps {
  children?: React.ReactNode;
}

const IntroductionText : React.FC<IProps> = ({children}) => {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
};

export default IntroductionText;