import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,o}from"./common-UxCkhbcb.js";import{a as s,i as c,n as l,r as u,t as d}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as f,n as p,r as m}from"./common-CUVz1sPu.js";import{r as h,t as g}from"./Icon-jcMQaGO-.js";import{n as _,t as v}from"./useCopyToClipboard-BVF9W5gA.js";import{n as ee,t as y}from"./StatusIcon-kv7a7cS9.js";import{O as b,j as x}from"./iframe-C82YJEyw.js";var S,C,w,T,E,D,O,k,A,j,M;function te(){return(te=t((()=>{S=n(),x(),s(),p(),C=i(),w=u`
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  border-radius: 3px;

  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 85.714% */
  white-space: nowrap;
  user-select: none;

  transition: opacity var(--speed-fast) var(--easing-primary-out);

`,T=c.div`
  ${w};

  ${({$themeColor:e})=>e?u`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:u`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,E=c.span`
  display: inline-block;
`,D=c.span``,O=u`
  ${w};
  text-decoration: none;

  ${({$themeColor:e})=>e?u`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:u`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({$themeColor:e})=>e?u`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:u`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,k=c.div`
  a {
    ${O};
  }
`,A=c.div`
  button {
    ${f};
    ${O};
  }
`,j=c.div`
  ${({$ready:e,$minWidth:t})=>u`

    visibility: ${e?`visible`:`hidden`};
    opacity: ${e?`1`:`0`};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${E}, ${D}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${t}px;`};
    }
  `};
`,M=({text:e,color:t,linkHref:n,linkTo:r,linkText:i,onClick:a})=>{let o=(0,S.useRef)(null),s=(0,S.useRef)(null),[c,l]=(0,S.useState)(!1),[u,d]=(0,S.useState)(!1),[f,p]=(0,S.useState)(0);(0,S.useEffect)(()=>{l(!1);let e=setTimeout(()=>{let e=o.current?.getBoundingClientRect().width??0,t=s.current?.getBoundingClientRect().width??0;p(Math.ceil(e>=t?e:t)),l(!0)},100);return()=>clearTimeout(e)},[]);let m=(0,S.useMemo)(()=>(0,C.jsx)(E,{ref:o,children:e}),[e]),h=(0,S.useMemo)(()=>a||r||n?(0,C.jsx)(D,{ref:s,children:i||e}):null,[a,r,n,i,e]),g=(0,S.useMemo)(()=>c?u?h:m:(0,C.jsxs)(S.Fragment,{children:[m,h]}),[c,u,m,h]),_=(0,S.useMemo)(()=>a?(0,C.jsx)(A,{$themeColor:t,children:(0,C.jsx)(`button`,{onClick:a,type:`button`,children:g})}):r?(0,C.jsx)(k,{$themeColor:t,children:(0,C.jsx)(b,{to:r,children:g})}):n?(0,C.jsx)(k,{$themeColor:t,children:(0,C.jsx)(`a`,{href:n,children:g})}):(0,C.jsx)(T,{$themeColor:t,children:m}),[a,r,n,t,g,m]);return(0,C.jsx)(j,{$ready:c,$minWidth:f,onPointerEnter:()=>c&&d(!0),onPointerLeave:()=>c&&d(!1),children:_})};try{M.displayName=`TopBarBadge`,M.__docgenInfo={description:``,displayName:`TopBarBadge`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/TopBarBadge.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`text`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!0,tags:{},type:{name:`string`}},color:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`color`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkHref:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkHref`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkTo:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkTo`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var N,P,F,ne,I,L;function re(){return(re=t((()=>{s(),h(),N=i(),P=c.div`
  padding: 16px 10px 14px 23px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid var(--dividing-line);
  align-items: center;
  cursor: pointer;
  user-select: none;
  svg {
    margin-top: 7px;
  }
`,F=c.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,ne=c.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,I=c.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,L=({icon:e=`Settings`,title:t,subTitle:n,onClickCallback:r=()=>{}})=>(0,N.jsxs)(P,{onClick:r,children:[(0,N.jsx)(g,{icon:e,size:18,color:`dimmed`}),(0,N.jsxs)(F,{children:[(0,N.jsx)(ne,{children:t}),(0,N.jsx)(I,{children:n})]})]});try{L.displayName=`DrawerBottomMenu`,L.__docgenInfo={description:``,displayName:`DrawerBottomMenu`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,methods:[],props:{icon:{defaultValue:{value:`Settings`},declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!0,tags:{},type:{name:`string`}},subTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`subTitle`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!0,tags:{},type:{name:`string`}},onClickCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`onClickCallback`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var R,z,B,V,H,ie,ae,oe,se,ce,le,ue,U;function de(){return(de=t((()=>{R=n(),s(),v(),h(),z=i(),B=c.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,V=c.div`
  max-width: 130px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.76;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  font-family: var(--font-ui);
  margin-top: 2px;
`,H=c.div`
  font-size: 10px;
  padding-left: 10px;
  max-width: 200px;
  overflow-wrap: initial;
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 0 5px 0;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
`,ie=c.div`
  padding-left: 10px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0 8px 0;
  max-height: 23px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-8);
  font-family: var(--font-data);
`,ae=c.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
  user-select: none;
`,oe=c.div`
  cursor: pointer;
`,se=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ce=c.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${oe}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,le=c.pre`
  padding: 5px;
  font-size: 10px;
  line-height: 1.2;
  box-shadow: 2px 2px 4px (195deg 16% 72% / 72%);
  border: 1px solid var(--grey-8);
  background-color: var(--grey-2);
  border-radius: 5px;
  opacity: 0.76;
  font-weight: 500;
  color: var(--grey-11);
  position: absolute;
  max-width: 170px;
  white-space: pre-wrap;
  font-family: var(--font-data);
  right:10px;
  margin-top: -23px;
`,ue=c.div`
`,U=({item:e,onUserDrawerMetaClick:t,copySuccessMessage:n,includeCopyTitle:r})=>{let{icon:i,title:a,subTitle:o,notes:s,hasCopyIcon:c}=e,{copyToClipboard:l}=_(),[u,d]=(0,R.useState)(!1),[f,p]=(0,R.useState)(`dimmed`),m=(0,R.useCallback)((e,t,n)=>{let i;i=r?`${e||``}\n${t||``}\n${n||``}`:`${t||``}\n${n||``}`,l(i),d(!0),setTimeout(()=>{d(!1)},1500)},[r,l]),h=(0,R.useCallback)(()=>{p(`mono`)},[]),v=(0,R.useCallback)(()=>{p(`dimmed`)},[]);return(0,z.jsx)(R.Fragment,{children:a!==``&&(0,z.jsx)(oe,{onClick:t,children:(0,z.jsxs)(B,{children:[(0,z.jsxs)(se,{children:[(0,z.jsxs)(ae,{children:[(0,z.jsx)(g,{icon:i,size:10,color:`dimmed`}),(0,z.jsx)(V,{title:a,children:a})]}),(0,z.jsxs)(ue,{children:[u&&(0,z.jsx)(le,{children:n===``?`Copied!`:n}),c?(0,z.jsx)(ce,{onClick:()=>m(a,o,s),onMouseEnter:h,onMouseLeave:v,children:(0,z.jsx)(g,{icon:`Copy`,size:12,color:f})}):null]})]}),o===``?null:(0,z.jsx)(H,{title:o,children:o}),s===``?null:(0,z.jsx)(ie,{title:s,children:s})]})})})};try{U.displayName=`UserDrawerMeta`,U.__docgenInfo={description:``,displayName:`UserDrawerMeta`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`item`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IUserDrawerMeta`}},onUserDrawerMetaClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var W,G,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,K;function Ee(){return(Ee=t((()=>{W=n(),x(),s(),p(),h(),o(),re(),de(),G=i(),fe=c.div``,pe=c.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${a.medium} {
    position: static;
    bottom: 0;
  }
`,me=c.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,he=c.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,ge=c.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,_e=c.div`
    padding: 0 20px;
`,ve=c.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,ye=c.li`
  padding: 10px 0;
`,be=c.div`
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  padding-right: 20px;
`,xe=c(b)`
  ${f};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&u`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,Se=c.div`
  font-family: var(--font-ui);
  border-top: var(--dividing-line) 1px solid;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 10px;
  font-weight: 400;
  color: var(--grey-a11);
  padding: 10px;
  padding-left: ${({$icon:e})=>e?`31px`:`21px`};
`,Ce=c.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,we=c.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({$icon:e})=>e?`136px`:`164px`};
  color: var(--grey-11);
  opacity: 0.5;
`,Te=e=>{if(e)return document.documentElement.setAttribute(`lang`,e),e;let t=navigator.language.split(`-`)[0];return document.documentElement.lang||(document.documentElement.setAttribute(`lang`,t),t)},K=({hasLanguage:e=!1,selectedLanguageText:t=``,languageOptionsText:n=`LANGUAGE / 言語`,selectedLangAttribute:r,hasLogout:i=!0,logoutLink:a=`/logout`,logoutText:o=`Logout`,hasCurrentUser:s=!0,currentUserText:c=`Current User`,accountOptionText:l=`Account Options`,userSubmenu:u=[],userDrawerBespoke:d,loggedInUser:f,hasSwitchTheme:p=!1,isLightMode:m=!0,switchThemeText:h=`SWITCH THEME`,selectedThemeText:_=``,onLogout:v=()=>{},onLanguageToggle:ee=()=>{},closeOnClick:y,onThemeToggle:b=()=>{},userDrawerFooter:x={icon:``,title:``},copySuccessMessage:S,includeCopyTitle:C,onUserDrawerMetaClick:w=()=>{},userDrawerMeta:T,hasUserDrawerMeta:E,hasUserDrawerFooter:D})=>{let{icon:O,title:k}=x,A=(0,W.useCallback)(async e=>{e.preventDefault(),await v(),window.location.assign(a),y&&y()},[y,a,v]),j=(0,W.useCallback)(()=>{y&&y()},[y]);return(0,W.useEffect)(()=>{Te(r)},[r]),(0,G.jsxs)(W.Fragment,{children:[(0,G.jsxs)(fe,{children:[s?(0,G.jsxs)(he,{children:[(0,G.jsx)(me,{children:c}),f]}):null,E?(0,G.jsx)(Ce,{children:T?.map((e,t)=>(0,G.jsx)(U,{onUserDrawerMetaClick:w,item:e,includeCopyTitle:C,copySuccessMessage:S},t))}):null,u.length>0?(0,G.jsxs)(ge,{children:[(0,G.jsx)(me,{children:l}),(0,G.jsx)(ve,{children:u.map(({text:e,href:t})=>(0,G.jsx)(ye,{children:(0,G.jsx)(xe,{to:t,onClick:j,children:e})},`${e}-${t}`))})]}):null,d||null,i?(0,G.jsx)(_e,{children:(0,G.jsx)(ve,{children:(0,G.jsx)(ye,{children:(0,G.jsx)(xe,{onClick:A,to:a,children:o})})})}):null]}),(0,G.jsxs)(pe,{children:[p&&(0,G.jsx)(L,{icon:m?`LightMode`:`DarkMode`,title:h,subTitle:_,onClickCallback:b}),e&&(0,G.jsx)(L,{icon:`Language`,title:n,subTitle:t,onClickCallback:ee}),D?(0,G.jsxs)(Se,{title:k,$icon:O,children:[O?(0,G.jsx)(be,{children:(0,G.jsx)(g,{icon:O,size:14,color:`dimmed`})}):null,(0,G.jsx)(we,{$icon:O,children:k})]}):null]})]})};try{K.displayName=`UserMenu`,K.__docgenInfo={description:``,displayName:`UserMenu`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/UserMenu.tsx`,methods:[],props:{closeOnClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/molecules/UserMenu.tsx`,name:`IUserMenu`}],description:``,name:`closeOnClick`,parent:{fileName:`packages/ui-lib/src/Global/molecules/UserMenu.tsx`,name:`IUserMenu`},required:!1,tags:{},type:{name:`(() => void)`}},hasNotifications:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasNotifications`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},userSubmenu:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userSubmenu`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserSubmenuItem[]`}},loggedInUser:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`loggedInUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!0,tags:{},type:{name:`string`}},hasLanguage:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLanguage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},selectedLanguageText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLanguageText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},languageOptionsText:{defaultValue:{value:`LANGUAGE / 言語`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`languageOptionsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedLangAttribute:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLangAttribute`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasLogout:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},logoutText:{defaultValue:{value:`Logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},logoutLink:{defaultValue:{value:`/logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutLink`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasSearch:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSearch`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasCurrentUser:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasCurrentUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},currentUserText:{defaultValue:{value:`Current User`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`currentUserText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},accountOptionText:{defaultValue:{value:`Account Options`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`accountOptionText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},searchPlaceholder:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`searchPlaceholder`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},userDrawerBespoke:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerBespoke`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},notificationsHistory:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`notificationsHistory`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`INotificationsHistory`}},customDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`customDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ICustomDrawer`}},sideDrawers:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Extra drawers with no top-bar toggle, opened from anywhere via the\ncontrolled `activeDrawer` prop (matched by `id`). Requires controlled usage.\nDesktop `TopBar` only — not supported by `GlobalUI` on mobile.",name:`sideDrawers`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ISideDrawer[]`}},leftAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`leftAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:'Content for a second row below the bar (Figma\'s "name bar"). Full width, with a\nhairline above it. Desktop `TopBar` only — not supported by `GlobalUI` on mobile.\nThe row applies no padding or gap, so content can reach either edge and any inset\nis yours to set. Children are centred vertically; use `height: 100%` to fill the band.',name:`bottomAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaHeight:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Height of the bottom row as a CSS length, default `'32px'`. Also feeds the\n`--top-bar-total-height` variable, so the drawers and any consumer offset follow it.",name:`bottomAreaHeight`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},activeDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Which drawer is open, for controlled usage. When provided (including
\`null\`), TopBar becomes controlled and the consumer owns the state.
When omitted, TopBar manages the open drawer with its own internal state.`,name:`activeDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IActiveDrawer`}},onActiveDrawerChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Called whenever a drawer is opened or closed (icon clicks included).`,name:`onActiveDrawerChange`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`((activeDrawer: IActiveDrawer) => void)`}},hasSwitchTheme:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSwitchTheme`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},isLightMode:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`isLightMode`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},switchThemeText:{defaultValue:{value:`SWITCH THEME`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`switchThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedThemeText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},onLogout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onLanguageToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLanguageToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onUserDrawerMetaClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onThemeToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onThemeToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},userDrawerFooter:{defaultValue:{value:`{ icon: '', title: '' }`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerFooter`}},userDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerMeta[]`}},hasUserDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasUserDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},badge:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`badge`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ITopBarBadge`}}},tags:{}}}catch{}})))()}var q,De,Oe,ke,Ae,je,Me,Ne,Pe,J;function Fe(){return(Fe=t((()=>{s(),q=i(),De=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,Oe=c.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,ke=c.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,Ae=c.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.$image});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: ${e=>e.$image?`block`:`none`};
`,je=c.div`
  margin-left: 20px;
`,Me=c.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,Ne=c.div`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  color: var(--grey-11);
  margin: 4px 0;
  height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
`,Pe=c.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,J=({imgUrl:e,title:t,message:n,time:r})=>(0,q.jsxs)(De,{children:[(0,q.jsx)(Oe,{children:e?(0,q.jsx)(Ae,{$image:e}):(0,q.jsx)(ke,{})}),(0,q.jsxs)(je,{children:[(0,q.jsx)(Me,{children:t}),(0,q.jsx)(Ne,{children:n}),(0,q.jsx)(Pe,{children:r})]})]});try{J.displayName=`NotificationItem`,J.__docgenInfo={description:``,displayName:`NotificationItem`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/NotificationItem.tsx`,methods:[],props:{imgUrl:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`imgUrl`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}},message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`message`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}},time:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`time`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Ie,Y,Le,X,Re,ze,Z;function Be(){return(Be=t((()=>{Ie=n(),s(),Fe(),Y=i(),Le=c.div`
  display: flex;
  flex-direction: column;
`,X=c.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,Re=c.div`
  border-bottom: var(--dividing-line) 1px solid;
`,ze=(e,t)=>e.map(e=>(0,Y.jsx)(Re,{children:(0,Y.jsx)(J,{...e})},`alert-${t}-${e.time}-${e.title}`)),Z=({read:e,unread:t,noNotificationsText:n=`No new notifications`,readNotificationsText:r=`New`,unreadNotificationsText:i=`Read`})=>e.length===0&&t.length===0?(0,Y.jsx)(Le,{children:(0,Y.jsx)(X,{children:n})}):(0,Y.jsxs)(Le,{children:[t&&(0,Y.jsxs)(Ie.Fragment,{children:[(0,Y.jsx)(X,{children:r}),ze(t,`unread`)]}),e&&(0,Y.jsxs)(Ie.Fragment,{children:[(0,Y.jsx)(X,{children:i}),ze(e,`read`)]})]});try{Z.displayName=`NotificationsHistory`,Z.__docgenInfo={description:``,displayName:`NotificationsHistory`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/NotificationsHistory.tsx`,methods:[],props:{read:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`read`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!0,tags:{},type:{name:`INotificationItem[]`}},unread:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`unread`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!0,tags:{},type:{name:`INotificationItem[]`}},noNotificationsText:{defaultValue:{value:`No new notifications`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`noNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}},readNotificationsText:{defaultValue:{value:`New`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`readNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}},unreadNotificationsText:{defaultValue:{value:`Read`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`unreadNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Ve,He,Q,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,$,rt,it;function at(){return(at=t((()=>{Ve=n(),He=e(r()),s(),p(),h(),ee(),te(),Ee(),Be(),Q=i(),Ue=[`user`,`notifications`,`custom`],We=l`
  :root {
    --top-bar-bottom-height: ${({$bottomHeight:e})=>e};
    --top-bar-total-height: calc(var(--top-bar-height, 56px) + var(--top-bar-bottom-height, 0px));
  }
`,Ge=c.div`
  z-index: 9;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border-bottom: var(--top-bar-divider-width, 1px) solid var(--dividing-line);
  background: var(--grey-2);
  box-shadow: 5px 0px 10px 0px var(--primary-a2);
`,Ke=c.div`
  height: calc(var(--top-bar-height, 56px) - var(--top-bar-divider-width, 1px));
  padding: 0 16px 0 24px;
  display: flex;
  justify-content: space-between;
`,qe=c.div`
  position: relative;
  box-sizing: border-box;
  height: var(--top-bar-bottom-height, 32px);
  display: flex;
  align-items: center;
  background: var(--global-element-background);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--dividing-line);
  }
`,Je=c.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,Ye=c.div`
  display: flex;
  height: 100%;
`,Xe=c.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,Ze=c.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Qe=c.input`
  ${m};
  font-family: var(--font-data);
  flex: 1;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--grey-10);
  font-size: 14px;

  &::placeholder {
    font-family: var(--font-data);
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    color: var(--grey-8);
  }

  &:lang(ja)::placeholder {
    font-style: normal;
  };
`,$e=c.div`
  height: inherit;
  display: flex;
  gap: 0;
`,et=d`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,tt=c.button.attrs({type:`button`})`
  position: relative;
  flex: 0 56px;
  width: 56px;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 5px;
    background-color: transparent;
    border-radius: 2px 2px 0 0;
  }

  transition: background-color var(--speed-normal) var(--easing-primary-out);

  svg {
    transition: transform var(--speed-normal) var(--easing-primary-out);
  }

  &:hover {
    opacity: 0.9;
    &::after {
      background-color: var(--primary-6);
    }
  }

  ${({$isActive:e})=>e&&u`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${et} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,nt=c.div``,$=c.div`
  font-family: var(--font-ui);

  position: fixed;
  right: -10px;
  top: var(--top-bar-total-height, 56px);
  bottom: 0;
  background: var(--global-element-background);
  border-left: var(--dividing-line) 1px solid;

  width: ${({$baseWidth:e})=>e||`200px`};
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition:
    opacity var(--speed-normal) var(--easing-primary-in-out),
    right var(--speed-normal) var(--easing-primary-in-out);

  ${({$isOpen:e})=>e&&u`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,rt=c.div`
    overflow-y: scroll;
    margin-right: -17px;
`,it=({hasNotifications:e=!1,hasLanguage:t=!1,selectedLanguageText:n=``,languageOptionsText:r,selectedLangAttribute:i,hasLogout:a=!0,logoutLink:o=`/logout`,logoutText:s=`Logout`,hasSearch:c=!1,hasCurrentUser:l=!0,currentUserText:u=`Current User`,accountOptionText:d=`Account Options`,searchPlaceholder:f=`Search for devices, analysis tasks, etc.`,userSubmenu:p=[],userDrawerBespoke:m,loggedInUser:h,notificationsHistory:_,customDrawer:v,hasSwitchTheme:ee=!1,isLightMode:b=!0,switchThemeText:x=`SWITCH THEME`,selectedThemeText:S=``,onLogout:C=()=>{},onLanguageToggle:w=()=>{},onThemeToggle:T=()=>{},userDrawerFooter:E,userDrawerMeta:D,onUserDrawerMetaClick:O=()=>{},hasUserDrawerMeta:k,copySuccessMessage:A,includeCopyTitle:j,hasUserDrawerFooter:te,badge:N,leftAreaElement:P,bottomAreaElement:F,bottomAreaHeight:ne=`32px`,sideDrawers:I,activeDrawer:L,onActiveDrawerChange:re})=>{let[R,z]=(0,Ve.useState)(null),B=L!==void 0,V=B?L:R,H=e=>{let t=V===e?null:e;B||z(t),re?.(t)},{sideDrawersToRender:ie,sideDrawerWarnings:ae}=(0,Ve.useMemo)(()=>{let e=[],t=[],n=new Set;for(let r of I??[]){if(Ue.includes(r.id)){t.push(`the side drawer with id "${r.id}" uses a reserved id (${Ue.join(`, `)}), so it will not open when its trigger is clicked. Please use a different id.`);continue}if(n.has(r.id)){t.push(`a side drawer with id "${r.id}" already exists; the duplicate will not open when its trigger is clicked. Please use a unique id.`);continue}n.add(r.id),e.push(r)}return{sideDrawersToRender:e,sideDrawerWarnings:t}},[I]);return(0,Ve.useEffect)(()=>{for(let e of ae)console.warn(`TopBar: ${e}`)},[]),(0,Q.jsxs)(Ge,{children:[(0,Q.jsx)(We,{$bottomHeight:F?ne:`0px`}),(0,Q.jsxs)(Ke,{children:[c?(0,Q.jsxs)(Xe,{children:[(0,Q.jsx)(Ze,{children:(0,Q.jsx)(g,{icon:`Search`,size:16,color:`grey-6`})}),(0,Q.jsx)(Qe,{placeholder:f})]}):P?(0,Q.jsx)(Ye,{children:P}):(0,Q.jsx)(`div`,{}),(0,Q.jsxs)(Je,{children:[N&&(0,Q.jsx)(M,{...N}),(0,Q.jsxs)($e,{children:[v&&(0,Q.jsx)(tt,{$isActive:V===`custom`,onClick:()=>H(`custom`),children:(0,Q.jsx)(y,{...v})}),e&&(0,Q.jsx)(tt,{$isActive:V===`notifications`,onClick:()=>H(`notifications`),children:(0,Q.jsx)(g,{icon:`Notifications`,size:20,color:`dimmed`})}),(0,Q.jsx)(tt,{$isActive:V===`user`,onClick:()=>H(`user`),children:(0,Q.jsx)(g,{icon:`UserProfile`,size:20,color:`dimmed`})})]})]})]}),F?(0,Q.jsx)(qe,{children:F}):null,He.createPortal((0,Q.jsxs)(nt,{children:[(0,Q.jsx)($,{$isOpen:V===`user`,children:(0,Q.jsx)(K,{hasLanguage:t,hasLogout:a,logoutLink:o,logoutText:s,hasCurrentUser:l,currentUserText:u,accountOptionText:d,userSubmenu:p,userDrawerBespoke:m,loggedInUser:h,onLogout:C,onLanguageToggle:w,selectedLanguageText:n,languageOptionsText:r,selectedLangAttribute:i,hasSwitchTheme:ee,isLightMode:b,switchThemeText:x,selectedThemeText:S,onThemeToggle:T,onUserDrawerMetaClick:O,userDrawerFooter:E,userDrawerMeta:D,hasUserDrawerMeta:k,copySuccessMessage:A,includeCopyTitle:j,hasUserDrawerFooter:te})}),e?(0,Q.jsx)($,{$isOpen:V===`notifications`,$baseWidth:`300px`,children:(0,Q.jsx)(rt,{children:_?(0,Q.jsx)(Z,{..._}):null})}):null,v&&(0,Q.jsx)($,{$isOpen:V===`custom`,$baseWidth:v.width?v.width:`200px`,children:v.customComponent}),ie.map(e=>(0,Q.jsx)($,{$isOpen:V===e.id,$baseWidth:e.width?e.width:`200px`,children:e.content},e.id))]}),document.body)]})};try{it.displayName=`TopBar`,it.__docgenInfo={description:``,displayName:`TopBar`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/TopBar.tsx`,methods:[],props:{hasNotifications:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasNotifications`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},userSubmenu:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userSubmenu`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserSubmenuItem[]`}},loggedInUser:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`loggedInUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!0,tags:{},type:{name:`string`}},hasLanguage:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLanguage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},selectedLanguageText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLanguageText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},languageOptionsText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`languageOptionsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedLangAttribute:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLangAttribute`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasLogout:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},logoutText:{defaultValue:{value:`Logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},logoutLink:{defaultValue:{value:`/logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutLink`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasSearch:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSearch`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasCurrentUser:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasCurrentUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},currentUserText:{defaultValue:{value:`Current User`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`currentUserText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},accountOptionText:{defaultValue:{value:`Account Options`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`accountOptionText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},searchPlaceholder:{defaultValue:{value:`Search for devices, analysis tasks, etc.`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`searchPlaceholder`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},userDrawerBespoke:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerBespoke`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},notificationsHistory:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`notificationsHistory`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`INotificationsHistory`}},customDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`customDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ICustomDrawer`}},sideDrawers:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Extra drawers with no top-bar toggle, opened from anywhere via the\ncontrolled `activeDrawer` prop (matched by `id`). Requires controlled usage.\nDesktop `TopBar` only — not supported by `GlobalUI` on mobile.",name:`sideDrawers`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ISideDrawer[]`}},leftAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`leftAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:'Content for a second row below the bar (Figma\'s "name bar"). Full width, with a\nhairline above it. Desktop `TopBar` only — not supported by `GlobalUI` on mobile.\nThe row applies no padding or gap, so content can reach either edge and any inset\nis yours to set. Children are centred vertically; use `height: 100%` to fill the band.',name:`bottomAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaHeight:{defaultValue:{value:`32px`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Height of the bottom row as a CSS length, default `'32px'`. Also feeds the\n`--top-bar-total-height` variable, so the drawers and any consumer offset follow it.",name:`bottomAreaHeight`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},activeDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Which drawer is open, for controlled usage. When provided (including
\`null\`), TopBar becomes controlled and the consumer owns the state.
When omitted, TopBar manages the open drawer with its own internal state.`,name:`activeDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IActiveDrawer`}},onActiveDrawerChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Called whenever a drawer is opened or closed (icon clicks included).`,name:`onActiveDrawerChange`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`((activeDrawer: IActiveDrawer) => void)`}},hasSwitchTheme:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSwitchTheme`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},isLightMode:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`isLightMode`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},switchThemeText:{defaultValue:{value:`SWITCH THEME`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`switchThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedThemeText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},onLogout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onLanguageToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLanguageToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onUserDrawerMetaClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onThemeToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onThemeToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},userDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerFooter`}},userDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerMeta[]`}},hasUserDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasUserDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},badge:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`badge`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ITopBarBadge`}}},tags:{}}}catch{}})))()}export{K as a,Be as i,at as n,Ee as o,Z as r,it as t};