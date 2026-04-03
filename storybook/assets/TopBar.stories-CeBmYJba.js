import{h as u,u as R,r,d as e,j as o,a as J}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,K=J.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,ee={title:"Global",component:u,decorators:[]},Y=o.jsx("h1",{children:"Hello Drawer"}),q={customComponent:Y,icon:"Add",status:"danger",width:"300px;"},z=[{imgUrl:"",title:"Event Type",message:"A short message limited to two lines. Extra text will just truncat...",time:"Just Now"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"1 min ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"6 mins ago"},{imgUrl:"",title:"Connection was interrupted",message:"The connections is not working properly. Please verify your connection or contact your personal support.",time:"1 hour ago"},{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 hour ago"}],Q=[{imgUrl:"",title:"Device is off",message:"The device has correctly turn off",time:"3 days ago"},{imgUrl:"",title:"Device is on",message:"The device has correctly turn on",time:"3 days ago"},{imgUrl:"",title:"A new device was added",message:"The device has bean correctly added",time:"3 days ago"}],X={unread:z,read:Q,noNotificationsText:"NO NEW NOTIFICATIONS",readNotificationsText:"NEW",unreadNotificationsText:"READ"},t=()=>{const{onThemeToggle:h,isLightMode:d}=R(),[a,T]=r.useState("ja"),m=e.text("Logged In User","full.name@example.com"),x=e.boolean("Has Search",!0),b=e.boolean("Has Logout",!0),p=e.boolean("Has Notifications",!0),f=e.boolean("Has Current User",!0),L=e.text("Logout Url","#"),w=e.text("Search Placeholder","Search area names, etc."),C=e.boolean("Has Language",!0),U=e.boolean("Has Switch Theme",!0),D=e.text("Switch Theme Text","SWITCH THEME"),y=e.text("Selected Theme Text","Light/Dark Mode"),s=i("onLanguageToggle"),S=e.text("Current User Text","Current User"),B=e.text("Logout Text","Logout"),k=e.boolean("Has User Drawer Meta",!0),H=e.text("Tooltip Text","Copied"),v=e.boolean("Include Title Copy",!0),I=e.boolean("Has User Drawer Footer",!1),N=e.object("User Drawer Footer",{icon:"Information",title:"V12.3.4"}),M=e.object("Submenu",[{text:"Accounts",href:"#"},{text:"Billing",href:"#"},{text:"Payments",href:"#"}]),E=e.object("Notifications History",X),j=e.object("User Drawer Meta",[{icon:"",title:"Device ID:",subTitle:"DEB-NUC8i7BE-G6BE935008VH",notes:"",hasCopyIcon:!0},{icon:"Information",title:"GPU machine with 4 GPU",subTitle:"Building B",notes:"This is a GPU machine having 30 camera support",hasCopyIcon:!0},{icon:"Success",title:"Device is Live",subTitle:"Building C",notes:"This is a GPU machine having 30 camera support"}]),P=e.text("Badge Text","Guest"),A=e.select("Badge Color",["primary","grey","info","success","caution","warning"],"info"),G=e.text("Badge To","/login"),_=e.text("Badge Link Text","Login"),O=e.boolean("Use Badge onClick",!1),F=i("Badge onClick was triggered"),V=r.useCallback(()=>{T(W=>{const n=W==="en"?"ja":"en";return s(n),n})},[s]);return o.jsx(K,{children:o.jsx(u,{badge:{text:P,color:A,linkTo:G,linkText:_,onClick:O?F:void 0},loggedInUser:m,userSubmenu:M,hasSearch:x,hasLogout:b,hasNotifications:p,logoutLink:L,searchPlaceholder:w,hasLanguage:C,hasUserDrawerMeta:k,hasUserDrawerFooter:I,hasCurrentUser:f,notificationsHistory:E,hasSwitchTheme:U,isLightMode:d,switchThemeText:D,selectedThemeText:y,onThemeToggle:h,onLanguageToggle:V,currentUserText:S,logoutText:B,userDrawerFooter:N,copySuccessMessage:H,includeCopyTitle:v,userDrawerMeta:j,customDrawer:q,selectedLangAttribute:a,selectedLanguageText:a==="ja"?"日本語":"ENGLISH"})})};t.__docgenInfo={description:"",methods:[],displayName:"_TopBar"};var c,g,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const {
    onThemeToggle,
    isLightMode
  } = useThemeToggle();
  const [attributeLanguage, setAttributeLanguage] = useState('ja');
  const loggedInUser = text("Logged In User", "full.name@example.com");
  const hasSearch = boolean("Has Search", true);
  const hasLogout = boolean("Has Logout", true);
  const hasNotifications = boolean("Has Notifications", true);
  const hasCurrentUser = boolean("Has Current User", true);
  const logoutLink = text("Logout Url", "#");
  const searchPlaceholder = text("Search Placeholder", "Search area names, etc.");
  const hasLanguage = boolean("Has Language", true);
  const hasSwitchTheme = boolean("Has Switch Theme", true);
  const switchThemeText = text("Switch Theme Text", "SWITCH THEME");
  const selectedThemeText = text("Selected Theme Text", "Light/Dark Mode");
  const languageToggle = action('onLanguageToggle');
  const currentUserText = text("Current User Text", "Current User");
  const logoutText = text("Logout Text", "Logout");
  const hasUserDrawerMeta = boolean("Has User Drawer Meta", true);
  const copySuccessMessage = text("Tooltip Text", "Copied");
  const includeCopyTitle = boolean("Include Title Copy", true);
  const hasUserDrawerFooter = boolean("Has User Drawer Footer", false);
  const userDrawerFooter = object("User Drawer Footer", {
    icon: 'Information',
    title: 'V12.3.4'
  });
  const userSubmenu = object("Submenu", [{
    text: 'Accounts',
    href: '#'
  }, {
    text: 'Billing',
    href: '#'
  }, {
    text: 'Payments',
    href: '#'
  }]);
  const notificationsHistory = object("Notifications History", allNotifications);
  const userDrawerMetaConfig = object("User Drawer Meta", [{
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
  const badgeText = text("Badge Text", "Guest");
  const badgeColor = select("Badge Color", ['primary', 'grey', 'info', 'success', 'caution', 'warning'], 'info');
  const badgeLinkTo = text("Badge To", "/login");
  const badgeLinkText = text("Badge Link Text", "Login");
  const useBadgeOnClick = boolean("Use Badge onClick", false);
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
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const te=["_TopBar"];export{t as _TopBar,te as __namedExportsOrder,ee as default};
