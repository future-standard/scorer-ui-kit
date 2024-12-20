import React from "react";
import styled, { css } from "styled-components";
import {Link} from 'react-router-dom';
import Icon from "../../Icons/Icon";
import { IUtilityHeaderLinkBack } from "..";

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

const BackLink = styled(Link)<{$iconInGutter: boolean, showDivider: boolean}>`
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

interface IUtilityHeaderLinkBackInstance extends IUtilityHeaderLinkBack {
  $iconInGutter: boolean;
  showDivider: boolean;
}

const UtilityHeaderBack : React.FC<IUtilityHeaderLinkBackInstance> = ({show = true, link, label = 'Back', showDivider, $iconInGutter}) => {
  if(!show){ return null; }

  return (
    <BackLink to={link} {...{showDivider, $iconInGutter}}>
      <BackLinkIcon>
        <Icon icon="Back" size={16} color="grey-10" />
      </BackLinkIcon>
      {label}
    </BackLink>
  );
};

export default UtilityHeaderBack;