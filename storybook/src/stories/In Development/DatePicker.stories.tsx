import React from 'react';
import styled from 'styled-components';
import {  text, select } from "@storybook/addon-knobs";
import { DatePicker } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'In Development',
  component: DatePicker,
  decorators: []
};

export const _DatePicker = () => {

  return <DatePicker />;

};