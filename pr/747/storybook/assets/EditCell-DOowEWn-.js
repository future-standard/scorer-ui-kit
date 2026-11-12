import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,r as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as o,t as s}from"./Button-CVePDF2Y.js";import{n as c,t as l}from"./ButtonWithLoading-W8oHVGwg.js";import{n as u,t as d}from"./IconButton-W1amfoja.js";import{n as f,r as p}from"./Label-C_93wLsZ.js";import{n as m,t as h}from"./SmallInput-D3XzViWQ.js";import{n as g,t as _}from"./useClickOutside-gjKn5OLT.js";import{O as v,j as y}from"./iframe-C82YJEyw.js";var b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{b=t(),y(),r(),o(),c(),u(),p(),m(),_(),x=n(),S=i.div`
  position: relative;
  ${({theme:e})=>a`
    font-family: ${e.fontFamily.ui};
  `}
`,C=i(s)`
  flex-shrink: 0;
`,w=i(l)`
  flex-shrink: 0;
`,T=i(v)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,E=i.div`
  min-width: 320px;
  background-color: var(--grey-2);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${f} {
    margin:0;
    span {
      margin: 0;
    }
  }
  ${C} {
    margin-left: 5px;
  }
  ${w} {
    margin-left: 5px;
  }
`,D=i(d)``,O=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({$alignment:e})=>e===`center`&&a`
    justify-content: center;
  `}

  ${({$alignment:e})=>e===`right`&&a`
    justify-content: flex-end;
`}

  ${D} {
    opacity: 0;
    position: absolute;
    top: 7px;
    right: 0;
  };

  &:hover {
    ${D} {
      opacity: 1;
    };
  }
`,k=({type:e=`text`,placeholder:t=``,defaultValue:n,rowKey:r,alignment:i=`left`,toLink:a=``,saveCallback:o,...s})=>{let[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(n),[f,p]=(0,b.useState)(!1),m=(0,b.useCallback)(async e=>{p(!0),o&&await o(e,r),l(!1),p(!1)},[r,o]),_=(0,b.useCallback)(async e=>{let t=e.keyCode|e.which|parseInt(e.key,10);t===13&&m&&(await m(u),l(!1)),t===27&&(d(n),l(!1))},[m,u,n]),v=(0,b.useRef)(null);return g(v,()=>{d(n),l(!1)}),(0,x.jsx)(S,{children:c?(0,x.jsxs)(E,{ref:v,children:[(0,x.jsx)(h,{...s,autoFocus:!0,label:``,disabled:f,type:e,placeholder:t,defaultValue:n,onKeyUp:e=>_(e),onChange:e=>{d(e.target.value)}}),(0,x.jsx)(w,{onClick:()=>{m(u)},size:`small`,loading:f,children:f?`Saving`:`Save`}),!f&&(0,x.jsx)(C,{onClick:()=>l(!1),design:`secondary`,size:`small`,children:`Cancel`})]}):(0,x.jsxs)(O,{$alignment:i,children:[a?(0,x.jsx)(T,{to:a,children:u}):u,(0,x.jsx)(D,{icon:`Edit`,weight:`light`,size:16,onClick:()=>l(!0)})]})})};try{k.displayName=`EditCell`,k.__docgenInfo={description:``,displayName:`EditCell`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/molecules/EditCell.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string | (string & readonly string[])`}},rowKey:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`rowKey`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},alignment:{defaultValue:{value:`left`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`alignment`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellAlignment`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},toLink:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`toLink`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},saveCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`saveCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((inputValue: string, rowKey: string) => void)`}}},tags:{}}}catch{}})))()}export{A as n,k as t};