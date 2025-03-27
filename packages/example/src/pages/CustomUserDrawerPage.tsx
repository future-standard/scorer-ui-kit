import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TopBar, useThemeToggle } from 'scorer-ui-kit';
import ExamplesFilename from '../components/ExamplesFilename';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';


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
const hasSearch = true;
const useNotifications = true;
const hasLanguage = true;
const logoutLink = "#"



const CustomUserDrawerPage : React.FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();
  const { t } = useTranslation(['GlobalUI','Common']);

  const onLanguageToggle = useCallback(() => {
    const language = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
},[])


  const userDrawerBespoke = <CustomContentContainer>
    <ExampleText>
      <p>{t("Common:userDrawerTextP1")}</p>
      <p>{t("Common:userDrawerTextP2")}</p>
    </ExampleText>
  </CustomContentContainer>

  // userDrawerBespoke: See examples for implementation of this prop.

  return <Container>
    <ExamplesFilename>CustomUserDrawerPage.tsx</ExamplesFilename>
    <TopBar {...{
      userDrawerBespoke,
      loggedInUser,
      hasSearch,
      useNotifications,
      logoutLink,
      searchPlaceholder: t('Common:searchPlaceholder'),
      isLightMode,
      switchThemeText:t('GlobalUI:theme.switchTheme'),
      selectedThemeText: isLightMode ? t('GlobalUI:theme.lightMode') : t('GlobalUI:theme.darkMode'),
      onThemeToggle,
      hasLanguage,
      onLanguageToggle,
      selectedLangAttribute: i18n.language,
      selectedLanguageText: t(`GlobalUI:theme.${i18n.language}`),
      accountOptionText:t('Common:accountOptions'),
      currentUserText:t('GlobalUI:currentUser'),
      userSubmenu:[
        {
          href: "/user/accounts",
          text: t('Common:accounts'),
        },
        {
          href: "/user/billing",
          text: t('Common:billing'),
        },
        {
          href: "/user/payments",
          text: t('Common:payments'),
        },
      ]
    }} />
  </Container>;
};

export default CustomUserDrawerPage;