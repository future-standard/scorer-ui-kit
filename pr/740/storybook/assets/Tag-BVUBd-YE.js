import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./common-yMuJssaz.js";import{n as a,r as o,t as s}from"./Icon-BR6KFKcD.js";import{a as c,d as l,i as u,m as d,o as f}from"./iframe-B9mgqNTy.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=t(),d(),f(),i(),o(),m=n(),h=c.div`
  user-select: none;
`,g=c(l)`
  text-decoration: none;
  display: flex;
`,_=c.button`
  ${r};
  text-decoration: none;
  display: flex;
`,v=c.div`
  font-family: var(--font-data);
  font-size: ${({$size:e})=>e}px;
  font-weight: 500;
  color: var(--grey-11);
  padding: 4px 10px;

  ${({$noBorder:e})=>!e&&u`
      border: solid 1px var(--grey-8);
      border-radius: 3px;
    `};

  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  ${({$tagSize:e})=>e===`compact`&&u`
    padding: 2px 6px;
    gap: 4px;
  `};

  ${({$tagSize:e})=>e==="default"&&u`
    padding: 3px 8px;
  `};

  ${a} {
    [stroke]{
      stroke: var(--dimmed);
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({$hoverColor:e,$enableHover:t})=>t&&u`
    &:hover {
      cursor: pointer;
      border-color: var(--${e});
      color: var(--${e});
      ${a} {
        [stroke]{
          stroke: var(--${e});
        }
      }
    }
  `};
`,y=({icon:e=``,size:t=12,weight:n=`regular`,label:r=``,linkTo:i,noBorder:a=!1,tagSize:o,onTagClick:c,...l})=>{let u=(0,p.useMemo)(()=>o===`compact`?8:10,[o]),d=(0,p.useMemo)(()=>o===`compact`?12:14,[o]),f=()=>(0,m.jsxs)(v,{$hoverColor:`primary`,$enableHover:!!(c||i),$size:o?d:t,$tagSize:o,$noBorder:a,children:[e&&(0,m.jsx)(s,{icon:e,size:o?u:t,weight:n,...l}),(0,m.jsx)(h,{children:r})]});return c?(0,m.jsx)(_,{onClick:c,type:`button`,children:f()}):i?(0,m.jsx)(g,{to:i,children:f()}):f()};try{v.displayName=`TagWrapper`,v.__docgenInfo={description:``,displayName:`TagWrapper`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/atoms/Tag.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`as`,required:!1,tags:{},type:{name:`void | WebTarget`}},forwardedAs:{defaultValue:null,declarations:[{fileName:`scorer-ui-kit/node_modules/styled-components/dist/types.d.ts`,name:`TypeLiteral`}],description:``,name:`forwardedAs`,required:!1,tags:{},type:{name:`void | WebTarget`}}},tags:{}}}catch{}try{y.displayName=`Tag`,y.__docgenInfo={description:``,displayName:`Tag`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/atoms/Tag.tsx`,methods:[],props:{label:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`}],description:``,name:`label`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},linkTo:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`}],description:``,name:`linkTo`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},noBorder:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`}],description:``,name:`noBorder`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},tagSize:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`}],description:``,name:`tagSize`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeTagSize`,value:[{value:`"default"`},{value:`"compact"`}]}},onTagClick:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`}],description:``,name:`onTagClick`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/Tag.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}},icon:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`},required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`12`},declarations:[{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`},required:!1,tags:{},type:{name:`number`}},weight:{defaultValue:{value:`regular`},declarations:[{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`}],description:``,name:`weight`,parent:{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`},required:!1,tags:{},type:{name:`enum`,raw:`IWeight`,value:[{value:`"light"`},{value:`"strong"`},{value:`"regular"`},{value:`"heavy"`}]}},color:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`}],description:``,name:`color`,parent:{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`},required:!1,tags:{},type:{name:`string`}},forSvgUsage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`}],description:``,name:`forSvgUsage`,parent:{fileName:`packages/ui-lib/src/Icons/Icon.tsx`,name:`IconProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{v as n,b as r,y as t};