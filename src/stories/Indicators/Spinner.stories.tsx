import React from 'react';
import { withKnobs, select } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Spinner from '../../Indicators/Spinner';

export default {
  title: 'Misc',
  component: Spinner,
  decorators: [withKnobs]
};

const containerBackgroundKey = (styling)  => {
  switch(styling){
    case 'primary':
      return 'processing';
    case 'secondary':
      return 'basic';
    case 'danger':
      return 'invalid';
    default:
      return 'basic'
  }
}

const Container = styled.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

  ${({theme, styling}) => theme.colors.form.feedback[containerBackgroundKey(styling)]};
`

export const LoadingSpinner = () => {
  const spinnerSize = select("Size", { Small: "small", Medium: "medium", Large: "large", XLarge: "xlarge" }, "medium")
  const spinnerType = select("Style", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary")

  return <Container size={ spinnerSize } styling={spinnerType}>
    <Spinner size={ spinnerSize } styling={ spinnerType } />
  </Container>
}