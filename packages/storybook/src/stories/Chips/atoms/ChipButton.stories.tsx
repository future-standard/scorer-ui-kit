import { boolean, select, text } from '@storybook/addon-knobs';
import { ChipButton, type IChipVariant } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import { generateIconList } from '../../helpers';

const ChipButtonStory = {
  title: 'Chips/atoms',
  component: ChipButton,
  decorators: [],
};

/* The chip on its own, outside a ChipBar — so this is also the standalone case: nothing suppresses
   the leading hairline here (that is ChipBar's job), which is what the "No divider" knob is for,
   and a compact chip falls back to its 32px min-height because there is no row to take a height
   from. `barOnly` only shows a difference while `Selected` is on: it drops the wash and holds the
   label on --grey-12, leaving just the bar. */
export const _ChipButton = () => {
  const iconList = generateIconList();
  const variant = select(
    'Variant',
    { Icon: 'icon', Text: 'text', 'Icon + text': 'icon-text' },
    'text'
  );
  const icon = select('Icon', iconList, 'LayoutGrid');
  const label = text('Label', '1');
  const isCompact = boolean('Compact', false);
  const selected = boolean('Selected', false);
  const barOnly = boolean('Bar only (no wash, needs Selected)', false);
  const noDivider = boolean('No divider', false);
  const onClick = action('chip-click');

  return (
    <ChipButton
      variant={variant as IChipVariant}
      icon={icon}
      label={label}
      isCompact={isCompact}
      selected={selected}
      barOnly={barOnly}
      noDivider={noDivider}
      onClick={onClick}
      // the rendered label is the accessible name in icon-text mode, so an aria-label that dropped
      // it would fail WCAG 2.5.3 — the same trap ChipDropdown documents for its labelled trigger
      aria-label={
        variant === 'icon' ? 'Workspace' : variant === 'text' ? `Space ${label}` : undefined
      }
    />
  );
};

export default ChipButtonStory;
