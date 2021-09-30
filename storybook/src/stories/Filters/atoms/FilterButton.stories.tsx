import React from 'react';
import {IconSVGs} from '@future-standard/icons';
import { text, select, boolean } from '@storybook/addon-knobs';
import { FilterButton } from 'scorer-ui-kit';
import styled from 'styled-components';

export default {
  title: 'Filters/atoms',
  component: FilterButton,
  decorators: []
};

const Content = styled.div``;

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

export const _FilterButton = () => {
  const iconList = generateIconList();

  const buttonText = text('Text', 'Search Example String Field');
  const iconName = select("Icon", iconList, Object.keys(iconList)[0]);
  const hasFlipArrow = boolean('Has Flip Arrow', false);
  const isOpen = boolean('is Open', false);
  const disabled = boolean('disable', false);

  return <Content>
    <FilterButton
      icon = {iconName}
      {...{hasFlipArrow, isOpen, disabled}}
    >
      {buttonText}
    </FilterButton>
  </Content>
}