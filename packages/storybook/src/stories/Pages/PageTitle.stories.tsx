import React from 'react';
import styled from 'styled-components';
import { text, select, boolean } from "@storybook/addon-knobs";

import {PageTitle} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';

const Container = styled.div`
  margin: 100px;
`;

const PageTitleStory = {
  title: 'Pages/atoms',
  component: PageTitle,
  decorators: []
};

export const _PageTitle = () => {

  const iconList = Object.assign({ None: null }, generateIconList());

  const title = text("Title", "My Page Title");
  const icon = select("Icon", iconList, 'Link');
  const iconColor = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle", Inverse: "inverse", Primary: "primary" , Danger: "danger"}, "mono");
  const areaTitleBottom = boolean("Area Title Bottom", false);
  const areaTitle = text("Area Title", "Area Title");
  const areaHref = text("Area Href", "#");

  return <Container><PageTitle {...{title, areaTitle, areaHref, areaTitleBottom, iconColor}} icon={icon || undefined} /></Container>;

};

export default PageTitleStory;