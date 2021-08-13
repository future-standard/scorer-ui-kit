import React from 'react';
import {IconSVGs} from '@future-standard/icons';
import styled from 'styled-components';
import { boolean, text, select } from "@storybook/addon-knobs";
import {FilterDropdown} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: FilterDropdown,
  decorators: []
};

const Content = styled.div`
  margin: 400px;
`;

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};


  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};

export const _FilterDropdown = () => {

  const iconList = generateIconList();

  // const indeterminate = boolean("Indeterminate", false);
  const buttonText = text('Text', 'Flavors');
  const buttonIcon = select("Button Icon", iconList, Object.keys(iconList)[0]);
  const disabled = boolean('disable', false);
  const isLoading = boolean('Is Loading', false);
  const buttonSize = select("Size", { Xsmall: 'xsmall', Small: "small", Normal: "normal", Large: "large" }, "small");
  const optionType = select("Option Type", {text: "text", checkbox: "checkbox", radio: "radio", icon: "icon"},"text")

  return <Content>

      <FilterDropdown {...{
        buttonText,
        buttonIcon,
        buttonSize,
        disabled,
        isLoading,
      }}
        optionType={optionType}
      />
    </Content>
};
