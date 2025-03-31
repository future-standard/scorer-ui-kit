import React, { FC, useCallback, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, defaultTheme, useThemeToggle, ContentLayout, SplitLayout, FlexContentPlaceholder } from "scorer-ui-kit";
import ExamplesFilename from '../components/ExamplesFilename';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const SplitLayouts: FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();
  const { t } = useTranslation(['GlobalUI','Common']);
  const [layout] = useState<'horizontal'|'vertical'>('horizontal');
  const [reverse] = useState<boolean>(false);

  const onLanguageToggle = useCallback(() => {
    const language = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
},[])


  const sideStateCallback = useCallback((currentState) => {
    console.log(`Side Area Current State: ${currentState}`);
  },[]);

  const areaAContent = <FlexContentPlaceholder title='Main Area' />;
  const areaBContent = <FlexContentPlaceholder title='Side Area' />;

  return (
      <ThemeProvider theme={defaultTheme}>
        <ExamplesFilename>SplitLayout.tsx</ExamplesFilename>
        <GlobalUI
          accountOptionText={t('Common:accountOptions')}
          canAlwaysPin
          isLightMode={isLightMode}
          switchThemeText={t('GlobalUI:theme.switchTheme')}
          selectedThemeText={isLightMode ? t('GlobalUI:theme.lightMode') : t('GlobalUI:theme.darkMode') }
          onThemeToggle={onThemeToggle}
          onLanguageToggle={onLanguageToggle}
          selectedLangAttribute={i18n.language}
          selectedLanguageText={t(`GlobalUI:theme.${i18n.language}`)}
          hasSwitchTheme
          keepOpenText={t('GlobalUI:keepOpenText')}
          autoHideText={t('GlobalUI:autoHideText')}
          supportText={t('GlobalUI:supportText')}
          content={{
            items: [
              {
                href: "/welcome",
                icon: "Home",
                title: t('Common:pageTitle'),
              },
              {
                href: "/company",
                icon: "Detection",
                submenu: [
                  {
                    href: "/company/about",
                    title: t('Common:aboutUs'),
                  },
                  {
                    href: "/company/team",
                    title: t('Common:team'),
                  },
                  {
                    href: "/company/contact",
                    title: t('Common:contact'),
                  },
                  {
                    href: "/company/table-example",
                    title: t('Common:tableExample'),
                  },
                  {
                    href: "https://www.google.com/",
                    isExternalLink: true,
                    title: t('Common:externalLink'),
                  },
                ],
                title: t('Common:company'),
              },
              {
                href: "/services",
                icon: "Usage",
                submenu: [
                  {
                    title: t("Common:onlineServices"),
                  },
                  {
                    href: "/services/custom",
                    title: t('Common:serviceCustom'),
                  },
                  {
                    href: "/services/special",
                    title: t('Common:serviceSpecial'),
                  },
                  {
                    href: "/services/extra-special",
                    title: t('Common:serviceExtraSpecial'),
                  },
                  {
                    title: t('Common:onSiteServices'),
                  },
                  {
                    href: "/services/special",
                    title: t('Common:serviceSpecial'),
                  },
                  {
                    href: "/services/extra-special",
                    title: t('Common:serviceExtraSpecial'),
                  },
                ],
                title: t('Common:services'),
              },
              {
                href: "https://www.google.com/maps",
                icon: "Zone",
                isExternalLink: true,
                title: t('Common:externalLink'),
              },
            ],
          }}
          currentUserText={t('GlobalUI:currentUser')}
          customDrawer={{
            customComponent: <h1 style={{ textAlign: "center" }}>{t('Common:helloDrawer')}</h1>,
            icon: "Add",
            status: "danger",
            width: "280px;",
          }}
          hasCurrentUser
          hasLanguage
          hasLogout
          hasNotifications
          hasSearch
          home="#"
          loggedInUser="full.name@example.com"
          logoutLink="#"
          logoutText="Logout"
          maxWidth="none"
          notificationsHistory={{
            noNotificationsText: t('Common:noNotificationsText'),
            read: [
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "3 days ago",
                title: "Device is off",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn on",
                time: "3 days ago",
                title: "Device is on",
              },
              {
                imgUrl: "",
                message: "The device has bean correctly added",
                time: "3 days ago",
                title: "A new device was added",
              },
            ],
            readNotificationsText: t('Common:readNotificationsText'),
            unread: [
              {
                imgUrl: "",
                message:
                  "A short message limited to two lines. Extra text will just truncat...",
                time: "Just Now",
                title: "Event Type",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "1 min ago",
                title: "Device is off",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn on",
                time: "6 mins ago",
                title: "Device is on",
              },
              {
                imgUrl: "",
                message:
                  "The connections is not working properly. Please verify your connection or contact your personal support.",
                time: "1 hour ago",
                title: "Connection was interrupted",
              },
              {
                imgUrl: "",
                message: "The device has correctly turn off",
                time: "3 hour ago",
                title: "Device is off",
              },
            ],
            unreadNotificationsText: t('Common:unreadNotificationsText'),
          }}
          searchPlaceholder={t('Common:searchPlaceholder')}
          supportUrl="/support"
          userSubmenu={[
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
          ]}
        >

          <ContentLayout layout="dashboard">
            <SplitLayout
              layout={layout}
              persist
              persistenceKey='my_unique_key'
              reverse={reverse}
              mainArea={{ content: areaAContent, minSize: 120 }}
              sideArea={{ content: areaBContent, collapsable: true, minSize: 200, defaultCollapsed: true , onSideAreaStateChange: sideStateCallback,  }} />
          </ContentLayout>

        </GlobalUI>
      </ThemeProvider>
  );
};

export default SplitLayouts;
