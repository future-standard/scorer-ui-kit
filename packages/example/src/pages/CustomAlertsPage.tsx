import React from 'react';
import { AlertBar } from 'scorer-ui-kit';
import styled from 'styled-components';
import ExamplesFilename from '../components/ExamplesFilename';

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CustomAlertWrapper = styled.div`
  --error: red;
  --info: blue;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CustomAlertsPage = () => {
  return(
    <Container>
      <ExamplesFilename>CustomAlertsPage.tsx</ExamplesFilename>

      <h3>Default Based Colors</h3>
      <AlertBar message='Base color error message' type='error' hideCloseButton></AlertBar>
      <AlertBar message='Base color info message' type='info' hideCloseButton></AlertBar>

      <CustomAlertWrapper>
        <h3>Custom Local file Colors</h3>
        <AlertBar message='Custom color error message' type='error' hideCloseButton></AlertBar>
        <AlertBar message='Custom color info message' type='info' hideCloseButton></AlertBar>
      </CustomAlertWrapper>

      <h3>Custom Global Project Colors</h3>
      <AlertBar message='Custom color success message' type='success' hideCloseButton></AlertBar>
      <AlertBar message='Custom color warning message' type='warning' hideCloseButton></AlertBar>

    </Container>
  );
};

export default CustomAlertsPage;