import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';
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
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import styled from 'styled-components';
import placeholderImage from '../assets/placeholder.jpg';
import { FramedDocsPage } from '../helpers/FramedDocsPage';

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

const BespokeDrawerContent = styled.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`;

const BespokeDrawerText = styled.div`
  font-size: 14px;
  font-style: italic;
  line-height: 20px;
  color: var(--grey-9);
`;

// Cafeteria and chrome text that flips with the language switch. The TopBar text props take their
// English value from `args` (defaults from COPY.en) so they can be edited; COPY.ja replaces them
// while Japanese is selected in the bar.
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
    badgeText: 'Guest',
    badgeLinkText: 'Login',
    minutes: (n: number) => `${n} min`,
    yen: (n: number) => `${n} yen`,
    logoutText: 'Logout',
    currentUserText: 'Current User',
    accountOptionText: 'Account Options',
    switchThemeText: 'SWITCH THEME',
    selectedThemeText: 'Light/Dark Mode',
    copySuccessMessage: 'Copied',
    searchPlaceholder: 'Search area names, etc.',
    selectedLanguageText: 'ENGLISH',
    userSubmenu: [
      { text: 'Accounts', href: '#' },
      { text: 'Billing', href: '#' },
      { text: 'Payments', href: '#' },
    ],
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
    badgeText: 'ゲスト',
    badgeLinkText: 'ログイン',
    minutes: (n: number) => `${n}分`,
    yen: (n: number) => `${n}円`,
    logoutText: 'ログアウト',
    currentUserText: '現在のユーザー',
    accountOptionText: 'アカウント設定',
    switchThemeText: 'テーマ切り替え',
    selectedThemeText: 'ライト/ダークモード',
    copySuccessMessage: 'コピーしました',
    searchPlaceholder: 'エリア名などを検索',
    selectedLanguageText: '日本語',
    userSubmenu: [
      { text: 'アカウント', href: '#' },
      { text: '請求', href: '#' },
      { text: '支払い', href: '#' },
    ],
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

type Copy = typeof COPY.en;
type LeftAreaActions = Pick<Args, 'onNewOrder' | 'onPrintReceipt' | 'onClearOrders'>;

// Consumer content for the left area. It only renders when `hasSearch` is false, replacing the
// built-in search bar.
const buildLeftAreaElement = (t: Copy, actions: LeftAreaActions) => (
  <LeftContent>
    <BrandTitle>{t.brand}</BrandTitle>
    <SplitButton
      mainButtonId='new-order'
      buttonList={[
        {
          id: 'new-order',
          text: t.newOrder,
          icon: 'Add',
          hasOnSelectLoading: true,
          onClickCallback: actions.onNewOrder,
        },
        {
          id: 'print-receipt',
          text: t.printReceipt,
          icon: 'Download',
          onClickCallback: actions.onPrintReceipt,
        },
        {
          id: 'clear-orders',
          text: t.clearOrders,
          icon: 'RetryJob',
          onClickCallback: actions.onClearOrders,
        },
      ]}
    />
  </LeftContent>
);

// Icon-triggered drawer (opens from the top bar). The counter badge shows how many orders are
// currently waiting.
const buildOrdersDrawer = (t: Copy): ICustomDrawer => ({
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
});

// Side drawers have no top-bar button; they open from the page content below.
const buildSideDrawers = (t: Copy): ISideDrawer[] => [
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

// Spies for the left-area SplitButton actions; the same instances are passed as args so the
// Actions panel logs them and the English leftAreaElement arg can reference them.
const leftAreaActions = { onNewOrder: fn(), onPrintReceipt: fn(), onClearOrders: fn() };

// Story-only inputs that are not TopBar props.
type Args = ComponentProps<typeof TopBar> & {
  useBadgeOnClick: boolean;
  onBadgeClick: () => void;
  onNewOrder: () => void;
  onPrintReceipt: () => void;
  onClearOrders: () => void;
};

const Scene = ({
  badge,
  customDrawer,
  sideDrawers,
  leftAreaElement,
  useBadgeOnClick,
  onBadgeClick,
  onNewOrder,
  onPrintReceipt,
  onClearOrders,
  onLanguageToggle,
  selectedLangAttribute = 'en',
  selectedLanguageText,
  logoutText,
  currentUserText,
  accountOptionText,
  switchThemeText,
  selectedThemeText,
  copySuccessMessage,
  searchPlaceholder,
  userSubmenu,
  ...topBarProps
}: Args) => {
  const { onThemeToggle, isLightMode } = useThemeToggle();
  // Controlled drawer state: the page-content buttons open the side drawers by id,
  // while the Orders icon in the top bar still works via onActiveDrawerChange.
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);

  // The language lives in the selectedLangAttribute arg (render toggles it through useArgs), so the
  // control and the bar never disagree.
  const isJa = selectedLangAttribute === 'ja';
  const t = isJa ? COPY.ja : COPY.en;
  // English comes from the editable args; Japanese from COPY.ja.
  const localized = <T,>(argValue: T, jaValue: T) => (isJa ? jaValue : argValue);

  const activeBadge = badge
    ? {
        ...badge,
        text: localized(badge.text, COPY.ja.badgeText),
        linkText: localized(badge.linkText, COPY.ja.badgeLinkText),
        onClick: useBadgeOnClick ? onBadgeClick : undefined,
      }
    : undefined;

  return (
    <>
      <Container>
        <TopBar
          {...topBarProps}
          badge={activeBadge}
          isLightMode={isLightMode}
          onThemeToggle={onThemeToggle}
          onLanguageToggle={onLanguageToggle}
          selectedLangAttribute={selectedLangAttribute}
          selectedLanguageText={localized(selectedLanguageText, COPY.ja.selectedLanguageText)}
          userSubmenu={localized(userSubmenu, COPY.ja.userSubmenu)}
          logoutText={localized(logoutText, COPY.ja.logoutText)}
          currentUserText={localized(currentUserText, COPY.ja.currentUserText)}
          accountOptionText={localized(accountOptionText, COPY.ja.accountOptionText)}
          switchThemeText={localized(switchThemeText, COPY.ja.switchThemeText)}
          selectedThemeText={localized(selectedThemeText, COPY.ja.selectedThemeText)}
          copySuccessMessage={localized(copySuccessMessage, COPY.ja.copySuccessMessage)}
          searchPlaceholder={localized(searchPlaceholder, COPY.ja.searchPlaceholder)}
          leftAreaElement={localized(
            leftAreaElement,
            buildLeftAreaElement(COPY.ja, { onNewOrder, onPrintReceipt, onClearOrders })
          )}
          customDrawer={localized(customDrawer, buildOrdersDrawer(COPY.ja))}
          sideDrawers={localized(sideDrawers, buildSideDrawers(COPY.ja))}
          activeDrawer={activeDrawer}
          onActiveDrawerChange={setActiveDrawer}
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

const sceneOnly = (summary: string, detail?: string) => ({
  control: false as const,
  table: { defaultValue: { summary, detail } },
});

const meta = {
  title: 'Global/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  // The drawers portal to document.body, so the docs preview needs its own frame (FramedDocsPage).
  parameters: {
    docs: {
      page: FramedDocsPage,
      story: { inline: false, iframeHeight: '520px' },
    },
  },
  argTypes: {
    userDrawerBespoke: sceneOnly('Not set here; see the WithBespokeUserDrawer story'),
    bottomAreaElement: sceneOnly('Not set here: content for a second row below the bar'),
    isLightMode: sceneOnly('Follows the Theme toolbar through useThemeToggle()'),
    activeDrawer: sceneOnly('Controlled by the story: null until a drawer is opened'),
  },
  args: {
    loggedInUser: 'full.name@example.com',
    hasSearch: false,
    hasLogout: true,
    hasNotifications: true,
    hasCurrentUser: true,
    hasLanguage: true,
    hasSwitchTheme: true,
    hasUserDrawerMeta: true,
    hasUserDrawerFooter: false,
    includeCopyTitle: true,
    bottomAreaHeight: '32px',
    logoutLink: '#',
    logoutText: COPY.en.logoutText,
    currentUserText: COPY.en.currentUserText,
    accountOptionText: COPY.en.accountOptionText,
    searchPlaceholder: COPY.en.searchPlaceholder,
    switchThemeText: COPY.en.switchThemeText,
    selectedThemeText: COPY.en.selectedThemeText,
    copySuccessMessage: COPY.en.copySuccessMessage,
    selectedLangAttribute: 'en',
    selectedLanguageText: COPY.en.selectedLanguageText,
    languageOptionsText: 'LANGUAGE / 言語',
    userSubmenu: COPY.en.userSubmenu,
    userDrawerFooter: { icon: 'Information', title: 'V12.3.4' },
    notificationsHistory: allNotifications,
    userDrawerMeta: userDrawerMetaSample,
    badge: {
      text: COPY.en.badgeText,
      color: 'info',
      linkTo: '/login',
      linkText: COPY.en.badgeLinkText,
    },
    customDrawer: buildOrdersDrawer(COPY.en),
    sideDrawers: buildSideDrawers(COPY.en),
    leftAreaElement: buildLeftAreaElement(COPY.en, leftAreaActions),
    useBadgeOnClick: false,
    onLanguageToggle: fn(),
    onLogout: fn(),
    onUserDrawerMetaClick: fn(),
    onBadgeClick: fn(),
    ...leftAreaActions,
  },
  render: function Render(args) {
    const [{ selectedLangAttribute = 'en' }, updateArgs] = useArgs<Args>();
    const onLanguageToggle = () => {
      args.onLanguageToggle?.();
      updateArgs({ selectedLangAttribute: selectedLangAttribute === 'en' ? 'ja' : 'en' });
    };
    return (
      <Scene
        {...args}
        selectedLangAttribute={selectedLangAttribute}
        onLanguageToggle={onLanguageToggle}
      />
    );
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBespokeUserDrawer: Story = {
  argTypes: { userDrawerBespoke: { control: 'object' } },
  args: {
    userDrawerBespoke: (
      <BespokeDrawerContent>
        <BespokeDrawerText>
          <p>This area is yours: userDrawerBespoke renders any element inside the user drawer.</p>
          <p>Use it for account details, a plan summary or links the menu does not cover.</p>
        </BespokeDrawerText>
      </BespokeDrawerContent>
    ),
  },
};
