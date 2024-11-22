import React from 'react';
import styled from 'styled-components';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
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

const exampleCallback = <T extends Function>(fn: T): T => {
  /** A toString to render the function in storybook */
  // eslint-disable-next-line no-param-reassign
  fn.toString = () => '   updateCallback: (data: DateInterval | Date) => {}';
  return fn;
};

const START_RANGE: Date = new Date();
START_RANGE.setDate(0);
START_RANGE.setDate(START_RANGE.getDate() - 20);
const END_RANGE: Date = new Date();
END_RANGE.setDate(1);
END_RANGE.setDate(END_RANGE.getDate() + 60);


const TODAY: Date = new Date();
const TWO_WEEKS_BEFORE: Date = new Date();
TWO_WEEKS_BEFORE.setDate(TODAY.getDate() - 15);


const initialValue = {
  start: TWO_WEEKS_BEFORE,
  end: TODAY
}
const datesRange = {
  start: START_RANGE,
  end: END_RANGE
}

export const _DatePicker = () => {
  const language = select('Language', { English: 'en', Japanese: 'ja' }, 'ja');
  const initialValueObj = object('Initial Value', initialValue);
  const dateMode = select('Date Mode', { single: 'single', interval: 'interval' }, 'interval');
  const timeMode = select('Time Mode', { off: 'off', single: 'single', interval: 'interval' }, 'interval');
  const dateTimeTextUpper = text('Date Time Text Upper', 'From');
  const dateTimeTextLower = text('Date Time Text Lower', 'To');
  const timeZoneTitle = text('Time Zone Title', 'Timezone');
  const timeZoneValueTitle = text('Time Zone Value', 'JST');
  const updateCallback = action('Date / Time Updated');
  const sendRange = boolean('Send Available Range', true);
  const availableRangeDates = object('Available Range', datesRange);

  return (
    <Container>
      <FilterDropdownContainer>
        <DatePicker {...{
          timeMode,
          dateMode,
          timeZoneValueTitle,
        }}
          updateCallback={exampleCallback(updateCallback)}
          dateTimeTextUpper={language === 'ja' ? 'から' : dateTimeTextUpper}
          dateTimeTextLower={language === 'ja' ? 'まで' : dateTimeTextLower}
          timeZoneTitle={language === 'ja' ? '時間帯' : timeZoneTitle}
          lang={language}
          initialValue={initialValueObj}
          availableRange={sendRange ? availableRangeDates : undefined}
        />
      </FilterDropdownContainer>
    </Container>);
};