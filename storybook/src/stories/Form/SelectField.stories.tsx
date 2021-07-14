import React from 'react';
import styled from 'styled-components';
// import { text, select, boolean } from "@storybook/addon-knobs";
import {SelectField} from 'scorer-ui-kit';

export default {
  title: 'Form/atoms',
  component: SelectField,
  decorators: []
};


const Container = styled.div`
  margin: 20px;
`;

export const _SelectField = () => {
  return (
    <Container>
      <SelectField>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </SelectField>
    </Container>
  );
}