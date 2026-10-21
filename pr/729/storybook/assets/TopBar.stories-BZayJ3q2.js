import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-CxOl84dr.js";import{n as a,t as o}from"./useThemeToggle-B1C_-snP.js";import{n as s,t as c}from"./SplitButton-BqcDWT9R.js";import{n as l,t as u}from"./TopBar-CGCbPPzU.js";import{a as d,o as f}from"./iframe-PEYaYO03.js";import{n as p,t as m}from"./placeholder-Trrcww9-.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{h=t(),r(),s(),l(),o(),f(),m(),g=n(),{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:v}=__STORYBOOK_MODULE_TEST__,y=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,b=d.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
`,x=d.span`
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--grey-12);
  white-space: nowrap;
`,S=d.div`
  padding: calc(var(--top-bar-total-height, 56px) + 24px) 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,C=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`,w=d.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`,T=d.h2`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-11);
  margin: 0;
`,E=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,D=d.li`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
`,O=d.h3`
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-9);
  margin: 8px 0 0;
`,k=d.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,A=d.div`
  font-size: 14px;
  font-style: italic;
  line-height: 20px;
  color: var(--grey-9);
`,j={en:{brand:`Smart Cafeteria`,newOrder:`New Order`,printReceipt:`Print Receipt`,clearOrders:`Clear Orders`,ordersTitle:`Orders`,inTheMaking:`In the making`,readyForPickup:`Ready for pick up`,ready:`Ready`,coffee:`Coffee`,cake:`Cake`,tea:`Tea`,todaysMenu:`Today's Menu`,aboutTitle:`About the Cafeteria`,aboutImageAlt:`Cafeteria photo`,badgeText:`Guest`,badgeLinkText:`Login`,minutes:e=>`${e} min`,yen:e=>`${e} yen`,logoutText:`Logout`,currentUserText:`Current User`,accountOptionText:`Account Options`,switchThemeText:`SWITCH THEME`,selectedThemeText:`Light/Dark Mode`,copySuccessMessage:`Copied`,searchPlaceholder:`Search area names, etc.`,selectedLanguageText:`ENGLISH`,userSubmenu:[{text:`Accounts`,href:`#`},{text:`Billing`,href:`#`},{text:`Payments`,href:`#`}]},ja:{brand:`スマートカフェテリア`,newOrder:`新規注文`,printReceipt:`レシートを印刷`,clearOrders:`注文をクリア`,ordersTitle:`注文`,inTheMaking:`準備中`,readyForPickup:`受け取り可能`,ready:`準備完了`,coffee:`コーヒー`,cake:`ケーキ`,tea:`紅茶`,todaysMenu:`本日のメニュー`,aboutTitle:`カフェテリアについて`,aboutImageAlt:`カフェテリアの写真`,badgeText:`ゲスト`,badgeLinkText:`ログイン`,minutes:e=>`${e}分`,yen:e=>`${e}円`,logoutText:`ログアウト`,currentUserText:`現在のユーザー`,accountOptionText:`アカウント設定`,switchThemeText:`テーマ切り替え`,selectedThemeText:`ライト/ダークモード`,copySuccessMessage:`コピーしました`,searchPlaceholder:`エリア名などを検索`,selectedLanguageText:`日本語`,userSubmenu:[{text:`アカウント`,href:`#`},{text:`請求`,href:`#`},{text:`支払い`,href:`#`}]}},M={unread:[{imgUrl:``,title:`Event Type`,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`1 min ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`6 mins ago`},{imgUrl:``,title:`Connection was interrupted`,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 hour ago`}],read:[{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 days ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`3 days ago`},{imgUrl:``,title:`A new device was added`,message:`The device has bean correctly added`,time:`3 days ago`}],noNotificationsText:`NO NEW NOTIFICATIONS`,readNotificationsText:`NEW`,unreadNotificationsText:`READ`},N=[{icon:``,title:`Device ID:`,subTitle:`DEB-NUC8i7BE-G6BE935008VH`,notes:``,hasCopyIcon:!0},{icon:`Information`,title:`GPU machine with 4 GPU`,subTitle:`Building B`,notes:`This is a GPU machine having 30 camera support`,hasCopyIcon:!0},{icon:`Success`,title:`Device is Live`,subTitle:`Building C`,notes:`This is a GPU machine having 30 camera support`}],P=(e,t)=>(0,g.jsxs)(b,{children:[(0,g.jsx)(x,{children:e.brand}),(0,g.jsx)(c,{mainButtonId:`new-order`,buttonList:[{id:`new-order`,text:e.newOrder,icon:`Add`,hasOnSelectLoading:!0,onClickCallback:t.onNewOrder},{id:`print-receipt`,text:e.printReceipt,icon:`Download`,onClickCallback:t.onPrintReceipt},{id:`clear-orders`,text:e.clearOrders,icon:`RetryJob`,onClickCallback:t.onClearOrders}]})]}),F=e=>({customComponent:(0,g.jsxs)(C,{children:[(0,g.jsx)(T,{children:e.ordersTitle}),(0,g.jsx)(O,{children:e.inTheMaking}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(D,{children:[(0,g.jsxs)(`span`,{children:[`#014 · `,e.coffee]}),(0,g.jsx)(`span`,{children:e.minutes(2)})]}),(0,g.jsxs)(D,{children:[(0,g.jsxs)(`span`,{children:[`#015 · `,e.cake]}),(0,g.jsx)(`span`,{children:e.minutes(5)})]})]}),(0,g.jsx)(O,{children:e.readyForPickup}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(D,{children:[(0,g.jsxs)(`span`,{children:[`#012 · `,e.tea]}),(0,g.jsx)(`span`,{children:e.ready})]}),(0,g.jsxs)(D,{children:[(0,g.jsxs)(`span`,{children:[`#013 · `,e.coffee]}),(0,g.jsx)(`span`,{children:e.ready})]})]})]}),icon:`Time`,status:`caution`,counter:2,width:`300px`}),I=e=>[{id:`menu`,width:`260px`,content:(0,g.jsxs)(C,{children:[(0,g.jsx)(T,{children:e.todaysMenu}),(0,g.jsxs)(E,{children:[(0,g.jsxs)(D,{children:[(0,g.jsx)(`span`,{children:e.tea}),(0,g.jsx)(`span`,{children:e.yen(130)})]}),(0,g.jsxs)(D,{children:[(0,g.jsx)(`span`,{children:e.coffee}),(0,g.jsx)(`span`,{children:e.yen(300)})]}),(0,g.jsxs)(D,{children:[(0,g.jsx)(`span`,{children:e.cake}),(0,g.jsx)(`span`,{children:e.yen(350)})]})]})]})},{id:`about`,width:`320px`,content:(0,g.jsxs)(C,{children:[(0,g.jsx)(w,{src:p,alt:e.aboutImageAlt}),(0,g.jsx)(T,{children:e.aboutTitle})]})}],L={onNewOrder:v(),onPrintReceipt:v(),onClearOrders:v()},R=({badge:e,customDrawer:t,sideDrawers:n,leftAreaElement:r,useBadgeOnClick:o,onBadgeClick:s,onNewOrder:c,onPrintReceipt:l,onClearOrders:d,onLanguageToggle:f,selectedLangAttribute:p=`en`,selectedLanguageText:m,logoutText:_,currentUserText:v,accountOptionText:b,switchThemeText:x,selectedThemeText:C,copySuccessMessage:w,searchPlaceholder:T,userSubmenu:E,...D})=>{let{onThemeToggle:O,isLightMode:k}=a(),[A,M]=(0,h.useState)(null),N=p===`ja`,L=N?j.ja:j.en,R=(e,t)=>N?t:e,z=e?{...e,text:R(e.text,j.ja.badgeText),linkText:R(e.linkText,j.ja.badgeLinkText),onClick:o?s:void 0}:void 0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{children:(0,g.jsx)(u,{...D,badge:z,isLightMode:k,onThemeToggle:O,onLanguageToggle:f,selectedLangAttribute:p,selectedLanguageText:R(m,j.ja.selectedLanguageText),userSubmenu:R(E,j.ja.userSubmenu),logoutText:R(_,j.ja.logoutText),currentUserText:R(v,j.ja.currentUserText),accountOptionText:R(b,j.ja.accountOptionText),switchThemeText:R(x,j.ja.switchThemeText),selectedThemeText:R(C,j.ja.selectedThemeText),copySuccessMessage:R(w,j.ja.copySuccessMessage),searchPlaceholder:R(T,j.ja.searchPlaceholder),leftAreaElement:R(r,P(j.ja,{onNewOrder:c,onPrintReceipt:l,onClearOrders:d})),customDrawer:R(t,F(j.ja)),sideDrawers:R(n,I(j.ja)),activeDrawer:A,onActiveDrawerChange:M})}),(0,g.jsxs)(S,{children:[(0,g.jsx)(i,{design:`secondary`,onClick:()=>M(`menu`),children:L.todaysMenu}),(0,g.jsx)(i,{design:`secondary`,onClick:()=>M(`about`),children:L.aboutTitle})]})]})},z=(e,t)=>({control:!1,table:{defaultValue:{summary:e,detail:t}}}),B={title:`Global/TopBar`,component:u,tags:[`autodocs`],parameters:{docs:{story:{inline:!1,iframeHeight:`520px`}}},argTypes:{userDrawerBespoke:z(`Not set here; see the WithBespokeUserDrawer story`),bottomAreaElement:z(`Not set here: content for a second row below the bar`),isLightMode:z(`Follows the Theme toolbar through useThemeToggle()`),activeDrawer:z(`Controlled by the story: null until a drawer is opened`)},args:{loggedInUser:`full.name@example.com`,hasSearch:!1,hasLogout:!0,hasNotifications:!0,hasCurrentUser:!0,hasLanguage:!0,hasSwitchTheme:!0,hasUserDrawerMeta:!0,hasUserDrawerFooter:!1,includeCopyTitle:!0,bottomAreaHeight:`32px`,logoutLink:`#`,logoutText:j.en.logoutText,currentUserText:j.en.currentUserText,accountOptionText:j.en.accountOptionText,searchPlaceholder:j.en.searchPlaceholder,switchThemeText:j.en.switchThemeText,selectedThemeText:j.en.selectedThemeText,copySuccessMessage:j.en.copySuccessMessage,selectedLangAttribute:`en`,selectedLanguageText:j.en.selectedLanguageText,languageOptionsText:`LANGUAGE / 言語`,userSubmenu:j.en.userSubmenu,userDrawerFooter:{icon:`Information`,title:`V12.3.4`},notificationsHistory:M,userDrawerMeta:N,badge:{text:j.en.badgeText,color:`info`,linkTo:`/login`,linkText:j.en.badgeLinkText},customDrawer:F(j.en),sideDrawers:I(j.en),leftAreaElement:P(j.en,L),useBadgeOnClick:!1,onLanguageToggle:v(),onLogout:v(),onUserDrawerMetaClick:v(),onBadgeClick:v(),...L},render:function(e){let[{selectedLangAttribute:t=`en`},n]=_(),r=()=>{e.onLanguageToggle?.(),n({selectedLangAttribute:t===`en`?`ja`:`en`})};return(0,g.jsx)(R,{...e,selectedLangAttribute:t,onLanguageToggle:r})}},V={},H={argTypes:{userDrawerBespoke:{control:`object`}},args:{userDrawerBespoke:(0,g.jsx)(k,{children:(0,g.jsxs)(A,{children:[(0,g.jsx)(`p`,{children:`This area is yours: userDrawerBespoke renders any element inside the user drawer.`}),(0,g.jsx)(`p`,{children:`Use it for account details, a plan summary or links the menu does not cover.`})]})})}},U=[`Default`,`WithBespokeUserDrawer`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  argTypes: {
    userDrawerBespoke: {
      control: 'object'
    }
  },
  args: {
    userDrawerBespoke: <BespokeDrawerContent>
        <BespokeDrawerText>
          <p>This area is yours: userDrawerBespoke renders any element inside the user drawer.</p>
          <p>Use it for account details, a plan summary or links the menu does not cover.</p>
        </BespokeDrawerText>
      </BespokeDrawerContent>
  }
}`,...H.parameters?.docs?.source}}}})))()}W();export{V as Default,H as WithBespokeUserDrawer,U as __namedExportsOrder,B as default};