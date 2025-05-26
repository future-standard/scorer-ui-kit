import React, { useCallback } from 'react';
import styled from 'styled-components';
import { BasicSearchInput } from 'scorer-ui-kit';
import { text, boolean, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import { emptyCallbackForStory } from '../../helpers';

const BasicSearchInputStory = {
  title: 'Misc/atoms',
  component: BasicSearchInput,
  decorators: [],
  parameters: {
    jsx: { skip: 1 }
  }
};

const Container = styled.div`
  margin: 20px;
`;

export const _BasicSearchInput = () => {

  const inputPlaceholder = text("Placeholder", "Search by name...");
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const noBackground = boolean('No Background', true);
  const color = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle"}, "subtle");
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false)

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    textValue(value);
  }, [textValue]);


  return (
    <Container>
      <BasicSearchInput
        placeholder={inputPlaceholder}
        onChange={emptyCallbackForStory(handleChange)}
        {...{hasBorder, noBackground, color, iconSize, disabled}}
      />
    </Container>
  )
}

export default BasicSearchInputStory;