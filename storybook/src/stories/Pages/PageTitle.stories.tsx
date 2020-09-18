import React from 'react';
import styled from 'styled-components';
import {  text, select } from "@storybook/addon-knobs";

import {PageTitle, IconSVGs} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px;
`;

export default {
  title: 'Pages/atoms',
  component: PageTitle,
  decorators: []
};

export const _PageTitle = () => {

  const iconList = Object.assign({ None: null }, generateIconList());

  const title = text("Title", "My Page Title");
  const icon = select("Icon", iconList, undefined);
  const areaTitle = text("Area Title", "Area Title");
  const areaHref = text("Area Href", "#");

  return <Container><PageTitle {...{title, icon, areaTitle, areaHref}} /></Container>;

};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};