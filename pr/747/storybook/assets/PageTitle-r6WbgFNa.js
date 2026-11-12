import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,o as i}from"./common-UxCkhbcb.js";import{a,i as o,r as s}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as c,n as l}from"./common-CUVz1sPu.js";import{r as u,t as d}from"./Icon-jcMQaGO-.js";import{O as f,j as p}from"./iframe-C82YJEyw.js";var m,h,g;function _(){return(_=e((()=>{m=t(),h=(e,t,n,r=!0)=>{let i=document.title.split(`|`).slice(-1)[0].trim();(0,m.useLayoutEffect)(()=>()=>{document.title=i},[i]),(0,m.useEffect)(()=>{r&&(document.title=g([...e?[e]:[],...t?[t]:[],...i?[i]:[]],n))},[e,t,n,r,i])},g=(e,t=`|`)=>{let n=``;return t=` ${t} `,e.forEach((r,i)=>{n+=r,e.length-1!==i&&(n+=t)}),n}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{p(),a(),l(),_(),u(),i(),v=n(),y=24,b=20,x=-44,S=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${r.large} {
    gap: ${b}px;
    flex-direction: row;
  }
`,C=o.div`
  position: relative;
  display: flex;
  flex-direction: ${({$areaTitleBottom:e})=>e?`column-reverse`:`column`};
  gap: 4px;
`,w=o.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  justify-content: left;

  @media ${r.large} {
    margin-left: ${x}px;
    justify-content: center;
  }

  svg {
    display: block;
  }
`,T=o.h1`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 26px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-12);
  margin: 0;
`,E=s`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--grey-11);
`,D=o.div`
  ${E}
`,O=o(f)`
  ${E}
  &:hover {
    text-decoration: underline;
  }
`,k=o.button`
  ${c};
  ${E};
  &:hover {
    text-decoration: underline;
  }
`,A=({title:e,icon:t,areaTitle:n,areaHref:r,updateDocTitle:i=!0,hideAreaInDocTitle:a=!1,areaTitleBottom:o=!1,iconColor:s=`dimmed`,onAreaClick:c})=>(h(e,a?void 0:n||``,void 0,i),(0,v.jsxs)(S,{children:[t?(0,v.jsx)(w,{children:(0,v.jsx)(d,{size:y,color:s,icon:t})}):null,(0,v.jsxs)(C,{$areaTitleBottom:o,children:[n&&c?(0,v.jsx)(k,{onClick:c,type:`button`,children:n}):n&&r?(0,v.jsx)(O,{to:r,children:n}):n?(0,v.jsx)(D,{children:n}):null,(0,v.jsx)(T,{children:e})]})]}));try{A.displayName=`PageTitle`,A.__docgenInfo={description:``,displayName:`PageTitle`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`string`}},icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},iconColor:{defaultValue:{value:`dimmed`},declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`iconColor`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},areaTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`areaTitle`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},areaHref:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`areaHref`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},updateDocTitle:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`updateDocTitle`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},hideAreaInDocTitle:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`hideAreaInDocTitle`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},areaTitleBottom:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`areaTitleBottom`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onAreaClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`}],description:``,name:`onAreaClick`,parent:{fileName:`packages/ui-lib/src/Pages/atoms/PageTitle.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}export{j as n,A as t};