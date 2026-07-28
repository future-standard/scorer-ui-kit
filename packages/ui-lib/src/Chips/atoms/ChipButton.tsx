import type React from 'react';
import { type ButtonHTMLAttributes, useCallback, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from '../../Icons/Icon';

export type IChipVariant = 'icon' | 'text';

interface OwnProps {
  variant?: IChipVariant; // default 'text'
  icon?: string; // icon name (@future-standard/icons) when variant='icon'
  label?: string; // numeral/text when variant='text' (falls back to children)
  selected?: boolean; // persistent selected state (Figma "Active"): wash + bar
  noDivider?: boolean; // force-hide the 1px left divider
  leaving?: boolean; // collapse the cell to zero width — the removal animation
  onLeaveEnd?: () => void; // collapse finished (or was skipped): safe to unmount the cell now
}

export type IChipButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

interface IStyledChip {
  $selected: boolean;
  $showDivider: boolean;
  $leaving: boolean;
}

/* Removal. No `from` block, so the collapse starts from whatever the chip currently computes and
   the 56px width lives in exactly one place. In a flex row this also slides every later cell left
   on its own — no measuring, no FLIP. */
const collapse = keyframes`
  to {
    width: 0;
    opacity: 0;
    border-left-width: 0;
  }
`;

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

  ${({ $leaving }) =>
    $leaving &&
    css`
    /* both scoped to the leaving state on purpose: permanent overflow would clip the 4px bar's
       1px overhang, and a flex item will not shrink past its content without min-width: 0 */
    overflow: hidden;
    min-width: 0;
    pointer-events: none;
    animation: ${collapse} var(--speed-fast) var(--easing-primary-in-out) forwards;

    @media (prefers-reduced-motion: reduce) { animation: none; }
  `}
`;

const ChipButton: React.FC<IChipButton> = ({
  variant = 'text',
  icon,
  label,
  selected = false,
  noDivider = false,
  leaving = false,
  onLeaveEnd,
  onAnimationEnd,
  children,
  ...props
}) => {
  const showDivider = !noDivider;

  // fire onLeaveEnd exactly once per collapse
  const hasFired = useRef(false);
  const fireLeaveEnd = useCallback(() => {
    if (hasFired.current) {
      return;
    }
    hasFired.current = true;
    onLeaveEnd?.();
  }, [onLeaveEnd]);

  useEffect(() => {
    if (!leaving) {
      hasFired.current = false;
      return;
    }
    // with reduced motion there is no animation, so animationend never arrives — tell the caller
    // straight away, or the cell it is holding open would never be dropped
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fireLeaveEnd();
    }
  }, [leaving, fireLeaveEnd]);

  // compose with a consumer handler rather than replacing it
  const handleAnimationEnd = useCallback(
    (e: React.AnimationEvent<HTMLButtonElement>) => {
      onAnimationEnd?.(e);
      if (leaving && e.target === e.currentTarget) {
        fireLeaveEnd();
      }
    },
    [leaving, fireLeaveEnd, onAnimationEnd]
  );

  return (
    <StyledChip
      type='button'
      aria-pressed={selected}
      $selected={selected}
      $showDivider={showDivider}
      $leaving={leaving}
      {...props}
      onAnimationEnd={handleAnimationEnd}
    >
      {variant === 'icon' && icon ? <Icon icon={icon} size={16} /> : (label ?? children)}
    </StyledChip>
  );
};

export default ChipButton;
