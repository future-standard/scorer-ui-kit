import React from 'react';
import styled from 'styled-components';
import {TagList, ITag} from 'scorer-ui-kit';

export default {
  title: 'Misc/Molecules',
  component: TagList,
  decorators: []
};

const Container = styled.div``;

const defaultTags : ITag[] = [
  {
    text: 'Shop A',
    icon: 'MetaCategories',
  },
  {
    text: 'Shop A',
    icon: 'MetaTags',
  },

];

export const _TagList = () => {
  return(
    <Container>
      <TagList tagsConfig={defaultTags}/>
    </Container>
  );
};