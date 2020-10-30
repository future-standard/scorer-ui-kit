import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';
import ContextItem from './ContextItem';
import { IMenuItemTop, IMenuItemSubmenu } from '..';

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
  ${({theme}) => theme && css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.global.mainMenu.subheader}
  `};

`;

const SubmenuItemLink = styled(Link)`
  display: block;

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
    background: ${({theme: {colors}}) => colors.divider};
  }

  ${SubmenuItemLink}{

    ${({theme, isActive}) => theme && css`
      font-family: ${theme.fontFamily.ui};
      ${theme.typography.global.mainMenu.subItem.default};

      &:hover {
        ${theme.typography.global.mainMenu.subItem.hover};
      }

      ${isActive && css`
        &, &:hover {
          ${theme.typography.global.mainMenu.subItem.active};
        }
      `}

    `};



  }
`;

const SubmenuContainer = styled.div`
  ${({theme}) => theme && css`
    transition:
      max-height ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut},
      opacity ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeOut};
  `};

  position: relative;
  overflow: hidden;

  &::after {
    display: block;
    content: '';
    width: 1px;
    position: absolute;
    left: 40px;
    top: 0;
    bottom: 35px;
    background: ${({theme: {colors}}) => colors.divider};
  }

`;

const ContextContainer = styled.div<{ open: boolean, maxHeight: number, loading: 'true'|'false' }>`
  min-height: 70px;
  width: inherit;

  ${SubmenuContainer}{
    max-height: 0;
    opacity: 0;
  }
  ${({open, maxHeight, theme}) => open && css`
    ${SubmenuContainer}{
      transition:
        max-height ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeOut},
        opacity ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeOut};
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
  onClickCallback?: (...args: any[]) => void
  readyCallback?: (...args: any[]) => void
}

const NavigationItem : React.FC<IProps> = ({item, menuOpen, submenuOpen, contextKey, loading, topLevelPath, onClickCallback, readyCallback}) => {
  const { icon, title, href, submenu } = item;
  const isActive = topLevelPath === href;

  const refSubmenu = useRef<any>(null);
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);

  const submenus : any[] = generateSubmenus(submenu) || [];
  const hasSubmenu : boolean = submenus.length > 0;

  useEffect(() => {
    if(refSubmenu && refSubmenu.current){
      setSubmenuHeight(refSubmenu.current.clientHeight);
    }

    if(readyCallback){ readyCallback(contextKey); }

  }, [refSubmenu, setSubmenuHeight, readyCallback, contextKey]);

  return <ContextContainer open={submenuOpen} loading={loading ? 'true': 'false'} maxHeight={submenuHeight}>
    <ContextItem {...{title, href, isActive, icon, hasSubmenu, submenuOpen, menuOpen, onClickCallback, contextKey}} />
    {hasSubmenu ? <SubmenuContainer ref={refSubmenu}>{submenus}</SubmenuContainer> : null}
  </ContextContainer>;

};

/**
 * Generate the submenu component structure.
 * @param submenu JSON Object with the menu structure
 */
const generateSubmenus = (submenu? : IMenuItemSubmenu[]) => {

  if(!submenu){ return; }

  let grouping : any[] = [];
  let output : any = [];

  // First submenu
  grouping.push([]);

  submenu.forEach((item, key) => {
    const {title, href} = item;
    if(href){
      // Treat as menu item/
      grouping[grouping.length - 1].push(<SubmenuItem key={key} isActive={false}><SubmenuItemLink to={href}>{title}</SubmenuItemLink></SubmenuItem>);
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

