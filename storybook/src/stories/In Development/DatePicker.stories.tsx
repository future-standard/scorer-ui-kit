import React from 'react';
import styled from 'styled-components';
import { boolean, select } from "@storybook/addon-knobs";
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

  const useTime = boolean("Use Time", true);
  const mode = select("Mode", {single: "Single", interval: "interval"}, "interval");

  return <Container><DatePicker {...{useTime, mode}} /></Container>;

};