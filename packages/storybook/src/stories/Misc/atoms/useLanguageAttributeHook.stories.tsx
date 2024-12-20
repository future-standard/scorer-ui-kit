import {useLanguageAttribute, IntroductionText, Button } from "scorer-ui-kit";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
export default {
  title: 'Hooks',
  component: useLanguageAttribute,
  decorators: []
};

const Container = styled.div`
  margin: 100px;
`;

const Title = styled.h2`
  color: var(--gray-2);
  &:lang(ja) {
    color: red;
  }
`;

export const _useLanguageAttribute = () => {

  const {onLanguageAttributeToggle} = useLanguageAttribute(['en','ja'], 'ja');
  const [selectedLang, setSelectedLang] = useState('japanese');

  const title = selectedLang === 'english' ? 'Welcome' : 'ようこそ';
  const buttonText = selectedLang === 'english' ? 'Language Toggle': '言語トグル'
  const introductionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales non mauris sed fermentum. Proin non elit at lectus semper lacinia a sed nisi. Sed nibh neque, sagittis at laoreet non, sodales non nisl. Nam nec lectus erat. Etiam bibendum tristique ipsum eu dictum. Nam egestas felis in mauris molestie tristique.";

  const onLanguageToggle = useCallback(() => {
    const updatedLanguage = selectedLang === 'english' ? 'japanese' : 'english';
    setSelectedLang(updatedLanguage);
    onLanguageAttributeToggle();
  },[onLanguageAttributeToggle, selectedLang]);

  return <Container>
    <Title >{title}</Title>
    <IntroductionText>{introductionText}</IntroductionText>
    <Button onClick={onLanguageToggle}>{buttonText}</Button>
  </Container>;
};