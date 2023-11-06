import React, { FC, useCallback, useState } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, lightTheme, PageHeader } from "scorer-ui-kit";


const GlobalUIPage: FC = () => {

  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(localStorage.getItem('isDarkThemeEnabled') !== 'false');

  const onChangeTheme = useCallback(() => {
    setIsDarkThemeEnabled((enabled) => {
      localStorage.isDarkThemeEnabled = !enabled;
      if (enabled) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
      return !enabled;
    });

  }, []);

  return (
      <ThemeProvider theme={lightTheme}>
        <GlobalUI
          accountOptionText="Account Options"
          canAlwaysPin
          isLightMode={!isDarkThemeEnabled}
          switchThemeText='SWITCH THEME'
          selectedThemeText={isDarkThemeEnabled ? 'DARK MODE' : 'LIGHT MODE'}
          onThemeToggle={onChangeTheme}
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
          maxWidth="1200px"
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
          {/* <MainBG>
              <StyledContent> */}
              <PageHeader
                title='Welcome'
                introductionText='Thanks for using our UI library.'
              />
            {/* </StyledContent>
          </MainBG> */}
        </GlobalUI>
      </ThemeProvider>
  );
};

export default GlobalUIPage;
