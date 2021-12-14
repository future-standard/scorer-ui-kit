import React from 'react';
import styled from 'styled-components';

import PageTitle from '../atoms/PageTitle';
import IntroductionText from '../atoms/IntroductionText';

const Container = styled.div``;

interface IProps {
  title: string
  areaHref?: string
  areaTitle?: string
  icon?: string
  introductionText?: string
  updateDocTitle?: boolean
}

const PageHeader : React.FC<IProps> = ({title, icon, introductionText, areaHref, areaTitle, updateDocTitle = true}) => {
  return (
    <Container>
      <PageTitle {...{title, icon, areaHref, areaTitle, updateDocTitle}} />
      {introductionText ?
        <IntroductionText>{introductionText}</IntroductionText>
      : null}
    </Container>
  );
};

export default PageHeader;