import React from 'react';
import styled from 'styled-components';
import Tag, {ITag} from '../atoms/Tag';

const Container = styled.div`
  display: flex;
`;

// Posible with links
interface LinkTag extends ITag {
}

export interface ITagList {
  tagsConfig: ITag[]
}

const TagList : React.FC<ITagList> = ({tagsConfig}) => {
  return(
    <Container>
      {tagsConfig.map((tagProps, index) => {
        return (
          <Tag key={`tag-${index}`} {...tagProps} />
        );
      })}
    </Container>
  );
};

export default TagList;