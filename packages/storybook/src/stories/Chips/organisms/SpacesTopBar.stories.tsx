import { boolean } from '@storybook/addon-knobs';
import { useRef, useState } from 'react';
import {
  Button,
  ChipBar,
  ChipButton,
  ChipDropdown,
  ChipZoneBreak,
  type IChipDropdownItem,
  SplitButton,
} from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

/* The left half of Figma "Top Bar 56 (componentized)" (9159:6142), assembled from kit components.

   Not finished work, and not to be copied as-is:
   - Top Bar Right (Admin / Notifications / Account) is omitted on purpose — the kit's own `TopBar`
     already provides that chrome, so imitating it here would invite rebuilding it.
   - LayoutGrid / LayoutList stand in for the four layout glyphs, which are in no icon package yet.
   - The container stands in for `TopBar`, whose `leftAreaElement` (PR #675) is not on this branch.
     Its `padding: 0 16px 0 24px` will inset the chips, so they will not sit flush at x=0. */
const SpacesTopBarStory = {
  title: 'Chips/organisms',
  component: ChipBar,
  decorators: [],
};

// no left padding, so the flush-at-x=0 gap against the real TopBar stays visible
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`;

/* Save and Reset hold form controls rather than chips, so they sit outside any ChipBar with their
   own 56px geometry. Do not switch this to styled(SplitButton): it spreads ...rest after its own
   className, which drops the split-button-<design> class and its theming. */
const SaveCell = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`;

/* The cell owns the padding and centres the 32px Button in the 56px band. Closest kit variant to
   Figma's Reset, but --grey-12 text where the design asks --grey-10. */
const ResetCell = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`;

const ARRANGEMENTS = [
  { id: '6-up', label: '6-up', icon: 'LayoutGrid' },
  { id: '4-up', label: '4-up', icon: 'LayoutGrid' },
  { id: '2-up', label: '2-up', icon: 'LayoutList' },
  { id: '1-big-2', label: '1 big + 2', icon: 'LayoutList' },
];

// ChipBar has no overflow handling in v1, so the demo keeps the row to a sensible width
const MAX_SPACES = 6;

interface ISpace {
  uid: string;
}

export const _SpacesTopBar = () => {
  const showWorkspace = boolean('Show workspace chip', true);
  const canReset = boolean('Reset enabled (dirty)', true);

  // a stable uid with the number taken from position, so the chip you remove is the one that
  // unmounts and the chips to its right really do renumber
  const [spaces, setSpaces] = useState<ISpace[]>([{ uid: 's1' }, { uid: 's2' }, { uid: 's3' }]);
  const [selectedUid, setSelectedUid] = useState('s3');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const [arrangementId, setArrangementId] = useState('4-up');
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex((space) => space.uid === selectedUid) + 1);
  const arrangement = ARRANGEMENTS.find(({ id }) => id === arrangementId);

  const onWorkspaceClick = action('workspace-click');
  const onSpaceClick = action('space-click');
  const onAdd = action('add-space');
  const onDuplicate = action('duplicate-space');
  const onRemove = action('remove-space');
  const onArrangement = action('arrangement-select');
  const onSave = action('save-space');
  const onSaveAs = action('save-space-as');
  const onReset = action('reset-layout');

  const appendSpace = () => {
    const uid = `s${nextUid.current++}`;
    setSpaces([...spaces, { uid }]);
    setSelectedUid(uid); // the new Space becomes the active one
    setIsWorkspaceActive(false);
  };

  const dropSpace = (uid: string) => {
    const index = spaces.findIndex((space) => space.uid === uid);
    if (index < 0) {
      return; // already gone
    }
    const remaining = spaces.filter((space) => space.uid !== uid);
    setSpaces(remaining);
    // the Space that sat to the right takes its number — clamp when the last one went
    setSelectedUid(remaining[Math.min(index, remaining.length - 1)].uid);
    setLeavingUid(null);
    setIsWorkspaceActive(false);
  };

  // ChipButton collapses the cell and calls onLeaveEnd when done, so the renumbering waits for the
  // gap to close
  const removeSelectedSpace = () => setLeavingUid(selectedUid);

  // interpolating the active Space into these labels is the consumer's job, not ChipDropdown's
  const spaceMenuItems: IChipDropdownItem[] = [
    {
      id: 'add',
      label: 'Add Space',
      icon: 'Add',
      disabled: spaces.length >= MAX_SPACES,
      onClick: () => {
        onAdd();
        appendSpace();
      },
    },
    {
      id: 'duplicate',
      label: `Duplicate Space ${selectedNumber}`,
      icon: 'Copy',
      disabled: spaces.length >= MAX_SPACES,
      onClick: () => {
        onDuplicate(selectedNumber);
        appendSpace();
      },
    },
    {
      id: 'remove',
      label: `Remove Space ${selectedNumber}`,
      icon: 'Delete',
      disabled: spaces.length <= 1,
      onClick: () => {
        onRemove(selectedNumber);
        removeSelectedSpace();
      },
    },
  ];

  const arrangementItems: IChipDropdownItem[] = ARRANGEMENTS.map(({ id, label, icon }) => ({
    id,
    label,
    icon,
    onClick: () => {
      onArrangement(id);
      setArrangementId(id);
    },
  }));

  // one row per Space with the active one as mainButtonId, which SplitButton excludes from the
  // dropdown. Derived from `spaces`, so it tracks additions and removals on its own.
  const saveButtonList = [
    ...spaces.map((space, index) => ({
      id: `save-${space.uid}`,
      text: `Save Space ${index + 1}`,
      onClickCallback: () => onSave(String(index + 1)),
    })),
    {
      id: 'add-new',
      text: 'Add new space',
      icon: 'Add',
      disabled: spaces.length >= MAX_SPACES,
      onClickCallback: () => {
        onSaveAs();
        appendSpace();
      },
    },
  ];

  return (
    // room below the bar so the open menus are visible in the canvas
    <div style={{ padding: '0 0 260px' }}>
      <TopBar>
        {/* 280px here against Figma's 268: the shipped ⋯ cell is a 56px square, Figma's is 44px */}
        <ChipBar aria-label='Spaces'>
          {showWorkspace ? (
            <ChipButton
              variant='icon'
              icon='LayoutGrid'
              aria-label='Workspace'
              selected={workspaceActive}
              onClick={() => {
                onWorkspaceClick();
                setIsWorkspaceActive(true);
              }}
            />
          ) : null}
          {spaces.map((space, index) => {
            const number = String(index + 1);
            return (
              <ChipButton
                key={space.uid}
                leaving={space.uid === leavingUid}
                onLeaveEnd={() => dropSpace(space.uid)}
                variant='text'
                label={number}
                selected={!workspaceActive && space.uid === selectedUid}
                aria-label={`Space ${number}`}
                onClick={() => {
                  onSpaceClick(number);
                  setSelectedUid(space.uid);
                  setIsWorkspaceActive(false);
                }}
              />
            );
          })}
          {/* the Workspace is not a Space, so it cannot be duplicated or removed */}
          <ChipDropdown
            items={spaceMenuItems}
            disabled={workspaceActive}
            onOpenChange={action('space-menu-open-change')}
          />
        </ChipBar>

        {/* both zone breaks present, so the "cells beside a break drop their border" rule reads */}
        <ChipZoneBreak />
        <ChipBar aria-label='Layout controls'>
          <ChipDropdown
            items={arrangementItems}
            // the trigger glyph tracks the value, as the Figma component description requires
            icon={arrangement?.icon ?? 'LayoutGrid'}
            label={arrangement?.label}
            selectedId={arrangementId}
            // leads with the value on screen: an aria-label that dropped it would fail WCAG 2.5.3
            triggerLabel={arrangement ? `${arrangement.label} arrangement` : undefined}
            onOpenChange={action('arrangement-open-change')}
          />
        </ChipBar>
        <SaveCell>
          <SplitButton mainButtonId={`save-${selectedUid}`} buttonList={saveButtonList} />
        </SaveCell>
        <ResetCell>
          <Button design='text-only' noPadding disabled={!canReset} onClick={onReset}>
            Reset
          </Button>
        </ResetCell>
        <ChipZoneBreak />
      </TopBar>
    </div>
  );
};

export default SpacesTopBarStory;
