import React from 'react';
import styled from 'styled-components';
import { select } from "@storybook/addon-knobs";
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

  const dateMode = select("Date Mode", {single: "single", interval: "interval"}, "interval");
  const timeMode = select("Time Mode", {off: "off", single: "single", interval: "interval"}, "interval");

  return <Container><DatePicker {...{timeMode, dateMode}} /></Container>;

};