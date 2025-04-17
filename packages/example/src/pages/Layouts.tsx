import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, defaultTheme, PageHeader, useThemeToggle, ContentLayout, Tab, TabList, TabContent, Label, Button, TextField, FullWidthContentBlock, IHeaderContent, ButtonsStack, IButtonStack } from "scorer-ui-kit";
import ExamplesFilename from "../components/ExamplesFilename";
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const FullWidthExampleContent = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: var(--grey-8) 1px dotted;
  margin-bottom: 20px;
`

const Layouts: FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();
  const { t } = useTranslation(['GlobalUI','Common']);

  const onLanguageToggle = useCallback(() => {
      const language = i18n.language === 'ja' ? 'en' : 'ja';
      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
  },[])

  const defaultBtn : IButtonStack[] = [
    {id:'primaryBase0', buttonType: 'default', text:t('Common:exampleAction')},
  ]

  const ExampleContent : IHeaderContent = {
    UtilityHeaderOptions: {
      back: { label: t('Common:breadcrumbs.back'), link: "/" },
      breadcrumbs: [{text:t('Common:breadcrumbs.firstText'), href:'/'},{text:t('Common:breadcrumbs.secondText'), href:'#2'},{text:t('Common:breadcrumbs.thirdText'), href:'#3'},{text:t('Common:breadcrumbs.fourText'), href:'#4'},{text:t('Common:breadcrumbs.fiveText'), href:'#5'}],
      showBreadcrumbs: true,
      share: { show: true, label: t('Common:share'), link: "https://www.example.com", copiedLabel: "Copied" }
    },
    PageHeaderArea: <PageHeader
    title={t('Common:pageTitle')}
    introductionText={t('Common:pageIntroduction')}
    icon="Home"
    rightContent={<ButtonsStack buttons={defaultBtn}/>}
    />,
    TabsElementArea:
      <TabList defaultTabId='tab1'>
        <Tab tabFor='tab1'>{t('Common:home')}</Tab>
        <Tab tabFor='tab2'>{t('Common:example1')}</Tab>
        <Tab tabFor='tab3'>{t('Common:example2')}</Tab>
      </TabList>
  }


  return (
      <ThemeProvider theme={defaultTheme}>
        <ExamplesFilename>Layouts.tsx</ExamplesFilename>
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
          badge={{
            text: t('Common:badgeTitle'),
            color: 'primary',
            linkTo: '#',
            linkText: t('GlobalUI:login')
          }}
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
          logoutText={t('GlobalUI:logout')}
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

          <ContentLayout layout="default" HeaderContent={ExampleContent}>
            <TabContent tabId='tab1'>
              <div>
                <h1>Full Width Container</h1>
                <p>{t('Common:descriptionTab1')}</p>

                <FullWidthContentBlock>
                  <FullWidthExampleContent />
                </FullWidthContentBlock>

                <h2>Lorem Ipsum</h2>
                <p>In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.</p>
                <p>Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.</p>
                <p>Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.</p>

                <h2>Dolor Sit Amet</h2>
                <p>In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.</p>
                <p>Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.</p>
                <p>Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.</p>
                <p>Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum.</p>
                <p>Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim.</p>

                <h2>Proident Nostrud</h2>
                <p>In nisi laborum officia ipsum dolore ipsum veniam culpa aliquip. Incididunt magna nisi veniam sit incididunt enim tempor. Qui nulla quis adipisicing laboris id enim laborum. Occaecat exercitation irure non labore aliqua ea occaecat do non. Fugiat anim officia excepteur tempor laboris duis proident ea adipisicing deserunt excepteur. Magna excepteur enim ex voluptate voluptate exercitation elit qui fugiat.</p>
                <p>Esse tempor est et ut exercitation Lorem veniam esse fugiat aliqua commodo exercitation. Qui laborum nostrud proident. Do do ullamco aute duis aliqua voluptate culpa elit anim nisi. Officia consectetur ut elit occaecat ullamco proident laborum culpa exercitation incididunt incididunt id sunt in in. Consequat laboris culpa non proident aute do non pariatur occaecat non nulla. Voluptate proident anim esse esse minim excepteur sit Lorem consequat aliquip pariatur cillum do. Cupidatat culpa cillum elit culpa reprehenderit. Sint voluptate consectetur quis consequat esse ad quis eiusmod occaecat commodo proident in fugiat pariatur magna.</p>
                <p>Duis sunt incididunt deserunt veniam qui aliquip pariatur. Incididunt id qui adipisicing nisi aliquip eiusmod mollit labore esse ipsum dolore adipisicing. Adipisicing eu exercitation ipsum ea laboris. Incididunt in esse consequat officia mollit aute nostrud mollit amet laboris commodo dolor deserunt eiusmod deserunt.</p>
                <p>Proident nostrud nulla exercitation et magna commodo dolore proident consequat voluptate qui laboris. Esse in ex incididunt excepteur. Proident laborum cupidatat enim nulla ex ullamco nulla laboris elit dolore ex aliquip. Occaecat amet commodo sit sit reprehenderit. Eiusmod eu ea tempor ex ex minim culpa laboris consequat. Consequat fugiat ipsum duis id pariatur magna mollit sint sit adipisicing adipisicing. Sint qui non mollit incididunt velit nulla deserunt excepteur sint qui tempor reprehenderit ipsum.</p>
                <p>Anim occaecat commodo cupidatat ea consectetur veniam consequat dolore magna quis amet laboris. Occaecat adipisicing dolor sunt aute sint duis officia reprehenderit sunt magna ea fugiat cupidatat officia dolore. Tempor ipsum magna Lorem sit aliqua veniam ullamco ullamco nostrud veniam officia sunt officia. Irure pariatur qui ad do ea laborum esse adipisicing adipisicing consectetur ad mollit dolore. Dolor nisi mollit excepteur ipsum cupidatat amet labore cillum nisi id aliquip elit. Aute mollit ex aliquip enim.</p>

              </div>
            </TabContent>
            <TabContent tabId='tab2'>
              <div>
                <Label htmlFor='fullname' labelText={t('Common:titleTab2')} />
                <TextField fieldState='default' required label={t('Common:formName')} name='fullname' id='fullname' />
                <TextField fieldState='default' required label={t('Common:formDepartment')} name='department' id='department'/>
                <Button design='primary' size='small'> Save </Button>
              </div>
            </TabContent>
            <TabContent tabId='tab3'>
              <div>
                <Label htmlFor='content2' labelText={t('Common:titleTab3')}/>
                <Label htmlFor='lorem' labelText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet erat et sapien pulvinar efficitur. Quisque tristique massa at auctor rhoncus. Ut venenatis sem id gravida volutpat. Phasellus faucibus accumsan sapien, id pellentesque dolor consectetur quis. Duis non rhoncus nunc. Suspendisse et rhoncus tortor.' />
                <Button design='primary' size='small'> OK </Button>
              </div>
            </TabContent>
          </ContentLayout>

        </GlobalUI>
      </ThemeProvider>
  );
};

export default Layouts;
