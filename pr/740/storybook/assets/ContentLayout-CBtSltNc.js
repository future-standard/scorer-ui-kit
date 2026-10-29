import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,n as a}from"./common-BPRGr8Pd.js";import{r as o,t as s}from"./Icon-CmxkaxYk.js";import{n as c,t as l}from"./useBreakpoints-p8wqsBxR.js";import{n as u,t as ee}from"./useCopyToClipboard-BVF9W5gA.js";import{n as te,r as ne}from"./Tabs-B9Xe7ojJ.js";import{a as d,d as f,i as p,m,o as h}from"./iframe-BmxEQ5Tp.js";var g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{g=e(n()),m(),h(),a(),o(),_=r(),v=d.div`
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
`,y=p`
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

  ${v}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${v}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,b=p`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,x=d(f)`
  ${y};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&p`
    &::after {
      ${b};
    }
  `}
`,S=d.button`
  ${i};
  ${y};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&p`
    &::after {
      ${b};
    }
  `}
`,C=({show:e=!0,link:t,label:n=`Back`,$showDivider:r,$iconInGutter:i,onClick:a})=>{let o=(0,g.useMemo)(()=>(0,_.jsxs)(g.Fragment,{children:[(0,_.jsx)(v,{children:(0,_.jsx)(s,{icon:`Back`,size:16,color:`grey-10`})}),n]}),[n]);return e?(0,_.jsx)(g.Fragment,{children:a?(0,_.jsx)(S,{$showDivider:r,$iconInGutter:i,onClick:a,children:o}):t&&(0,_.jsx)(x,{to:t,$showDivider:r,$iconInGutter:i,children:o})}):null};try{C.displayName=`UtilityHeaderBack`,C.__docgenInfo={description:``,displayName:`UtilityHeaderBack`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},$showDivider:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$showDivider`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},show:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Back`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var T,E,D,O,k;function A(){return(A=t((()=>{T=n(),h(),ee(),o(),E=r(),D=d.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,O=d.button`
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

  ${D}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${D}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,k=({show:e,link:t,label:n=`Share`,copiedLabel:r=`Copied`})=>{let[i,a]=(0,T.useState)(n),{copyToClipboard:o}=u(),c=(0,T.useCallback)(()=>{o(t||window.location.href),a(r),setTimeout(()=>a(i),2e3)},[t,r,i,o]);return(0,T.useEffect)(()=>{a(n)},[n]),e?(0,E.jsxs)(O,{onClick:c,children:[(0,E.jsx)(D,{children:(0,E.jsx)(s,{icon:`Link`,size:16,color:`grey-10`})}),i]}):null};try{k.displayName=`UtilityHeaderShare`,k.__docgenInfo={description:``,displayName:`UtilityHeaderShare`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderShare.tsx`,methods:[],props:{show:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Share`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},copiedLabel:{defaultValue:{value:`Copied`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`copiedLabel`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{j=e(n()),m(),h(),a(),l(),o(),w(),A(),M=r(),N=d.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,P=d.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,F=d.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,I=d.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,L=d.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,R=d(L)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,z=p`
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
`,B=p`
  ${z};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${R} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,V=d(f)`
  ${B};
`,H=d.button`
  ${i};
  ${B};
`,U=d.span`
  ${z};
  pointer-events: none;
`,W=d.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,G=({showBreadcrumbs:e=!0,breadcrumbs:t=[],showHomeIcon:n=!0,back:r,share:i,$iconInGutter:a})=>{let{isLarge:o}=c(),l=a===void 0?o:a,u=e&&t.length>0;return(0,M.jsxs)(N,{children:[(0,M.jsxs)(P,{children:[r&&(0,M.jsx)(C,{$showDivider:u,$iconInGutter:l,...r}),u?(0,M.jsx)(F,{children:t.map((e,r)=>{let{text:i,href:a,onClick:o}=e,c=r===0,l=r===t.length-1,u=(0,M.jsxs)(j.Fragment,{children:[c&&n?(0,M.jsx)(R,{children:(0,M.jsx)(s,{icon:`Home`,size:11,color:`grey-10`})}):null,i]});return(0,M.jsx)(j.Fragment,{children:(0,M.jsxs)(I,{children:[o?(0,M.jsx)(H,{onClick:o,type:`button`,children:u}):a?(0,M.jsx)(V,{to:a,children:u}):(0,M.jsx)(U,{children:u}),l?null:(0,M.jsx)(L,{children:(0,M.jsx)(s,{icon:`Right`,size:6,color:`grey-8`})})]})},i)})}):null]}),(0,M.jsx)(W,{children:(0,M.jsx)(k,{...i})})]})};try{G.displayName=`UtilityHeader`,G.__docgenInfo={description:``,displayName:`UtilityHeader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/molecules/UtilityHeader.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showBreadcrumbs:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showBreadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showHomeIcon:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showHomeIcon`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},breadcrumbs:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`breadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IBreadcrumb[]`}},back:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`back`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkBack`}},share:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`share`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkShare`}}},tags:{}}}catch{}})))()}var q,J,Y,X,Z,Q,$;function re(){return(re=t((()=>{h(),ne(),K(),q=r(),J=d.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  min-height: 100%;
  display: flex;
`,Y=d.div`
  width: 100%;
  max-width: var(--max-content-width);
  padding: 
    24px
    var(--content-layout-padding-right)
    32px
    var(--content-layout-padding-left);
  
`,X=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
`,Z=d.div`
  max-width: var(--max-content-width);
  flex: 1;
  width: 100%;
  padding: 
    0
    var(--content-layout-padding-right)
    0
    var(--content-layout-padding-left);
`,Q=d.div`
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
`,$=({layout:e=`default`,HeaderContent:t={},children:n})=>{let{PageHeaderArea:r,TabsElementArea:i,UtilityHeaderOptions:a}=t,o=`content-layout-${e}`;return(0,q.jsxs)(J,{className:o,children:[a?(0,q.jsx)(G,{...a}):null,r?(0,q.jsx)(Y,{children:r}):null,i?(0,q.jsxs)(te,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Z,{children:i})}),(0,q.jsx)(Q,{children:n})]}):(0,q.jsx)(Q,{children:n})]})};try{$.displayName=`ContentLayout`,$.__docgenInfo={description:``,displayName:`ContentLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,methods:[],props:{layout:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`}],description:``,name:`layout`,parent:{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`},required:!1,tags:{},type:{name:`enum`,raw:`"default" | "fullscreen" | "dashboard"`,value:[{value:`"default"`},{value:`"fullscreen"`},{value:`"dashboard"`}]}},HeaderContent:{defaultValue:{value:`{}`},declarations:[{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`}],description:``,name:`HeaderContent`,parent:{fileName:`packages/ui-lib/src/Layouts/organisms/ContentLayout.tsx`,name:`IContentLayout`},required:!1,tags:{},type:{name:`IHeaderContent`}}},tags:{}}}catch{}})))()}export{K as i,re as n,G as r,$ as t};