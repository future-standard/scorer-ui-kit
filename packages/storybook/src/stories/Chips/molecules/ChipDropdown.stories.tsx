import { boolean } from '@storybook/addon-knobs';
import { ChipDropdown, type IChipDropdownItem } from 'scorer-ui-kit';
import { action } from 'storybook/actions';

const ChipDropdownStory = {
  title: 'Chips/molecules',
  component: ChipDropdown,
  decorators: [],
};

export const _ChipDropdown = () => {
  const noDivider = boolean('No divider', false);
  const disabled = boolean('Disabled', false);

  const items: IChipDropdownItem[] = [
    { id: 'add', label: 'Add Space', icon: 'Add', onClick: action('add-space') },
    {
      id: 'duplicate',
      label: 'Duplicate Space 3',
      icon: 'Copy',
      onClick: action('duplicate-space'),
    },
    { id: 'remove', label: 'Remove Space 3', icon: 'Delete', onClick: action('remove-space') },
  ];

  return (
    // room below the trigger so the open menu is visible in the canvas
    <div style={{ padding: '20px 20px 220px' }}>
      <ChipDropdown
        items={items}
        noDivider={noDivider}
        disabled={disabled}
        onOpenChange={action('open-change')}
      />
    </div>
  );
};

export default ChipDropdownStory;
