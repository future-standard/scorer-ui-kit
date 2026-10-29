import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i,t as a}from"./Icon-CmxkaxYk.js";import{r as o,t as s}from"./Tabs-B9Xe7ojJ.js";import{a as c,i as l,o as u}from"./iframe-BmxEQ5Tp.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{d=t(),u(),i(),o(),f=n(),p=c.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;
  user-select: none;

  ${({$active:e})=>e?l`
    border-bottom: 3px solid var(--primary-11);
    `:l`
    border-bottom: 3px solid transparent;
  `};
  ${r} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`,m=c.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({$active:e})=>e?`var(--primary-11)`:`var(--grey-11)`};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`,h=c.div`
  font-size: 12px;
  font-family: ${({theme:e})=>e.fontFamily.data};
  font-style: italic;
  &:lang(ja) {
    font-style: normal;
  }
  color: var(--grey-a10);
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`,g=c.div`
  margin-left: 12px;
  margin-right: 20px;
`,_=({icon:e,title:t,subtitle:n,tabFor:r,...i})=>{let{selected:o,setSelected:c}=(0,d.useContext)(s),l=(0,d.useCallback)(e=>{c(e)},[c]),u=o===r;return(0,f.jsxs)(p,{$active:u,...i,onClick:()=>l(r),children:[(0,f.jsx)(a,{icon:e,weight:`regular`,size:15,color:u?`primary`:`dimmed`}),(0,f.jsxs)(g,{children:[(0,f.jsx)(m,{$active:u,children:t}),n&&(0,f.jsx)(h,{children:n})]})]})};try{_.displayName=`TabWithIcon`,_.__docgenInfo={description:``,displayName:`TabWithIcon`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}},subtitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`subtitle`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!1,tags:{},type:{name:`string`}},tabFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`tabFor`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{v as n,_ as t};