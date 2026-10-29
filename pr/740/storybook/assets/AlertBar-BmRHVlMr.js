import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./common-Bnnfb4Bd.js";import{n as a,r as o,t as s}from"./Icon-Bj-W_PAo.js";import{a as c,i as l,o as u}from"./iframe-DkCQ6b6C.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{d=t(),u(),i(),o(),f=n(),p=c.button`
  ${r};
  ${({$selected:e=!1})=>e&&l`
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
`,m=c.div`
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

  ${a} {
    [stroke]{
      stroke: var(--white-1);
    }
  }
`,h={error:`Critical`,warning:`BigWarning`,success:`Success`,info:`Information`,neutral:`Information`},g=c.div`
  margin: 5px 0px 5px 15px;
  flex: 1;
`,_=({type:e=`info`,message:t,hideCloseButton:n=!1})=>{let[r,i]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{i(!1)},[]),t&&!r?(0,f.jsxs)(m,{$type:e,children:[(0,f.jsx)(s,{icon:h[e],color:`inverse`}),(0,f.jsx)(g,{children:t}),!n&&(0,f.jsx)(p,{onClick:()=>i(!0),children:(0,f.jsx)(s,{icon:`CloseCompact`,color:`inverse`})})]}):null};try{m.displayName=`AlertWrapper`,m.__docgenInfo={description:``,displayName:`AlertWrapper`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{_.displayName=`AlertBar`,_.__docgenInfo={description:``,displayName:`AlertBar`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,methods:[],props:{type:{defaultValue:{value:`info`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`type`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`enum`,raw:`AlertType`,value:[{value:`"neutral"`},{value:`"error"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`}]}},message:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`message`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`string`}},hideCloseButton:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`}],description:``,name:`hideCloseButton`,parent:{fileName:`packages/ui-lib/src/Alerts/atom/AlertBar.tsx`,name:`Props`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{v as n,_ as t};