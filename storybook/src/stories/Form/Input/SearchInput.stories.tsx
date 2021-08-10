import React, { useCallback } from 'react';
import styled from 'styled-components';
import { SearchInput } from 'scorer-ui-kit';
import { text, boolean, select, number } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default {
  title: 'Form/Input',
  component: SearchInput,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

export const _SearchInput = () => {

  const inputPlaceholder = text("Placeholder", "Search by name...");
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const color = select("Color", { Mono: "mono", Dimmed: "dimmed", Subtle: "subtle"}, "subtle");
  const iconSize = number('Icon size', 11);

  const handleChange = useCallback((e) => {
    const { value } = e.target;
    textValue(value);
  }, [textValue]);


  return (
    <Container>
      <SearchInput
        placeholder={inputPlaceholder}
        onChange={handleChange}
        {...{hasBorder, color, iconSize}}
      />
    </Container>
  )
}