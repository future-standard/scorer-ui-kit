import React from 'react';
import styled, { css } from 'styled-components';
import Spinner from '../../Indicators/Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`;

const LoadingText = styled.div`
  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.data};
  `}
  color: var(--grey-9);
  font-size: 12px;
  font-style: italic;
  padding: 15px 0;
`;

interface ILoadingBox {
  loadingText?: string
}

const LoadingBox: React.FC<ILoadingBox> = ({ loadingText }) => {
  return (
    <Container>
      <Spinner size='large' styling='primary' />
      <LoadingText>{loadingText}</LoadingText>
    </Container>
  );
};

export default LoadingBox;