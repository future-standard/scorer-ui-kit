import React, { FC } from "react";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, defaultTheme, PageHeader, useThemeToggle, ContentLayout, Tab, TabList, TabContent, Label, Button, TextField, FullWidthContentBlock } from "scorer-ui-kit";
import { IHeaderContent } from "scorer-ui-kit/dist/Layouts";


const Layouts: FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();
  
  const FullWidthExampleContent = styled.div`
    width: 100%;
    padding: 20px 0;
    border-bottom: var(--grey-8) 1px dotted;
    margin-bottom: 20px;
  `

  const ExampleContent : IHeaderContent = {
    UtilityHeaderOptions: {
      backLink: '/',
      breadcrumbs: [{text:'Examples', href:'/'},{text:'Two', href:'#2'},{text:'Three', href:'#3'},{text:'Four', href:'#4'},{text:'Five', href:'#5'}],
      showBreadcrumbs: true,
      showShareLink: true,
      shareLink: 'http://www.example.com/'
    },
    PageHeaderArea: <PageHeader
    title='Welcome'
    introductionText='Thanks for using our UI library.'
    icon="Home"
    />,
    TabsElementArea: 
      <TabList defaultTabId='tab1'>
        <Tab tabFor='tab1'>Home</Tab>
        <Tab tabFor='tab2'>Example One</Tab>
        <Tab tabFor='tab3'>Example Two</Tab>
      </TabList>
    
  }


  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalUI
          accountOptionText="Account Options"
          canAlwaysPin
          isLightMode={isLightMode}
          switchThemeText='SWITCH THEME'
          selectedThemeText={isLightMode ? 'LIGHT MODE' : 'DARK MODE' }
          onThemeToggle={onThemeToggle}
          hasSwitchTheme
          content={{
            items: [
              {
                href: "/welcome",
                icon: "Home",
                title: "Welcome",
              },
              {
                href: "/company",
                icon: "Detection",
                submenu: [
                  {
                    href: "/company/about",
                    title: "About us",
                  },
                  {
                    href: "/company/team",
                    title: "Team",
                  },
                  {
                    href: "/company/contact",
                    title: "Contact",
                  },
                  {
                    href: "/company/table-example",
                    title: "Table Example",
                  },
                  {
                    href: "https://www.google.com/",
                    isExternalLink: true,
                    title: "External link",
                  },
                ],
                title: "Company",
              },
              {
                href: "/services",
                icon: "Usage",
                submenu: [
                  {
                    title: "Online Services",
                  },
                  {
                    href: "/services/custom",
                    title: "Service custom",
                  },
                  {
                    href: "/services/special",
                    title: "Service special",
                  },
                  {
                    href: "/services/extra-special",
                    title: "Service extra special",
                  },
                  {
                    title: "On site Services",
                  },
                  {
                    href: "/services/special",
                    title: "Service special",
                  },
                  {
                    href: "/services/extra-special",
                    title: "Service extra special",
                  },
                ],
                title: "Services",
              },
              {
                href: "https://www.google.com/maps",
                icon: "Zone",
                isExternalLink: true,
                title: "External link",
              },
            ],
          }}
          currentUserText="Current User"
          customDrawer={{
            customComponent: <h1>Hello Drawer</h1>,
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
            noNotificationsText: "No new notifications",
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
            readNotificationsText: "New",
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
            unreadNotificationsText: "Read",
          }}
          searchPlaceholder="Search area names, etc."
          supportUrl="/support"
          userSubmenu={[
            {
              href: "/user/accounts",
              text: "Accounts",
            },
            {
              href: "/user/billing",
              text: "Billing",
            },
            {
              href: "/user/payments",
              text: "Payments",
            },
          ]}
        >
          
          <ContentLayout layout="default" HeaderContent={ExampleContent}>
            <TabContent tabId='tab1'>
              <div>
                <h1>Full Width Container</h1>
                <p>The below line uses the FullWidthContentBlock component to break out of the layout and span the full width of the browser.</p>
                <FullWidthContentBlock>
                  <FullWidthExampleContent />
                </FullWidthContentBlock>
                <h2>Example</h2>
                <p>Commodo culpa dolore mollit eu cupidatat exercitation eiusmod quis et ad in. Veniam aliqua consequat occaecat id adipisicing pariatur enim dolor pariatur ipsum excepteur quis anim. Sit dolore officia deserunt veniam culpa ipsum anim pariatur tempor esse dolore cillum laboris ullamco.</p>
              </div>
            </TabContent>
            <TabContent tabId='tab2'>
              <div>
                <Label htmlFor='fullname' labelText='Content of tab 1' />
                <TextField fieldState='default' required label='Full Name' name='fullname' id='fullname' />
                <TextField fieldState='default' required label='Department' name='department' id='department'/>
                <Button design='primary' size='small'> Save </Button>
              </div>
            </TabContent>
            <TabContent tabId='tab3'>
              <div>
                <Label htmlFor='content2' labelText='Content of tab 2'/>
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
