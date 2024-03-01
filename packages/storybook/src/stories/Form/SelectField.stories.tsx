import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { SelectField, PageHeader, SelectWrapper} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SelectField,
};

const Container = styled.div`
  margin: 20px;
`;

const FixedSelect = styled.div<{ width?: string }>`
  ${SelectWrapper} {
    width: ${({ width }) => width ? width : `60px`};
  }
`;

export const _SelectField = (args: any) => {
  const freeSelectValue = action('Free select value');
  const fixedSelectValue = action('Free select value');

  const freeOnChange = (value: string) => {
    freeSelectValue(value);
  }

  const fixSelectOnChange = (value: string) => {
    fixedSelectValue(value);
  }

  return (
    <Container>
      <PageHeader title='Select free width' />
      <SelectField
        {...args}
        changeCallback={freeOnChange}
      >
        <option value="option1">Example Option 1</option>
        <option value="option2">Example Option 2</option>
        <option value="option3">Example Option 3</option>
        <option value="option4">Example Option 4</option>
      </SelectField>
      <PageHeader title='Select fixed width' />
      <FixedSelect width={args.selectWidth}>
        <SelectField
          {...args}
          label={args.fixLabel}
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

_SelectField.argTypes = {
  isCompact: { control: 'boolean', defaultValue: false },
  placeholder: { name: 'Placeholder free width',  control: 'text', defaultValue: 'Choose an option...' },
  label: { name: 'Free Select Label', control: 'object', defaultValue: { htmlFor: 'free_select', text: 'Field Label' } },
  fixLabel: { name: 'Fix Select Label', control: 'object', defaultValue: { htmlFor: 'fix_select', text: 'Page', isSameRow: true } },
  selectWidth: { name: 'Fix width', control: 'text', defaultValue: '60px' },
  disabled: { control: 'boolean', defaultValue: false },
  defaultValue: {name: 'Default Value free width', control: 'text', defaultValue: 'option3' },
};
