import React from 'react';
import { select, text, number } from "@storybook/addon-knobs";
import styled from 'styled-components';
import {Spinner} from 'scorer-ui-kit';

export default {
  title: 'Misc',
  component: Spinner,
  decorators: []
};

const Container = styled.div<{styling: string}>`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({styling}) => `background-color: var(--${styling}-9)` };
`;

export const LoadingSpinner = () => {
  const spinnerSize = select("Size", { Small: "small", Medium: "medium", Large: "large", XLarge: "xlarge" }, "medium");
  const spinnerType = select("Style", { Primary: "primary", Secondary: "grey", Warning: "warning" }, "primary");
  const customSize = number("Custom Size", 0);
  const customBaseColor = text("Custom Base Color", "");
  const customTopColor = text("Custom Top Color", "");

  let baseColor = customBaseColor !== '' ? customBaseColor : undefined;
  let topColor = customTopColor !== '' ? customTopColor : undefined;

  // Fixes issue if story breaks when typing an open bracket for var()
  baseColor = customBaseColor.indexOf('(') !== -1 && customBaseColor.indexOf(')') === -1 ? customBaseColor + ')' : customBaseColor;
  topColor = customTopColor.indexOf('(') !== -1 && customTopColor.indexOf(')') === -1 ? customTopColor + ')' : customTopColor;

  return <Container styling={spinnerType}>{baseColor}
    <Spinner size={spinnerSize} styling={spinnerType} custom={{ size: customSize, ...{ baseColor, topColor } }} />
  </Container>;
};