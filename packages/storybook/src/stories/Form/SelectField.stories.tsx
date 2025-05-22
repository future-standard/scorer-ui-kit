import React from 'react';
import styled from 'styled-components';
import { text, select, object, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { SelectField, SelectWrapper} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';

const SelectFieldStory = {
  title: 'Form/atoms',
  component: SelectField,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FixedSelect = styled.div<{ width?: string }>`
  ${SelectWrapper} {
    width: ${({ width }) => width ? width : `60px`};
  }
`;

const Subsection = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`;

export const _SelectField = () => {
  const iconList = generateIconList();
  
  const isCompact = boolean('isCompact', false);
  const disabled = boolean('Disabled', false);
  const fieldState = select("State", { Default: "default",  Disabled: 'disabled', Required: 'required',  Valid: 'valid',  Invalid: 'invalid', Processing: 'processing' }, "default");
  const placeholder = text('Placeholder (Free Width)', 'Choose an option...');
  const defaultValue = text('Default Value (Free Width)', '');
  const freeSelectValue = action('Free select value');
  const fixedSelectValue = action('Free select value');
  const icon = select("Icon", iconList, Object.keys(iconList)[0]);

  const selectWidth = text('Fix width', '80px');
  const label = object('Free Select Label', {
    htmlFor: 'free_select',
    text: 'Field Label'
  })

  const fixLabel = object('Fix Select Label', {
    htmlFor: 'fix_select',
    text: 'Page',
    isSameRow: true
  })

  const freeOnChange = (value: string) => {
    freeSelectValue(value);
  }

  const fixSelectOnChange = (value: string) => {
    fixedSelectValue(value);
  }
  
  return (
    <Container>
      <Subsection>
        <Title>Select (Free Width)</Title>
        <SelectField
          {...{
            isCompact,
            placeholder,
            label,
            selectWidth,
            disabled,
            defaultValue,
            fieldState
          }}
          changeCallback={freeOnChange}
        >
          <option value="option1">Example Option 1</option>
          <option value="option2">Example Option 2</option>
          <option value="option3">Example Option 3</option>
          <option value="option4">Example Option 4</option>
        </SelectField>
      </Subsection>
          
      <Subsection>
        <Title>Select (Fixed Width)</Title>
        <FixedSelect width={selectWidth}>
          <SelectField
            {...{ isCompact, disabled, fieldState }}
            label={fixLabel}
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
      </Subsection>
        
      <Subsection>
        <Title>Select (With Icon)</Title>
        <SelectField
          {...{
            isCompact,
            placeholder,
            label,
            selectWidth,
            disabled,
            defaultValue,
            fieldState,
            icon
          }}
          changeCallback={freeOnChange}
          >
          <option value="option1">Example Option 1</option>
          <option value="option2">Example Option 2</option>
          <option value="option3">Example Option 3</option>
          <option value="option4">Example Option 4</option>
        </SelectField>
      </Subsection>
    </Container>
  );
}

export default SelectFieldStory;