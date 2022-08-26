import React from 'react';
import styled from 'styled-components';
// import { text, object, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { SelectField, PageHeader, SelectWrapper} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SelectField,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

const FixedSelect = styled.div<{ width?: string }>`
  ${SelectWrapper} {
    width: ${({ width }) => width ? width : `60px`};
  }
`;

export const _SelectField = () => {

  // const isCompact = boolean('isCompact', false);
  // const placeholder = text('Placeholder free width', 'Choose an option...');
  // const defaultValue = text('Default Value free width','option3');
  // const disabled = boolean('Disabled', false);
  // const freeSelectValue = action('Free select value');
  // const fixedSelectValue = action('Free select value');

  // const selectWidth = text('Fix width', '60px');
  // const label = object('Free Select Label', {
  //   htmlFor: 'free_select',
  //   text: 'Field Label'
  // })
  // const fixLabel = object('Fix Select Label', {
  //   htmlFor: 'fix_select',
  //   text: 'Page',
  //   isSameRow: true
  // })

  // const freeOnChange = (value: string) => {
  //   freeSelectValue(value);
  // }

  // const fixSelectOnChange = (value: string) => {
  //   fixedSelectValue(value);
  // }
  return null;
}