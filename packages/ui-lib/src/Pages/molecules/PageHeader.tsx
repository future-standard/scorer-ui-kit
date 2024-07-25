import React from 'react';
import styled from 'styled-components';
import PageTitle from '../atoms/PageTitle';
import IntroductionText from '../atoms/IntroductionText';
import Tag from '../../Misc/atoms/Tag';

const Container = styled.div``;

const TagListWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 16px;
  margin-top: 26px;
`;

export type IHeaderTag = {
  label: string
  linkTo?: string
  icon?: string
}

interface IProps {
  title: string
  areaHref?: string
  areaTitle?: string
  icon?: string
  introductionText?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle?: boolean
  tagList?: IHeaderTag[]
}

const PageHeader: React.FC<IProps> = ({ title, icon, introductionText, areaHref, areaTitle, updateDocTitle = true, hideAreaInDocTitle, tagList }) => {

  return (
    <Container>
      <PageTitle {...{ title, icon, areaHref, areaTitle, updateDocTitle, hideAreaInDocTitle }} />
      { !tagList ?
          null
          :
          <TagListWrapper>
            {
              tagList.map(({icon, label, linkTo}) =>  (
                <Tag key={`tag-`} icon={icon || ''} noBorder={true}  tagSize='compact' {...{label, linkTo}} />
              ))
            }
          </TagListWrapper>
      }
      {introductionText ?
        <IntroductionText>{introductionText}</IntroductionText>
        : null}
    </Container>
  );
};

export default PageHeader;