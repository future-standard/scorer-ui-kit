import type React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../Icons/Icon';

export type IChipVariant = 'icon' | 'text';

interface OwnProps {
  variant?: IChipVariant; // default 'text'
  icon?: string; // icon name (@future-standard/icons) when variant='icon'
  label?: string; // numeral/text when variant='text' (falls back to children)
  selected?: boolean; // persistent selected state (Figma "Active"): wash + bar
  noDivider?: boolean; // force-hide the 1px left divider
}

export type IChipButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

interface IStyledChip {
  $selected: boolean;
  $showDivider: boolean;
}

const StyledChip = styled.button<IStyledChip>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
  transition:
    color var(--speed-normal) var(--easing-primary-in-out),
    background-color var(--speed-normal) var(--easing-primary-in-out);

  ${({ $showDivider }) => $showDivider && css`border-left: 1px solid var(--grey-4);`}

  /* icon colour follows state — mirrors IconButton.tsx targeting [stroke] */
  & svg [stroke] { stroke: var(--grey-12); }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1px;
    right: -1px;
    height: 4px;
    background-color: transparent;
    transition: background-color var(--speed-normal) var(--easing-primary-in-out);
  }
  &:hover:enabled::after { background-color: var(--primary-6); }

  /* keyboard focus ring (mouse/selected states keep outline: none above) */
  &:focus-visible {
    outline: 2px solid var(--primary-9);
    outline-offset: -2px;
  }

  ${({ $selected }) =>
    $selected &&
    css`
    background-color: var(--primary-a3);
    color: var(--primary-11);
    & svg [stroke] { stroke: var(--primary-11); }
    &::after { background-color: var(--primary-9); }
    &:hover:enabled::after { background-color: var(--primary-9); }
  `}

  &:disabled { cursor: not-allowed; opacity: 0.5; }
`;

const ChipButton: React.FC<IChipButton> = ({
  variant = 'text',
  icon,
  label,
  selected = false,
  noDivider = false,
  children,
  ...props
}) => {
  const showDivider = variant === 'text' && !noDivider;
  return (
    <StyledChip
      type='button'
      aria-pressed={selected}
      $selected={selected}
      $showDivider={showDivider}
      {...props}
    >
      {variant === 'icon' && icon ? <Icon icon={icon} size={16} /> : (label ?? children)}
    </StyledChip>
  );
};

export default ChipButton;
