import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Dt as n,Ft as r,It as i,Nt as a,St as o,Ut as s,Wt as c,nt as l,s as u,yt as d}from"./iframe-CW3QRQX7.js";import{n as f,t as p}from"./placeholder-Bsx_gz26.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{m=s(),h=t(c()),o(),i(),p(),g=a(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,y=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
`,b=r.span`
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--grey-12);
  white-space: nowrap;
`,x=r.div`
  padding: 80px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,S=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`,C=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`,w=r.h2`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-11);
  margin: 0;
`,T=r.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,E=r.li`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
`,D=r.h3`
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-9);
  margin: 8px 0 0;
`,O={en:{brand:`Smart Cafeteria`,newOrder:`New Order`,printReceipt:`Print Receipt`,clearOrders:`Clear Orders`,ordersTitle:`Orders`,inTheMaking:`In the making`,readyForPickup:`Ready for pick up`,ready:`Ready`,coffee:`Coffee`,cake:`Cake`,tea:`Tea`,todaysMenu:`Today's Menu`,aboutTitle:`About the Cafeteria`,aboutImageAlt:`Cafeteria photo`,currentUser:`Current User`,logout:`Logout`,accountOptions:`Account Options`,accounts:`Accounts`,billing:`Billing`,payments:`Payments`,switchTheme:`SWITCH THEME`,themeMode:`Light/Dark Mode`,copied:`Copied`,searchPlaceholder:`Search area names, etc.`,badgeText:`Guest`,badgeLinkText:`Login`,minutes:e=>`${e} min`,yen:e=>`${e} yen`},ja:{brand:`スマートカフェテリア`,newOrder:`新規注文`,printReceipt:`レシートを印刷`,clearOrders:`注文をクリア`,ordersTitle:`注文`,inTheMaking:`準備中`,readyForPickup:`受け取り可能`,ready:`準備完了`,coffee:`コーヒー`,cake:`ケーキ`,tea:`紅茶`,todaysMenu:`本日のメニュー`,aboutTitle:`カフェテリアについて`,aboutImageAlt:`カフェテリアの写真`,currentUser:`現在のユーザー`,logout:`ログアウト`,accountOptions:`アカウント設定`,accounts:`アカウント`,billing:`請求`,payments:`支払い`,switchTheme:`テーマ切り替え`,themeMode:`ライト/ダークモード`,copied:`コピーしました`,searchPlaceholder:`エリア名などを検索`,badgeText:`ゲスト`,badgeLinkText:`ログイン`,minutes:e=>`${e}分`,yen:e=>`${e}円`}},k={title:`Global`,component:d,decorators:[]},A={unread:[{imgUrl:``,title:`Event Type`,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`1 min ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`6 mins ago`},{imgUrl:``,title:`Connection was interrupted`,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 hour ago`}],read:[{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 days ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`3 days ago`},{imgUrl:``,title:`A new device was added`,message:`The device has bean correctly added`,time:`3 days ago`}],noNotificationsText:`NO NEW NOTIFICATIONS`,readNotificationsText:`NEW`,unreadNotificationsText:`READ`},j=()=>{let{onThemeToggle:e,isLightMode:t}=n(),[r,i]=(0,h.useState)(`en`),[a,o]=(0,h.useState)(null),s=r===`ja`?O.ja:O.en,c=(0,m.text)(`Logged In User`,`full.name@example.com`),p=(0,m.boolean)(`Has Search`,!1),k=(0,m.boolean)(`Has Logout`,!0),j=(0,m.boolean)(`Has Notifications`,!0),M=(0,m.boolean)(`Has Current User`,!0),N=(0,m.text)(`Logout Url`,`#`),P=(0,m.boolean)(`Has Language`,!0),F=(0,m.boolean)(`Has Switch Theme`,!0),I=_(`onLanguageToggle`),L=(0,m.boolean)(`Has User Drawer Meta`,!0),R=(0,m.boolean)(`Include Title Copy`,!0),z=(0,m.boolean)(`Has User Drawer Footer`,!1),B=(0,m.object)(`User Drawer Footer`,{icon:`Information`,title:`V12.3.4`}),V=(0,m.object)(`Notifications History`,A),H=(0,m.object)(`User Drawer Meta`,[{icon:``,title:`Device ID:`,subTitle:`DEB-NUC8i7BE-G6BE935008VH`,notes:``,hasCopyIcon:!0},{icon:`Information`,title:`GPU machine with 4 GPU`,subTitle:`Building B`,notes:`This is a GPU machine having 30 camera support`,hasCopyIcon:!0},{icon:`Success`,title:`Device is Live`,subTitle:`Building C`,notes:`This is a GPU machine having 30 camera support`}]),U=(0,m.select)(`Badge Color`,[`primary`,`grey`,`info`,`success`,`caution`,`warning`],`info`),W=(0,m.text)(`Badge To`,`/login`),G=(0,m.boolean)(`Use Badge onClick`,!1),K=_(`Badge onClick was triggered`),q=[{text:s.accounts,href:`#`},{text:s.billing,href:`#`},{text:s.payments,href:`#`}],J=(0,h.useCallback)(()=>{i(e=>{let t=e===`en`?`ja`:`en`;return I(t),t})},[I]),Y=_(`New Order pressed`),X=_(`Print Receipt pressed`),Z=_(`Clear Orders pressed`),Q=[{id:`new-order`,text:s.newOrder,icon:`Add`,hasOnSelectLoading:!0,onClickCallback:Y},{id:`print-receipt`,text:s.printReceipt,icon:`Download`,onClickCallback:X},{id:`clear-orders`,text:s.clearOrders,icon:`RetryJob`,onClickCallback:Z}],$=(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:s.brand}),(0,g.jsx)(l,{mainButtonId:`new-order`,buttonList:Q})]}),ee={customComponent:(0,g.jsxs)(S,{children:[(0,g.jsx)(w,{children:s.ordersTitle}),(0,g.jsx)(D,{children:s.inTheMaking}),(0,g.jsxs)(T,{children:[(0,g.jsxs)(E,{children:[(0,g.jsxs)(`span`,{children:[`#014 · `,s.coffee]}),(0,g.jsx)(`span`,{children:s.minutes(2)})]}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(`span`,{children:[`#015 · `,s.cake]}),(0,g.jsx)(`span`,{children:s.minutes(5)})]})]}),(0,g.jsx)(D,{children:s.readyForPickup}),(0,g.jsxs)(T,{children:[(0,g.jsxs)(E,{children:[(0,g.jsxs)(`span`,{children:[`#012 · `,s.tea]}),(0,g.jsx)(`span`,{children:s.ready})]}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(`span`,{children:[`#013 · `,s.coffee]}),(0,g.jsx)(`span`,{children:s.ready})]})]})]}),icon:`Time`,status:`caution`,counter:2,width:`300px`},te=[{id:`menu`,width:`260px`,content:(0,g.jsxs)(S,{children:[(0,g.jsx)(w,{children:s.todaysMenu}),(0,g.jsxs)(T,{children:[(0,g.jsxs)(E,{children:[(0,g.jsx)(`span`,{children:s.tea}),(0,g.jsx)(`span`,{children:s.yen(130)})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(`span`,{children:s.coffee}),(0,g.jsx)(`span`,{children:s.yen(300)})]}),(0,g.jsxs)(E,{children:[(0,g.jsx)(`span`,{children:s.cake}),(0,g.jsx)(`span`,{children:s.yen(350)})]})]})]})},{id:`about`,width:`320px`,content:(0,g.jsxs)(S,{children:[(0,g.jsx)(C,{src:f,alt:s.aboutImageAlt}),(0,g.jsx)(w,{children:s.aboutTitle})]})}];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{children:(0,g.jsx)(d,{badge:{text:s.badgeText,color:U,linkTo:W,linkText:s.badgeLinkText,onClick:G?K:void 0},loggedInUser:c,userSubmenu:q,hasSearch:p,hasLogout:k,hasNotifications:j,logoutLink:N,hasLanguage:P,hasUserDrawerMeta:L,hasUserDrawerFooter:z,hasCurrentUser:M,notificationsHistory:V,hasSwitchTheme:F,isLightMode:t,onThemeToggle:e,onLanguageToggle:J,userDrawerFooter:B,includeCopyTitle:R,leftAreaElement:$,searchPlaceholder:s.searchPlaceholder,switchThemeText:s.switchTheme,selectedThemeText:s.themeMode,currentUserText:s.currentUser,logoutText:s.logout,accountOptionText:s.accountOptions,copySuccessMessage:s.copied,userDrawerMeta:H,customDrawer:ee,sideDrawers:te,activeDrawer:a,onActiveDrawerChange:o,selectedLangAttribute:r,selectedLanguageText:r===`ja`?`日本語`:`ENGLISH`})}),(0,g.jsxs)(x,{children:[(0,g.jsx)(u,{design:`secondary`,onClick:()=>o(`menu`),children:s.todaysMenu}),(0,g.jsx)(u,{design:`secondary`,onClick:()=>o(`about`),children:s.aboutTitle})]})]})},j.__docgenInfo={description:``,methods:[],displayName:`_TopBar`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const {
    onThemeToggle,
    isLightMode
  } = useThemeToggle();
  const [attributeLanguage, setAttributeLanguage] = useState('en');
  // Controlled drawer state: the page-content buttons open the side drawers by id,
  // while the Orders icon in the top bar still works via onActiveDrawerChange.
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);

  // All visible cafeteria/chrome text comes from here and flips with the toggle.
  const t = attributeLanguage === 'ja' ? COPY.ja : COPY.en;

  // Structural config stays knob-driven; user-facing text is language-driven.
  const loggedInUser = text('Logged In User', 'full.name@example.com');
  const hasSearch = boolean('Has Search', false);
  const hasLogout = boolean('Has Logout', true);
  const hasNotifications = boolean('Has Notifications', true);
  const hasCurrentUser = boolean('Has Current User', true);
  const logoutLink = text('Logout Url', '#');
  const hasLanguage = boolean('Has Language', true);
  const hasSwitchTheme = boolean('Has Switch Theme', true);
  const languageToggle = action('onLanguageToggle');
  const hasUserDrawerMeta = boolean('Has User Drawer Meta', true);
  const includeCopyTitle = boolean('Include Title Copy', true);
  const hasUserDrawerFooter = boolean('Has User Drawer Footer', false);
  const userDrawerFooter = object('User Drawer Footer', {
    icon: 'Information',
    title: 'V12.3.4'
  });
  const notificationsHistory = object('Notifications History', allNotifications);
  const userDrawerMetaConfig = object('User Drawer Meta', [{
    icon: '',
    title: 'Device ID:',
    subTitle: 'DEB-NUC8i7BE-G6BE935008VH',
    notes: '',
    hasCopyIcon: true
  }, {
    icon: 'Information',
    title: 'GPU machine with 4 GPU',
    subTitle: 'Building B',
    notes: \`This is a GPU machine having 30 camera support\`,
    hasCopyIcon: true
  }, {
    icon: 'Success',
    title: 'Device is Live',
    subTitle: 'Building C',
    notes: \`This is a GPU machine having 30 camera support\`
  }]);
  const badgeColor = select('Badge Color', ['primary', 'grey', 'info', 'success', 'caution', 'warning'], 'info');
  const badgeLinkTo = text('Badge To', '/login');
  const useBadgeOnClick = boolean('Use Badge onClick', false);
  const badgeClickAction = action('Badge onClick was triggered');
  const userSubmenu = [{
    text: t.accounts,
    href: '#'
  }, {
    text: t.billing,
    href: '#'
  }, {
    text: t.payments,
    href: '#'
  }];
  const onLanguageToggle = useCallback(() => {
    setAttributeLanguage((prev: string) => {
      const newLang = prev === 'en' ? 'ja' : 'en';
      languageToggle(newLang);
      return newLang;
    });
  }, [languageToggle]);
  const newOrderAction = action('New Order pressed');
  const printReceiptAction = action('Print Receipt pressed');
  const clearOrdersAction = action('Clear Orders pressed');

  // Consumer content for the left area. It only renders when \`hasSearch\` is
  // false, replacing the built-in search bar.
  const leftAreaButtonList = [{
    id: 'new-order',
    text: t.newOrder,
    icon: 'Add',
    hasOnSelectLoading: true,
    onClickCallback: newOrderAction
  }, {
    id: 'print-receipt',
    text: t.printReceipt,
    icon: 'Download',
    onClickCallback: printReceiptAction
  }, {
    id: 'clear-orders',
    text: t.clearOrders,
    icon: 'RetryJob',
    onClickCallback: clearOrdersAction
  }];
  const leftAreaElement = <LeftContent>
      <BrandTitle>{t.brand}</BrandTitle>
      <SplitButton mainButtonId='new-order' buttonList={leftAreaButtonList} />
    </LeftContent>;

  // Icon-triggered drawer (opens from the top bar). The counter badge shows how
  // many orders are currently waiting.
  const ordersDrawer: ICustomDrawer = {
    customComponent: <CustomDrawerContent>
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
      </CustomDrawerContent>,
    icon: 'Time',
    status: 'caution',
    counter: 2,
    width: '300px'
  };

  // Side drawers have no top-bar button; they open from the page content below.
  const sideDrawers: ISideDrawer[] = [{
    id: 'menu',
    width: '260px',
    content: <CustomDrawerContent>
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
  }, {
    id: 'about',
    width: '320px',
    content: <CustomDrawerContent>
          <CustomDrawerImage src={placeholderImage} alt={t.aboutImageAlt} />
          <CustomDrawerTitle>{t.aboutTitle}</CustomDrawerTitle>
        </CustomDrawerContent>
  }];
  return <>
      <Container>
        <TopBar badge={{
        text: t.badgeText,
        color: badgeColor,
        linkTo: badgeLinkTo,
        linkText: t.badgeLinkText,
        onClick: useBadgeOnClick ? badgeClickAction : undefined
      }} {...{
        loggedInUser,
        userSubmenu,
        hasSearch,
        hasLogout,
        hasNotifications,
        logoutLink,
        hasLanguage,
        hasUserDrawerMeta,
        hasUserDrawerFooter,
        hasCurrentUser,
        notificationsHistory,
        hasSwitchTheme,
        isLightMode,
        onThemeToggle,
        onLanguageToggle,
        userDrawerFooter,
        includeCopyTitle,
        leftAreaElement
      }} searchPlaceholder={t.searchPlaceholder} switchThemeText={t.switchTheme} selectedThemeText={t.themeMode} currentUserText={t.currentUser} logoutText={t.logout} accountOptionText={t.accountOptions} copySuccessMessage={t.copied} userDrawerMeta={userDrawerMetaConfig} customDrawer={ordersDrawer} sideDrawers={sideDrawers} activeDrawer={activeDrawer} onActiveDrawerChange={setActiveDrawer} selectedLangAttribute={attributeLanguage} selectedLanguageText={attributeLanguage === 'ja' ? '日本語' : 'ENGLISH'} />
      </Container>
      <PageContent>
        <Button design='secondary' onClick={() => setActiveDrawer('menu')}>
          {t.todaysMenu}
        </Button>
        <Button design='secondary' onClick={() => setActiveDrawer('about')}>
          {t.aboutTitle}
        </Button>
      </PageContent>
    </>;
}`,...j.parameters?.docs?.source}}},M=[`_TopBar`]}))();export{j as _TopBar,M as __namedExportsOrder,k as default};