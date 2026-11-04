import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a}from"./common-CHMa4duo.js";import{r as o,t as s}from"./Icon-W-FFwI7F.js";import{n as c,t as l}from"./Button-B5QitegD.js";import{r as u,t as d}from"./Label-BXqzuGm0.js";import{n as f,r as p,t as m}from"./SelectField-DatOXclN.js";import{l as h,o as g}from"./helpers-D3bl-wl9.js";import{a as _,n as v,o as y}from"./iframe-D4JXfpgr.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=t(),y(),i(),c(),u(),p(),g(),o(),x=n(),S=12,C=_.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: fit-content;
  margin-right: 10px;
  white-space: nowrap;
  gap: 40px;
  vertical-align: baseline;
`,w=_.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`,T=_.input`
  ${a};
  color: var(--input-color-default);
  max-width: ${({$maxWidth:e})=>e||`40px`};
  font-family: var(--font-data);
  height: 100%;
  box-sizing: border-box;
  outline: none;
  background: transparent;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 25px;
  border: none;
  padding-right: ${S/2}px;
`,E=v`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`,D=_.div`
  height: var(--input-height, 40px);
  animation: ${({$shouldShake:e})=>e?E:`none`} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({$borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`,O=_(l)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`,k=_.div`
  display: flex;
  gap: 0 8px;
`,A=_.button`
  ${r};
  width: 40px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 4px 9px 0 rgba(152, 174, 189, 0.07);
  border: solid 1px var(--input-default-border-color);
  background-color: var(grey-2);
  pointer-events: ${({$active:e})=>e?`auto`:`none`};
  opacity: ${({$active:e})=>e?`1`:`0.5`};

  &:focus, &:hover {
    outline: 2px solid #838383;
  }
`,j=_.div`
  ${f} {
    width: ${({$width:e})=>e||`60px`};
  }
`,M=e=>{let{pageText:t=`Page:`,totalPages:n=1,activePage:r=1,buttonText:i=`GO`,itemsText:a=`Items Per Page`,itemsDefaultValue:o,selectId:c=`paginationPages`,selectWidth:l=`60px`,selectDisabled:u=!1,itemsOptions:f=[],onPageChange:p,onItemsChange:g}=e,[_,v]=(0,b.useState)(`default`),[y,E]=(0,b.useState)(r?r.toString():`1`),[M,N]=(0,b.useState)(!(parseInt(y,10)>n&&_!==``)),[P,F]=(0,b.useState)(!1),I=(0,b.useRef)(null),L=(0,b.useCallback)(()=>`${n.toString().length*S+S/2}px`,[n]),R=(0,b.useCallback)(e=>!(h(e)||parseInt(e,10)>n||parseInt(e,10)<=0||e===``),[n]),z=(0,b.useCallback)(({target:{value:e}})=>{if(F(!1),h(e))return;let t=e===``?``:Number(e.slice(-n.toString().length)).toString();E(t),R(t)?(v(`processing`),N(!1)):(v(`invalid`),N(!0),F(!0))},[R,n]),B=(0,b.useCallback)(({target:{value:e}})=>{if(e===``)E(r.toString());else if(R(e)&&parseInt(e,10)!==r){N(!1),v(`processing`);return}else if(!R(e)){v(`invalid`),N(!0);return}v(`default`)},[r,R]),V=e=>{e.key===`Enter`&&R(y)&&U()},H=({target:{value:e}})=>{R(e)?v(`processing`):(v(`invalid`),N(!0))},U=(0,b.useCallback)(()=>{p(parseInt(y,10)),I.current?.blur(),N(!0),v(`default`)},[p,y]),W=e=>{p(e),E(e.toString())},G=(0,b.useCallback)(e=>{g(Number(e))},[g]),K=e=>{let t=e.clipboardData.getData(`text`);/^\d+$/.test(t)||e.preventDefault()};return(0,b.useEffect)(()=>{if(!r||!R(r?r.toString():``)){console.warn(`Pagination: invalid activePage prop value was sent`);return}E(r.toString())},[r,R]),(0,x.jsxs)(C,{children:[(0,x.jsx)(j,{$width:l,children:(0,x.jsx)(m,{disabled:u,label:{htmlFor:c,text:a,direction:`row`},defaultValue:o||f[0].value||1,changeCallback:G,children:f.map(({value:e,textValue:t})=>(0,x.jsx)(`option`,{value:e,children:t},e))})}),(0,x.jsxs)(d,{labelText:t,htmlFor:`goButton`,direction:`row`,children:[(0,x.jsxs)(D,{$borderColorState:_,$shouldShake:P,children:[(0,x.jsx)(T,{ref:I,value:y,onChange:e=>z(e),onFocus:e=>H(e),onBlur:e=>B(e),onPaste:e=>K(e),onKeyDown:V,$maxWidth:L()}),(0,x.jsx)(w,{children:`/\u00A0${n.toString()}`}),(0,x.jsx)(O,{id:`goButton`,size:`small`,design:`primary`,disabled:M,onClick:U,children:i})]}),(0,x.jsxs)(k,{children:[(0,x.jsx)(A,{onClick:()=>W(r-1),disabled:r<=1,$active:_==="default"&&r>1,children:(0,x.jsx)(s,{icon:`Left`,color:`input-lead-icon`,size:8})}),(0,x.jsx)(A,{onClick:()=>W(r+1),disabled:r>=n,$active:_==="default"&&r<n,children:(0,x.jsx)(s,{icon:`Right`,color:`input-lead-icon`,size:8})})]})]})]})};try{M.displayName=`Pagination`,M.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/molecules/Pagination.tsx`,methods:[],props:{pageText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`pageText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},totalPages:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`totalPages`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`number`}},activePage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`activePage`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},buttonText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsDefaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsDefaultValue`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},selectWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectWidth`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},selectDisabled:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectDisabled`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},selectId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectId`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsOptions:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsOptions`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`IItemsOption[]`}},onPageChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onPageChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(page: number) => void`}},onItemsChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onItemsChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(items: number) => void`}}},tags:{}}}catch{}})))()}var P,F,I,L,R,z;function B(){return(B=e((()=>{N(),P=n(),{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Misc/molecules/Pagination`,component:M,tags:[`autodocs`],args:{activePage:1,totalPages:20,pageText:`Page:`,buttonText:`GO`,itemsText:`Items Per Page:`,itemsDefaultValue:10,itemsOptions:[{value:5,textValue:`5`},{value:10,textValue:`10`},{value:20,textValue:`20`},{value:30,textValue:`30`},{value:100,textValue:`100`}],selectId:`UniqID23`,selectWidth:`70px`,selectDisabled:!1,onPageChange:I(),onItemsChange:I()},render:function(e){let[{activePage:t},n]=F(),r=t=>{e.onPageChange(t),n({activePage:t})};return(0,P.jsx)(M,{...e,activePage:t,onPageChange:r},String(e.itemsDefaultValue))}},R={},z=[`Default`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Default,z as __namedExportsOrder,L as default};