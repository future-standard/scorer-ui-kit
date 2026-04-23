import { boolean, number, select, text } from '@storybook/addon-knobs';
import { useCallback } from 'react';
import { DebouncedSearcher } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const DebouncedSearcherStory = {
  title: 'Misc/molecules',
  component: DebouncedSearcher,
  decorators: [],
  parameters: {
    jsx: { skip: 1 },
  },
};

const Container = styled.div`
  margin: 20px;
`;

export const _DebouncedSearcher = () => {
  const inputPlaceholder = text('Placeholder', 'Search by name...');
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const color = select('Color', { Mono: 'mono', Dimmed: 'dimmed', Subtle: 'subtle' }, 'subtle');
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);
  const defaultValue = text('Default Value', '');

  const handleChange = useCallback(
    (debounceInput: string) => {
      textValue(debounceInput);
    },
    [textValue]
  );

  return (
    <Container>
      <DebouncedSearcher
        placeholder={inputPlaceholder}
        onDebouncedChange={handleChange}
        {...{ hasBorder, color, iconSize, disabled, defaultValue }}
      />
    </Container>
  );
};

export default DebouncedSearcherStory;
