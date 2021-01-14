import React from 'react';
import styled from 'styled-components';
import { TextArea } from 'scorer-ui-kit';

const Container = styled.div``;

export default {
  title: 'Form/Input',
  component: TextArea,
  decorators: []
};

export const TextareaInput = () => {
    return <Container>
      <TextArea></TextArea>
    </Container>
};