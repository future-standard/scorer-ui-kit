import React from 'react';
import styled from 'styled-components';
import { text, select, object } from "@storybook/addon-knobs";
import { SelectField } from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SelectField,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

export const _SelectField = () => {

  const styleSize = select('Size', { Small: 'small', Normal: 'normal' }, 'normal');
  const placeholder = text('Placeholder', 'Choose an option...');

  const selectWidth = text('Select Width', '');
  const labelProps = object('Label Props', {
    htmlFor: 'animal_select',
    labelText: 'Field Label'
  })

  return (
    <Container>
      <SelectField {...{ styleSize, placeholder, labelProps, selectWidth }}>
        <option value="option1">Example Option 1</option>
        <option value="option2">Example Option 2</option>
        <option value="option3">Example Option 3</option>
        <option value="option4">Example Option 4</option>
      </SelectField>
    </Container>
  );
}