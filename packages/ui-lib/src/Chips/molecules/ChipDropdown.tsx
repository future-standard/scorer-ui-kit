import type React from 'react';
import { type HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from '../../hooks';
import Icon from '../../Icons/Icon';
import ChipButton from '../atoms/ChipButton';

export interface IChipDropdownItem {
  id: string;
  label: string;
  /** icon name (@future-standard/icons) */
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface OwnProps {
  items: IChipDropdownItem[];
  /** icon-only mode: the trigger icon, 16px. Labelled mode: the leading glyph, 18px */
  icon?: string;
  /** visible trigger text, e.g. '6-up'; switches the trigger to labelled mode */
  label?: string;
  /** items[].id of the current row: --grey-4 background, check, radio semantics */
  selectedId?: string;
  /** icon name for the current-row indicator (default 'Success') */
  checkIcon?: string;
  /** trigger aria-label; defaulted to 'Space actions' in icon-only mode only */
  triggerLabel?: string;
  /** pass-through: hide the chip's 1px left divider */
  noDivider?: boolean;
  /** disable the trigger */
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type IChipDropdown = OwnProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

/* The open state is the 4px Primary/9 bar only, with no Primary/a3 wash. Open still maps to
   ChipButton's `selected` so the bar (and the hover bar) come from the atom, and only the wash is
   dropped here — otherwise an open menu sitting next to an active chip reads as one merged block.
   `&&` doubles the class so this beats the atom's own rule without depending on stylesheet order.

   $labelled holds the Arrangement cell's geometry, scoped to the transient prop so the icon-only
   trigger keeps the atom's 56 x 56 square untouched.

   `white-space: nowrap`: wrapping would break the 56px height, not widen the cell.

   `color` and the `[stroke]` override: the label stays on --grey-12 and only the bar turns primary;
   the atom ties its selected state to --primary-11 text, far louder on a word than on a glyph. */
const Trigger = styled(ChipButton)<{ $labelled: boolean }>`
  && {
    background-color: transparent;

    ${({ $labelled }) =>
      $labelled &&
      css`
      width: auto;
      padding: 0 16px 0 14px;
      gap: 8px;
      justify-content: flex-start;
      white-space: nowrap;
      color: var(--grey-12);
      & svg [stroke] { stroke: var(--grey-12); }
    `}
  }
`;

/* Uses FilterDropdownContainer's dropdown shadow, not Figma's "Spaces/Card Shadow" — do not switch
   back: that shadow has no theme token, and its literal rgba pair is invisible on light and a halo
   on dark. */
const Menu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: -1px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 216px;
  padding: 0;
  overflow: hidden;
  background: var(--grey-1);
  border: 1px solid var(--grey-7);
  border-radius: 4px;
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
`;

/* `& svg [stroke]`: --grey-10 keeps the glyph a step lighter than the label; the same [stroke]
   targeting as ChipButton/IconButton.

   `$current` comes after the hover rule so it wins: --grey-4 is a step darker than the --grey-3
   hover in both themes, so letting hover win would make the current row look less selected when
   pointed at. */
const MenuItem = styled.button<{ $current: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: var(--button-height, 32px);
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid var(--grey-7);
  background: transparent;
  cursor: pointer;
  user-select: none;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
  text-align: left;
  transition: background-color var(--speed-fast) var(--easing-primary-in-out);

  & svg [stroke] { stroke: var(--grey-10); }

  &:last-child { border-bottom: none; }
  &:hover:enabled { background-color: var(--grey-3); }
  &:disabled {
    cursor: not-allowed;
    color: var(--grey-7);
    & svg [stroke] { stroke: var(--grey-7); }
  }

  ${({ $current }) =>
    $current &&
    css`
    background-color: var(--grey-4);
    &:hover:enabled { background-color: var(--grey-5); }
  `}
`;

/* auto margin rather than absolute, so it reuses MenuItem's padding-right */
const CheckSlot = styled.span`
  display: flex;
  margin-left: auto;

  & svg [stroke] { stroke: var(--primary-11); }
`;

const ChipDropdown: React.FC<IChipDropdown> = ({
  items,
  icon = 'FilterEllipsis',
  label,
  selectedId,
  checkIcon = 'Success',
  triggerLabel,
  noDivider = false,
  disabled = false,
  onOpenChange,
  onKeyDown,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // empty counts as absent: a consumer binding label={state} gets the square back
  const isLabelled = Boolean(label);

  // an undefined check, not a truthiness one: absent must leave the menu as it shipped, but a
  // selectedId matching nothing is a real state — a radio group with nothing chosen yet
  const marksCurrent = selectedId !== undefined;

  // 'Space actions' on a button that visibly reads "6-up" is a WCAG 2.5.3 (Label in Name) failure,
  // so labelled mode takes the visible text as its name and only an explicit triggerLabel overrides
  const ariaLabel = triggerLabel ?? (isLabelled ? undefined : 'Space actions');

  const setOpen = useCallback(
    (next: boolean) => {
      setIsOpen(next);
      onOpenChange?.(next);
    },
    [onOpenChange]
  );

  const close = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  // only notify on a real close — the document listener also fires while closed
  const onClickOutside = useCallback(() => {
    if (isOpen) {
      close();
    }
  }, [isOpen, close]);

  useClickOutside(wrapperRef, onClickOutside);

  // becoming disabled while open must also reset the state the trigger reads
  // (selected / aria-expanded), not just unmount the panel
  useEffect(() => {
    if (disabled && isOpen) {
      close();
    }
  }, [disabled, isOpen, close]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    },
    [isOpen, close, onKeyDown]
  );

  return (
    <Wrapper ref={wrapperRef} {...props} onKeyDown={handleKeyDown}>
      {/* labelled mode passes no `variant` and no ChipButton `label`: either would win over the
          children in the atom and drop the glyph and caret */}
      <Trigger
        $labelled={isLabelled}
        variant={isLabelled ? undefined : 'icon'}
        icon={isLabelled ? undefined : icon}
        selected={isOpen}
        noDivider={noDivider}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        onClick={toggle}
      >
        {isLabelled ? (
          <>
            {icon ? <Icon icon={icon} size={18} /> : null}
            {label}
            {/* deliberately does not flip when open */}
            <Icon icon='Down' size={12} />
          </>
        ) : null}
      </Trigger>
      {isOpen && !disabled ? (
        <Menu role='menu'>
          {items.map((item) => {
            const isCurrent = marksCurrent && item.id === selectedId;
            return (
              <MenuItem
                key={item.id}
                type='button'
                // so a screen reader gets "current" too, not just the glyph
                role={marksCurrent ? 'menuitemradio' : 'menuitem'}
                aria-checked={marksCurrent ? isCurrent : undefined}
                $current={isCurrent}
                disabled={item.disabled}
                onClick={() => {
                  item.onClick?.();
                  close();
                }}
              >
                {item.icon ? <Icon icon={item.icon} size={14} /> : null}
                {item.label}
                {isCurrent ? (
                  // decorative: aria-checked carries it. `light` because non-scaling-stroke keeps
                  // `regular` at 1.5px, muddy on a 14px tick.
                  <CheckSlot aria-hidden='true'>
                    <Icon icon={checkIcon} size={14} weight='light' />
                  </CheckSlot>
                ) : null}
              </MenuItem>
            );
          })}
        </Menu>
      ) : null}
    </Wrapper>
  );
};

export default ChipDropdown;
