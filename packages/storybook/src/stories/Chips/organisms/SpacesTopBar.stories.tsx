import { boolean } from '@storybook/addon-knobs';
import { useRef, useState } from 'react';
import {
  Button,
  ChipBar,
  ChipButton,
  ChipDropdown,
  ChipZoneBreak,
  EditableText,
  type IActiveDrawer,
  type IChipDropdownItem,
  type INotificationsHistory,
  type ISideDrawer,
  SplitButton,
  TopBar,
} from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import { sleep } from '../../helpers';

/* Spaces/Arrangement/Save/Reset content for the kit's real `TopBar`, passed in as
   `leftAreaElement`, plus the name bar passed in as `bottomAreaElement`. A demo, not a pattern
   to copy:
   - Admin is the `badge` prop (kit's `TopBarBadge`), not a bespoke button — it renders as a plain
     bordered pill unless given `onClick`/`linkTo`/`linkHref`, which switch it to interactive styling.
   - LayoutGrid / LayoutList stand in for the four layout glyphs, which no icon package provides.
   - The Crop/Full and Controls cells are app vocabulary, so they live here rather than in the
     library: the kit ships the compact chip, the bottom slot and `EditableText`, nothing more.
   - The name's `1:` prefix is the selected chip's position in `spaces`, so it is app state and stays
     here. Only the name itself is editable. */
const SpacesTopBarStory = {
  title: 'Chips/organisms',
  component: ChipBar,
  decorators: [],
};

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

/* The cell owns the padding and centres the 32px Button in the 56px band. */
const ResetCell = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`;

/* TopBar's own drawers are `position: fixed` against the true viewport edges. Without this,
   Storybook's ambient story padding leaves TopBar itself inset from those edges while an opened
   drawer still hugs them, so the two drift apart. */
const FixedTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

/* Figma's Spaces/Name Bar/Title. `bottomAreaElement` is an empty slot with no padding of its own, so
   the inset lives here — but 44px, not the design's 16px, and the difference is not a design choice.
   TopBar's top row insets `leftAreaElement` by 24px where the design has the chip bar flush at 0, so
   the Workspace chip's icon lands at 44 instead of the design's 20. 44px = that 24px row inset + the
   icon's own 20px inside its 56px cell, which is what puts the title under the icon on screen.
   Both numbers are TopBar's, so revisit this if BarRow's padding changes or the rows drift apart.

   4px between the number and the name, so the two read as one title rather than two cells. */
const NameBar = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding-left: 44px;
`;

// matches EditableText's own typography, so the number and the name sit on one line
const NameNumber = styled.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`;

// pushes the view controls to the far edge and lets the compact bar fill the row's height
const ViewControls = styled.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`;

const DrawerBody = styled.div`
  padding: 24px 16px;
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-12);
`;

const CONTROLS_DRAWER: ISideDrawer = {
  id: 'controls',
  width: '320px',
  content: <DrawerBody>Playback and camera controls would live here.</DrawerBody>,
};

// hoisted so the array identity is stable and TopBar's side-drawer validation does not re-run
const SIDE_DRAWERS = [CONTROLS_DRAWER];

const ARRANGEMENTS = [
  { id: '6-up', label: '6-up', icon: 'LayoutGrid' },
  { id: '4-up', label: '4-up', icon: 'LayoutGrid' },
  { id: '2-up', label: '2-up', icon: 'LayoutList' },
  { id: '1-big-2', label: '1 big + 2', icon: 'LayoutList' },
];

// ChipBar has no overflow handling, so the demo keeps the row to a sensible width
const MAX_SPACES = 6;

// an empty history is valid and renders the kit's own "no notifications" placeholder; omitting
// the prop instead leaves the opened drawer blank, since TopBar checks the prop's presence, not
// its contents
const NOTIFICATIONS_HISTORY: INotificationsHistory = { read: [], unread: [] };

interface ISpace {
  uid: string;
  name: string;
}

export const _SpacesTopBar = () => {
  const showWorkspace = boolean('Show workspace chip', true);
  const canReset = boolean('Reset enabled (dirty)', true);
  const showNameBar = boolean('Show name bar (bottom area)', true);
  const isTallNameBar = boolean('Taller name bar (40px)', false);
  const isSlowSave = boolean('Slow rename (shows Saving state)', false);

  // a stable uid with the number taken from position, so the chip you remove is the one that
  // unmounts and the chips to its right really do renumber
  const [spaces, setSpaces] = useState<ISpace[]>([
    { uid: 's1', name: 'Example Name' },
    { uid: 's2', name: 'Example Name' },
    { uid: 's3', name: 'Example Name' },
  ]);
  const [selectedUid, setSelectedUid] = useState('s3');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const [arrangementId, setArrangementId] = useState('4-up');
  // Crop = cover, Full = contain. The cell shows the state it is in and flips on click.
  const [isCrop, setIsCrop] = useState(true);
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex((space) => space.uid === selectedUid) + 1);
  const selectedSpace = spaces.find((space) => space.uid === selectedUid);
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
  const onAdminClick = action('admin-click');
  const onRename = action('rename-space');
  const onFitToggle = action('fit-toggle');
  const onControlsToggle = action('controls-toggle');

  const appendSpace = () => {
    const uid = `s${nextUid.current++}`;
    setSpaces([...spaces, { uid, name: 'Example Name' }]);
    setSelectedUid(uid);
    setIsWorkspaceActive(false);
  };

  // the name belongs to the Space, not to the row, so it follows the chip you switch back to
  const renameSpace = async (uid: string, name: string) => {
    if (isSlowSave) {
      // database wait example
      await sleep(1200);
    }
    // a functional update, unlike the rest of this story: the await above means `spaces` may have
    // gained or lost a cell by now, and a stale copy would bring a removed Space back
    setSpaces((current) =>
      current.map((space) => (space.uid === uid ? { ...space, name } : space))
    );
    onRename(uid, name);
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

  const leftAreaElement = (
    <>
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
    </>
  );

  /* The name bar. `Crop` / `GroupExpand` / `ViewSettings` stand in for Figma's corner-bracket,
     contain and sliders glyphs, none of which any icon package provides yet. Both cells keep a
     left hairline, so the bar opts in with `leadingDivider`. */
  const bottomAreaElement = (
    <>
      {/* The Workspace is not a Space: it has no position and no name of its own, so the bar drops
          the number and falls back to a fixed label. `disabled` rather than a different element, so
          the text keeps the same typography and the row does not shift as you switch between them. */}
      <NameBar>
        {workspaceActive ? null : <NameNumber>{`${selectedNumber}:`}</NameNumber>}
        <EditableText
          value={workspaceActive ? 'Workspace' : (selectedSpace?.name ?? '')}
          label={workspaceActive ? 'Workspace' : `Space ${selectedNumber} name`}
          disabled={workspaceActive}
          fieldWidth='200px'
          onSave={(name) => renameSpace(selectedUid, name)}
        />
      </NameBar>
      <ViewControls>
        <ChipBar isCompact leadingDivider aria-label='View controls'>
          <ChipButton
            variant='icon-text'
            icon={isCrop ? 'Crop' : 'GroupExpand'}
            label={isCrop ? 'Crop' : 'Full'}
            onClick={() => {
              onFitToggle(isCrop ? 'contain' : 'cover');
              setIsCrop(!isCrop);
            }}
          />
          <ChipButton
            variant='icon-text'
            icon='ViewSettings'
            label='Controls'
            barOnly
            selected={activeDrawer === 'controls'}
            onClick={() => {
              const next = activeDrawer === 'controls' ? null : 'controls';
              onControlsToggle(next);
              setActiveDrawer(next);
            }}
          />
        </ChipBar>
      </ViewControls>
    </>
  );

  return (
    <FixedTopBar>
      <TopBar
        loggedInUser='full.name@example.com'
        hasNotifications
        notificationsHistory={NOTIFICATIONS_HISTORY}
        badge={{ text: 'Admin', color: 'grey', onClick: onAdminClick }}
        leftAreaElement={leftAreaElement}
        bottomAreaElement={showNameBar ? bottomAreaElement : undefined}
        bottomAreaHeight={isTallNameBar ? '40px' : undefined}
        sideDrawers={SIDE_DRAWERS}
        activeDrawer={activeDrawer}
        onActiveDrawerChange={setActiveDrawer}
      />
    </FixedTopBar>
  );
};

export default SpacesTopBarStory;
