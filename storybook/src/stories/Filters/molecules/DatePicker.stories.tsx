import React from 'react';
import styled from 'styled-components';
import { object, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { DatePicker, FilterDropdownContainer } from 'scorer-ui-kit';
import { jpDays, jpMonths } from '../../helpers/data_samples';

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

export const _DatePicker = () => {
  const language = select("Language", { English: 'english', Japanese: 'japanese' }, "japanese");
  const dateMode = select("Date Mode", { single: "single", interval: "interval" }, "interval");
  const timeMode = select("Time Mode", { off: "off", single: "single", interval: "interval" }, "interval");
  const dateTimeTextUpper = text('Date Time Text Upper', 'From');
  const dateTimeTextLower = text('Date Time Text Lower', 'To');
  const timeZoneTitle = text('Time Zone Title', 'Timezone');
  const timeZoneValueTitle = text('Time Zone Value', 'JST');
  const updateCallback = action('Date / Time Updated');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const monthsList = object('Translate Months', jpMonths);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const daysList = object('Translate Days', jpDays);

  return <Container>
    <FilterDropdownContainer>
      <DatePicker {...{
        timeMode,
        dateMode,
        timeZoneValueTitle
      }}
        updateCallback={exampleCallback(updateCallback)}
        dateTimeTextUpper={language === 'english' ? dateTimeTextUpper : 'から'}
        dateTimeTextLower={language === 'english' ? dateTimeTextLower : 'まで'}
        timeZoneTitle={language === 'english' ? timeZoneTitle : '時間帯'}
        monthsList={language === 'english' ? [] : jpMonths}
        daysList={language === 'english' ? undefined : jpDays}
      />
    </FilterDropdownContainer>
  </Container>;


};