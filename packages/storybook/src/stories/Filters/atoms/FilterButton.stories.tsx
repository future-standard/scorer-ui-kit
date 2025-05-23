import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { FilterButton } from 'scorer-ui-kit';
import styled from 'styled-components';
import { generateIconList } from '../../helpers';

const FilterButtonStory = {
  title: 'Filters/atoms',
  component: FilterButton,
  decorators: []
};

const Content = styled.div``;

export const _FilterButton = () => {
  const iconList = generateIconList();

  const buttonText = text('Text', 'Search Example String Field');
  const iconName = select("Icon", iconList, Object.keys(iconList)[0]);
  const hasFlipArrow = boolean('Has Flip Arrow', false);
  const isOpen = boolean('is Open', false);
  const disabled = boolean('disable', false);
  const design = select('Design type', {Default: 'default', Basic: 'basic'}, 'default')

  return <Content>
    <FilterButton
      icon = {iconName}
      {...{hasFlipArrow, isOpen, disabled, design}}
    >
      {buttonText}
    </FilterButton>
  </Content>
}

export default FilterButtonStory;