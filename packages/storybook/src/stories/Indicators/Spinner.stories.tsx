import React from 'react';
import {  select, withKnobs } from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Spinner} from 'scorer-ui-kit';

export default {
  title: 'Misc',
  component: Spinner,
  decorators: [withKnobs],
};

const containerBackgroundKey = (styling: string)  => {
  switch(styling){
    case 'primary':
      return 'info';
    case 'secondary':
      return 'neutral';
    case 'danger':
      return 'error';
    default:
      return 'neutral';
  }
};

const Container = styled.div<{styling: string}>`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;
  ${({styling}) => `background-color: var(--${containerBackgroundKey(styling)})` };
`;

export const LoadingSpinner = () => {
  const spinnerSize = select("Size", { Small: "small", Medium: "medium", Large: "large", XLarge: "xlarge" }, "medium");
  const spinnerType = select("Style", { Primary: "primary", Secondary: "secondary", Danger: "danger" }, "primary");

  return <Container styling={spinnerType}>
    <Spinner size={spinnerSize} styling={spinnerType} />
  </Container>;
};