import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean } from "@storybook/addon-knobs";

import {PageHeader, IconSVGs} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px;
`;

export default {
  title: 'Pages/molecules',
  component: PageHeader,
  decorators: []
};

export const _PageHeader = () => {

  const iconList = Object.assign({ None: null }, generateIconList());

  const pageTitle = text("Page Title", "My Page Title");
  const pageAreaText = text("Page Area", "Area Name");
  const pageAreaHref = text("Page Area Href", "#");
  const pageIcon = select("Icon", iconList, undefined);
  const introductionText = text("Text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");
  const updateDocTitle = boolean("Update Doc Title", true);

  if(updateDocTitle){
    console.info("Note: Updating document.title in Storybook has no effect though it should work in projects.")
  }

  return <Container><PageHeader icon={pageIcon} introductionText={introductionText} title={pageTitle} areaTitle={pageAreaText} areaHref={pageAreaHref} updateDocTitle={updateDocTitle} /></Container>;

};

const generateIconList = () => {
  let iconList : {[key: string]: string}= {};

  for(const key in IconSVGs){
    iconList[key] = key;
  }

  return iconList;
};
