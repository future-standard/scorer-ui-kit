import React from 'react';
import styled, { css } from 'styled-components';

import Icon from '../../Icons/Icon';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { deviceMediaQuery } from '../../theme/common';
import { resetButtonStyles } from '../../common';

const ICON_SIZE = 24;
const GAP_LEFT = 20;
const ICON_MARGIN_LEFT = -GAP_LEFT - ICON_SIZE ;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${deviceMediaQuery.large} {
    gap: ${GAP_LEFT}px;
    flex-direction: row;
  }
`;

const TitlesWrapper = styled.div<{areaTitleBottom: boolean}>`
  position: relative;
  display: flex;
  flex-direction: ${({areaTitleBottom}) => areaTitleBottom ? `column-reverse`  : `column` };
  gap: 4px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${deviceMediaQuery.large} {
    margin-left: ${ICON_MARGIN_LEFT}px;
    justify-content: center;
  }

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

const AreaButton = styled.button`
  ${resetButtonStyles};
  ${AreaTitleCss};
  &:hover {
    text-decoration: underline;
  }
`;

interface IProps {
  title: string
  icon?: string
  iconColor?: ISvgIcons['color']
  areaTitle?: string
  areaHref?: string
  updateDocTitle?: boolean
  hideAreaInDocTitle? : boolean
  areaTitleBottom?: boolean
  onAreaClick?: () => void
}

const PageTitle : React.FC<IProps> = ({title, icon, areaTitle, areaHref, updateDocTitle = true, hideAreaInDocTitle=false, areaTitleBottom=false, iconColor='dimmed', onAreaClick }) => {
  // Set <title> attribute automagically.

  useTitle(title, hideAreaInDocTitle ? undefined : areaTitle || '', undefined, updateDocTitle);

  return (
    <Container>
      {icon ?
        <IconContainer ><Icon size={ICON_SIZE} color={iconColor} {...{icon}} /></IconContainer>
      : null}

      <TitlesWrapper areaTitleBottom={areaTitleBottom}>
        {areaTitle && onAreaClick ? (
          <AreaButton onClick={onAreaClick} type="button">{areaTitle}</AreaButton>
        ) : areaTitle && areaHref ? (
          <AreaLinkTitle to={areaHref}>{areaTitle}</AreaLinkTitle>
        ) : areaTitle ? (
          <AreaTitle>{areaTitle}</AreaTitle>
        ) : null}
        <Title>{title}</Title>
      </TitlesWrapper>


    </Container>
  );
};

export default PageTitle;