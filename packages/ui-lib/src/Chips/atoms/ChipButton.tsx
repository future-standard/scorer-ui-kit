import type React from 'react';
import {
  type ButtonHTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import styled, { css, keyframes } from 'styled-components';
import Icon from '../../Icons/Icon';
import { ChipCompactContext } from '../ChipCompactContext';

export type IChipVariant = 'icon' | 'text' | 'icon-text';

interface OwnProps {
  /** content mode (default 'text') */
  variant?: IChipVariant;
  /** the shorter name-bar cell: auto width, 12px side padding, 2px state bar. Left undefined on
   *  purpose — a ChipBar supplies it, and `false` opts a single cell back out */
  isCompact?: boolean;
  /** selected shows the bar only: no wash, and the label stays on --grey-12 */
  barOnly?: boolean;
  /** icon name (@future-standard/icons) when variant='icon' or 'icon-text' */
  icon?: string;
  /** numeral/text when variant='text' or 'icon-text' (falls back to children) */
  label?: string;
  /** persistent selected state (Figma "Active"): wash + bar */
  selected?: boolean;
  /** force-hide the 1px left divider */
  noDivider?: boolean;
  /** collapse the cell to zero width — the removal animation */
  leaving?: boolean;
  /** collapse finished (or was skipped): safe to unmount the cell now */
  onLeaveEnd?: () => void;
}

export type IChipButton = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

interface IStyledChip {
  $selected: boolean;
  $showDivider: boolean;
  $leaving: boolean;
  $isCompact: boolean;
  $barOnly: boolean;
}

/* Removal. No `from` block, so the collapse starts from whatever the chip currently computes and
   the 56px width lives in exactly one place. In a flex row this also slides every later cell left
   on its own — no measuring, no FLIP.

   The padding has to go too. With `box-sizing: border-box` a used width cannot shrink below the
   element's own horizontal padding, so a compact cell's `0 12px` would leave a 24px stub sitting
   in the row until the caller unmounts it. It is a no-op for the padding-less 56px cell. */
const collapse = keyframes`
  to {
    width: 0;
    padding-left: 0;
    padding-right: 0;
    opacity: 0;
    border-left-width: 0;
  }
`;

/* `& svg [stroke]`: icon colour follows state — mirrors IconButton.tsx targeting [stroke].

   `&:focus-visible`: the keyboard focus ring. Mouse and selected states keep the `outline: none`
   set above.

   `$leaving`: `overflow: hidden` and `min-width: 0` are scoped to the leaving state on purpose —
   permanent overflow would clip the 4px bar's 1px overhang, and a flex item will not shrink past
   its content without `min-width: 0`.

   `$isCompact`: `height: 100%` so a name-bar cell tracks whatever height the row is set to and
   the state bar stays on the row's bottom edge. `min-height` is the fallback for a compact chip
   used outside a ChipBar, where a percentage height resolves to auto and would collapse the cell
   to its 20px line box. */
const StyledChip = styled.button<IStyledChip>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

  &:focus-visible {
    outline: 2px solid var(--primary-9);
    outline-offset: -2px;
  }

  ${({ $isCompact }) =>
    $isCompact &&
    css`
    width: auto;
    height: 100%;
    min-height: 32px;
    padding: 0 12px;
    justify-content: flex-start;
    white-space: nowrap;

    &::after { height: 2px; }
  `}

  ${({ $selected, $barOnly }) =>
    $selected &&
    css`
    ${
      !$barOnly &&
      css`
      background-color: var(--primary-a3);
      color: var(--primary-11);
      & svg [stroke] { stroke: var(--primary-11); }
    `
    }
    &::after { background-color: var(--primary-9); }
    &:hover:enabled::after { background-color: var(--primary-9); }
  `}

  &:disabled { cursor: not-allowed; opacity: 0.5; }

  ${({ $leaving }) =>
    $leaving &&
    css`
    overflow: hidden;
    min-width: 0;
    pointer-events: none;
    animation: ${collapse} var(--speed-fast) var(--easing-primary-in-out) forwards;

    @media (prefers-reduced-motion: reduce) { animation: none; }
  `}
`;

const ChipButton: React.FC<IChipButton> = ({
  variant = 'text',
  isCompact,
  barOnly = false,
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

  // the cell's own prop wins, so `isCompact={false}` opts one cell out of a compact bar
  const barIsCompact = useContext(ChipCompactContext);
  const compact = isCompact ?? barIsCompact;

  /* 'icon-text' shows both; 'text' never shows a glyph even when one is passed. `variant='icon'`
     with no `icon` still falls back to the label, as it always has — dropping that would blank
     out any cell relying on it. */
  const showIcon = variant !== 'text' && !!icon;
  const showText = variant !== 'icon' || !icon;

  /* `selected` means "wears the wash and the bar", which for a chip is also "pressed". But a button
     that owns a popup is a menu button, whose state is aria-expanded — carrying aria-pressed too
     would announce it as a toggle button as well. So the cell that opens a menu keeps the visual
     state without the toggle semantics. */
  const isMenuButton = props['aria-haspopup'] !== undefined;

  /* A compact cell is `width: auto`, and CSS cannot interpolate `auto` to the keyframe's `width: 0`
     — it falls back to discrete interpolation, so the cell holds its full width and then snaps at
     the halfway point, dragging every later cell with it instead of sliding them left. Pinning the
     measured width before the browser paints gives the implicit `from` an interpolable length. The
     keyframe still wins the cascade for `width`, so this only supplies the starting value; the
     fixed-width 56px cell needs none of it. */
  const chipRef = useRef<HTMLButtonElement>(null);
  useLayoutEffect(() => {
    const chip = chipRef.current;
    if (!chip) {
      return;
    }
    chip.style.width = leaving && compact ? `${chip.offsetWidth}px` : '';
  }, [leaving, compact]);

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
      ref={chipRef}
      type='button'
      aria-pressed={isMenuButton ? undefined : selected}
      $selected={selected}
      $showDivider={showDivider}
      $leaving={leaving}
      $isCompact={compact}
      $barOnly={barOnly}
      {...props}
      onAnimationEnd={handleAnimationEnd}
    >
      {showIcon ? <Icon icon={icon} size={16} /> : null}
      {showText ? (label ?? children) : null}
    </StyledChip>
  );
};

export default ChipButton;
