import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle'


const Container = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  left: -45px;
  bottom: 0;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }
`;

const Title = styled.h1`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.pageHeader.mainTitle};
  `}
  margin: 0 0 20px;
`;

const AreaTitle = styled(Link)`
  ${({theme}) => css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.pageHeader.areaTitle};
  `}
  margin: 0;
  position: absolute;
  top: -18px;

  &:hover {
    text-decoration: underline;
  }

`;

interface IProps {
  title: string
  icon?: string
  areaTitle?: string
  areaHref?: string
  updateDocTitle?: boolean
}

const PageTitle : React.FC<IProps> = ({title, icon, areaTitle, areaHref, updateDocTitle = true}) => {
  // Set <title> attribute automagically.
  if(updateDocTitle){
    useTitle(title, areaTitle || "");
  }

  return <Container>
    {areaTitle && areaHref ?
      <AreaTitle to={areaHref}>{areaTitle}</AreaTitle>
    : null}
    <Title>{title}</Title>
    {icon ?
      <IconContainer><Icon size={24} color='dimmed' {...{icon}} /></IconContainer>
    : null}
  </Container>;
};

export default PageTitle;