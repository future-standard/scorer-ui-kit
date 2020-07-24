import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, select } from "@storybook/addon-knobs";

import PageTitle from '../../Pages/atoms/PageTitle';
import * as IconSVGs from  '../../Icons/stroked';


const Container = styled.div`
  margin: 100px;
`

export default {
  title: 'Pages/atoms',
  component: PageTitle,
  decorators: [withKnobs]
};

export const _PageTitle = () => {

  const iconList = Object.assign({ None: null }, generateIconList());

  const title = text("Title", "My Page Title");
  const icon = select("Icon", iconList, null);
  const areaTitle = text("Area Title", "Area Title")
  const areaHref = ("Area Href", "#");

  return <Container><PageTitle {...{title, icon, areaTitle, areaHref}} /></Container>

}

const generateIconList = () => {
  let iconList = {}

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
}