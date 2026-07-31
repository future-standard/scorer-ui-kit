import { boolean } from '@storybook/addon-knobs';
import { useRef, useState } from 'react';
import { ChipBar, ChipButton, ChipDropdown, type IChipDropdownItem } from 'scorer-ui-kit';
import { action } from 'storybook/actions';

const ChipBarStory = {
  title: 'Chips/organisms',
  component: ChipBar,
  decorators: [],
};

// ChipBar has no overflow handling (it is a plain flex row), so the demo keeps the bar inside a
// sensible width
const MAX_SPACES = 6;

interface ISpace {
  uid: string;
}

export const _ChipBar = () => {
  const showWorkspace = boolean('Show workspace chip', true);

  // Spaces carry a stable uid and take their number from their position. That is what makes the
  // removal legible: the chip you removed is the one that unmounts, and the chips to its right
  // really do get a new number. Keying by the number instead would silently unmount the
  // *rightmost* chip and change no label at all.
  const [spaces, setSpaces] = useState<ISpace[]>([{ uid: 's1' }, { uid: 's2' }, { uid: 's3' }]);
  const [selectedUid, setSelectedUid] = useState('s1');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex((space) => space.uid === selectedUid) + 1);

  const onWorkspaceClick = action('workspace-click');
  const onSpaceClick = action('space-click');
  const onAdd = action('add-space');
  const onDuplicate = action('duplicate-space');
  const onRemove = action('remove-space');

  // Add and Duplicate both append: a Space carries no content of its own here, so a copy is just
  // another Space on the right, taking the next number.
  const appendSpace = () => {
    const uid = `s${nextUid.current++}`;
    setSpaces([...spaces, { uid }]);
    setSelectedUid(uid);
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

  // Mark the cell as leaving and let the chip collapse; it calls onLeaveEnd when it is done (or
  // immediately, if the user prefers reduced motion). The numbers to its right therefore only
  // shift once the gap has finished closing.
  const removeSelectedSpace = () => setLeavingUid(selectedUid);

  const menuItems: IChipDropdownItem[] = [
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

  return (
    // room below the bar so the open dropdown menu is visible in the canvas
    <div style={{ padding: '0 0 220px' }}>
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
        {/* the Workspace is not a Space, so it cannot be duplicated or removed —
            the whole menu is disabled while it is the active cell */}
        <ChipDropdown
          items={menuItems}
          disabled={workspaceActive}
          onOpenChange={action('open-change')}
        />
      </ChipBar>
    </div>
  );
};

export default ChipBarStory;
