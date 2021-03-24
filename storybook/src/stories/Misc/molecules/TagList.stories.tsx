import React from 'react';
import styled from 'styled-components';
import {TagList, ITag} from 'scorer-ui-kit';

export default {
  title: 'Misc/Molecules',
  component: TagList,
  decorators: []
};


// overflow-x: scroll;
const Container = styled.div`
  width: 250px;
  overflow: hidden;
  box-shadow: -21px 2px 10px -22px rgba(0,0,0,0.11) inset;
`;

const defaultTags : ITag[] = [
  {
    text: 'Shop A',
    icon: 'MetaCategories',
  },
  {
    text: 'Example',
    icon: 'MetaTags',
    isClickable: true,
  },
  {
    text: 'Smart',
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