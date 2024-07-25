import React, { useMemo } from 'react';
import styled from 'styled-components';

import PageTitle from '../atoms/PageTitle';
import IntroductionText from '../atoms/IntroductionText';
import TagList from '../../Misc/molecules/TagList';
import { ITag, TypeTagSize } from '../../Misc/atoms/Tag';

const Container = styled.div``;

export type IHeaderTag = {
  label: string
  linkTo?: string
  icon?: string
  noBorder?: boolean
  tagSize?: TypeTagSize
}

interface IProps {
  title: string
  areaHref?: string
  areaTitle?: string
  icon?: string
  introductionText?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle? : boolean
  tagList?: IHeaderTag[]
}

const PageHeader : React.FC<IProps> = ({title, icon, introductionText, areaHref, areaTitle, updateDocTitle = true, hideAreaInDocTitle, tagList=[]}) => {

  const headerTagsConfig : ITag[] = useMemo(() => tagList.map(({icon, label, tagSize, noBorder, linkTo}) => ({
      icon: icon || '',
      label: label,
      linkTo: linkTo,
      tagSize: tagSize,
      noBorder: noBorder
    })

  ), [tagList]);


  return (
    <Container>
      <PageTitle {...{title, icon, areaHref, areaTitle, updateDocTitle, hideAreaInDocTitle}} />
      {tagList.length > 0?
        <TagList tagsConfig ={headerTagsConfig} />
        : null
      }
      {introductionText ?
        <IntroductionText>{introductionText}</IntroductionText>
      : null}
    </Container>
  );
};

export default PageHeader;