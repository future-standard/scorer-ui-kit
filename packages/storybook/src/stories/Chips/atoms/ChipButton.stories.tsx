import { boolean, select, text } from '@storybook/addon-knobs';
import { ChipButton, type IChipVariant } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import { generateIconList } from '../../helpers';

const ChipButtonStory = {
  title: 'Chips/atoms',
  component: ChipButton,
  decorators: [],
};

export const _ChipButton = () => {
  const iconList = generateIconList();
  const variant = select('Variant', { Icon: 'icon', Text: 'text' }, 'text');
  const icon = select('Icon', iconList, 'LayoutGrid');
  const label = text('Label', '1');
  const selected = boolean('Selected', false);
  const noDivider = boolean('No divider', false);
  const onClick = action('chip-click');

  return (
    <ChipButton
      variant={variant as IChipVariant}
      icon={icon}
      label={label}
      selected={selected}
      noDivider={noDivider}
      onClick={onClick}
      aria-label={variant === 'icon' ? 'Workspace' : `Space ${label}`}
    />
  );
};

export default ChipButtonStory;
