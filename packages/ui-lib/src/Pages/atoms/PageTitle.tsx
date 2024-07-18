import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';


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
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0 0 20px;
`;


const AreaTitleCss = css`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
  margin: 0;
  position: absolute;
  top: -18px;
`;

const AreaTitle = styled.div`
  ${AreaTitleCss}
`;

const AreaLinkTitle = styled(Link)`
  ${AreaTitleCss}
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
  hideAreaInDocTitle? : boolean
}

const PageTitle : React.FC<IProps> = ({title, icon, areaTitle, areaHref, updateDocTitle = true, hideAreaInDocTitle=false }) => {
  // Set <title> attribute automagically.

  useTitle(title, hideAreaInDocTitle ? undefined : areaTitle || '', undefined, updateDocTitle);

  return (
    <Container>
      {areaTitle && areaHref
        ? <AreaLinkTitle to={areaHref}>{areaTitle}</AreaLinkTitle>
        : areaTitle && <AreaTitle>{areaTitle}</AreaTitle>}
      <Title>{title}</Title>
      {icon ?
        <IconContainer><Icon size={32} color='dimmed' {...{icon}} /></IconContainer>
      : null}
    </Container>
  );
};

export default PageTitle;