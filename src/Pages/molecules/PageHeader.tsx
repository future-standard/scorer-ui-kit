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
}

const PageHeader : React.FC<IProps> = ({title, icon, introductionText, areaHref, areaTitle}) => {
  return <Container>
    <PageTitle {...{title, icon, areaHref, areaTitle}} />
    {introductionText ?
      <IntroductionText>{introductionText}</IntroductionText>
    : null}
  </Container>;
};

export default PageHeader;