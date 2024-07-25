import React from 'react';
import styled from 'styled-components';
import {  text, select, boolean, object } from "@storybook/addon-knobs";

import {PageHeader, IHeaderTag} from 'scorer-ui-kit';
import { generateIconList } from '../helpers';

const Container = styled.div`
  margin: 100px;
`;

export default {
  title: 'Pages/molecules',
  component: PageHeader,
  decorators: []
};

const defaultTags : IHeaderTag[] = [
  {
    label: 'Shop A',
    icon: 'MetaCategories',
    linkTo:'/'
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
  {
    label: 'Shop B',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
    {
    label: 'Shop C',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },
];

export const _PageHeader = () => {

  const iconList = Object.assign({ None: null }, generateIconList());

  const pageTitle = text("Page Title", "My Page Title");
  const pageAreaText = text("Page Area", "Area Name");
  const pageAreaHref = text("Page Area Href", "#");
  const pageIcon = select("Icon", iconList, 'Link');
  const updateDocTitle = boolean("Update Doc Title", true);
  const noTagsExample = boolean("No tags Example", false);
  const tagList = object('Tag List', defaultTags)
  const introductionText = text("Text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");


  if(updateDocTitle){
    console.info("Note: Updating document.title in Storybook has no effect though it should work in projects.")
  }

  return <Container>
        <PageHeader
          icon={pageIcon || undefined}
          introductionText={introductionText}
          title={pageTitle}
          areaTitle={pageAreaText}
          areaHref={pageAreaHref}
          updateDocTitle={updateDocTitle}
          tagList={noTagsExample ? undefined : tagList}
        />
      </Container>;

};
