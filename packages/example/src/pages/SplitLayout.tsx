import React, { FC, useState, useRef } from "react";
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { GlobalUI, defaultTheme, useThemeToggle, ContentLayout, SplitLayout, ISplitLayoutHandles } from "scorer-ui-kit";
import { IHeaderContent } from "scorer-ui-kit/dist/Layouts";

const Arrow = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid var(--grey-10);
    border-left: 0;
    border-bottom: 0;
    border-radius: 0 3px 0 0;


    &.t { top: 24px; }
    &.b { bottom: 24px; }
    &.l { left: 24px; }
    &.r { right: 24px; }
  `

  const ContentPlaceholder = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    background: var(--grey-3);
    border: 12px solid var(--grey-6);
    box-sizing: border-box;
    flex: 1;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.2px;
    color: var(--grey-10);
  `

  const FloatingDemoControls = styled.div`
    position: fixed;
    z-index: 10;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;

    button {
      background: #fff9;
      border: 1px solid #aaa;
      text-transform: uppercase;
      font-size: 12px;
      padding: 4px 8px;
      letter-spacing: 0.2px;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background: #fff;
        box-shadow: 0 2px 2px #0001;
      }
      &:active {
        box-shadow: 0 -2px 2px #00000005;
        background: #fff4;
      }
    }
  `

const SplitLayouts: FC = () => {

  const {onThemeToggle, isLightMode} = useThemeToggle();
  
  const ExampleContent : IHeaderContent = {}

  const Arrows = <>
    <Arrow className='t l' style={{transform: 'rotate(-90deg)'}} />
    <Arrow className='t r' style={{transform: 'rotate(0deg)'}} />
    <Arrow className='b r' style={{transform: 'rotate(90deg)'}} />
    <Arrow className='b l' style={{transform: 'rotate(180deg)'}} />
  </>;

  const layoutInstanceRef = useRef<ISplitLayoutHandles>(null);

  const [layout, setLayout] = useState<'horizontal'|'vertical'>('horizontal');
  const [reverse, setReverse] = useState<boolean>(false);
  const areaAContent = <ContentPlaceholder>AREA A{Arrows}</ContentPlaceholder>;
  const areaBContent = <ContentPlaceholder>AREA B{Arrows}</ContentPlaceholder>;
  const areaCContent = <ContentPlaceholder>AREA C{Arrows}</ContentPlaceholder>;

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
          
          <ContentLayout layout="dashboard" HeaderContent={ExampleContent}>
            <SplitLayout 
              ref={layoutInstanceRef}
              layout={layout}
              persist 
              persistenceKey='my_unique_key'
              reverse={reverse} 
              mainArea={{ content: areaAContent, minSize: 120 }} 
              sideArea={{ content: areaBContent, collapsable: true, minSize: 200 }} />
          </ContentLayout>

        </GlobalUI>
      </ThemeProvider>
  );
};

export default SplitLayouts;
