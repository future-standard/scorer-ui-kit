import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import {Link} from 'react-router-dom';
import Icon from "../../Icons/Icon";
import { IUtilityHeaderLinkBack } from "..";
import { resetButtonStyles } from '../../common';

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

const backLinkStyle = css`
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
`;

const dividerStyle = css`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`;

const BackLink = styled(Link)<{$iconInGutter: boolean, $showDivider: boolean}>`
  ${backLinkStyle};
  margin-left: ${props => props.$iconInGutter ? '-24px' : '0' };

  ${({$showDivider}) => $showDivider && css`
    &::after {
      ${dividerStyle};
    }
  `}
`;

const BackButton = styled.button<{$iconInGutter: boolean, $showDivider: boolean}>`
  ${resetButtonStyles};
  ${backLinkStyle};
  margin-left: ${props => props.$iconInGutter ? '-24px' : '0' };

  ${({$showDivider}) => $showDivider && css`
    &::after {
      ${dividerStyle};
    }
  `}
`;

interface IUtilityHeaderLinkBackInstance extends IUtilityHeaderLinkBack {
  $iconInGutter: boolean;
  $showDivider: boolean;
}

const UtilityHeaderBack : React.FC<IUtilityHeaderLinkBackInstance> = ({show = true, link, label = 'Back', $showDivider, $iconInGutter, onClick,}) => {

  const innerContent = useMemo(() => <React.Fragment>
    <BackLinkIcon>
      <Icon icon="Back" size={16} color="grey-10" />
    </BackLinkIcon>
    {label}
  </React.Fragment>,[label]);

  if(!show){ return null; }

  return <React.Fragment>

    {onClick ?
      <BackButton {...{$showDivider, $iconInGutter, onClick}}>{innerContent}</BackButton>
      :
      link && <BackLink to={link} {...{$showDivider, $iconInGutter}}>{innerContent}</BackLink>
    }
  </React.Fragment>;

};

export default UtilityHeaderBack;