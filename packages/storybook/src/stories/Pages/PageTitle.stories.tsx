import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean, object } from "@storybook/addon-knobs";

import {PageTitle} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';

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
  const areaTitleBottom = boolean("Area Title Bottom", false);
  const iconPosition = object("Icon Position", 'left');
  const areaTitle = text("Area Title", "Area Title");
  const areaHref = text("Area Href", "#");

  return <Container><PageTitle {...{title, areaTitle, areaHref, areaTitleBottom, iconPosition}} icon={icon || undefined} /></Container>;

};