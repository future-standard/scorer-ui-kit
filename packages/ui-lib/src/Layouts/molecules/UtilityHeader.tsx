import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";
import Icon from "../../Icons/Icon";
import {Link} from 'react-router-dom';
import { IUtilityHeader } from "..";
import { useCopyToClipboard } from "../../hooks";

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
const BackLink = styled(Link)<{$iconInGutter: boolean, $showDivider: boolean}>`
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
  margin-left: ${props => props.$iconInGutter ? '-24px' : '0' };

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

  ${({$showDivider}) => $showDivider && css`
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

const ExtraActionIcon = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;
const ExtraAction = styled.button`
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
  cursor: pointer;

  ${ExtraActionIcon}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${ExtraActionIcon}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

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
const BreadcrumbLink = styled(Link)`
  flex: 1;
  color: var(--grey-10);
  font-family: var(--font-ui);
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
  transition: color 0.25s ease;
  &:hover {
    color: var(--grey-12);
  }
`;

const RightArea = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`;




const UtilityHeader : React.FC<IUtilityHeader> = ({ showBreadcrumbs = true, breadcrumbs = [], backLink, $iconInGutter = true, showShareLink = false, shareLink }) => {

  const [ copyActionText, setCopyActionText ] = useState<string>("Share");
  const {copyToClipboard} = useCopyToClipboard();

  const hasBreadcrumbs = showBreadcrumbs && breadcrumbs.length > 0;

  const clickHandlerShareLink = useCallback(() => {
    copyToClipboard( shareLink ? shareLink : window.location.href);
    setCopyActionText("Copied");
    setTimeout(() => setCopyActionText("Share"), 2000);
  }, [shareLink, copyToClipboard]);

  return (
    <Container>
    <LeftArea>
      {backLink ?
        <BackLink to={backLink} $showDivider={hasBreadcrumbs} {...{$iconInGutter}}>
          <BackLinkIcon>
            <Icon icon="Back" size={16} color="grey-10" />
          </BackLinkIcon>
          Back
        </BackLink>
      : null }
      {hasBreadcrumbs ?
        <Breadcrumbs>
          { breadcrumbs.map((breadcrumb, index) => {
            const {text, href} = breadcrumb;
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={index}>
                <Breadcrumb>
                  <BreadcrumbLink to={href}>{text}</BreadcrumbLink>
                  {!isLast ? <BreadcrumbIcon><Icon icon="Right" size={6} color='grey-8' /></BreadcrumbIcon> : null }
                </Breadcrumb>
              </React.Fragment>
            );
          })}
        </Breadcrumbs>
      : null }
    </LeftArea>
    <RightArea>
        {showShareLink ?
          <ExtraAction onClick={ clickHandlerShareLink }>
            <ExtraActionIcon>
              <Icon icon="Link" size={16} color="grey-10" />
            </ExtraActionIcon>
            {copyActionText}
          </ExtraAction> 
        : null }
    </RightArea>
    </Container>
  );
};

export default UtilityHeader;