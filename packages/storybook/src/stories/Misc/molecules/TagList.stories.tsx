import React from 'react';
import styled from 'styled-components';
import {TagList, ITag} from 'scorer-ui-kit';
import {object} from "@storybook/addon-knobs";


const TagListStory = {
  title: 'Misc/Molecules',
  component: TagList,
  decorators: []
};


// overflow-x: scroll;
const Container = styled.div`
  font-family: ${p => p.theme.fontFamily.data};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 300px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`;

const defaultTags : ITag[] = [
  {
    label: 'Shop A',
    icon: 'MetaCategories',
  },
  {
    label: 'Example',
    icon: 'MetaTags',
    color: 'primary'
  },
  {
    label: 'Smart',
    icon: 'MetaTags',
  },

];

export const _TagList = () => {

  const someTags = object("tagsConfig", defaultTags)
  return(
    <Container>
      <TagList tagsConfig={someTags}/>
    </Container>
  );
};

export default TagListStory;