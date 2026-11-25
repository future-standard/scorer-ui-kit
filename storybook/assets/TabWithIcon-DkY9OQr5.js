import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-BGJ90fIb.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DC6b-34H.js";import{n as o,r as s,t as c}from"./Icon-CS5NLN5P.js";import{r as l,t as u}from"./Tabs-DhPbMfjk.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{d=t(),r(),s(),l(),f=n(),p=i.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
  padding-bottom: 7px;
  height: 60px;
  cursor: pointer;
  user-select: none;

  ${({$active:e})=>e?a`
    border-bottom: 3px solid var(--primary-11);
    `:a`
    border-bottom: 3px solid transparent;
  `};
  ${o} {
    margin-left: 2px;
    flex-shrink: 0;
  }
`,m=i.div`
  font-size: 14px;
  font-family: ${({theme:e})=>e.fontFamily.ui};
  letter-spacing: 0.09px;
  font-weight: 500;
  color: ${({$active:e})=>e?`var(--primary-11)`:`var(--grey-11)`};
  margin-bottom: 5px;
  flex-shrink: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`,h=i.div`
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
`,g=i.div`
  margin-left: 12px;
  margin-right: 20px;
`,_=({icon:e,title:t,subtitle:n,tabFor:r,onClick:i,...a})=>{let{selected:o,setSelected:s}=(0,d.useContext)(u),l=(0,d.useCallback)(e=>{i?.(e),s(r)},[i,s,r]),_=o===r;return(0,f.jsxs)(p,{$active:_,...a,onClick:l,children:[(0,f.jsx)(c,{icon:e,weight:`regular`,size:15,color:_?`primary`:`dimmed`}),(0,f.jsxs)(g,{children:[(0,f.jsx)(m,{$active:_,children:t}),n&&(0,f.jsx)(h,{children:n})]})]})};try{_.displayName=`TabWithIcon`,_.__docgenInfo={description:``,displayName:`TabWithIcon`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,methods:[],props:{icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}},subtitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`subtitle`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!1,tags:{},type:{name:`string`}},tabFor:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`}],description:``,name:`tabFor`,parent:{fileName:`packages/ui-lib/src/Tabs/atoms/TabWithIcon.tsx`,name:`ITabWithIcon`},required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{v as n,_ as t};