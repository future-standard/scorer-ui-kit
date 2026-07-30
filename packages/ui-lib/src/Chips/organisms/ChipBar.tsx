import type React from 'react';
import {
  Children,
  cloneElement,
  type HTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

interface OwnProps {
  /** the cells: any mix of ChipButton / ChipDropdown, in any order */
  children: ReactNode;
}

export type IChipBar = OwnProps & HTMLAttributes<HTMLDivElement>;

/* The `& > *` rule below pins every cell's width, so the row overflows instead of squashing — a
   consumer that needs scrolling wraps ChipBar itself. Without it, flex items default to
   flex-shrink: 1 and a narrow container silently shrinks the 56px cells — measured at 36px in a
   200px container — which is not a designed state. */
const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;

  & > * {
    flex-shrink: 0;
  }
`;

const NAV_KEYS = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];

const ChipBar: React.FC<IChipBar> = ({ children, onKeyDown, onFocus, ...props }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCells = useCallback(() => {
    const root = barRef.current;
    if (!root) {
      return [] as HTMLElement[];
    }
    return Array.from(root.querySelectorAll<HTMLElement>('button:not(:disabled)')).filter(
      (el) => !el.closest('[role="menu"]')
    );
  }, []);

  // roving tabindex — exactly one cell is tabbable, so the bar is a single tab stop
  useEffect(() => {
    const root = barRef.current;
    if (!root) {
      return;
    }

    const sync = () => {
      const focusables = getCells();
      const index = Math.min(activeIndex, focusables.length - 1);
      focusables.forEach((cell, i) => {
        cell.tabIndex = i === index ? 0 : -1;
      });
    };
    sync();

    /* A child can add a button or drop its `disabled` from its own state, without ChipBar
       re-rendering — an effect alone would miss that and leave a second native tab stop. Watching
       the subtree is the only way to stay authoritative over cells ChipBar does not own.
       `attributeFilter` must never include `tabindex`: sync() writes it, so observing it would
       re-enter this callback forever. */
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['disabled'],
    });
    return () => observer.disconnect();
  }, [activeIndex, getCells]);

  // A Fragment wrapper is not a supported child: toArray flattens arrays but not fragments, so the
  // wrapper itself arrives as the first element and noDivider lands on it — the leading chip keeps
  // its hairline, and React logs the invalid-prop warning only on re-render, never on mount.
  const cells = Children.toArray(children).filter(isValidElement);

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      onFocus?.(e);
      const index = getCells().indexOf(e.target as HTMLElement);
      if (index >= 0) {
        setActiveIndex(index);
      }
    },
    [getCells, onFocus]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (!NAV_KEYS.includes(e.key)) {
        return;
      }
      // an open ChipDropdown menu owns the keyboard
      if (barRef.current?.querySelector('[role="menu"]')) {
        return;
      }

      const focusables = getCells();
      const current = focusables.indexOf(document.activeElement as HTMLElement);
      if (focusables.length === 0 || current < 0) {
        return;
      }

      e.preventDefault();
      let next = current;
      if (e.key === 'ArrowLeft') {
        next = (current - 1 + focusables.length) % focusables.length;
      }
      if (e.key === 'ArrowRight') {
        next = (current + 1) % focusables.length;
      }
      if (e.key === 'Home') {
        next = 0;
      }
      if (e.key === 'End') {
        next = focusables.length - 1;
      }
      focusables[next]?.focus();
    },
    [getCells, onKeyDown]
  );

  return (
    <Bar
      ref={barRef}
      role='toolbar'
      aria-label='Chip bar'
      {...props}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {cells.map((child, i) =>
        // guard on child.type so a plain DOM child never gets an unknown noDivider attribute
        i === 0 && typeof child.type !== 'string'
          ? cloneElement(child as ReactElement<{ noDivider?: boolean }>, { noDivider: true })
          : child
      )}
    </Bar>
  );
};

export default ChipBar;
