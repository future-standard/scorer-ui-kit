import React from 'react';
import styled from 'styled-components';
import {  text } from "@storybook/addon-knobs";

import {IntroductionText} from 'scorer-ui-kit';

const Container = styled.div`
  margin: 100px;
`;

const IntroductionTextStory = {
  title: 'Pages/atoms',
  component: IntroductionText,
  decorators: []
};

export const _IntroductionText = () => {

  const introductionText = text("Text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.");

  return <Container><IntroductionText>{introductionText}</IntroductionText></Container>;

};

export default IntroductionTextStory;
