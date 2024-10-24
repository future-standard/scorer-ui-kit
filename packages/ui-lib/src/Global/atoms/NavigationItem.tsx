import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import ContextItem from './ContextItem';
import { IMenuItemTop, IMenuItemSubmenu } from '..';
import {resetButtonStyles} from '../../common/index';
import Icon from '../../Icons/Icon';

const Submenu = styled.ul`
  display: block;
  position: relative;
  margin-left: 40px;
  padding: 0;

`;
const SubmenuHeader = styled.div`
  display: block;
  height: 40px;
  margin-left: 40px;
`;

const SubmenuItemTitle = styled.span`
  display: block;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
`;

const SubmenuItemLink = styled(Link)`
  ${resetButtonStyles};
  display: block;
`;

const ExternalIconWrapper = styled.div`
  margin-left: 15px;
`;

const SubmenuItemAnchor = styled.a`
  ${resetButtonStyles};
  display: flex;
  align-items: center;
`;

const SubmenuItem = styled.li<{isActive?: boolean}>`
  display: block;
  height: 30px;
  padding-left: 40px;
  position: relative;

  &::after {
    display: block;
    content: '';
    height: 1px;
    width: 14px;
    position: absolute;
    left: 0;
    top: 10px;
    background: var(--dividing-line);
  }

  ${SubmenuItemLink}, ${SubmenuItemAnchor}{
    font-family: var(--font-ui);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: var(--grey-11);

    ${({isActive}) => css`
    
      &:hover {
        color: var(--grey-12);
      }

      ${isActive && css`
        &, &:hover {
          color: var(--grey-11);
          font-weight: 600;
        }
      `}

    `};

  }
`;

const SubmenuContainer = styled.div`
  position: relative;
  overflow: hidden;

  transition:
    max-height var(--speed-normal) var(--easing-primary-in),
    opacity var(--speed-fast) var(--easing-primary-in);

  &::after {
    display: block;
    content: '';
    width: 1px;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 35px;
    background: var(--dividing-line);
  }

`;

const ContextContainer = styled.div<{ open: boolean, maxHeight: number, minHeight?: number, loading: 'true'|'false' }>`
  min-height: ${({minHeight}) => minHeight ? `${minHeight}px` : `70px`};
  width: inherit;

  ${SubmenuContainer}{
    max-height: 0;
    opacity: 0;
  }
  ${({open, maxHeight}) => open && css`
    ${SubmenuContainer}{
      transition:
        max-height var(--speed-normal) var(--easing-primary-in),
        opacity var(--speed-fast) var(--easing-primary-in);
      max-height: ${maxHeight}px !important;
      opacity: 1;
    }
  `};

  ${({loading}) => loading === 'true' && css`
    ${SubmenuContainer}{
      max-height: none !important;
      opacity: 1;
    }
  `};

`;

interface IProps {
  item: IMenuItemTop
  contextKey: number
  submenuOpen: boolean
  loading: boolean
  menuOpen?: boolean
  topLevelPath: string
  minHeight?: number
  onClickCallback?: (...args: any[]) => void
  readyCallback?: (...args: any[]) => void
}

const NavigationItem : React.FC<IProps> = ({item, menuOpen, submenuOpen, contextKey, loading, topLevelPath, minHeight, onClickCallback, readyCallback}) => {
  const { icon, title, href, submenu, isExternalLink } = item;
  const isActive = topLevelPath === href;

  const refSubmenu = useRef<any>(null);
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);

  const submenus : any[] = generateSubmenus(submenu, onClickCallback ) || [];
  const hasSubmenu : boolean = submenus.length > 0;

  useEffect(() => {
    if(refSubmenu && refSubmenu.current && refSubmenu.current.clientHeight !== 0){
      setSubmenuHeight(refSubmenu.current.clientHeight);
    }

    if(readyCallback){ readyCallback(contextKey); }

  }, [refSubmenu, setSubmenuHeight, readyCallback, contextKey]);

  return (
    <ContextContainer open={submenuOpen} loading={loading ? 'true': 'false'} maxHeight={submenuHeight} minHeight={minHeight}>
      <ContextItem {...{title, href, isActive, icon, hasSubmenu, isExternalLink, submenuOpen, menuOpen, onClickCallback, contextKey}} />
      {hasSubmenu ? <SubmenuContainer ref={refSubmenu}>{submenus}</SubmenuContainer> : null}
    </ContextContainer>
  );

};

/**
 * Generate the submenu component structure.
 * @param submenu JSON Object with the menu structure
 */
const generateSubmenus = (
  submenu? : IMenuItemSubmenu[],
  onClickCallback?: (...args: any[]) => void,
  ) => {

  if(!submenu){ return; }

  const grouping : any[] = [];
  const output : any = [];

  // First submenu
  grouping.push([]);

  submenu.forEach((item, key) => {
    const {title, href, isExternalLink} = item;
    if(href){
      // Treat as menu item/
      if(isExternalLink) {
        grouping[grouping.length - 1].push(
          <SubmenuItem key={key} isActive={false}>
            <SubmenuItemAnchor href={href} target='_blank'>
              {title}
              <ExternalIconWrapper>
                <Icon icon='ExternalLink' color='dimmed' size={10} />
              </ExternalIconWrapper>
            </SubmenuItemAnchor>
          </SubmenuItem>);
      }else {
        grouping[grouping.length - 1].push(<SubmenuItem key={key} isActive={false}><SubmenuItemLink to={href} onClick={() => onClickCallback && onClickCallback(-1)}>{title}</SubmenuItemLink></SubmenuItem>);
      }
    } else {
      // Assume this is a grouping header.
      if(grouping[grouping.length - 1].length > 1){ grouping.push([]); }
      grouping[grouping.length - 1].push(<SubmenuHeader key={key}><SubmenuItemTitle>{title}</SubmenuItemTitle></SubmenuHeader>);
    }
  });

  grouping.forEach((group, key) => {
    output.push(<Submenu key={key}>{group}</Submenu>);
  });

  return output;

};

export default NavigationItem;

