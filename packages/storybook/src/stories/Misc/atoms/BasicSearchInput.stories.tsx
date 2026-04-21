import { boolean, number, select, text } from '@storybook/addon-knobs';
import type React from 'react';
import { useCallback } from 'react';
import { BasicSearchInput } from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';

const BasicSearchInputStory = {
  title: 'Misc/atoms',
  component: BasicSearchInput,
  decorators: [],
  parameters: {
    jsx: { skip: 1 },
  },
};

const Container = styled.div`
  margin: 20px;
`;

export const _BasicSearchInput = () => {
  const inputPlaceholder = text('Placeholder', 'Search by name...');
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const noBackground = boolean('No Background', true);
  const color = select('Color', { Mono: 'mono', Dimmed: 'dimmed', Subtle: 'subtle' }, 'subtle');
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      textValue(value);
    },
    [textValue]
  );

  return (
    <Container>
      <BasicSearchInput
        placeholder={inputPlaceholder}
        onChange={handleChange}
        {...{ hasBorder, noBackground, color, iconSize, disabled }}
      />
    </Container>
  );
};

export default BasicSearchInputStory;
