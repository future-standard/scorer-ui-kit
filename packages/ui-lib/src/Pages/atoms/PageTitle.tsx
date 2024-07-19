import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';

const Container = styled.div<{areaTitleBottom: boolean}>`
  position: relative;
  display: flex;
  flex-direction: ${({areaTitleBottom}) => areaTitleBottom ?
    `column-reverse`
    : `column`
  };
  gap: 4px;
`;

const IconContainer = styled.div<{iconPosition?: IIconPos}>`
  ${({iconPosition}) => iconPosition === 'left' ?
    ` position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -45px;
      bottom: 0;
    `:
    ` position: absolute;
      top: -8px;
      transform: translateY(-100%);
      left: 0px;
      `
  };

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
  margin: 0;
`;

const AreaTitleCss = css`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
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

type IIconPos = 'top' | 'left'

interface IProps {
  title: string
  icon?: string
  iconColor?: ISvgIcons['color']
  areaTitle?: string
  iconPosition?: IIconPos
  areaHref?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle? : boolean
  areaTitleBottom?: boolean

}

const PageTitle : React.FC<IProps> = ({title, icon, areaTitle, areaHref, updateDocTitle = true, hideAreaInDocTitle=false, areaTitleBottom=false, iconPosition='left', iconColor='dimmed' }) => {
  // Set <title> attribute automagically.

  useTitle(title, hideAreaInDocTitle ? undefined : areaTitle || '', undefined, updateDocTitle);

  return (
    <Container areaTitleBottom={areaTitleBottom} >
      {areaTitle && areaHref
        ? <AreaLinkTitle to={areaHref}>{areaTitle}</AreaLinkTitle>
        : areaTitle && <AreaTitle>{areaTitle}</AreaTitle>}
      <Title>{title}</Title>
      {icon ?
        <IconContainer iconPosition={iconPosition}><Icon size={32} color={iconColor} {...{icon}} /></IconContainer>
      : null}
    </Container>
  );
};

export default PageTitle;