import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,t as a}from"./styled-components.browser.esm-DRoLZq3m.js";import{i as o,n as s,r as c}from"./common-CUVz1sPu.js";import{r as l,t as u}from"./Icon-jcMQaGO-.js";import{n as d,t as f}from"./Button-CVePDF2Y.js";import{r as p,t as m}from"./Label-C_93wLsZ.js";import{n as h,r as g,t as _}from"./SelectField-Du-qetJ0.js";import{d as v,m as y}from"./iframe-C82YJEyw.js";var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=t(),r(),s(),d(),p(),g(),v(),l(),x=n(),S=12,C=i.div`
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
`,w=i.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`,T=i.input`
  ${c};
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
`,E=a`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`,D=i.div`
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
`,O=i(f)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`,k=i.div`
  display: flex;
  gap: 0 8px;
`,A=i.button`
  ${o};
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
`,j=i.div`
  ${h} {
    width: ${({$width:e})=>e||`60px`};
  }
`,M=e=>{let{pageText:t=`Page:`,totalPages:n=1,activePage:r=1,buttonText:i=`GO`,itemsText:a=`Items Per Page`,itemsDefaultValue:o,selectId:s=`paginationPages`,selectWidth:c=`60px`,selectDisabled:l=!1,itemsOptions:d=[],onPageChange:f,onItemsChange:p}=e,[h,g]=(0,b.useState)(`default`),[v,E]=(0,b.useState)(r?r.toString():`1`),[M,N]=(0,b.useState)(!(parseInt(v,10)>n&&h!==``)),[P,F]=(0,b.useState)(!1),I=(0,b.useRef)(null),L=(0,b.useCallback)(()=>`${n.toString().length*S+S/2}px`,[n]),R=(0,b.useCallback)(e=>!(y(e)||parseInt(e,10)>n||parseInt(e,10)<=0||e===``),[n]),z=(0,b.useCallback)(({target:{value:e}})=>{if(F(!1),y(e))return;let t=e===``?``:Number(e.slice(-n.toString().length)).toString();E(t),R(t)?(g(`processing`),N(!1)):(g(`invalid`),N(!0),F(!0))},[R,n]),B=(0,b.useCallback)(({target:{value:e}})=>{if(e===``)E(r.toString());else if(R(e)&&parseInt(e,10)!==r){N(!1),g(`processing`);return}else if(!R(e)){g(`invalid`),N(!0);return}g(`default`)},[r,R]),V=e=>{e.key===`Enter`&&R(v)&&U()},H=({target:{value:e}})=>{R(e)?g(`processing`):(g(`invalid`),N(!0))},U=(0,b.useCallback)(()=>{f(parseInt(v,10)),I.current?.blur(),N(!0),g(`default`)},[f,v]),W=e=>{f(e),E(e.toString())},G=(0,b.useCallback)(e=>{p(Number(e))},[p]),K=e=>{let t=e.clipboardData.getData(`text`);/^\d+$/.test(t)||e.preventDefault()};return(0,b.useEffect)(()=>{if(!r||!R(r?r.toString():``)){console.warn(`Pagination: invalid activePage prop value was sent`);return}E(r.toString())},[r,R]),(0,x.jsxs)(C,{children:[(0,x.jsx)(j,{$width:c,children:(0,x.jsx)(_,{disabled:l,label:{htmlFor:s,text:a,direction:`row`},defaultValue:o||d[0].value||1,changeCallback:G,children:d.map(({value:e,textValue:t})=>(0,x.jsx)(`option`,{value:e,children:t},e))})}),(0,x.jsxs)(m,{labelText:t,htmlFor:`goButton`,direction:`row`,children:[(0,x.jsxs)(D,{$borderColorState:h,$shouldShake:P,children:[(0,x.jsx)(T,{ref:I,value:v,onChange:e=>z(e),onFocus:e=>H(e),onBlur:e=>B(e),onPaste:e=>K(e),onKeyDown:V,$maxWidth:L()}),(0,x.jsx)(w,{children:`/\u00A0${n.toString()}`}),(0,x.jsx)(O,{id:`goButton`,size:`small`,design:`primary`,disabled:M,onClick:U,children:i})]}),(0,x.jsxs)(k,{children:[(0,x.jsx)(A,{onClick:()=>W(r-1),disabled:r<=1,$active:h==="default"&&r>1,children:(0,x.jsx)(u,{icon:`Left`,color:`input-lead-icon`,size:8})}),(0,x.jsx)(A,{onClick:()=>W(r+1),disabled:r>=n,$active:h==="default"&&r<n,children:(0,x.jsx)(u,{icon:`Right`,color:`input-lead-icon`,size:8})})]})]})]})};try{M.displayName=`Pagination`,M.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/molecules/Pagination.tsx`,methods:[],props:{pageText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`pageText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},totalPages:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`totalPages`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`number`}},activePage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`activePage`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},buttonText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsDefaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsDefaultValue`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},selectWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectWidth`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},selectDisabled:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectDisabled`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},selectId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectId`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsOptions:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsOptions`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`IItemsOption[]`}},onPageChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onPageChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(page: number) => void`}},onItemsChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onItemsChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(items: number) => void`}}},tags:{}}}catch{}})))()}var P,F,I,L,R,z;function B(){return(B=e((()=>{N(),P=n(),{useArgs:F}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Misc/molecules/Pagination`,component:M,args:{activePage:1,totalPages:20,pageText:`Page:`,buttonText:`GO`,itemsText:`Items Per Page:`,itemsDefaultValue:10,itemsOptions:[{value:5,textValue:`5`},{value:10,textValue:`10`},{value:20,textValue:`20`},{value:30,textValue:`30`},{value:100,textValue:`100`}],selectId:`UniqID23`,selectWidth:`70px`,selectDisabled:!1,onPageChange:I(),onItemsChange:I()},render:function(e){let[{activePage:t},n]=F(),r=t=>{e.onPageChange(t),n({activePage:t})};return(0,P.jsx)(M,{...e,activePage:t,onPageChange:r},String(e.itemsDefaultValue))}},R={},z=[`Default`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Default,z as __namedExportsOrder,L as default};