import React from 'react';
import styled from 'styled-components';
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { DatePicker, FilterDropdownContainer } from 'scorer-ui-kit';

const Container = styled.div`
    margin: 20px;
`;

export default {
  title: 'Filters/molecules',
  component: DatePicker,
  decorators: [],
  parameters: {
    jsx: { skip: 1 }
  }
};

const exampleCallback =  <T extends Function>(fn: T): T => {
  /** A toString to render the function in storybook */
  // eslint-disable-next-line no-param-reassign
  fn.toString = () => '   updateCallback: (data: DateInterval | Date) => {}';
  return fn;
};

export const _DatePicker = () => {

  const dateMode = select("Date Mode", { single: "single", interval: "interval" }, "interval");
  const timeMode = select("Time Mode", { off: "off", single: "single", interval: "interval" }, "interval");
  const dateTimeTextUpper = text('Date Time Text Upside', 'From');
  const dateTimeTextLower = text('Date Time Text Downside', 'To');
  const updateCallback = action('Date / Time Updated')

  return <Container>
    <FilterDropdownContainer>
      <DatePicker {...{
        timeMode,
        dateMode,
        updateCallback: exampleCallback(updateCallback),
        dateTimeTextUpper,
        dateTimeTextLower
        }} />
    </FilterDropdownContainer>
  </Container>;


};