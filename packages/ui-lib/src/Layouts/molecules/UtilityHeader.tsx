import React from "react";
import styled, { css } from "styled-components";
import {Link} from 'react-router-dom';

import { IUtilityHeader } from "..";
import Icon from "../../Icons/Icon";
import { useBreakpoints } from "../../hooks";
import UtilityHeaderShare from "../atoms/UtilityHeaderShare";
import UtilityHeaderBack from "../atoms/UtilityHeaderBack";
import { resetButtonStyles } from '../../common';

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
  white-space: nowrap;

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

const BreadcrumbTextStyle = css`
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
`;

const BreadCrumbStyle = css`
  ${BreadcrumbTextStyle};
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

const BreadcrumbLink = styled(Link)`
  ${BreadCrumbStyle};
`;

const BreadcrumbButton = styled.button`
  ${resetButtonStyles};
  ${BreadCrumbStyle};
`;

const BreadcrumbText = styled.span`
  ${BreadcrumbTextStyle};
  pointer-events: none;
`;

const RightArea = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`;


const UtilityHeader : React.FC<IUtilityHeader> = ({ showBreadcrumbs = true, breadcrumbs = [], showHomeIcon = true, back, share, $iconInGutter }) => {

  const { isLarge } = useBreakpoints();
  const iconInGutter = $iconInGutter !== undefined ? $iconInGutter : isLarge;
  const hasBreadcrumbs = showBreadcrumbs && breadcrumbs.length > 0;

  return (
    <Container>
    <LeftArea>
      {back && <UtilityHeaderBack $showDivider={hasBreadcrumbs} $iconInGutter={iconInGutter} {...back} />}
      {hasBreadcrumbs ?
        <Breadcrumbs>
          { breadcrumbs.map((breadcrumb, index) => {
            const {text, href, onClick} = breadcrumb;
            const isFirst = index === 0;
            const isLast = index === breadcrumbs.length - 1;

            const innerContent = (
              <React.Fragment>
                {isFirst && showHomeIcon ? <HomeIcon><Icon icon="Home" size={11} color='grey-10' /></HomeIcon> : null }
                {text}
              </React.Fragment>
            );

            return (
              <React.Fragment key={index}>
                <Breadcrumb>
                  {onClick ? (
                    <BreadcrumbButton onClick={onClick} type="button">
                      {innerContent}
                    </BreadcrumbButton>
                  ) : href ? (
                    <BreadcrumbLink to={href}>
                      {innerContent}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbText>
                      {innerContent}
                    </BreadcrumbText>
                  )}
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