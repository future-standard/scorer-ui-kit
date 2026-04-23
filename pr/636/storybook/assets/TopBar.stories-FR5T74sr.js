import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,Tt as a,_t as o,bt as s,jt as c,kt as l}from"./iframe-DFLY1_j6.js";var u,d,f,p,m,h,g,_,v,y;t((()=>{u=n(),d=e(i()),s(),l(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,h={title:`Global`,component:o,decorators:[]},g={customComponent:(0,f.jsx)(`h1`,{children:`Hello Drawer`}),icon:`Add`,status:`danger`,width:`300px;`},_={unread:[{imgUrl:``,title:`Event Type`,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`1 min ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`6 mins ago`},{imgUrl:``,title:`Connection was interrupted`,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 hour ago`}],read:[{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 days ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`3 days ago`},{imgUrl:``,title:`A new device was added`,message:`The device has bean correctly added`,time:`3 days ago`}],noNotificationsText:`NO NEW NOTIFICATIONS`,readNotificationsText:`NEW`,unreadNotificationsText:`READ`},v=()=>{let{onThemeToggle:e,isLightMode:t}=a(),[n,r]=(0,d.useState)(`ja`),i=(0,u.text)(`Logged In User`,`full.name@example.com`),s=(0,u.boolean)(`Has Search`,!0),c=(0,u.boolean)(`Has Logout`,!0),l=(0,u.boolean)(`Has Notifications`,!0),h=(0,u.boolean)(`Has Current User`,!0),v=(0,u.text)(`Logout Url`,`#`),y=(0,u.text)(`Search Placeholder`,`Search area names, etc.`),b=(0,u.boolean)(`Has Language`,!0),x=(0,u.boolean)(`Has Switch Theme`,!0),S=(0,u.text)(`Switch Theme Text`,`SWITCH THEME`),C=(0,u.text)(`Selected Theme Text`,`Light/Dark Mode`),w=p(`onLanguageToggle`),T=(0,u.text)(`Current User Text`,`Current User`),E=(0,u.text)(`Logout Text`,`Logout`),D=(0,u.boolean)(`Has User Drawer Meta`,!0),O=(0,u.text)(`Tooltip Text`,`Copied`),k=(0,u.boolean)(`Include Title Copy`,!0),A=(0,u.boolean)(`Has User Drawer Footer`,!1),j=(0,u.object)(`User Drawer Footer`,{icon:`Information`,title:`V12.3.4`}),M=(0,u.object)(`Submenu`,[{text:`Accounts`,href:`#`},{text:`Billing`,href:`#`},{text:`Payments`,href:`#`}]),N=(0,u.object)(`Notifications History`,_),P=(0,u.object)(`User Drawer Meta`,[{icon:``,title:`Device ID:`,subTitle:`DEB-NUC8i7BE-G6BE935008VH`,notes:``,hasCopyIcon:!0},{icon:`Information`,title:`GPU machine with 4 GPU`,subTitle:`Building B`,notes:`This is a GPU machine having 30 camera support`,hasCopyIcon:!0},{icon:`Success`,title:`Device is Live`,subTitle:`Building C`,notes:`This is a GPU machine having 30 camera support`}]),F=(0,u.text)(`Badge Text`,`Guest`),I=(0,u.select)(`Badge Color`,[`primary`,`grey`,`info`,`success`,`caution`,`warning`],`info`),L=(0,u.text)(`Badge To`,`/login`),R=(0,u.text)(`Badge Link Text`,`Login`),z=(0,u.boolean)(`Use Badge onClick`,!1),B=p(`Badge onClick was triggered`),V=(0,d.useCallback)(()=>{r(e=>{let t=e===`en`?`ja`:`en`;return w(t),t})},[w]);return(0,f.jsx)(m,{children:(0,f.jsx)(o,{badge:{text:F,color:I,linkTo:L,linkText:R,onClick:z?B:void 0},loggedInUser:i,userSubmenu:M,hasSearch:s,hasLogout:c,hasNotifications:l,logoutLink:v,searchPlaceholder:y,hasLanguage:b,hasUserDrawerMeta:D,hasUserDrawerFooter:A,hasCurrentUser:h,notificationsHistory:N,hasSwitchTheme:x,isLightMode:t,switchThemeText:S,selectedThemeText:C,onThemeToggle:e,onLanguageToggle:V,currentUserText:T,logoutText:E,userDrawerFooter:j,copySuccessMessage:O,includeCopyTitle:k,userDrawerMeta:P,customDrawer:g,selectedLangAttribute:n,selectedLanguageText:n===`ja`?`日本語`:`ENGLISH`})})},v.__docgenInfo={description:``,methods:[],displayName:`_TopBar`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const {
    onThemeToggle,
    isLightMode
  } = useThemeToggle();
  const [attributeLanguage, setAttributeLanguage] = useState('ja');
  const loggedInUser = text('Logged In User', 'full.name@example.com');
  const hasSearch = boolean('Has Search', true);
  const hasLogout = boolean('Has Logout', true);
  const hasNotifications = boolean('Has Notifications', true);
  const hasCurrentUser = boolean('Has Current User', true);
  const logoutLink = text('Logout Url', '#');
  const searchPlaceholder = text('Search Placeholder', 'Search area names, etc.');
  const hasLanguage = boolean('Has Language', true);
  const hasSwitchTheme = boolean('Has Switch Theme', true);
  const switchThemeText = text('Switch Theme Text', 'SWITCH THEME');
  const selectedThemeText = text('Selected Theme Text', 'Light/Dark Mode');
  const languageToggle = action('onLanguageToggle');
  const currentUserText = text('Current User Text', 'Current User');
  const logoutText = text('Logout Text', 'Logout');
  const hasUserDrawerMeta = boolean('Has User Drawer Meta', true);
  const copySuccessMessage = text('Tooltip Text', 'Copied');
  const includeCopyTitle = boolean('Include Title Copy', true);
  const hasUserDrawerFooter = boolean('Has User Drawer Footer', false);
  const userDrawerFooter = object('User Drawer Footer', {
    icon: 'Information',
    title: 'V12.3.4'
  });
  const userSubmenu = object('Submenu', [{
    text: 'Accounts',
    href: '#'
  }, {
    text: 'Billing',
    href: '#'
  }, {
    text: 'Payments',
    href: '#'
  }]);
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
  const badgeText = text('Badge Text', 'Guest');
  const badgeColor = select('Badge Color', ['primary', 'grey', 'info', 'success', 'caution', 'warning'], 'info');
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
  return <Container>
      <TopBar badge={{
      text: badgeText,
      color: badgeColor,
      linkTo: badgeLinkTo,
      linkText: badgeLinkText,
      onClick: useBadgeOnClick ? badgeClickAction : undefined
    }} {...{
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
      includeCopyTitle
    }} userDrawerMeta={userDrawerMetaConfig} customDrawer={drawerProps} selectedLangAttribute={attributeLanguage} selectedLanguageText={attributeLanguage === 'ja' ? '日本語' : 'ENGLISH'} />
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_TopBar`]}))();export{v as _TopBar,y as __namedExportsOrder,h as default};