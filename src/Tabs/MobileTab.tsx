import React, { useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { TabContext, ContextProps } from './Tabs';
import Icon, { IconWrapper } from '../Icons/Icon';
import { resetButtonStyles } from '../common/index';

const Container = styled.button`
  ${resetButtonStyles}
  flex-basis: auto;
  flex-grow: 1;
`;

const LinkTab = styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({ theme }) => css`
    transition: border ${theme.animation.speed.normal} ${theme.animation.easing.primary.easeInOut};
    border-bottom: 5px solid ${theme.colors.menu.indicator};

    ${IconWrapper} {
      [stroke]{
        stroke: ${theme.colors.icons['dimmed']};
      }
    }

    &:hover {
      border-bottom-color: ${theme.colors.menu.hover};
      ${IconWrapper} {
        [stroke]{
          stroke: ${theme.colors.menu.hover};
        }
      }
    }
  `};

  ${({ isActive, theme }) => isActive && css`
    &, &:hover {
      border-bottom-color: ${theme.colors.menu.active};
      ${IconWrapper} {
        [stroke]{
          stroke: ${theme.colors.menu.active};
        }
      }
    }
  `}
`;

interface IMobileTab {
  tabFor: string
  icon: string
  closeId: string
}

const MobileTab: React.FC<IMobileTab> = ({ tabFor, icon, closeId, ...props }) => {
  const { selected, setSelected }: ContextProps = useContext(TabContext);

  const onChangeTab = useCallback((tabId: string) => {
    const newValue = (selected === tabId) ? closeId : tabId;
    setSelected(newValue);
  }, [closeId, selected, setSelected]);

  return (
    <Container {...props} onClick={() => onChangeTab(tabFor)}>
      <LinkTab isActive={selected === tabFor}>
        <Icon {...{ icon }} size={18} />
      </LinkTab>
    </Container>
  );
};

export { MobileTab };