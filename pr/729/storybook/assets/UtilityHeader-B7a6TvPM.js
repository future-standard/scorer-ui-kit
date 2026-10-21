import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{i,n as a}from"./common-FBJPsqkW.js";import{r as o,t as s}from"./Icon-BaYDX9Su.js";import{n as c,t as l}from"./useBreakpoints-DA6jV2Fx.js";import{n as u,t as d}from"./useCopyToClipboard-BVF9W5gA.js";import{a as f,d as p,i as m,m as h,o as g}from"./iframe-PEYaYO03.js";var _,v,y,b,x,S,C,w;function T(){return(T=t((()=>{_=e(n()),h(),g(),a(),o(),v=r(),y=f.div`
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
`,b=m`
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

  ${y}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }

  &:hover {
    color: var(--grey-12);
    ${y}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }
`,x=m`
  content: '';
  display: inline-block;
  height: 12px;
  width: 1px;
  padding-left: 8px;
  border-right: 1px solid var(--grey-10);
`,S=f(p)`
  ${b};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&m`
    &::after {
      ${x};
    }
  `}
`,C=f.button`
  ${i};
  ${b};
  margin-left: ${e=>e.$iconInGutter?`-24px`:`0`};

  ${({$showDivider:e})=>e&&m`
    &::after {
      ${x};
    }
  `}
`,w=({show:e=!0,link:t,label:n=`Back`,$showDivider:r,$iconInGutter:i,onClick:a})=>{let o=(0,_.useMemo)(()=>(0,v.jsxs)(_.Fragment,{children:[(0,v.jsx)(y,{children:(0,v.jsx)(s,{icon:`Back`,size:16,color:`grey-10`})}),n]}),[n]);return e?(0,v.jsx)(_.Fragment,{children:a?(0,v.jsx)(C,{$showDivider:r,$iconInGutter:i,onClick:a,children:o}):t&&(0,v.jsx)(S,{to:t,$showDivider:r,$iconInGutter:i,children:o})}):null};try{w.displayName=`UtilityHeaderBack`,w.__docgenInfo={description:``,displayName:`UtilityHeaderBack`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},$showDivider:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`}],description:``,name:`$showDivider`,parent:{fileName:`packages/ui-lib/src/Layouts/atoms/UtilityHeaderBack.tsx`,name:`IUtilityHeaderLinkBackInstance`},required:!0,tags:{},type:{name:`boolean`}},show:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Back`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`string`}},onClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkBack`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var E,D,O,k,A;function j(){return(j=t((()=>{E=n(),g(),d(),o(),D=r(),O=f.div`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`,k=f.button`
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

  ${O}{
    svg * {
      transition: stroke 0.25s ease;
    }
  }
  
  &:hover {
    color: var(--grey-12);
    ${O}{
      svg * {
        stroke: var(--grey-12);
      }
    }
  }

`,A=({show:e,link:t,label:n=`Share`,copiedLabel:r=`Copied`})=>{let[i,a]=(0,E.useState)(n),{copyToClipboard:o}=u(),c=(0,E.useCallback)(()=>{o(t||window.location.href),a(r),setTimeout(()=>a(i),2e3)},[t,r,i,o]);return(0,E.useEffect)(()=>{a(n)},[n]),e?(0,D.jsxs)(k,{onClick:c,children:[(0,D.jsx)(O,{children:(0,D.jsx)(s,{icon:`Link`,size:16,color:`grey-10`})}),i]}):null};try{A.displayName=`UtilityHeaderShare`,A.__docgenInfo={description:``,displayName:`UtilityHeaderShare`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/atoms/UtilityHeaderShare.tsx`,methods:[],props:{show:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`show`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`boolean`}},link:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`link`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:`Share`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}},copiedLabel:{defaultValue:{value:`Copied`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`}],description:``,name:`copiedLabel`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeaderLinkShare`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{M=e(n()),h(),g(),a(),l(),o(),T(),j(),N=r(),P=f.div`
  max-width: var(--max-content-width);
  margin-top: var(--utility-header-padding-top);
  padding: 0 var(--content-layout-padding-right) 0 var(--content-layout-padding-left);
  height: 48px;
  width: 100%;
  display: flex;
`,F=f.div`
  display: flex;
  align-items: center;
  gap: var(--columnPadding, 16px);
  flex: 1 0 0;
`,I=f.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,L=f.div`
  flex: 1;
  display: flex;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;

`,R=f.div`
  flex: 0;
  display: flex;
  align-items: center;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,z=f(R)`
  padding-bottom: 1px;
  svg path {
    transition: stroke var(--speed-normal) var(--easing-primary-out);
  }
`,B=m`
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
`,V=m`
  ${B};
  transition: color var(--speed-normal) var(--easing-primary-out);

  &:hover {
    color: var(--grey-12);
    ${z} svg {
      path {
        stroke: var(--grey-12);
      }
    }
  }
`,H=f(p)`
  ${V};
`,U=f.button`
  ${i};
  ${V};
`,W=f.span`
  ${B};
  pointer-events: none;
`,G=f.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: right;
`,K=({showBreadcrumbs:e=!0,breadcrumbs:t=[],showHomeIcon:n=!0,back:r,share:i,$iconInGutter:a})=>{let{isLarge:o}=c(),l=a===void 0?o:a,u=e&&t.length>0;return(0,N.jsxs)(P,{children:[(0,N.jsxs)(F,{children:[r&&(0,N.jsx)(w,{$showDivider:u,$iconInGutter:l,...r}),u?(0,N.jsx)(I,{children:t.map((e,r)=>{let{text:i,href:a,onClick:o}=e,c=r===0,l=r===t.length-1,u=(0,N.jsxs)(M.Fragment,{children:[c&&n?(0,N.jsx)(z,{children:(0,N.jsx)(s,{icon:`Home`,size:11,color:`grey-10`})}):null,i]});return(0,N.jsx)(M.Fragment,{children:(0,N.jsxs)(L,{children:[o?(0,N.jsx)(U,{onClick:o,type:`button`,children:u}):a?(0,N.jsx)(H,{to:a,children:u}):(0,N.jsx)(W,{children:u}),l?null:(0,N.jsx)(R,{children:(0,N.jsx)(s,{icon:`Right`,size:6,color:`grey-8`})})]})},i)})}):null]}),(0,N.jsx)(G,{children:(0,N.jsx)(A,{...i})})]})};try{K.displayName=`UtilityHeader`,K.__docgenInfo={description:``,displayName:`UtilityHeader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Layouts/molecules/UtilityHeader.tsx`,methods:[],props:{$iconInGutter:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`$iconInGutter`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showBreadcrumbs:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showBreadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},showHomeIcon:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`showHomeIcon`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`boolean`}},breadcrumbs:{defaultValue:{value:`[]`},declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`breadcrumbs`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IBreadcrumb[]`}},back:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`back`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkBack`}},share:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`}],description:``,name:`share`,parent:{fileName:`packages/ui-lib/src/Layouts/index.ts`,name:`IUtilityHeader`},required:!1,tags:{},type:{name:`IUtilityHeaderLinkShare`}}},tags:{}}}catch{}})))()}export{q as n,K as t};