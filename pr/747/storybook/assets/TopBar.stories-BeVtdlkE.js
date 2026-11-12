import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,t as o}from"./Button-CVePDF2Y.js";import{n as s,t as c}from"./SplitButton-BcHV72Uw.js";import{n as l,t as u}from"./TopBar-CNfZpzVG.js";import{n as d,t as f}from"./placeholder-Trrcww9-.js";import{n as p,t as m}from"./FramedDocsPage-uw4IpaO3.js";var h,g,_,v,y;function b(){return(b=e((()=>{h=t(),g=`(prefers-color-scheme: dark)`,_=e=>{e?(document.body.classList.add(`light-theme`),document.body.classList.remove(`dark-theme`)):(document.body.classList.add(`dark-theme`),document.body.classList.remove(`light-theme`))},v=()=>{let e=localStorage.getItem(`isDarkThemeEnabled`),t=!0;return t=e===null?window.matchMedia(g)?.matches:e!==`false`,_(!t),t},y=()=>{let[e,t]=(0,h.useState)(v),n=(0,h.useCallback)(()=>{t(e=>(localStorage.isDarkThemeEnabled=!e,_(e),!e))},[]),r=(0,h.useCallback)(e=>{if(localStorage.getItem(`isDarkThemeEnabled`)!==null)return;let n=e.matches;t(()=>(_(!n),n))},[]);return(0,h.useEffect)(()=>{let e=window.matchMedia(g);return e.addEventListener(`change`,r),()=>{e.removeEventListener(`change`,r)}},[r]),{isDarkThemeEnabled:e,setIsDarkThemeEnabled:t,onThemeToggle:n,isLightMode:!e}}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{x=t(),a(),s(),l(),b(),r(),f(),p(),S=n(),{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:w}=__STORYBOOK_MODULE_TEST__,T=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,E=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
`,D=i.span`
  font-family: var(--font-ui);
  font-size: 15px;
  font-weight: 600;
  color: var(--grey-12);
  white-space: nowrap;
`,O=i.div`
  padding: calc(var(--top-bar-total-height, 56px) + 24px) 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`,k=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
`,A=i.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`,j=i.h2`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 600;
  color: var(--grey-11);
  margin: 0;
`,M=i.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N=i.li`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
`,P=i.h3`
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-9);
  margin: 8px 0 0;
`,F=i.div`
  padding: 10px 20px;
  border-bottom: var(--grey-6) 1px solid;
`,I=i.div`
  font-size: 14px;
  font-style: italic;
  line-height: 20px;
  color: var(--grey-9);
`,L={en:{brand:`Smart Cafeteria`,newOrder:`New Order`,printReceipt:`Print Receipt`,clearOrders:`Clear Orders`,ordersTitle:`Orders`,inTheMaking:`In the making`,readyForPickup:`Ready for pick up`,ready:`Ready`,coffee:`Coffee`,cake:`Cake`,tea:`Tea`,todaysMenu:`Today's Menu`,aboutTitle:`About the Cafeteria`,aboutImageAlt:`Cafeteria photo`,badgeText:`Guest`,badgeLinkText:`Login`,minutes:e=>`${e} min`,yen:e=>`${e} yen`,logoutText:`Logout`,currentUserText:`Current User`,accountOptionText:`Account Options`,switchThemeText:`SWITCH THEME`,selectedThemeText:`Light/Dark Mode`,copySuccessMessage:`Copied`,searchPlaceholder:`Search area names, etc.`,selectedLanguageText:`ENGLISH`,userSubmenu:[{text:`Accounts`,href:`#`},{text:`Billing`,href:`#`},{text:`Payments`,href:`#`}]},ja:{brand:`スマートカフェテリア`,newOrder:`新規注文`,printReceipt:`レシートを印刷`,clearOrders:`注文をクリア`,ordersTitle:`注文`,inTheMaking:`準備中`,readyForPickup:`受け取り可能`,ready:`準備完了`,coffee:`コーヒー`,cake:`ケーキ`,tea:`紅茶`,todaysMenu:`本日のメニュー`,aboutTitle:`カフェテリアについて`,aboutImageAlt:`カフェテリアの写真`,badgeText:`ゲスト`,badgeLinkText:`ログイン`,minutes:e=>`${e}分`,yen:e=>`${e}円`,logoutText:`ログアウト`,currentUserText:`現在のユーザー`,accountOptionText:`アカウント設定`,switchThemeText:`テーマ切り替え`,selectedThemeText:`ライト/ダークモード`,copySuccessMessage:`コピーしました`,searchPlaceholder:`エリア名などを検索`,selectedLanguageText:`日本語`,userSubmenu:[{text:`アカウント`,href:`#`},{text:`請求`,href:`#`},{text:`支払い`,href:`#`}]}},R={unread:[{imgUrl:``,title:`Event Type`,message:`A short message limited to two lines. Extra text will just truncat...`,time:`Just Now`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`1 min ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`6 mins ago`},{imgUrl:``,title:`Connection was interrupted`,message:`The connections is not working properly. Please verify your connection or contact your personal support.`,time:`1 hour ago`},{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 hour ago`}],read:[{imgUrl:``,title:`Device is off`,message:`The device has correctly turn off`,time:`3 days ago`},{imgUrl:``,title:`Device is on`,message:`The device has correctly turn on`,time:`3 days ago`},{imgUrl:``,title:`A new device was added`,message:`The device has bean correctly added`,time:`3 days ago`}],noNotificationsText:`NO NEW NOTIFICATIONS`,readNotificationsText:`NEW`,unreadNotificationsText:`READ`},z=[{icon:``,title:`Device ID:`,subTitle:`DEB-NUC8i7BE-G6BE935008VH`,notes:``,hasCopyIcon:!0},{icon:`Information`,title:`GPU machine with 4 GPU`,subTitle:`Building B`,notes:`This is a GPU machine having 30 camera support`,hasCopyIcon:!0},{icon:`Success`,title:`Device is Live`,subTitle:`Building C`,notes:`This is a GPU machine having 30 camera support`}],B=(e,t)=>(0,S.jsxs)(E,{children:[(0,S.jsx)(D,{children:e.brand}),(0,S.jsx)(c,{mainButtonId:`new-order`,buttonList:[{id:`new-order`,text:e.newOrder,icon:`Add`,hasOnSelectLoading:!0,onClickCallback:t.onNewOrder},{id:`print-receipt`,text:e.printReceipt,icon:`Download`,onClickCallback:t.onPrintReceipt},{id:`clear-orders`,text:e.clearOrders,icon:`RetryJob`,onClickCallback:t.onClearOrders}]})]}),V=e=>({customComponent:(0,S.jsxs)(k,{children:[(0,S.jsx)(j,{children:e.ordersTitle}),(0,S.jsx)(P,{children:e.inTheMaking}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(N,{children:[(0,S.jsxs)(`span`,{children:[`#014 · `,e.coffee]}),(0,S.jsx)(`span`,{children:e.minutes(2)})]}),(0,S.jsxs)(N,{children:[(0,S.jsxs)(`span`,{children:[`#015 · `,e.cake]}),(0,S.jsx)(`span`,{children:e.minutes(5)})]})]}),(0,S.jsx)(P,{children:e.readyForPickup}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(N,{children:[(0,S.jsxs)(`span`,{children:[`#012 · `,e.tea]}),(0,S.jsx)(`span`,{children:e.ready})]}),(0,S.jsxs)(N,{children:[(0,S.jsxs)(`span`,{children:[`#013 · `,e.coffee]}),(0,S.jsx)(`span`,{children:e.ready})]})]})]}),icon:`Time`,status:`caution`,counter:2,width:`300px`}),H=e=>[{id:`menu`,width:`260px`,content:(0,S.jsxs)(k,{children:[(0,S.jsx)(j,{children:e.todaysMenu}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{children:e.tea}),(0,S.jsx)(`span`,{children:e.yen(130)})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{children:e.coffee}),(0,S.jsx)(`span`,{children:e.yen(300)})]}),(0,S.jsxs)(N,{children:[(0,S.jsx)(`span`,{children:e.cake}),(0,S.jsx)(`span`,{children:e.yen(350)})]})]})]})},{id:`about`,width:`320px`,content:(0,S.jsxs)(k,{children:[(0,S.jsx)(A,{src:d,alt:e.aboutImageAlt}),(0,S.jsx)(j,{children:e.aboutTitle})]})}],U={onNewOrder:w(),onPrintReceipt:w(),onClearOrders:w()},W=B(L.ja,U),G=V(L.ja),K=H(L.ja),q=({badge:e,customDrawer:t,sideDrawers:n,leftAreaElement:r,useBadgeOnClick:i,onBadgeClick:a,onNewOrder:s,onPrintReceipt:c,onClearOrders:l,onLanguageToggle:d,selectedLangAttribute:f=`en`,selectedLanguageText:p,logoutText:m,currentUserText:h,accountOptionText:g,switchThemeText:_,selectedThemeText:v,copySuccessMessage:b,searchPlaceholder:C,userSubmenu:w,...E})=>{let{onThemeToggle:D,isLightMode:k}=y(),[A,j]=(0,x.useState)(null),M=f===`ja`,N=M?L.ja:L.en,P=(e,t)=>M?t:e,F=e?{...e,text:P(e.text,L.ja.badgeText),linkText:P(e.linkText,L.ja.badgeLinkText),onClick:i?a:void 0}:void 0;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(T,{children:(0,S.jsx)(u,{...E,badge:F,isLightMode:k,onThemeToggle:D,onLanguageToggle:d,selectedLangAttribute:f,selectedLanguageText:P(p,L.ja.selectedLanguageText),userSubmenu:P(w,L.ja.userSubmenu),logoutText:P(m,L.ja.logoutText),currentUserText:P(h,L.ja.currentUserText),accountOptionText:P(g,L.ja.accountOptionText),switchThemeText:P(_,L.ja.switchThemeText),selectedThemeText:P(v,L.ja.selectedThemeText),copySuccessMessage:P(b,L.ja.copySuccessMessage),searchPlaceholder:P(C,L.ja.searchPlaceholder),leftAreaElement:P(r,W),customDrawer:P(t,G),sideDrawers:P(n,K),activeDrawer:A,onActiveDrawerChange:j})}),(0,S.jsxs)(O,{children:[(0,S.jsx)(o,{design:`secondary`,onClick:()=>j(`menu`),children:N.todaysMenu}),(0,S.jsx)(o,{design:`secondary`,onClick:()=>j(`about`),children:N.aboutTitle})]})]})},J=(e,t)=>({control:!1,table:{defaultValue:{summary:e,detail:t}}}),Y={title:`Global/TopBar`,component:u,parameters:{docs:{page:m,story:{inline:!1,iframeHeight:`520px`}}},argTypes:{userDrawerBespoke:J(`Not set here; see the WithBespokeUserDrawer story`),bottomAreaElement:J(`Not set here: content for a second row below the bar`),isLightMode:J(`Follows the Theme toolbar through useThemeToggle()`),activeDrawer:J(`Controlled by the story: null until a drawer is opened`)},args:{loggedInUser:`full.name@example.com`,hasSearch:!1,hasLogout:!0,hasNotifications:!0,hasCurrentUser:!0,hasLanguage:!0,hasSwitchTheme:!0,hasUserDrawerMeta:!0,hasUserDrawerFooter:!1,includeCopyTitle:!0,bottomAreaHeight:`32px`,logoutLink:`#`,logoutText:L.en.logoutText,currentUserText:L.en.currentUserText,accountOptionText:L.en.accountOptionText,searchPlaceholder:L.en.searchPlaceholder,switchThemeText:L.en.switchThemeText,selectedThemeText:L.en.selectedThemeText,copySuccessMessage:L.en.copySuccessMessage,selectedLangAttribute:`en`,selectedLanguageText:L.en.selectedLanguageText,languageOptionsText:`LANGUAGE / 言語`,userSubmenu:L.en.userSubmenu,userDrawerFooter:{icon:`Information`,title:`V12.3.4`},notificationsHistory:R,userDrawerMeta:z,badge:{text:L.en.badgeText,color:`info`,linkTo:`/login`,linkText:L.en.badgeLinkText},customDrawer:V(L.en),sideDrawers:H(L.en),leftAreaElement:B(L.en,U),useBadgeOnClick:!1,onLanguageToggle:w(),onLogout:w(),onUserDrawerMetaClick:w(),onBadgeClick:w(),...U},render:function(e){let[{selectedLangAttribute:t=`en`},n]=C(),r=()=>{e.onLanguageToggle?.(),n({selectedLangAttribute:t===`en`?`ja`:`en`})};return(0,S.jsx)(q,{...e,selectedLangAttribute:t,onLanguageToggle:r})}},X={},Z={argTypes:{userDrawerBespoke:{control:`object`}},args:{userDrawerBespoke:(0,S.jsx)(F,{children:(0,S.jsxs)(I,{children:[(0,S.jsx)(`p`,{children:`This area is yours: userDrawerBespoke renders any element inside the user drawer.`}),(0,S.jsx)(`p`,{children:`Use it for account details, a plan summary or links the menu does not cover.`})]})})}},Q=[`Default`,`WithBespokeUserDrawer`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Default,Z as WithBespokeUserDrawer,Q as __namedExportsOrder,Y as default};