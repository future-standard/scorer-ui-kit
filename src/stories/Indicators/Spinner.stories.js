import React from 'react';
import { withKnobs, select, number } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Spinner from '../../Indicators/Spinner';

export default {
  title: 'Misc/Indicators',
  component: Spinner,
  decorators: [withKnobs]
};

const Container = styled.div`
  width: 100%;
  min-height: 25vh;

  display:flex;
  justify-content:center;
  align-items:center;
`

export const LoadingSpinner = () => {
  const spinnerSize = number("Spinner Size", 24);
  // const spinnerType = select("Size", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary")

  return <Container>
    <Spinner size={ spinnerSize } />
  </Container>
}