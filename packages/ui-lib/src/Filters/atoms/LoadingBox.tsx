import React from 'react';
import styled from 'styled-components';
import Spinner from '../../Indicators/Spinner';
import { fontFamily } from '../../themes/common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`;

const LoadingText = styled.div`
  font-family: ${fontFamily.data};
  color: var(--grey-11);
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