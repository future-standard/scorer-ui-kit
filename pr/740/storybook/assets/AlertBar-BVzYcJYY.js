import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as o,n as s}from"./common-CUVz1sPu.js";import{n as c,r as l,t as u}from"./Icon-jcMQaGO-.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{d=t(),r(),s(),l(),f=n(),p=i.button`
  ${o};
  ${({$selected:e=!1})=>e&&a`
    border-bottom: 5px solid var(--primary-7);
  `}
  &:focus {
    outline: none;
  }

  &:hover:enabled {
    opacity: .8;
  }
  &:active:enabled {
    opacity: .9;
  }
  &:disabled {
    opacity: 0.1;
  }
`,m=i.div`
  min-height: 50px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  font-family: var(--font-ui);
  background-color: ${({$type:e})=>`var(--${e})`};

  text-align: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  color: var(--white-1);

  ${c} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,h={error:`Critical`,warning:`BigWarning`,success:`Success`,info:`Information`,neutral:`Information`},g=i.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,_=({type:e=`info`,message:t,hideCloseButton:n=!1})=>{let[r,i]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{i(!1)},[]),t&&!r?(0,f.jsxs)(m,{$type:e,children:[(0,f.jsx)(u,{icon:h[e],color:`inverse`}),(0,f.jsx)(g,{children:t}),!n&&(0,f.jsx)(p,{onClick:()=>i(!0),children:(0,f.jsx)(u,{icon:`CloseCompact`,color:`inverse`})})]}):null};try{m.displayName=`AlertWrapper`,m.__docgenInfo={description:``,displayName:`AlertWrapper`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{_.displayName=`AlertBar`,_.__docgenInfo={description:``,displayName:`AlertBar`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,methods:[],props:{type:{defaultValue:{value:`info`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`type`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`enum`,raw:`AlertType`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`message`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string`}},hideCloseButton:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`hideCloseButton`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{v as n,_ as t};