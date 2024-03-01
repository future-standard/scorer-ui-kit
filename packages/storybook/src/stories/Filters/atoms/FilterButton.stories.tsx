import React from 'react';
import { FilterButton } from 'scorer-ui-kit';
import styled from 'styled-components';
import { generateIconList } from '../../helpers';

export default {
  component: FilterButton,
  title: 'Filters/atoms',
};

const Content = styled.div``;

export const _FilterButton = (args: any) => {
  return (
    <Content>
      <FilterButton {...args}>
        {args.text}
      </FilterButton>
    </Content>
  );
}

_FilterButton.argTypes = {
  text: {name: 'Text', control: 'text', defaultValue: 'Search Example String Field' },
  icon: {
    name: 'Icon',
    options: Object.keys(generateIconList()),
    control: { type: 'select' },
    defaultValue: Object.keys(generateIconList())[0],
  },
  hasFlipArrow: { name: 'Has Flip Arrow',  control: 'boolean', defaultValue: false },
  isOpen: { name: 'is Open', control: 'boolean', defaultValue: false },
  disabled: {name: 'disable', control: 'boolean', defaultValue: false },
};