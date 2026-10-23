import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{At as t,Gt as n,It as r,Kt as i,Rt as a,c as o,it as s,wt as c,xt as l,zt as u}from"./iframe-BclkYTZO.js";import{n as d,t as f}from"./placeholder-CNokvOWa.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{p=n(),m=i(),c(),u(),f(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,v=a.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
`,y=a.span`
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--grey-12);
  white-space: nowrap;
`,b=a.div`
  padding: calc(var(--top-bar-total-height, 56px) + 24px) 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,x=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`,S=a.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`,C=a.h2`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-11);
  margin: 0;
`,w=a.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,T=a.li`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
`,E=a.h3`
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-9);
  margin: 8px 0 0;
`,D={en:{brand:`Smart Cafeteria`,newOrder:`New Order`,printReceipt:`Print Receipt`,clearOrders:`Clear Orders`,ordersTitle:`Orders`,inTheMaking:`In the making`,readyForPickup:`Ready for pick up`,ready:`Ready`,coffee:`Coffee`,cake:`Cake`,tea:`Tea`,todaysMenu:`Today's Menu`,aboutTitle:`About the Cafeteria`,aboutImageAlt:`Cafeteria photo`,currentUser:`Current User`,logout:`Logout`,accountOptions:`Account Options`,accounts:`Accounts`,billing:`Billing`,payments:`Payments`,switchTheme:`SWITCH THEME`,themeMode:`Light/Dark Mode`,copied:`Copied`,searchPlaceholder:`Search area names, etc.`,badgeText:`Guest`,badgeLinkText:`Login`,minutes:e=>`${e} min`,yen:e=>`${e} yen`},ja:{brand:`スマートカフェテリア`,newOrder:`新規注文`,printReceipt:`レシートを印刷`,clearOrders:`注文をクリア`,ordersTitle:`注文`,inTheMaking:`準備中`,readyForPickup:`受け取り可能`,ready:`準備完了`,coffee:`コーヒー`,cake:`ケーキ`,tea:`紅茶`,todaysMenu:`本日のメニュー`,aboutTitle:`カフェテリアについて`,aboutImageAlt:`カフェテリアの写真`,currentUser:`現在のユーザー`,logout:`ログアウト`,accountOptions:`アカウント設定`,accounts:`アカウント`,billing:`請求`,payments:`支払い`,switchTheme:`テーマ切り替え`,themeMode:`ライト/ダークモード`,copied:`コピーしました`,searchPlaceholder:`エリア名などを検索`,badgeText:`ゲスト`,badgeLinkText:`ログイン`,minutes:e=>`${e}分`,yen:e=>`${e}円`}},O={title:`Global`,component:l,decorators:[]},k={unread:[{imgUrl:``,title:`Event Type`,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`1 min ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`6 mins ago`},{imgUrl:``,title:`Connection was interrupted`,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 hour ago`}],read:[{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 days ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`3 days ago`},{imgUrl:``,title:`A new device was added`,message:`The device has bean correctly added`,time:`3 days ago`}],noNotificationsText:`NO NEW NOTIFICATIONS`,readNotificationsText:`NEW`,unreadNotificationsText:`READ`},A=()=>{let{onThemeToggle:e,isLightMode:n}=t(),[r,i]=(0,m.useState)(`en`),[a,c]=(0,m.useState)(null),u=r===`ja`?D.ja:D.en,f=(0,p.text)(`Logged In User`,`full.name@example.com`),O=(0,p.boolean)(`Has Search`,!1),A=(0,p.boolean)(`Has Logout`,!0),j=(0,p.boolean)(`Has Notifications`,!0),M=(0,p.boolean)(`Has Current User`,!0),N=(0,p.text)(`Logout Url`,`#`),P=(0,p.boolean)(`Has Language`,!0),F=(0,p.boolean)(`Has Switch Theme`,!0),I=g(`onLanguageToggle`),L=(0,p.boolean)(`Has User Drawer Meta`,!0),R=(0,p.boolean)(`Include Title Copy`,!0),z=(0,p.boolean)(`Has User Drawer Footer`,!1),B=(0,p.object)(`User Drawer Footer`,{icon:`Information`,title:`V12.3.4`}),V=(0,p.object)(`Notifications History`,k),H=(0,p.object)(`User Drawer Meta`,[{icon:``,title:`Device ID:`,subTitle:`DEB-NUC8i7BE-G6BE935008VH`,notes:``,hasCopyIcon:!0},{icon:`Information`,title:`GPU machine with 4 GPU`,subTitle:`Building B`,notes:`This is a GPU machine having 30 camera support`,hasCopyIcon:!0},{icon:`Success`,title:`Device is Live`,subTitle:`Building C`,notes:`This is a GPU machine having 30 camera support`}]),U=(0,p.select)(`Badge Color`,[`primary`,`grey`,`info`,`success`,`caution`,`warning`],`info`),W=(0,p.text)(`Badge To`,`/login`),G=(0,p.boolean)(`Use Badge onClick`,!1),K=g(`Badge onClick was triggered`),q=[{text:u.accounts,href:`#`},{text:u.billing,href:`#`},{text:u.payments,href:`#`}],J=(0,m.useCallback)(()=>{i(e=>{let t=e===`en`?`ja`:`en`;return I(t),t})},[I]),Y=g(`New Order pressed`),X=g(`Print Receipt pressed`),Z=g(`Clear Orders pressed`),Q=[{id:`new-order`,text:u.newOrder,icon:`Add`,hasOnSelectLoading:!0,onClickCallback:Y},{id:`print-receipt`,text:u.printReceipt,icon:`Download`,onClickCallback:X},{id:`clear-orders`,text:u.clearOrders,icon:`RetryJob`,onClickCallback:Z}],$=(0,h.jsxs)(v,{children:[(0,h.jsx)(y,{children:u.brand}),(0,h.jsx)(s,{mainButtonId:`new-order`,buttonList:Q})]}),ee={customComponent:(0,h.jsxs)(x,{children:[(0,h.jsx)(C,{children:u.ordersTitle}),(0,h.jsx)(E,{children:u.inTheMaking}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(T,{children:[(0,h.jsxs)(`span`,{children:[`#014 · `,u.coffee]}),(0,h.jsx)(`span`,{children:u.minutes(2)})]}),(0,h.jsxs)(T,{children:[(0,h.jsxs)(`span`,{children:[`#015 · `,u.cake]}),(0,h.jsx)(`span`,{children:u.minutes(5)})]})]}),(0,h.jsx)(E,{children:u.readyForPickup}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(T,{children:[(0,h.jsxs)(`span`,{children:[`#012 · `,u.tea]}),(0,h.jsx)(`span`,{children:u.ready})]}),(0,h.jsxs)(T,{children:[(0,h.jsxs)(`span`,{children:[`#013 · `,u.coffee]}),(0,h.jsx)(`span`,{children:u.ready})]})]})]}),icon:`Time`,status:`caution`,counter:2,width:`300px`},te=[{id:`menu`,width:`260px`,content:(0,h.jsxs)(x,{children:[(0,h.jsx)(C,{children:u.todaysMenu}),(0,h.jsxs)(w,{children:[(0,h.jsxs)(T,{children:[(0,h.jsx)(`span`,{children:u.tea}),(0,h.jsx)(`span`,{children:u.yen(130)})]}),(0,h.jsxs)(T,{children:[(0,h.jsx)(`span`,{children:u.coffee}),(0,h.jsx)(`span`,{children:u.yen(300)})]}),(0,h.jsxs)(T,{children:[(0,h.jsx)(`span`,{children:u.cake}),(0,h.jsx)(`span`,{children:u.yen(350)})]})]})]})},{id:`about`,width:`320px`,content:(0,h.jsxs)(x,{children:[(0,h.jsx)(S,{src:d,alt:u.aboutImageAlt}),(0,h.jsx)(C,{children:u.aboutTitle})]})}];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{children:(0,h.jsx)(l,{badge:{text:u.badgeText,color:U,linkTo:W,linkText:u.badgeLinkText,onClick:G?K:void 0},loggedInUser:f,userSubmenu:q,hasSearch:O,hasLogout:A,hasNotifications:j,logoutLink:N,hasLanguage:P,hasUserDrawerMeta:L,hasUserDrawerFooter:z,hasCurrentUser:M,notificationsHistory:V,hasSwitchTheme:F,isLightMode:n,onThemeToggle:e,onLanguageToggle:J,userDrawerFooter:B,includeCopyTitle:R,leftAreaElement:$,searchPlaceholder:u.searchPlaceholder,switchThemeText:u.switchTheme,selectedThemeText:u.themeMode,currentUserText:u.currentUser,logoutText:u.logout,accountOptionText:u.accountOptions,copySuccessMessage:u.copied,userDrawerMeta:H,customDrawer:ee,sideDrawers:te,activeDrawer:a,onActiveDrawerChange:c,selectedLangAttribute:r,selectedLanguageText:r===`ja`?`日本語`:`ENGLISH`})}),(0,h.jsxs)(b,{children:[(0,h.jsx)(o,{design:`secondary`,onClick:()=>c(`menu`),children:u.todaysMenu}),(0,h.jsx)(o,{design:`secondary`,onClick:()=>c(`about`),children:u.aboutTitle})]})]})},A.__docgenInfo={description:``,methods:[],displayName:`_TopBar`},j=[`_TopBar`]})))()}M();export{A as _TopBar,j as __namedExportsOrder,O as default};