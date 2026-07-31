import { boolean } from '@storybook/addon-knobs';
import { ChipBar, ChipButton, ChipDropdown, ChipZoneBreak } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const ChipZoneBreakStory = {
  title: 'Chips/atoms',
  component: ChipZoneBreak,
  decorators: [],
};

// stands in for the consumer's top bar: the band only reads as a separation against the zones
// on either side of it
const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`;

// the alternative the band replaces — a plain hairline between the two zones
const Hairline = styled.div`
  flex-shrink: 0;
  width: 1px;
  height: 56px;
  background-color: var(--grey-4);
`;

export const _ChipZoneBreak = () => {
  const useZoneBreak = boolean('Use zone break (off = plain 1px divider)', true);
  const trailingBreak = boolean('Trailing zone break', true);
  const onClick = action('cell-click');

  const Separator = useZoneBreak ? ChipZoneBreak : Hairline;

  return (
    <TopBar>
      <ChipBar aria-label='Spaces'>
        <ChipButton variant='icon' icon='LayoutGrid' aria-label='Workspace' onClick={onClick} />
        <ChipButton label='1' onClick={onClick} aria-label='Space 1' />
        <ChipButton label='2' onClick={onClick} aria-label='Space 2' />
        <ChipButton label='3' selected onClick={onClick} aria-label='Space 3' />
        <ChipDropdown
          items={[
            { id: 'add', label: 'Add Space', icon: 'Add', onClick },
            { id: 'duplicate', label: 'Duplicate Space 3', icon: 'Copy', onClick },
            { id: 'remove', label: 'Remove Space 3', icon: 'Delete', onClick },
          ]}
        />
      </ChipBar>

      <Separator />

      <ChipBar aria-label='Layout controls'>
        <ChipButton variant='icon' icon='LayoutList' aria-label='Arrangement' onClick={onClick} />
        <ChipButton variant='icon' icon='Download' aria-label='Save' onClick={onClick} />
      </ChipBar>

      {trailingBreak ? <Separator /> : null}
    </TopBar>
  );
};

export default ChipZoneBreakStory;
