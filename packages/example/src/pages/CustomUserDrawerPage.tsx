import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { TopBar } from 'scorer-ui-kit';
import ExamplesFilename from '../components/ExamplesFilename';


const Container = styled.div`
  margin: 0;
`

const CustomContentContainer = styled.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`

const ExampleText = styled.div`
  font-size: 14px;
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  line-height: 20px;
  color: var(--grey-9);
`

const loggedInUser = "full.name@example.com";
const userSubmenu = [
  {
    text: 'Accounts',
    href: '#'
  },
  {
    text: 'Billing',
    href: '#'
  },
  {
    text: 'Payments',
    href: '#'
  }
]

const hasSearch = true;
const useNotifications = true;
const hasLanguage = true;
const logoutLink = "#"
const searchPlaceholder = "Search area names, etc.";



const CustomUserDrawerPage : React.FC = () => {
  const  [attributeLanguage, setAttributeLanguage] = useState('us');

  const onLanguageToggle = useCallback(() => {
    setAttributeLanguage((prev:  string) => {
      const newLang = prev === 'en'? 'ja' : 'en'
      return newLang;
    })
  },[])


  const userDrawerBespoke = <CustomContentContainer>
    <ExampleText>
      {attributeLanguage === 'en' ?
        (<>
          <p>Custom content can be injected under the user menu like this.</p>
          <p>The styling for this is left to you to include, keeping it flexible.</p>
        </>)
        :
        (<>
          <p>カスタムコンテンツは、このようにユーザーメニューの下に挿入することができます。</p>
          <p>スタイリングは自由に設定できます。</p>
        </>)
      }
    </ExampleText>
  </CustomContentContainer>

  // userDrawerBespoke: See examples for implementation of this prop.

  return <Container>
    <ExamplesFilename>CustomUserDrawerPage.tsx</ExamplesFilename>
    <TopBar {...{
      userDrawerBespoke,
      loggedInUser,
      userSubmenu,
      hasSearch,
      useNotifications,
      logoutLink,
      searchPlaceholder,
      hasLanguage,
      onLanguageToggle,
      selectedLangAttribute: attributeLanguage,
      selectedLanguageText: attributeLanguage === 'en'? 'ENGLISH' : '日本語'
    }} />
  </Container>;
};

export default CustomUserDrawerPage;