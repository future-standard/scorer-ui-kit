import React, { useRef } from 'react';
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

const SubmenuContainerInner = styled.div`
  overflow: hidden;
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
    grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
    opacity var(--speed-fast) var(--easing-primary-in-out);

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

const ContextContainer = styled.div<{ open: boolean, mobileMenu?: boolean }>`
  min-height: ${({mobileMenu}) => mobileMenu ? '30px' : '70px'};
  width: inherit;

  ${SubmenuContainer}{
    display: grid;
    grid-template-rows: 0fr;
  };

  ${({open}) => open && css`
    ${SubmenuContainer}{
      grid-template-rows: 1fr;
      
      transition:
        grid-template-rows var(--speed-normal) var(--easing-primary-in-out),
        opacity var(--speed-fast) var(--easing-primary-in-out);
      
      opacity: 1;
    }
  `};
`;

interface IProps {
  item: IMenuItemTop
  contextKey: number
  submenuOpen: boolean
  menuOpen?: boolean
  topLevelPath: string
  mobileMenu?: boolean
  onClickCallback?: (...args: any[]) => void
}

const NavigationItem : React.FC<IProps> = ({item, menuOpen, submenuOpen, contextKey, topLevelPath, mobileMenu = false, onClickCallback }) => {
  const { icon, title, href, submenu, isExternalLink } = item;
  const isActive = topLevelPath === href;

  const refSubmenu = useRef<any>(null);

  const submenus : any[] = generateSubmenus(submenu, onClickCallback ) || [];
  const hasSubmenu : boolean = submenus.length > 0;

  return (
    <ContextContainer open={submenuOpen} {...{mobileMenu}}>
      <ContextItem {...{title, href, isActive, icon, hasSubmenu, isExternalLink, submenuOpen, menuOpen, onClickCallback, contextKey}} />
      {hasSubmenu ? <SubmenuContainer ref={refSubmenu}>
        <SubmenuContainerInner>{submenus}</SubmenuContainerInner>
      </SubmenuContainer> : null}
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