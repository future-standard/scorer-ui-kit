import React from 'react';
import { Button, PageHeader } from 'scorer-ui-kit';
import styled from 'styled-components';


const StyledButtonStory = {
  title: 'Form/Buttons',
  component: Button,
  decorators: []
};

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  margin: 20px;
`;

const StyledCancelButton = styled(Button)`
  margin-right: 10px;
`;

export const StyledWrapperPreservesDesignVariant = () => {
  return (
    <Container>
      <Wrapper>
        <PageHeader
          title='Plain Button'
          introductionText='Reference — design prop applied directly, no styled() wrapper.'
        />
        <Button design='secondary'>Secondary</Button>
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Wrapped with styled(Button)'
          introductionText='Wrapped with styled() — design variant must be preserved alongside the wrapper\'s own class.'
        />
        <StyledCancelButton design='secondary'>Secondary</StyledCancelButton>
      </Wrapper>
      <Wrapper>
        <PageHeader
          title='Primary Reference'
          introductionText='Baseline primary to make the design difference visible.'
        />
        <Button design='primary'>Primary</Button>
      </Wrapper>
    </Container>
  );
};

export default StyledButtonStory;
