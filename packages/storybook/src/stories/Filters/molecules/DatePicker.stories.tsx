import React from 'react';
import styled from 'styled-components';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DatePicker, FilterDropdownContainer } from 'scorer-ui-kit';
import { dataContentDays, datesRange, InitialSelectedDate } from '../../helpers/datePicker_sample';

const Container = styled.div`
  margin: 20px;
`;

const DatePickerStory = {
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
  fn.toString = () => '   updateCallback: (data: IDateInterval | Date) => {}';
  return fn;
};

export const _DatePicker = () => {
  const language = select('Language', { English: 'en', Japanese: 'ja' }, 'ja');
  const initialValueObj = object('Initial Value', InitialSelectedDate);
  const dateMode = select('Date Mode', { single: 'single', interval: 'interval' }, 'interval');
  const timeMode = select('Time Mode', { off: 'off', single: 'single', interval: 'interval' }, 'interval');
  const dateTimeTextUpper = text('Date Time Text Upper', 'From');
  const dateTimeTextLower = text('Date Time Text Lower', 'To');
  const timeZoneTitle = text('Time Zone Title', 'Timezone');
  const timeZoneValueTitle = text('Time Zone Value', 'JST');
  const updateCallback = action('Date / Time Updated');
  const sendRange = boolean('Send Available Range', true);
  const availableRangeDates = object('Available Range', datesRange);
  const contentDaysObj = object('Content Days', dataContentDays);
  const showContentDays = boolean('Show Content Days', true)
  const hasApply = boolean('Has Apply Button', false);
  const disableApply = boolean('Disable Apply button', false);
  const cancelText = text('Cancel Text', 'Cancel');
  const applyText = text('Apply Text', 'Apply');
  const applyCallback = action('Apply Button Pressed');
  const cancelCallback = action('Cancel Button Pressed');

  return (
    <Container>
      <FilterDropdownContainer>
        <DatePicker {...{
          timeMode,
          dateMode,
          timeZoneValueTitle,
          hasApply,
          disableApply,
          cancelText,
          applyText,
          applyCallback,
          cancelCallback,
        }}
          updateCallback={exampleCallback(updateCallback)}
          dateTimeTextUpper={language === 'ja' ? 'から' : dateTimeTextUpper}
          dateTimeTextLower={language === 'ja' ? 'まで' : dateTimeTextLower}
          timeZoneTitle={language === 'ja' ? '時間帯' : timeZoneTitle}
          lang={language}
          initialValue={initialValueObj}
          availableRange={sendRange ? availableRangeDates : undefined}
          contentDays={showContentDays ? contentDaysObj : undefined}
        />
      </FilterDropdownContainer>
    </Container>);
};

export default DatePickerStory;
