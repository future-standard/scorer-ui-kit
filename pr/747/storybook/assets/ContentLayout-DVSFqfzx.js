import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,i as a,r as o}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as s,n as c}from"./common-CUVz1sPu.js";import{r as l,t as u}from"./Icon-jcMQaGO-.js";import{n as ee,t as d}from"./useBreakpoints-DA7v6yzW.js";import{n as te,t as ne}from"./useCopyToClipboard-BVF9W5gA.js";import{n as re,r as f}from"./Tabs-B9Xe7ojJ.js";import{O as p,j as m}from"./iframe-C82YJEyw.js";var h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{h=e(n()),m(),i(),c(),l(),g=r(),_=a.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex: 1;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,v=o`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;

  ${_}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${_}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,y=o`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,b=a(p)`
  ${v};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&o`
    &::after {
      ${y};
    }
  `}
`,x=a.button`
  ${s};
  ${v};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&o`
    &::after {
      ${y};
    }
  `}
`,S=({show:e=!0,link:t,label:n=`Back`,$showDivider:r,$iconInGutter:i,onClick:a})=>{let o=(0,h.useMemo)(()=>(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(_,{children:(0,g.jsx)(u,{icon:`Back`,size:16,color:`grey-10`})}),n]}),[n]);return e?(0,g.jsx)(h.Fragment,{children:a?(0,g.jsx)(x,{$showDivider:r,$iconInGutter:i,onClick:a,children:o}):t&&(0,g.jsx)(b,{to:t,$showDivider:r,$iconInGutter:i,children:o})}):null};try{S.displayName=`UtilityHeaderBack`,S.__docgenInfo={description:``,displayName:`UtilityHeaderBack`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},$showDivider:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$showDivider`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},show:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Back`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var w,T,E,D,O;function k(){return(k=t((()=>{w=n(),i(),ne(),l(),T=r(),E=a.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,D=a.button`
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  gap: 8px;
  color: var(--grey-10);
  text-align: center;
  font-family: var(--font-ui);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: none;
  text-decoration: none;
  transition: color 0.25s ease;
  cursor: pointer;
  user-select: none;

  ${E}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${E}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,O=({show:e,link:t,label:n=`Share`,copiedLabel:r=`Copied`})=>{let[i,a]=(0,w.useState)(n),{copyToClipboard:o}=te(),s=(0,w.useCallback)(()=>{o(t||window.location.href),a(r),setTimeout(()=>a(i),2e3)},[t,r,i,o]);return(0,w.useEffect)(()=>{a(n)},[n]),e?(0,T.jsxs)(D,{onClick:s,children:[(0,T.jsx)(E,{children:(0,T.jsx)(u,{icon:`Link`,size:16,color:`grey-10`})}),i]}):null};try{O.displayName=`UtilityHeaderShare`,O.__docgenInfo={description:``,displayName:`UtilityHeaderShare`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderShare.tsx`,methods:[],props:{show:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Share`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},copiedLabel:{defaultValue:{value:`Copied`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`copiedLabel`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{A=e(n()),m(),i(),c(),d(),l(),C(),k(),j=r(),M=a.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,N=a.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,P=a.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,F=a.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,I=a.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,L=a(I)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,R=o`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex: 1;
  color: var(--grey-10);
  font-family: var(--font-ui);
  text-decoration: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px; /* 100% */
`,z=o`
  ${R};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${L} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,B=a(p)`
  ${z};
`,V=a.button`
  ${s};
  ${z};
`,H=a.span`
  ${R};
  pointer-events: none;
`,U=a.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,W=({showBreadcrumbs:e=!0,breadcrumbs:t=[],showHomeIcon:n=!0,back:r,share:i,$iconInGutter:a})=>{let{isLarge:o}=ee(),s=a===void 0?o:a,c=e&&t.length>0;return(0,j.jsxs)(M,{children:[(0,j.jsxs)(N,{children:[r&&(0,j.jsx)(S,{$showDivider:c,$iconInGutter:s,...r}),c?(0,j.jsx)(P,{children:t.map((e,r)=>{let{text:i,href:a,onClick:o}=e,s=r===0,c=r===t.length-1,l=(0,j.jsxs)(A.Fragment,{children:[s&&n?(0,j.jsx)(L,{children:(0,j.jsx)(u,{icon:`Home`,size:11,color:`grey-10`})}):null,i]});return(0,j.jsx)(A.Fragment,{children:(0,j.jsxs)(F,{children:[o?(0,j.jsx)(V,{onClick:o,type:`button`,children:l}):a?(0,j.jsx)(B,{to:a,children:l}):(0,j.jsx)(H,{children:l}),c?null:(0,j.jsx)(I,{children:(0,j.jsx)(u,{icon:`Right`,size:6,color:`grey-8`})})]})},i)})}):null]}),(0,j.jsx)(U,{children:(0,j.jsx)(O,{...i})})]})};try{W.displayName=`UtilityHeader`,W.__docgenInfo={description:``,displayName:`UtilityHeader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/molecules/UtilityHeader.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showBreadcrumbs:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showBreadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showHomeIcon:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showHomeIcon`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},breadcrumbs:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`breadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IBreadcrumb[]`}},back:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`back`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkBack`}},share:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`share`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkShare`}}},tags:{}}}catch{}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{i(),f(),G(),K=r(),q=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,J=a.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,Y=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,X=a.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,Z=a.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    var(--content-layout-padding-top)
    var(--content-layout-padding-right)
    var(--content-layout-padding-bottom)
    var(--content-layout-padding-left);

  display: flex;
  flex: 1;
  flex-direction: column;
`,Q=({layout:e=`default`,HeaderContent:t={},children:n})=>{let{PageHeaderArea:r,TabsElementArea:i,UtilityHeaderOptions:a}=t,o=`content-layout-${e}`;return(0,K.jsxs)(q,{className:o,children:[a?(0,K.jsx)(W,{...a}):null,r?(0,K.jsx)(J,{children:r}):null,i?(0,K.jsxs)(re,{children:[(0,K.jsx)(Y,{children:(0,K.jsx)(X,{children:i})}),(0,K.jsx)(Z,{children:n})]}):(0,K.jsx)(Z,{children:n})]})};try{Q.displayName=`ContentLayout`,Q.__docgenInfo={description:``,displayName:`ContentLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,methods:[],props:{layout:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`}],description:``,name:`layout`,parent:{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`},required:!1,tags:{},type:{name:`enum`,raw:`"default" | "fullscreen" | "dashboard"`,value:[{value:`"default"`},{value:`"fullscreen"`},{value:`"dashboard"`}]}},HeaderContent:{defaultValue:{value:`{}`},declarations:[{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`}],description:``,name:`HeaderContent`,parent:{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`},required:!1,tags:{},type:{name:`IHeaderContent`}}},tags:{}}}catch{}})))()}export{G as i,$ as n,W as r,Q as t};