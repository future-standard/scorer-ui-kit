import { boolean, object, select, text } from '@storybook/addon-knobs';
import { type ReactElement, useCallback, useState } from 'react';
import {
  Button,
  type IActiveDrawer,
  type ICustomDrawer,
  type INotificationItem,
  type INotificationsHistory,
  type ISideDrawer,
  SplitButton,
  TopBar,
  useThemeToggle,
} from 'scorer-ui-kit';
import { action } from 'storybook/actions';
import styled from 'styled-components';
import placeholderImage from '../assets/placeholder.jpg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

// Page content sits below the fixed top bar; the top padding clears the 56px bar.
const PageContent = styled.div`
  padding: 80px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const CustomDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`;

const CustomDrawerImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`;

const CustomDrawerTitle = styled.h2`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-11);
  margin: 0;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
`;

const SectionHeading = styled.h3`
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-9);
  margin: 8px 0 0;
`;

const TopBarStory = {
  title: 'Global',
  component: TopBar,
  decorators: [],
};

const AboutCafeteria: ReactElement = (
  <CustomDrawerContent>
    <CustomDrawerImage src={placeholderImage} alt='About the Cafeteria snapshot' />
    <CustomDrawerTitle>About the Cafeteria</CustomDrawerTitle>
  </CustomDrawerContent>
);

const TodaysMenu: ReactElement = (
  <CustomDrawerContent>
    <CustomDrawerTitle>Today's Menu</CustomDrawerTitle>
    <MenuList>
      <MenuItem>
        <span>Tea</span>
        <span>130 yen</span>
      </MenuItem>
      <MenuItem>
        <span>Coffee</span>
        <span>300 yen</span>
      </MenuItem>
      <MenuItem>
        <span>Cake</span>
        <span>350 yen</span>
      </MenuItem>
    </MenuList>
  </CustomDrawerContent>
);

// Icon-triggered drawer (opens from the top bar). The counter badge shows how
// many orders are currently waiting.
const OrdersDrawerContent: ReactElement = (
  <CustomDrawerContent>
    <CustomDrawerTitle>Orders</CustomDrawerTitle>
    <SectionHeading>In the making</SectionHeading>
    <MenuList>
      <MenuItem>
        <span>#014 · Coffee</span>
        <span>2 min</span>
      </MenuItem>
      <MenuItem>
        <span>#015 · Cake</span>
        <span>5 min</span>
      </MenuItem>
    </MenuList>
    <SectionHeading>Ready for pick up</SectionHeading>
    <MenuList>
      <MenuItem>
        <span>#012 · Tea</span>
        <span>Ready</span>
      </MenuItem>
      <MenuItem>
        <span>#013 · Coffee</span>
        <span>Ready</span>
      </MenuItem>
    </MenuList>
  </CustomDrawerContent>
);

const ordersDrawer: ICustomDrawer = {
  customComponent: OrdersDrawerContent,
  icon: 'Time',
  status: 'caution',
  counter: 2,
  width: '300px',
};

// Side drawers have no top-bar button; they open from the page content below.
const sideDrawers: ISideDrawer[] = [
  { id: 'menu', width: '260px', content: TodaysMenu },
  { id: 'about', width: '320px', content: AboutCafeteria },
];

const unreadNotifications: INotificationItem[] = [
  {
    imgUrl: '',
    title: 'Event Type',
    message: 'A short message limited to two lines. Extra text will just truncat...',
    time: 'Just Now',
  },
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '1 min ago',
  },
  {
    imgUrl: '',
    title: 'Device is on',
    message: 'The device has correctly turn on',
    time: '6 mins ago',
  },
  {
    imgUrl: '',
    title: 'Connection was interrupted',
    message:
      'The connections is not working properly. Please verify your connection or contact your personal support.',
    time: '1 hour ago',
  },
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '3 hour ago',
  },
];

const readNotifications: INotificationItem[] = [
  {
    imgUrl: '',
    title: 'Device is off',
    message: 'The device has correctly turn off',
    time: '3 days ago',
  },
  {
    imgUrl: '',
    title: 'Device is on',
    message: 'The device has correctly turn on',
    time: '3 days ago',
  },
  {
    imgUrl: '',
    title: 'A new device was added',
    message: 'The device has bean correctly added',
    time: '3 days ago',
  },
];

// unread read can be empty array when there are no notifications
const allNotifications: INotificationsHistory = {
  unread: unreadNotifications,
  read: readNotifications,
  noNotificationsText: 'NO NEW NOTIFICATIONS',
  readNotificationsText: 'NEW',
  unreadNotificationsText: 'READ',
};

export const _TopBar = () => {
  const { onThemeToggle, isLightMode } = useThemeToggle();
  const [attributeLanguage, setAttributeLanguage] = useState('en');
  // Controlled drawer state: the page-content buttons open the side drawers by id,
  // while the Orders icon in the top bar still works via onActiveDrawerChange.
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);

  const loggedInUser = text('Logged In User', 'full.name@example.com');

  const hasSearch = boolean('Has Search', false);
  const hasLogout = boolean('Has Logout', true);
  const hasNotifications = boolean('Has Notifications', true);
  const hasCurrentUser = boolean('Has Current User', true);
  const logoutLink = text('Logout Url', '#');
  const searchPlaceholder = text('Search Placeholder', 'Search area names, etc.');
  const hasLanguage = boolean('Has Language', true);
  const hasSwitchTheme = boolean('Has Switch Theme', true);
  const switchThemeText = text('Switch Theme Text', 'SWITCH THEME');
  const languageToggle = action('onLanguageToggle');
  const selectedThemeText = text('Selected Theme Text', 'Light/Dark Mode');

  const currentUserText = text('Current User Text', 'Current User');
  const logoutText = text('Logout Text', 'Logout');
  const hasUserDrawerMeta = boolean('Has User Drawer Meta', true);
  const copySuccessMessage = text('Tooltip Text', 'Copied');
  const includeCopyTitle = boolean('Include Title Copy', true);
  const hasUserDrawerFooter = boolean('Has User Drawer Footer', false);
  const userDrawerFooter = object('User Drawer Footer', {
    icon: 'Information',
    title: 'V12.3.4',
  });
  const userSubmenu = object('Submenu', [
    {
      text: 'Accounts',
      href: '#',
    },
    {
      text: 'Billing',
      href: '#',
    },
    {
      text: 'Payments',
      href: '#',
    },
  ]);
  const notificationsHistory = object('Notifications History', allNotifications);

  const userDrawerMetaConfig = object('User Drawer Meta', [
    {
      icon: '',
      title: 'Device ID:',
      subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
      notes: '',
      hasCopyIcon: true,
    },
    {
      icon: 'Information',
      title: 'GPU machine with 4 GPU',
      subTitle: 'Building B',
      notes: `This is a GPU machine having 30 camera support`,
      hasCopyIcon: true,
    },
    {
      icon: 'Success',
      title: 'Device is Live',
      subTitle: 'Building C',
      notes: `This is a GPU machine having 30 camera support`,
    },
  ]);

  const badgeText = text('Badge Text', 'Guest');
  const badgeColor = select(
    'Badge Color',
    ['primary', 'grey', 'info', 'success', 'caution', 'warning'],
    'info'
  );
  const badgeLinkTo = text('Badge To', '/login');
  const badgeLinkText = text('Badge Link Text', 'Login');
  const useBadgeOnClick = boolean('Use Badge onClick', false);
  const badgeClickAction = action('Badge onClick was triggered');

  // userDrawerBespoke: See examples for implementation of this prop.

  const onLanguageToggle = useCallback(() => {
    setAttributeLanguage((prev: string) => {
      const newLang = prev === 'en' ? 'ja' : 'en';
      languageToggle(newLang);
      return newLang;
    });
  }, [languageToggle]);

  const saveLayoutAction = action('Save layout pressed');
  const takeSnapshotAction = action('Take a Snapshot pressed');
  const resetAction = action('Reset pressed');

  // Consumers can pass their own element to the left area. It only renders when
  // `hasSearch` is false, replacing the built-in search bar.
  const leftAreaButtonList = [
    {
      id: 'save-layout',
      text: attributeLanguage === 'ja' ? 'レイアウトを保存' : 'Save layout',
      icon: 'LayoutGrid',
      hasOnSelectLoading: true,
      onClickCallback: saveLayoutAction,
    },
    {
      id: 'take-snapshot',
      text: attributeLanguage === 'ja' ? 'スナップショットを撮影' : 'Take a Snapshot',
      icon: 'Camera',
      onClickCallback: takeSnapshotAction,
    },
    {
      id: 'reset',
      text: attributeLanguage === 'ja' ? 'リセット' : 'Reset',
      icon: 'RetryJob',
      onClickCallback: resetAction,
    },
  ];

  const leftAreaElement = (
    <LeftContent>
      <SplitButton mainButtonId='save-layout' buttonList={leftAreaButtonList} />
    </LeftContent>
  );

  return (
    <>
      <Container>
        <TopBar
          badge={{
            text: badgeText,
            color: badgeColor,
            linkTo: badgeLinkTo,
            linkText: badgeLinkText,
            onClick: useBadgeOnClick ? badgeClickAction : undefined,
          }}
          {...{
            loggedInUser,
            userSubmenu,
            hasSearch,
            hasLogout,
            hasNotifications,
            logoutLink,
            searchPlaceholder,
            hasLanguage,
            hasUserDrawerMeta,
            hasUserDrawerFooter,
            hasCurrentUser,
            notificationsHistory,
            hasSwitchTheme,
            isLightMode,
            switchThemeText,
            selectedThemeText,
            onThemeToggle,
            onLanguageToggle,
            currentUserText,
            logoutText,
            userDrawerFooter,
            copySuccessMessage,
            includeCopyTitle,
            leftAreaElement,
          }}
          userDrawerMeta={userDrawerMetaConfig}
          customDrawer={ordersDrawer}
          sideDrawers={sideDrawers}
          activeDrawer={activeDrawer}
          onActiveDrawerChange={setActiveDrawer}
          selectedLangAttribute={attributeLanguage}
          selectedLanguageText={attributeLanguage === 'ja' ? '日本語' : 'ENGLISH'}
        />
      </Container>
      <PageContent>
        <Button design='secondary' onClick={() => setActiveDrawer('menu')}>
          Today's Menu
        </Button>
        <Button design='secondary' onClick={() => setActiveDrawer('about')}>
          About the cafeteria
        </Button>
      </PageContent>
    </>
  );
};

export default TopBarStory;
