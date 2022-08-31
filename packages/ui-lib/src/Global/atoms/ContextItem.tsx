import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Icon, { IconWrapper } from '../../Icons/Icon';


const ContextTitle = styled.div<{ compact?: boolean }>`
  opacity: 0;

  ${({ theme }) => css`
    transition: opacity ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeInOut};
  `}

  ${({ compact }) => compact && css`
    font-size:14px;
  `}
`;

const ContextIcon = styled.div<{ compact?: boolean }>`
  ${({ theme }) => css`
    ${theme.styles.global.mainMenu.iconBackground.default};
    transition: background ${theme.animation.speed.fast} ${theme.animation.easing.primary.easeInOut};
  `};

  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  margin: 0 20px;

  border-radius: 7px;
  display:flex;
  justify-content:center;
  align-items:center;

  svg {
    display: block;
  }
`;

const ContextIndicator = styled.div`
  width: 12px;
  height: 12px;
  flex: 0 0 14px;
  margin: 0 20px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    height: 12px;
    width: 12px;
  }

  opacity: 0;

  ${({ theme }) => css`
    transition: opacity 0 ${theme.animation.easing.primary.easeInOut};
  `}

`;
const ContextActionBaseCSS = css`
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  outline: none;
  padding: 0;
  text-decoration: none;
`;

const StyledAnchor = styled.a`
  display: flex;
  text-decoration: none;
`;

const ExternalIconWrapper = styled.div`
  margin-left: 15px;
`;

const ContextWrapper = styled.div<{$menuOpen?: boolean}>`
  ${ContextActionBaseCSS}
  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.global.mainMenu.menuItem.default};
  `}

  ${({ $menuOpen }) => $menuOpen && css`
  ${ContextTitle}{
    opacity: 1;
  }
`}

  &:hover ${ContextIcon}{
    opacity: 1;
    ${({ theme }) => theme.styles.global.mainMenu.iconBackground.hover};
    ${IconWrapper}{
      [stroke]{
        stroke: ${({ theme }) => theme.colors.icons['inverse']};
      }
    }
  }
`;

const ContextActionA = styled(Link) <{ $menuOpen?: boolean, $isActive: boolean }>`
  ${ContextActionBaseCSS}
  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.global.mainMenu.menuItem.default};
  `}

  ${({ $menuOpen }) => $menuOpen && css`
    ${ContextTitle}{
      opacity: 1;
    }
  `}

  &:hover ${ContextIcon}{
    opacity: 1;
    ${({ theme }) => theme.styles.global.mainMenu.iconBackground.hover};
    ${IconWrapper}{
      [stroke]{
        stroke: ${({ theme }) => theme.colors.icons['inverse']};
      }
    }
  }

  ${({ $isActive }) => $isActive && css`
    ${ContextIcon},
    &:hover ${ContextIcon}{
      ${({ theme }) => theme.styles.global.mainMenu.iconBackground.active};
    }
  `}
`;
const ContextActionButton = styled.button<{ menuOpen?: boolean, isActive: boolean }>`
  ${ContextActionBaseCSS}

  ${({ theme }) => theme && css`
    font-family: ${theme.fontFamily.ui};
    ${theme.typography.global.mainMenu.menuItem.default};
  `}

  ${({ menuOpen, theme }) => menuOpen && css`
    ${ContextTitle}{
      opacity: 1;
    }

    ${ContextIndicator}{
      opacity: 1;
      transition: opacity ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut} ${theme.animation.speed.fast};
    }
  `}

  &:hover ${ContextIcon}{
    opacity: 1;
    ${({ theme }) => theme.styles.global.mainMenu.iconBackground.hover};
    ${IconWrapper}{
      [stroke]{
        stroke: ${({ theme }) => theme.colors.icons['inverse']};
      }
    }
  }

  ${({ isActive }) => isActive && css`
    ${ContextIcon},
    &:hover ${ContextIcon}{
      ${({ theme }) => theme.styles.global.mainMenu.iconBackground.active};
    }
  `}
`;

interface IProps {
  title: string
  icon: string
  isActive: boolean
  menuOpen?: boolean
  submenuOpen?: boolean
  hasSubmenu?: boolean
  contextKey?: number
  href?: string
  compact?: boolean
  isExternalLink?: boolean
  onClickCallback?: (...args: any[]) => void
}

const ContextItem: React.FC<IProps> = ({
  hasSubmenu = false,
  contextKey = -1,
  submenuOpen,
  menuOpen,
  title,
  href,
  icon,
  compact,
  isActive,
  isExternalLink,
  onClickCallback }) => {

  const internal = (
    <React.Fragment>
      <ContextIcon {...{ compact }}>
        <Icon icon={icon} color={isActive ? 'inverse' : 'dimmed'} size={20} />
      </ContextIcon>
      <ContextTitle {...{ compact }}>{title}</ContextTitle>
      {hasSubmenu ? <ContextIndicator><Icon icon={submenuOpen ? 'Up' : 'Down'} color='dimmed' /></ContextIndicator> : null}
    </React.Fragment>);

  if (hasSubmenu) {
    return (
      <ContextActionButton menuOpen={menuOpen} isActive={isActive} onClick={() => onClickCallback && onClickCallback(contextKey)}>
        {internal}
      </ContextActionButton>
    );
  } else {
    return (
      isExternalLink
        ? (
          <StyledAnchor href={href} target='_blank'>
            <ContextWrapper $menuOpen={menuOpen}>
              {internal}
              <ExternalIconWrapper>
                <Icon icon='ExternalLink' color='dimmed' size={12} />
              </ExternalIconWrapper>
            </ContextWrapper>
          </StyledAnchor>
        )
        : (
          <ContextActionA
            $menuOpen={menuOpen}
            to={href ? href : '#'}
            $isActive={isActive}
            onClick={() => onClickCallback && onClickCallback(contextKey)}
          >
            {internal}
          </ContextActionA>)
    );
  }

};

export default ContextItem;