import { boolean, select } from '@storybook/addon-knobs';
import { useState } from 'react';
import { ChipDropdown, type IChipDropdownItem } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import { generateIconList } from '../../helpers';

const ChipDropdownArrangementStory = {
  title: 'Chips/molecules',
  component: ChipDropdown,
  decorators: [],
};

/* ChipDropdown's labelled mode — Figma "Spaces/Top Bar/Arrangement Cell" (9154:6033). Same
   component as the ellipsis cell; passing `label` switches the trigger to glyph + text + caret.

   LayoutGrid / LayoutList stand in for the four layout glyphs, which are in no icon package yet. */
const ARRANGEMENTS = [
  { id: '6-up', label: '6-up', icon: 'LayoutGrid' },
  { id: '4-up', label: '4-up', icon: 'LayoutGrid' },
  { id: '2-up', label: '2-up', icon: 'LayoutList' },
  { id: '1-big-2', label: '1 big + 2', icon: 'LayoutList' },
];

export const _ChipDropdownArrangement = () => {
  const iconList = generateIconList();

  // clearing `label` returns the trigger to the icon-only 56px square. A toggle, not a text knob:
  // the trigger text tracks the selected row rather than being free-form.
  const labelled = boolean('Labelled mode (off = icon-only 56px trigger)', true);
  const checkIcon = select('Check icon', iconList, 'Success');
  const disabled = boolean('Disabled', false);

  // state, so clicking a row actually moves the check
  const [selectedId, setSelectedId] = useState('6-up');
  const onSelect = action('arrangement-select');

  const current = ARRANGEMENTS.find(({ id }) => id === selectedId);

  const items: IChipDropdownItem[] = ARRANGEMENTS.map(({ id, label, icon }) => ({
    id,
    label,
    icon,
    onClick: () => {
      onSelect(id);
      setSelectedId(id);
    },
  }));

  return (
    // room below the trigger so the open menu is visible in the canvas
    <div style={{ padding: '20px 20px 220px' }}>
      <ChipDropdown
        items={items}
        icon={current?.icon ?? 'LayoutGrid'}
        label={labelled ? current?.label : undefined}
        selectedId={selectedId}
        checkIcon={checkIcon}
        /* aria-label replaces the content as the accessible name, so it has to lead with the value
           on screen — otherwise "6-up" is unreachable by voice and fails WCAG 2.5.3 */
        triggerLabel={current ? `${current.label} arrangement` : undefined}
        // no left divider: in the top bar a Zone Break owns that hairline
        noDivider
        disabled={disabled}
        onOpenChange={action('open-change')}
      />
    </div>
  );
};

export default ChipDropdownArrangementStory;
