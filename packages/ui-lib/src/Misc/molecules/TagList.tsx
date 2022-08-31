import React from 'react';
import styled from 'styled-components';
import Tag, {ITag, TagWrapper} from '../atoms/Tag';


export const TagListWrapper = styled.div`
  display: flex;
  ${TagWrapper} {
    margin-right: 10px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }
  flex-wrap: wrap;
`;

export interface ITagList {
  tagsConfig: ITag[]
}

const TagList : React.FC<ITagList> = ({tagsConfig}) => {
  return(
    <TagListWrapper>
      {tagsConfig.map((tagProps, index) => {
        return (
          <Tag key={`tag-${index}`} {...tagProps} />
        );
      })}
    </TagListWrapper>
  );
};

export default TagList;