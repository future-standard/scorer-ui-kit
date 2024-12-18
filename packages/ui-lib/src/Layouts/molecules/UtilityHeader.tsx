import React from "react";
import styled, { css } from "styled-components";
import {Link} from 'react-router-dom';

import Icon from "../../Icons/Icon";
import { IUtilityHeader, IUtilityHeaderLinkBack } from "..";
import UtilityHeaderShare from "../atoms/UtilityHeaderShare";

const Container = styled.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`;
const BackLinkIcon = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const BackLink = styled(Link)<{iconInGutter: boolean, showDivider: boolean}>`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;
  margin-left: ${props => props.iconInGutter ? '-24px' : '0' };

  ${BackLinkIcon}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${BackLinkIcon}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

  ${({showDivider}) => showDivider && css`
    &::after {
      content: '';
      display: inline-block;
      height: 12px;
      width: 1px;
      padding-left: 8px;
      border-right: 1px solid var(--grey-10);
    }
  `}
`;

const Breadcrumbs = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
const Breadcrumb = styled.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;

`;
const BreadcrumbIcon = styled.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const HomeIcon = styled(BreadcrumbIcon)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`;
const BreadcrumbLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  color: var(--grey-10);
  font-family: var(--font-ui);
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${HomeIcon} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`;

const RightArea = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`;



interface IUtilityHeaderLinkBackInstance extends IUtilityHeaderLinkBack {
  iconInGutter: boolean;
  showDivider: boolean;
}

const UtilityHeaderBack : React.FC<IUtilityHeaderLinkBackInstance> = ({show, link, label = 'Back', showDivider, iconInGutter}) => {
  if(!show){ return null; }

  return (
    <BackLink to={link} {...{showDivider, iconInGutter}}>
      <BackLinkIcon>
        <Icon icon="Back" size={16} color="grey-10" />
      </BackLinkIcon>
      {label}
    </BackLink>
  );
};

const UtilityHeader : React.FC<IUtilityHeader> = ({ showBreadcrumbs = true, breadcrumbs = [], showHomeIcon = true, back, share, iconInGutter = true }) => {

  const hasBreadcrumbs = showBreadcrumbs && breadcrumbs.length > 0;

  return (
    <Container>
    <LeftArea>
      {back && <UtilityHeaderBack showDivider={hasBreadcrumbs} {...{iconInGutter}} {...back} />}
      {hasBreadcrumbs ?
        <Breadcrumbs>
          { breadcrumbs.map((breadcrumb, index) => {
            const {text, href} = breadcrumb;
            const isFirst = index === 0;
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={index}>
                <Breadcrumb>
                  <BreadcrumbLink to={href}>
                    {isFirst && showHomeIcon ? <HomeIcon><Icon icon="Home" size={11} color='grey-10' /></HomeIcon> : null }
                    {text}
                  </BreadcrumbLink>
                  {!isLast ? <BreadcrumbIcon><Icon icon="Right" size={6} color='grey-8' /></BreadcrumbIcon> : null }
                </Breadcrumb>
              </React.Fragment>
            );
          })}
        </Breadcrumbs>
      : null }
    </LeftArea>
    <RightArea>
      <UtilityHeaderShare {...share} />
    </RightArea>
    </Container>
  );
};

export default UtilityHeader;