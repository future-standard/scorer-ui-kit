import React from 'react';
import styled from 'styled-components';
import { withKnobs, object, text } from "@storybook/addon-knobs";
import TopBar from '../../Global/TopBar';

const Container = styled.div``;

export default {
  title: 'Global',
  component: TopBar,
  decorators: [withKnobs]
};

export const _TopBar = () => {

  return <Container><TopBar /></Container>;
};