import type React from 'react';
import styled from 'styled-components';
import Tag, { type ITag, TagWrapper } from '../atoms/Tag';

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
  tagsConfig: ITag[];
}

const TagList: React.FC<ITagList> = ({ tagsConfig }) => {
  return (
    <TagListWrapper>
      {tagsConfig.map((tagProps, index) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: ITag has only optional fields (label, linkTo, icon) and labels may repeat — index is the only stable identity for this list. #646.
        return <Tag key={`tag-${index}`} {...tagProps} />;
      })}
    </TagListWrapper>
  );
};

export default TagList;
