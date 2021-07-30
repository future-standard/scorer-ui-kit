import React from 'react';
import styled from 'styled-components';
import { text, select, object, boolean} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { SelectField, PageHeader, SelectWrapper } from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SelectField,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

const FixedSelect = styled.div<{width?: string}>`
  ${SelectWrapper} {
    width: ${({width}) => width ? width : `60px` };
  }
`;

export const _SelectField = () => {

  const styleSize = select('Size', { Small: 'small', Normal: 'normal' }, 'normal');
  const placeholder = text('Placeholder free width', 'Choose an option...');
  const disabled = boolean('Disabled', false);
  const freeSelectValue = action('Free select value');
  const fixedSelectValue = action('Free select value');

  const selectWidth = text('Fix width', '60px');
  const labelProps = object('Label Props', {
    htmlFor: 'animal_select',
    labelText: 'Field Label'
  })

  const freeOnChange = (value: string) => {
    freeSelectValue(value);
  }

  const fixSelectOnChange = (value: string) => {
    fixedSelectValue(value);
  }
  return (
    <Container>
      <PageHeader
        title='Select free width'
      />
      <SelectField
        {...{
          styleSize,
          placeholder,
          labelProps,
          selectWidth,
          disabled
        }}
        changeCallback={freeOnChange}
      >
        <option value="option1">Example Option 1</option>
        <option value="option2">Example Option 2</option>
        <option value="option3">Example Option 3</option>
        <option value="option4">Example Option 4</option>
      </SelectField>
      <PageHeader
        title='Select fixed width'
      />
      <FixedSelect width={selectWidth}>
        <SelectField
          {...{ styleSize, disabled }}
          defaultValue={1}
          changeCallback={fixSelectOnChange}
          >
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </SelectField>
      </FixedSelect>
    </Container>
  );
}