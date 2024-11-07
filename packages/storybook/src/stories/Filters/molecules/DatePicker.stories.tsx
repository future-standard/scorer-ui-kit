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

const start: Date = new Date();
start.setDate(0);
start.setDate(start.getDate() - 20);
const end: Date = new Date();
end.setDate(1);
end.setDate(end.getDate() + 70);

const datesRange = {
  start: start,
  end: end
}

export const _DatePicker = () => {
  const language = select('Language', { English: 'en', Japanese: 'ja' }, 'ja');
  const dateMode = select('Date Mode', { single: 'single', interval: 'interval' }, 'interval');
  const timeMode = select('Time Mode', { off: 'off', single: 'single', interval: 'interval' }, 'interval');
  const dateTimeTextUpper = text('Date Time Text Upper', 'From');
  const dateTimeTextLower = text('Date Time Text Lower', 'To');
  const timeZoneTitle = text('Time Zone Title', 'Timezone');
  const timeZoneValueTitle = text('Time Zone Value', 'JST');
  const updateCallback = action('Date / Time Updated');
  const sendRange = boolean('Send Available Range', false);
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
          availableRange={sendRange ? availableRangeDates : undefined}
        />
      </FilterDropdownContainer>
    </Container>);
};