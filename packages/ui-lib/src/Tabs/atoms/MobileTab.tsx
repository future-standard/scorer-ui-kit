import type React from 'react';
import { type ButtonHTMLAttributes, useCallback, useContext } from 'react';
import styled, { css } from 'styled-components';
import type { IStatusDot } from '../..';
import { resetButtonStyles } from '../../common/index';
import { IconWrapper } from '../../Icons/Icon';
import StatusIcon from '../../Icons/StatusIcon';
import { type ContextProps, TabContext } from '../Tabs';

const Container = styled.button`
  ${resetButtonStyles}
  flex-basis: auto;
  flex-grow: 1;
`;

const LinkTab = styled.div<{ $isActive: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

  ${({ theme }) => css`
    transition: border var(--speed-normal) var(--easing-primary-in-out);
    border-bottom: 5px solid ${theme.colors.menu.indicator};

    ${IconWrapper} {
      [stroke]{
        stroke: var(--dimmed);
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

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
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

interface IMobileTab extends ButtonHTMLAttributes<HTMLButtonElement> {
  tabFor: string;
  icon: string;
  closeId: string;
  counter?: number;
  status?: IStatusDot;
  customComponent?: React.ReactElement;
}

const MobileTab: React.FC<IMobileTab> = ({
  tabFor,
  icon,
  closeId,
  counter,
  status,
  customComponent: _customComponent,
  onClick,
  ...props
}) => {
  const { selected, setSelected }: ContextProps = useContext(TabContext);

  const onChangeTab = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(event);
      const newValue = selected === tabFor ? closeId : tabFor;
      setSelected(newValue);
    },
    [closeId, onClick, selected, setSelected, tabFor]
  );

  return (
    <Container {...props} onClick={onChangeTab}>
      <LinkTab $isActive={selected === tabFor}>
        <StatusIcon {...{ icon, status, counter }} />
      </LinkTab>
    </Container>
  );
};

export { MobileTab };
