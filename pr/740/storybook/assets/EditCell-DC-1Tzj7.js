import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-DBbC_pYz.js";import{n as a,t as o}from"./ButtonWithLoading-BOl70wlJ.js";import{n as s,t as c}from"./IconButton-oZq2OexB.js";import{n as l,r as u}from"./Label-mM6ve_8N.js";import{n as d,t as f}from"./SmallInput-MUH9L9nQ.js";import{n as p,t as m}from"./useClickOutside-gjKn5OLT.js";import{a as h,d as g,i as _,m as v,o as y}from"./iframe-DkCQ6b6C.js";var b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{b=t(),v(),y(),r(),a(),s(),u(),d(),m(),x=n(),S=h.div`
  position: relative;
  ${({theme:e})=>_`
    font-family: ${e.fontFamily.ui};
  `}
`,C=h(i)`
  flex-shrink: 0;
`,w=h(o)`
  flex-shrink: 0;
`,T=h(g)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,E=h.div`
  min-width: 320px;
  background-color: var(--grey-2);
  z-index: 99;
  position: absolute;
  bottom: -15px;
  left: -11px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${l} {
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
`,D=h(c)``,O=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;

  ${({$alignment:e})=>e===`center`&&_`
    justify-content: center;
  `}

  ${({$alignment:e})=>e===`right`&&_`
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
`,k=({type:e=`text`,placeholder:t=``,defaultValue:n,rowKey:r,alignment:i=`left`,toLink:a=``,saveCallback:o,...s})=>{let[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(n),[m,h]=(0,b.useState)(!1),g=(0,b.useCallback)(async e=>{h(!0),o&&await o(e,r),l(!1),h(!1)},[r,o]),_=(0,b.useCallback)(async e=>{let t=e.keyCode|e.which|parseInt(e.key,10);t===13&&g&&(await g(u),l(!1)),t===27&&(d(n),l(!1))},[g,u,n]),v=(0,b.useRef)(null);return p(v,()=>{d(n),l(!1)}),(0,x.jsx)(S,{children:c?(0,x.jsxs)(E,{ref:v,children:[(0,x.jsx)(f,{...s,autoFocus:!0,label:``,disabled:m,type:e,placeholder:t,defaultValue:n,onKeyUp:e=>_(e),onChange:e=>{d(e.target.value)}}),(0,x.jsx)(w,{onClick:()=>{g(u)},size:`small`,loading:m,children:m?`Saving`:`Save`}),!m&&(0,x.jsx)(C,{onClick:()=>l(!1),design:`secondary`,size:`small`,children:`Cancel`})]}):(0,x.jsxs)(O,{$alignment:i,children:[a?(0,x.jsx)(T,{to:a,children:u}):u,(0,x.jsx)(D,{icon:`Edit`,weight:`light`,size:16,onClick:()=>l(!0)})]})})};try{k.displayName=`EditCell`,k.__docgenInfo={description:``,displayName:`EditCell`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tables/molecules/EditCell.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},{fileName:`scorer-ui-kit/node_modules/@types/react/index.d.ts`,name:`HTMLAttributes`}],description:``,name:`defaultValue`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string | (string & readonly string[])`}},rowKey:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`rowKey`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`string`}},alignment:{defaultValue:{value:`left`},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`alignment`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeCellAlignment`,value:[{value:`"center"`},{value:`"left"`},{value:`"right"`}]}},toLink:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`toLink`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},saveCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`}],description:``,name:`saveCallback`,parent:{fileName:`packages/ui-lib/src/Tables/molecules/EditCell.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((inputValue: string, rowKey: string) => void)`}}},tags:{}}}catch{}})))()}export{A as n,k as t};