import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./react-dom-BXgx-GBU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{i as a,n as o,r as s}from"./common-C1LGBsDL.js";import{r as c,t as l}from"./Icon-DEQ-SMMn.js";import{n as u,t as d}from"./useCopyToClipboard-BVF9W5gA.js";import{n as f,t as p}from"./StatusIcon-CbtJTsZR.js";import{a as m,c as h,d as g,i as _,m as v,n as y,o as b,r as ee,u as te}from"./iframe-Cw1eIbNi.js";var x,S,C,w,T,E,D,O,k,ne,A;function re(){return(re=t((()=>{x=n(),v(),b(),o(),S=i(),C=_`
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

`,w=m.div`
  ${C};

  ${({$themeColor:e})=>e?_`
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:_`
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};
`,T=m.span`
  display: inline-block;
`,E=m.span``,D=_`
  ${C};
  text-decoration: none;

  ${({$themeColor:e})=>e?_`
    background-color: transparent;
    border: 2px solid var(--${e}-9);
    color: var(--${e}-11);
  `:_`
    background-color: transparent;
    border: 2px solid var(--info-9);
    color: var(--info-11);
  `};

  &:hover {
    ${({$themeColor:e})=>e?_`
      background-color: var(--${e}-9);
      border: 2px solid var(--${e}-9);
      color: var(--white-12);
    `:_`
      background-color: var(--info-9);
      border: 2px solid var(--info-9);
      color: var(--white-12);
    `};
  }
`,O=m.div`
  a {
    ${D};
  }
`,k=m.div`
  button {
    ${a};
    ${D};
  }
`,ne=m.div`
  ${({$ready:e,$minWidth:t})=>_`

    visibility: ${e?`visible`:`hidden`};
    opacity: ${e?`1`:`0`};

    transition: opacity var(--speed-fast) var(--easing-primary-in-out);

    ${T}, ${E}{
      /* Required to accurately measure container sizes and ensure hover doesn't resize. */
      ${e&&`min-width: ${t}px;`};
    }
  `};
`,A=({text:e,color:t,linkHref:n,linkTo:r,linkText:i,onClick:a})=>{let o=(0,x.useRef)(null),s=(0,x.useRef)(null),[c,l]=(0,x.useState)(!1),[u,d]=(0,x.useState)(!1),[f,p]=(0,x.useState)(0);(0,x.useEffect)(()=>{l(!1);let e=setTimeout(()=>{let e=o.current?.getBoundingClientRect().width??0,t=s.current?.getBoundingClientRect().width??0;p(Math.ceil(e>=t?e:t)),l(!0)},100);return()=>clearTimeout(e)},[]);let m=(0,x.useMemo)(()=>(0,S.jsx)(T,{ref:o,children:e}),[e]),h=(0,x.useMemo)(()=>a||r||n?(0,S.jsx)(E,{ref:s,children:i||e}):null,[a,r,n,i,e]),_=(0,x.useMemo)(()=>c?u?h:m:(0,S.jsxs)(x.Fragment,{children:[m,h]}),[c,u,m,h]),v=(0,x.useMemo)(()=>a?(0,S.jsx)(k,{$themeColor:t,children:(0,S.jsx)(`button`,{onClick:a,type:`button`,children:_})}):r?(0,S.jsx)(O,{$themeColor:t,children:(0,S.jsx)(g,{to:r,children:_})}):n?(0,S.jsx)(O,{$themeColor:t,children:(0,S.jsx)(`a`,{href:n,children:_})}):(0,S.jsx)(w,{$themeColor:t,children:m}),[a,r,n,t,_,m]);return(0,S.jsx)(ne,{$ready:c,$minWidth:f,onPointerEnter:()=>c&&d(!0),onPointerLeave:()=>c&&d(!1),children:v})};try{A.displayName=`TopBarBadge`,A.__docgenInfo={description:``,displayName:`TopBarBadge`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/TopBarBadge.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`text`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!0,tags:{},type:{name:`string`}},color:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`color`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkHref:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkHref`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkTo:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkTo`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},linkText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`linkText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBarBadge`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var j,M,N,ie,P,F;function ae(){return(ae=t((()=>{b(),c(),j=i(),M=m.div`
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
`,N=m.div`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  align-items: flex-start;
`,ie=m.div`
  opacity: 0.76;
  font-family: var(--font-ui);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.34px;
  color: var(--grey-11);
`,P=m.div`
  font-family: var(--font-ui);
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: 0.29px;
  color: var(--grey-11);
  padding-top: 2px;
  opacity: 0.5;
`,F=({icon:e=`Settings`,title:t,subTitle:n,onClickCallback:r=()=>{}})=>(0,j.jsxs)(M,{onClick:r,children:[(0,j.jsx)(l,{icon:e,size:18,color:`dimmed`}),(0,j.jsxs)(N,{children:[(0,j.jsx)(ie,{children:t}),(0,j.jsx)(P,{children:n})]})]});try{F.displayName=`DrawerBottomMenu`,F.__docgenInfo={description:``,displayName:`DrawerBottomMenu`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,methods:[],props:{icon:{defaultValue:{value:`Settings`},declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!0,tags:{},type:{name:`string`}},subTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`subTitle`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!0,tags:{},type:{name:`string`}},onClickCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`}],description:``,name:`onClickCallback`,parent:{fileName:`packages/ui-lib/src/Global/atoms/DrawerBottomMenu.tsx`,name:`IDrawerBottomMenu`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var I,L,R,z,B,oe,se,ce,le,ue,de,fe,V;function pe(){return(pe=t((()=>{I=n(),b(),d(),c(),L=i(),R=m.div`
  margin: 10px 10px;
  border: 1px solid var(--grey-3);
  background-color: var(--grey-a2);
  border-radius: 5px;
  &:active {
    box-shadow: 4px 4px var(--grey-a2);
  }
`,z=m.div`
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
`,B=m.div`
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
`,oe=m.div`
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
`,se=m.div`
  display: flex;
  gap:6px;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin: 3px 0 5px 10px;
  user-select: none;
`,ce=m.div`
  cursor: pointer;
`,le=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ue=m.div`
  padding: 1px 5px 0 0;
  opacity: 0;
  ${ce}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`,de=m.pre`
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
`,fe=m.div`
`,V=({item:e,onUserDrawerMetaClick:t,copySuccessMessage:n,includeCopyTitle:r})=>{let{icon:i,title:a,subTitle:o,notes:s,hasCopyIcon:c}=e,{copyToClipboard:d}=u(),[f,p]=(0,I.useState)(!1),[m,h]=(0,I.useState)(`dimmed`),g=(0,I.useCallback)((e,t,n)=>{let i;i=r?`${e||``}\n${t||``}\n${n||``}`:`${t||``}\n${n||``}`,d(i),p(!0),setTimeout(()=>{p(!1)},1500)},[r,d]),_=(0,I.useCallback)(()=>{h(`mono`)},[]),v=(0,I.useCallback)(()=>{h(`dimmed`)},[]);return(0,L.jsx)(I.Fragment,{children:a!==``&&(0,L.jsx)(ce,{onClick:t,children:(0,L.jsxs)(R,{children:[(0,L.jsxs)(le,{children:[(0,L.jsxs)(se,{children:[(0,L.jsx)(l,{icon:i,size:10,color:`dimmed`}),(0,L.jsx)(z,{title:a,children:a})]}),(0,L.jsxs)(fe,{children:[f&&(0,L.jsx)(de,{children:n===``?`Copied!`:n}),c?(0,L.jsx)(ue,{onClick:()=>g(a,o,s),onMouseEnter:_,onMouseLeave:v,children:(0,L.jsx)(l,{icon:`Copy`,size:12,color:m})}):null]})]}),o===``?null:(0,L.jsx)(B,{title:o,children:o}),s===``?null:(0,L.jsx)(oe,{title:s,children:s})]})})})};try{V.displayName=`UserDrawerMeta`,V.__docgenInfo={description:``,displayName:`UserDrawerMeta`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,methods:[],props:{item:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`item`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IUserDrawerMeta`}},onUserDrawerMetaClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/atoms/UserDrawerMeta.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var H,U,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,W;function Oe(){return(Oe=t((()=>{H=n(),v(),b(),o(),c(),te(),ae(),pe(),U=i(),me=m.div``,he=m.div`
  width: 100%;
  position: fixed;
  bottom: 50px;
  @media ${h.medium} {
    position: static;
    bottom: 0;
  }
`,ge=m.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: var(--grey-11);
  padding: 0;
  margin: 0 0 5px;
`,_e=m.div`
  padding: 20px 20px 15px;
  border-bottom: var(--dividing-line) 1px solid;
  font-size: 12px;
  font-weight: 400;
  color: var(--grey-11);
`,ve=m.div`
  padding: 20px 20px 10px 20px;
  border-bottom: var(--dividing-line) 1px solid;
`,ye=m.div`
    padding: 0 20px;
`,be=m.ul`
  padding: 0;
  margin: 12px 0 0 0;
  list-style: none;
`,xe=m.li`
  padding: 10px 0;
`,Se=m.div`
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
`,Ce=m(g)`
  ${a};
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--grey-10);
  text-decoration: none;

  &:hover {
    color: var(--primary-9);
  }

  ${({isActive:e})=>e&&_`
    &, &:hover {
      color: var(--primary-9);
    }
  `};
`,we=m.div`
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
`,Te=m.div`
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  border-bottom: var(--dividing-line) 1px solid;
`,Ee=m.div`
  white-space: break-spaces;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 136px;
  max-width: ${({$icon:e})=>e?`136px`:`164px`};
  color: var(--grey-11);
  opacity: 0.5;
`,De=e=>{if(e)return document.documentElement.setAttribute(`lang`,e),e;let t=navigator.language.split(`-`)[0];return document.documentElement.lang||(document.documentElement.setAttribute(`lang`,t),t)},W=({hasLanguage:e=!1,selectedLanguageText:t=``,languageOptionsText:n=`LANGUAGE / 言語`,selectedLangAttribute:r,hasLogout:i=!0,logoutLink:a=`/logout`,logoutText:o=`Logout`,hasCurrentUser:s=!0,currentUserText:c=`Current User`,accountOptionText:u=`Account Options`,userSubmenu:d=[],userDrawerBespoke:f,loggedInUser:p,hasSwitchTheme:m=!1,isLightMode:h=!0,switchThemeText:g=`SWITCH THEME`,selectedThemeText:_=``,onLogout:v=()=>{},onLanguageToggle:y=()=>{},closeOnClick:b,onThemeToggle:ee=()=>{},userDrawerFooter:te={icon:``,title:``},copySuccessMessage:x,includeCopyTitle:S,onUserDrawerMetaClick:C=()=>{},userDrawerMeta:w,hasUserDrawerMeta:T,hasUserDrawerFooter:E})=>{let{icon:D,title:O}=te,k=(0,H.useCallback)(async e=>{e.preventDefault(),await v(),window.location.assign(a),b&&b()},[b,a,v]),ne=(0,H.useCallback)(()=>{b&&b()},[b]);return(0,H.useEffect)(()=>{De(r)},[r]),(0,U.jsxs)(H.Fragment,{children:[(0,U.jsxs)(me,{children:[s?(0,U.jsxs)(_e,{children:[(0,U.jsx)(ge,{children:c}),p]}):null,T?(0,U.jsx)(Te,{children:w?.map((e,t)=>(0,U.jsx)(V,{onUserDrawerMetaClick:C,item:e,includeCopyTitle:S,copySuccessMessage:x},t))}):null,d.length>0?(0,U.jsxs)(ve,{children:[(0,U.jsx)(ge,{children:u}),(0,U.jsx)(be,{children:d.map(({text:e,href:t})=>(0,U.jsx)(xe,{children:(0,U.jsx)(Ce,{to:t,onClick:ne,children:e})},`${e}-${t}`))})]}):null,f||null,i?(0,U.jsx)(ye,{children:(0,U.jsx)(be,{children:(0,U.jsx)(xe,{children:(0,U.jsx)(Ce,{onClick:k,to:a,children:o})})})}):null]}),(0,U.jsxs)(he,{children:[m&&(0,U.jsx)(F,{icon:h?`LightMode`:`DarkMode`,title:g,subTitle:_,onClickCallback:ee}),e&&(0,U.jsx)(F,{icon:`Language`,title:n,subTitle:t,onClickCallback:y}),E?(0,U.jsxs)(we,{title:O,$icon:D,children:[D?(0,U.jsx)(Se,{children:(0,U.jsx)(l,{icon:D,size:14,color:`dimmed`})}):null,(0,U.jsx)(Ee,{$icon:D,children:O})]}):null]})]})};try{W.displayName=`UserMenu`,W.__docgenInfo={description:``,displayName:`UserMenu`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/UserMenu.tsx`,methods:[],props:{closeOnClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/molecules/UserMenu.tsx`,name:`IUserMenu`}],description:``,name:`closeOnClick`,parent:{fileName:`packages/ui-lib/src/Global/molecules/UserMenu.tsx`,name:`IUserMenu`},required:!1,tags:{},type:{name:`(() => void)`}},hasNotifications:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasNotifications`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},userSubmenu:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userSubmenu`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserSubmenuItem[]`}},loggedInUser:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`loggedInUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!0,tags:{},type:{name:`string`}},hasLanguage:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLanguage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},selectedLanguageText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLanguageText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},languageOptionsText:{defaultValue:{value:`LANGUAGE / 言語`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`languageOptionsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedLangAttribute:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLangAttribute`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasLogout:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},logoutText:{defaultValue:{value:`Logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},logoutLink:{defaultValue:{value:`/logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutLink`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasSearch:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSearch`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasCurrentUser:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasCurrentUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},currentUserText:{defaultValue:{value:`Current User`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`currentUserText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},accountOptionText:{defaultValue:{value:`Account Options`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`accountOptionText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},searchPlaceholder:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`searchPlaceholder`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},userDrawerBespoke:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerBespoke`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},notificationsHistory:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`notificationsHistory`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`INotificationsHistory`}},customDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`customDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ICustomDrawer`}},sideDrawers:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Extra drawers with no top-bar toggle, opened from anywhere via the\ncontrolled `activeDrawer` prop (matched by `id`). Requires controlled usage.\nDesktop `TopBar` only — not supported by `GlobalUI` on mobile.",name:`sideDrawers`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ISideDrawer[]`}},leftAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`leftAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:'Content for a second row below the bar (Figma\'s "name bar"). Full width, with a\nhairline above it. Desktop `TopBar` only — not supported by `GlobalUI` on mobile.\nThe row applies no padding or gap, so content can reach either edge and any inset\nis yours to set. Children are centred vertically; use `height: 100%` to fill the band.',name:`bottomAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaHeight:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Height of the bottom row as a CSS length, default `'32px'`. Also feeds the\n`--top-bar-total-height` variable, so the drawers and any consumer offset follow it.",name:`bottomAreaHeight`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},activeDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Which drawer is open, for controlled usage. When provided (including
\`null\`), TopBar becomes controlled and the consumer owns the state.
When omitted, TopBar manages the open drawer with its own internal state.`,name:`activeDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IActiveDrawer`}},onActiveDrawerChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Called whenever a drawer is opened or closed (icon clicks included).`,name:`onActiveDrawerChange`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`((activeDrawer: IActiveDrawer) => void)`}},hasSwitchTheme:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSwitchTheme`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},isLightMode:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`isLightMode`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},switchThemeText:{defaultValue:{value:`SWITCH THEME`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`switchThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedThemeText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},onLogout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onLanguageToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLanguageToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onUserDrawerMetaClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onThemeToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onThemeToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},userDrawerFooter:{defaultValue:{value:`{ icon: '', title: '' }`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerFooter`}},userDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerMeta[]`}},hasUserDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasUserDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},badge:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`badge`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ITopBarBadge`}}},tags:{}}}catch{}})))()}var G,ke,Ae,je,Me,Ne,Pe,Fe,Ie,K;function Le(){return(Le=t((()=>{b(),G=i(),ke=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 20px 12px 20px;
  height: 122px;
`,Ae=m.div`
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
`,je=m.div`
  background-color: var(--grey-5);
  width: 100%;
  height: 100%;
`,Me=m.div`
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
`,Ne=m.div`
  margin-left: 20px;
`,Pe=m.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-11);
`,Fe=m.div`
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
`,Ie=m.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--grey-12);
  margin-top: 15px;
`,K=({imgUrl:e,title:t,message:n,time:r})=>(0,G.jsxs)(ke,{children:[(0,G.jsx)(Ae,{children:e?(0,G.jsx)(Me,{$image:e}):(0,G.jsx)(je,{})}),(0,G.jsxs)(Ne,{children:[(0,G.jsx)(Pe,{children:t}),(0,G.jsx)(Fe,{children:n}),(0,G.jsx)(Ie,{children:r})]})]});try{K.displayName=`NotificationItem`,K.__docgenInfo={description:``,displayName:`NotificationItem`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/atoms/NotificationItem.tsx`,methods:[],props:{imgUrl:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`imgUrl`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!1,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}},message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`message`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}},time:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`}],description:``,name:`time`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationItem`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var Re,q,ze,J,Be,Ve,Y;function He(){return(He=t((()=>{Re=n(),b(),Le(),q=i(),ze=m.div`
  display: flex;
  flex-direction: column;
`,J=m.h2`
    text-transform: uppercase;
    padding: 10px 0 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-12);
    border-bottom: var(--dividing-line) 1px solid;
    margin: 0;
`,Be=m.div`
  border-bottom: var(--dividing-line) 1px solid;
`,Ve=(e,t)=>e.map(e=>(0,q.jsx)(Be,{children:(0,q.jsx)(K,{...e})},`alert-${t}-${e.time}-${e.title}`)),Y=({read:e,unread:t,noNotificationsText:n=`No new notifications`,readNotificationsText:r=`New`,unreadNotificationsText:i=`Read`})=>e.length===0&&t.length===0?(0,q.jsx)(ze,{children:(0,q.jsx)(J,{children:n})}):(0,q.jsxs)(ze,{children:[t&&(0,q.jsxs)(Re.Fragment,{children:[(0,q.jsx)(J,{children:r}),Ve(t,`unread`)]}),e&&(0,q.jsxs)(Re.Fragment,{children:[(0,q.jsx)(J,{children:i}),Ve(e,`read`)]})]});try{Y.displayName=`NotificationsHistory`,Y.__docgenInfo={description:``,displayName:`NotificationsHistory`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/NotificationsHistory.tsx`,methods:[],props:{read:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`read`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!0,tags:{},type:{name:`INotificationItem[]`}},unread:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`unread`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!0,tags:{},type:{name:`INotificationItem[]`}},noNotificationsText:{defaultValue:{value:`No new notifications`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`noNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}},readNotificationsText:{defaultValue:{value:`New`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`readNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}},unreadNotificationsText:{defaultValue:{value:`Read`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`}],description:``,name:`unreadNotificationsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`INotificationsHistory`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var X,Ue,Z,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,Q,nt,$,rt,it;function at(){return(at=t((()=>{X=n(),Ue=e(r()),b(),o(),c(),f(),re(),Oe(),He(),Z=i(),We=[`user`,`notifications`,`custom`],Ge=ee`
  :root {
    --top-bar-bottom-height: ${({$bottomHeight:e})=>e};
    --top-bar-total-height: calc(var(--top-bar-height, 56px) + var(--top-bar-bottom-height, 0px));
  }
`,Ke=m.div`
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
`,qe=m.div`
  height: calc(var(--top-bar-height, 56px) - var(--top-bar-divider-width, 1px));
  padding: 0 16px 0 24px;
  display: flex;
  justify-content: space-between;
`,Je=m.div`
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
`,Ye=m.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`,Xe=m.div`
  display: flex;
  height: 100%;
`,Ze=m.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,Qe=m.div`
  flex: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,$e=m.input`
  ${s};
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
`,et=m.div`
  height: inherit;
  display: flex;
  gap: 0;
`,tt=y`
  0% {
    opacity:0.9;
    transform: scale(0.85);
  }
  100% {
    opacity:1;
    transform: scale(1);
  }
`,Q=m.button.attrs({type:`button`})`
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

  ${({$isActive:e})=>e&&_`
    &, &:hover {
      border-bottom-color: var(--primary-9);
      &::after {
        background-color: var(--primary-9);
      }
      svg {
        transform: scale(1);
        animation: ${tt} 0.35s cubic-bezier(0.7, 0, 0.84, 0);
      }

    }
  `}
`,nt=m.div``,$=m.div`
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

  ${({$isOpen:e})=>e&&_`
    right: 0;
    opacity: 1;
    visibility: visible;
  `}
`,rt=m.div`
    overflow-y: scroll;
    margin-right: -17px;
`,it=({hasNotifications:e=!1,hasLanguage:t=!1,selectedLanguageText:n=``,languageOptionsText:r,selectedLangAttribute:i,hasLogout:a=!0,logoutLink:o=`/logout`,logoutText:s=`Logout`,hasSearch:c=!1,hasCurrentUser:u=!0,currentUserText:d=`Current User`,accountOptionText:f=`Account Options`,searchPlaceholder:m=`Search for devices, analysis tasks, etc.`,userSubmenu:h=[],userDrawerBespoke:g,loggedInUser:_,notificationsHistory:v,customDrawer:y,hasSwitchTheme:b=!1,isLightMode:ee=!0,switchThemeText:te=`SWITCH THEME`,selectedThemeText:x=``,onLogout:S=()=>{},onLanguageToggle:C=()=>{},onThemeToggle:w=()=>{},userDrawerFooter:T,userDrawerMeta:E,onUserDrawerMetaClick:D=()=>{},hasUserDrawerMeta:O,copySuccessMessage:k,includeCopyTitle:ne,hasUserDrawerFooter:re,badge:j,leftAreaElement:M,bottomAreaElement:N,bottomAreaHeight:ie=`32px`,sideDrawers:P,activeDrawer:F,onActiveDrawerChange:ae})=>{let[I,L]=(0,X.useState)(null),R=F!==void 0,z=R?F:I,B=e=>{let t=z===e?null:e;R||L(t),ae?.(t)},{sideDrawersToRender:oe,sideDrawerWarnings:se}=(0,X.useMemo)(()=>{let e=[],t=[],n=new Set;for(let r of P??[]){if(We.includes(r.id)){t.push(`the side drawer with id "${r.id}" uses a reserved id (${We.join(`, `)}), so it will not open when its trigger is clicked. Please use a different id.`);continue}if(n.has(r.id)){t.push(`a side drawer with id "${r.id}" already exists; the duplicate will not open when its trigger is clicked. Please use a unique id.`);continue}n.add(r.id),e.push(r)}return{sideDrawersToRender:e,sideDrawerWarnings:t}},[P]);return(0,X.useEffect)(()=>{for(let e of se)console.warn(`TopBar: ${e}`)},[]),(0,Z.jsxs)(Ke,{children:[(0,Z.jsx)(Ge,{$bottomHeight:N?ie:`0px`}),(0,Z.jsxs)(qe,{children:[c?(0,Z.jsxs)(Ze,{children:[(0,Z.jsx)(Qe,{children:(0,Z.jsx)(l,{icon:`Search`,size:16,color:`grey-6`})}),(0,Z.jsx)($e,{placeholder:m})]}):M?(0,Z.jsx)(Xe,{children:M}):(0,Z.jsx)(`div`,{}),(0,Z.jsxs)(Ye,{children:[j&&(0,Z.jsx)(A,{...j}),(0,Z.jsxs)(et,{children:[y&&(0,Z.jsx)(Q,{$isActive:z===`custom`,onClick:()=>B(`custom`),children:(0,Z.jsx)(p,{...y})}),e&&(0,Z.jsx)(Q,{$isActive:z===`notifications`,onClick:()=>B(`notifications`),children:(0,Z.jsx)(l,{icon:`Notifications`,size:20,color:`dimmed`})}),(0,Z.jsx)(Q,{$isActive:z===`user`,onClick:()=>B(`user`),children:(0,Z.jsx)(l,{icon:`UserProfile`,size:20,color:`dimmed`})})]})]})]}),N?(0,Z.jsx)(Je,{children:N}):null,Ue.createPortal((0,Z.jsxs)(nt,{children:[(0,Z.jsx)($,{$isOpen:z===`user`,children:(0,Z.jsx)(W,{hasLanguage:t,hasLogout:a,logoutLink:o,logoutText:s,hasCurrentUser:u,currentUserText:d,accountOptionText:f,userSubmenu:h,userDrawerBespoke:g,loggedInUser:_,onLogout:S,onLanguageToggle:C,selectedLanguageText:n,languageOptionsText:r,selectedLangAttribute:i,hasSwitchTheme:b,isLightMode:ee,switchThemeText:te,selectedThemeText:x,onThemeToggle:w,onUserDrawerMetaClick:D,userDrawerFooter:T,userDrawerMeta:E,hasUserDrawerMeta:O,copySuccessMessage:k,includeCopyTitle:ne,hasUserDrawerFooter:re})}),e?(0,Z.jsx)($,{$isOpen:z===`notifications`,$baseWidth:`300px`,children:(0,Z.jsx)(rt,{children:v?(0,Z.jsx)(Y,{...v}):null})}):null,y&&(0,Z.jsx)($,{$isOpen:z===`custom`,$baseWidth:y.width?y.width:`200px`,children:y.customComponent}),oe.map(e=>(0,Z.jsx)($,{$isOpen:z===e.id,$baseWidth:e.width?e.width:`200px`,children:e.content},e.id))]}),document.body)]})};try{it.displayName=`TopBar`,it.__docgenInfo={description:``,displayName:`TopBar`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Global/molecules/TopBar.tsx`,methods:[],props:{hasNotifications:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasNotifications`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},userSubmenu:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userSubmenu`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserSubmenuItem[]`}},loggedInUser:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`loggedInUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!0,tags:{},type:{name:`string`}},hasLanguage:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLanguage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},selectedLanguageText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLanguageText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},languageOptionsText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`languageOptionsText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedLangAttribute:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedLangAttribute`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasLogout:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},logoutText:{defaultValue:{value:`Logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},logoutLink:{defaultValue:{value:`/logout`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`logoutLink`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},hasSearch:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSearch`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasCurrentUser:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasCurrentUser`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},currentUserText:{defaultValue:{value:`Current User`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`currentUserText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},accountOptionText:{defaultValue:{value:`Account Options`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`accountOptionText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},searchPlaceholder:{defaultValue:{value:`Search for devices, analysis tasks, etc.`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`searchPlaceholder`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},userDrawerBespoke:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerBespoke`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},notificationsHistory:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`notificationsHistory`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`INotificationsHistory`}},customDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`customDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ICustomDrawer`}},sideDrawers:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Extra drawers with no top-bar toggle, opened from anywhere via the\ncontrolled `activeDrawer` prop (matched by `id`). Requires controlled usage.\nDesktop `TopBar` only — not supported by `GlobalUI` on mobile.",name:`sideDrawers`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ISideDrawer[]`}},leftAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`leftAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaElement:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:'Content for a second row below the bar (Figma\'s "name bar"). Full width, with a\nhairline above it. Desktop `TopBar` only — not supported by `GlobalUI` on mobile.\nThe row applies no padding or gap, so content can reach either edge and any inset\nis yours to set. Children are centred vertically; use `height: 100%` to fill the band.',name:`bottomAreaElement`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},bottomAreaHeight:{defaultValue:{value:`32px`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:"Height of the bottom row as a CSS length, default `'32px'`. Also feeds the\n`--top-bar-total-height` variable, so the drawers and any consumer offset follow it.",name:`bottomAreaHeight`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},activeDrawer:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Which drawer is open, for controlled usage. When provided (including
\`null\`), TopBar becomes controlled and the consumer owns the state.
When omitted, TopBar manages the open drawer with its own internal state.`,name:`activeDrawer`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IActiveDrawer`}},onActiveDrawerChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:`Called whenever a drawer is opened or closed (icon clicks included).`,name:`onActiveDrawerChange`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`((activeDrawer: IActiveDrawer) => void)`}},hasSwitchTheme:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasSwitchTheme`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},isLightMode:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`isLightMode`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},switchThemeText:{defaultValue:{value:`SWITCH THEME`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`switchThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},selectedThemeText:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`selectedThemeText`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},onLogout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLogout`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onLanguageToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onLanguageToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onUserDrawerMetaClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onUserDrawerMetaClick`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},onThemeToggle:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`onThemeToggle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`(() => void)`}},userDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerFooter`}},userDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`userDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`IUserDrawerMeta[]`}},hasUserDrawerMeta:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerMeta`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},copySuccessMessage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`copySuccessMessage`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`string`}},includeCopyTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`includeCopyTitle`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},hasUserDrawerFooter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`hasUserDrawerFooter`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`boolean`}},badge:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`}],description:``,name:`badge`,parent:{fileName:`packages/ui-lib/src/Global/index.ts`,name:`ITopBar`},required:!1,tags:{},type:{name:`ITopBarBadge`}}},tags:{}}}catch{}})))()}export{W as a,He as i,at as n,Oe as o,Y as r,it as t};