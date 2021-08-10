import React from 'react';
import styled from 'styled-components';
import { SearchInput } from 'scorer-ui-kit';
import {  text } from "@storybook/addon-knobs";

export default {
  title: 'Form/Input',
  component: SearchInput,
  decorators: []
};

const Container = styled.div`
  margin: 20px;
`;

export const _SearchInput = () => {

  const inputPlaceholder = text("Placeholder", "Placeholder...");


  return (
    <Container>
      <SearchInput
        placeholder={inputPlaceholder}
      />
    </Container>
  )
}