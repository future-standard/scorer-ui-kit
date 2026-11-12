import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as o,t as s}from"./Tabs-B9Xe7ojJ.js";var c,l,u,d,f;function p(){return(p=e((()=>{c=t(),r(),o(),l=n(),u=i.div`
  margin-right: 39px;
  display: flex;
  align-items: center;
  line-height: 20px;
`,d=i.label`
  height: 40px;
  ${({theme:e})=>a`
    font-family: ${e.fontFamily.ui};
  `}
  font-size: 15px;
  font-weight: ${({$active:e})=>e?`600`:`500`};
  letter-spacing: 0.09px;
  color: ${({$active:e})=>e?`var(--primary-11)`:`var(--grey-11)`};
  cursor: pointer;
  border-bottom: ${({$active:e})=>e?`2px solid var(--primary-11)`:`2px solid transparent`};
  padding-top: 6px;
  padding-bottom: 14px;
  flex-shrink: 0;
  user-select: none;
`,f=({children:e,tabFor:t,onClick:n,...r})=>{let{selected:i,setSelected:a}=(0,c.useContext)(s),o=(0,c.useCallback)(e=>{n?.(e),a(t)},[n,a,t]);return(0,l.jsx)(u,{...r,onClick:o,children:(0,l.jsx)(d,{$active:i===t,children:e})})};try{f.displayName=`Tab`,f.__docgenInfo={description:``,displayName:`Tab`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tabs/atoms/Tab.tsx`,methods:[],props:{tabFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/Tab.tsx`,name:`OwnProps`}],description:``,name:`tabFor`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/Tab.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{p as n,f as t};