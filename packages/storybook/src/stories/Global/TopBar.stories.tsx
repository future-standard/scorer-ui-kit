import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useCallback, useState } from 'react';
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
import { fn } from 'storybook/test';
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
  gap: 16px;
  height: 100%;
`;

const BrandTitle = styled.span`
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--grey-12);
  white-space: nowrap;
`;

/* Page content sits below the fixed top bar. TopBar publishes --top-bar-total-height on :root, so
   the offset follows the bar even when a bottom area makes it taller — read it instead of
   hardcoding a number. */
const PageContent = styled.div`
  padding: calc(var(--top-bar-total-height, 56px) + 24px) 24px 24px;
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

// All user-facing cafeteria + chrome text, toggled by the language switch. The
// generic notifications and device-meta demo data below stay as-is (English).
const COPY = {
  en: {
    brand: 'Smart Cafeteria',
    newOrder: 'New Order',
    printReceipt: 'Print Receipt',
    clearOrders: 'Clear Orders',
    ordersTitle: 'Orders',
    inTheMaking: 'In the making',
    readyForPickup: 'Ready for pick up',
    ready: 'Ready',
    coffee: 'Coffee',
    cake: 'Cake',
    tea: 'Tea',
    todaysMenu: "Today's Menu",
    aboutTitle: 'About the Cafeteria',
    aboutImageAlt: 'Cafeteria photo',
    currentUser: 'Current User',
    logout: 'Logout',
    accountOptions: 'Account Options',
    accounts: 'Accounts',
    billing: 'Billing',
    payments: 'Payments',
    switchTheme: 'SWITCH THEME',
    themeMode: 'Light/Dark Mode',
    copied: 'Copied',
    searchPlaceholder: 'Search area names, etc.',
    badgeText: 'Guest',
    badgeLinkText: 'Login',
    minutes: (n: number) => `${n} min`,
    yen: (n: number) => `${n} yen`,
  },
  ja: {
    brand: 'スマートカフェテリア',
    newOrder: '新規注文',
    printReceipt: 'レシートを印刷',
    clearOrders: '注文をクリア',
    ordersTitle: '注文',
    inTheMaking: '準備中',
    readyForPickup: '受け取り可能',
    ready: '準備完了',
    coffee: 'コーヒー',
    cake: 'ケーキ',
    tea: '紅茶',
    todaysMenu: '本日のメニュー',
    aboutTitle: 'カフェテリアについて',
    aboutImageAlt: 'カフェテリアの写真',
    currentUser: '現在のユーザー',
    logout: 'ログアウト',
    accountOptions: 'アカウント設定',
    accounts: 'アカウント',
    billing: '請求',
    payments: '支払い',
    switchTheme: 'テーマ切り替え',
    themeMode: 'ライト/ダークモード',
    copied: 'コピーしました',
    searchPlaceholder: 'エリア名などを検索',
    badgeText: 'ゲスト',
    badgeLinkText: 'ログイン',
    minutes: (n: number) => `${n}分`,
    yen: (n: number) => `${n}円`,
  },
};

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

// Story-only inputs that are not TopBar props: the badge is assembled from them plus the
// language-dependent text, and the left-area SplitButton actions need spies of their own.
type Args = ComponentProps<typeof TopBar> & {
  badgeColor: string;
  badgeLinkTo: string;
  useBadgeOnClick: boolean;
  onBadgeClick: () => void;
  onNewOrder: () => void;
  onPrintReceipt: () => void;
  onClearOrders: () => void;
};

const userDrawerMetaSample = [
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
];

const Scene = ({
  badgeColor,
  badgeLinkTo,
  useBadgeOnClick,
  onBadgeClick,
  onNewOrder,
  onPrintReceipt,
  onClearOrders,
  onLanguageToggle: languageToggle,
  ...topBarProps
}: Args) => {
  const { onThemeToggle, isLightMode } = useThemeToggle();
  const [attributeLanguage, setAttributeLanguage] = useState('en');
  // Controlled drawer state: the page-content buttons open the side drawers by id,
  // while the Orders icon in the top bar still works via onActiveDrawerChange.
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);

  // All visible cafeteria/chrome text comes from here and flips with the toggle.
  const t = attributeLanguage === 'ja' ? COPY.ja : COPY.en;

  const userSubmenu = [
    { text: t.accounts, href: '#' },
    { text: t.billing, href: '#' },
    { text: t.payments, href: '#' },
  ];

  const onLanguageToggle = useCallback(() => {
    setAttributeLanguage((prev: string) => (prev === 'en' ? 'ja' : 'en'));
    languageToggle?.();
  }, [languageToggle]);

  // Consumer content for the left area. It only renders when `hasSearch` is
  // false, replacing the built-in search bar.
  const leftAreaButtonList = [
    {
      id: 'new-order',
      text: t.newOrder,
      icon: 'Add',
      hasOnSelectLoading: true,
      onClickCallback: onNewOrder,
    },
    {
      id: 'print-receipt',
      text: t.printReceipt,
      icon: 'Download',
      onClickCallback: onPrintReceipt,
    },
    {
      id: 'clear-orders',
      text: t.clearOrders,
      icon: 'RetryJob',
      onClickCallback: onClearOrders,
    },
  ];

  const leftAreaElement = (
    <LeftContent>
      <BrandTitle>{t.brand}</BrandTitle>
      <SplitButton mainButtonId='new-order' buttonList={leftAreaButtonList} />
    </LeftContent>
  );

  // Icon-triggered drawer (opens from the top bar). The counter badge shows how
  // many orders are currently waiting.
  const ordersDrawer: ICustomDrawer = {
    customComponent: (
      <CustomDrawerContent>
        <CustomDrawerTitle>{t.ordersTitle}</CustomDrawerTitle>
        <SectionHeading>{t.inTheMaking}</SectionHeading>
        <MenuList>
          <MenuItem>
            <span>#014 · {t.coffee}</span>
            <span>{t.minutes(2)}</span>
          </MenuItem>
          <MenuItem>
            <span>#015 · {t.cake}</span>
            <span>{t.minutes(5)}</span>
          </MenuItem>
        </MenuList>
        <SectionHeading>{t.readyForPickup}</SectionHeading>
        <MenuList>
          <MenuItem>
            <span>#012 · {t.tea}</span>
            <span>{t.ready}</span>
          </MenuItem>
          <MenuItem>
            <span>#013 · {t.coffee}</span>
            <span>{t.ready}</span>
          </MenuItem>
        </MenuList>
      </CustomDrawerContent>
    ),
    icon: 'Time',
    status: 'caution',
    counter: 2,
    width: '300px',
  };

  // Side drawers have no top-bar button; they open from the page content below.
  const sideDrawers: ISideDrawer[] = [
    {
      id: 'menu',
      width: '260px',
      content: (
        <CustomDrawerContent>
          <CustomDrawerTitle>{t.todaysMenu}</CustomDrawerTitle>
          <MenuList>
            <MenuItem>
              <span>{t.tea}</span>
              <span>{t.yen(130)}</span>
            </MenuItem>
            <MenuItem>
              <span>{t.coffee}</span>
              <span>{t.yen(300)}</span>
            </MenuItem>
            <MenuItem>
              <span>{t.cake}</span>
              <span>{t.yen(350)}</span>
            </MenuItem>
          </MenuList>
        </CustomDrawerContent>
      ),
    },
    {
      id: 'about',
      width: '320px',
      content: (
        <CustomDrawerContent>
          <CustomDrawerImage src={placeholderImage} alt={t.aboutImageAlt} />
          <CustomDrawerTitle>{t.aboutTitle}</CustomDrawerTitle>
        </CustomDrawerContent>
      ),
    },
  ];

  return (
    <>
      <Container>
        <TopBar
          {...topBarProps}
          badge={{
            text: t.badgeText,
            color: badgeColor,
            linkTo: badgeLinkTo,
            linkText: t.badgeLinkText,
            onClick: useBadgeOnClick ? onBadgeClick : undefined,
          }}
          userSubmenu={userSubmenu}
          isLightMode={isLightMode}
          onThemeToggle={onThemeToggle}
          onLanguageToggle={onLanguageToggle}
          leftAreaElement={leftAreaElement}
          searchPlaceholder={t.searchPlaceholder}
          switchThemeText={t.switchTheme}
          selectedThemeText={t.themeMode}
          currentUserText={t.currentUser}
          logoutText={t.logout}
          accountOptionText={t.accountOptions}
          copySuccessMessage={t.copied}
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
          {t.todaysMenu}
        </Button>
        <Button design='secondary' onClick={() => setActiveDrawer('about')}>
          {t.aboutTitle}
        </Button>
      </PageContent>
    </>
  );
};

const meta = {
  title: 'Global/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  argTypes: {
    badgeColor: {
      control: 'select',
      options: ['primary', 'grey', 'info', 'success', 'caution', 'warning'],
    },
  },
  args: {
    loggedInUser: 'full.name@example.com',
    hasSearch: false,
    hasLogout: true,
    hasNotifications: true,
    hasCurrentUser: true,
    logoutLink: '#',
    hasLanguage: true,
    hasSwitchTheme: true,
    hasUserDrawerMeta: true,
    includeCopyTitle: true,
    hasUserDrawerFooter: false,
    userDrawerFooter: { icon: 'Information', title: 'V12.3.4' },
    notificationsHistory: allNotifications,
    userDrawerMeta: userDrawerMetaSample,
    badgeColor: 'info',
    badgeLinkTo: '/login',
    useBadgeOnClick: false,
    onLanguageToggle: fn(),
    onBadgeClick: fn(),
    onNewOrder: fn(),
    onPrintReceipt: fn(),
    onClearOrders: fn(),
  },
  render: (args) => <Scene {...args} />,
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
