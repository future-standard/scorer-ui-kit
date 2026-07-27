import type React from 'react';
import { type HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../../hooks';
import Icon from '../../Icons/Icon';
import ChipButton from '../atoms/ChipButton';

export interface IChipDropdownItem {
  id: string;
  label: string;
  icon?: string; // icon name (@future-standard/icons)
  disabled?: boolean;
  onClick?: () => void;
}

interface OwnProps {
  items: IChipDropdownItem[];
  icon?: string; // trigger icon name, default the 3-dot kebab 'FilterEllipsis'
  triggerLabel?: string; // trigger aria-label (default 'Space actions')
  noDivider?: boolean; // pass-through: hide the chip's 1px left divider
  disabled?: boolean; // disable the trigger
  onOpenChange?: (open: boolean) => void;
}

export type IChipDropdown = OwnProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

/* Deviation from Figma "Spaces/Card Shadow": that shadow has no theme token, and its
   literal rgba pair (a blue drop + a white outer glow) read badly — the glow is invisible
   on light and a halo on dark. We reuse FilterDropdownContainer's dropdown shadow instead,
   which is theme-aware via --filter-button-shadow-color (primary-a3 light / black-a8 dark)
   and keeps every colour on a token. */
const Menu = styled.div`
  position: absolute;
  /* 8px below the cell — Figma has the 56px cell's menu instance starting at y=64 */
  top: calc(100% + 8px);
  left: -1px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 216px;
  padding: 4px 0;
  background: var(--grey-1);
  border: 1px solid var(--grey-4);
  border-radius: 4px;
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: var(--button-height, 32px);
  padding: 3px 8px;
  border: none;
  border-bottom: 1px solid var(--grey-7);
  background: transparent;
  cursor: pointer;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
  text-align: left;
  transition: background-color var(--speed-fast) var(--easing-primary-in-out);

  /* icon colour follows the row text — mirrors ChipButton/IconButton targeting [stroke] */
  & svg [stroke] { stroke: var(--grey-12); }

  &:last-child { border-bottom: none; }
  &:hover:enabled { background-color: var(--grey-3); }
  &:disabled { cursor: not-allowed; opacity: 0.5; }
`;

const ChipDropdown: React.FC<IChipDropdown> = ({
  items,
  icon = 'FilterEllipsis',
  triggerLabel = 'Space actions',
  noDivider = false,
  disabled = false,
  onOpenChange,
  onKeyDown,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // compose with any consumer onKeyDown — it would otherwise replace this one
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
      <ChipButton
        variant='icon'
        icon={icon}
        selected={isOpen}
        noDivider={noDivider}
        disabled={disabled}
        aria-label={triggerLabel}
        aria-haspopup='menu'
        aria-expanded={isOpen}
        onClick={toggle}
      />
      {isOpen && !disabled ? (
        <Menu role='menu'>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              type='button'
              role='menuitem'
              disabled={item.disabled}
              onClick={() => {
                item.onClick?.();
                close();
              }}
            >
              {item.icon ? <Icon icon={item.icon} size={14} /> : null}
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      ) : null}
    </Wrapper>
  );
};

export default ChipDropdown;
