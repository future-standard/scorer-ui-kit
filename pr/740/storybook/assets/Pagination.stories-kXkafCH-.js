import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a}from"./common-Bnnfb4Bd.js";import{r as o,t as s}from"./Icon-Bj-W_PAo.js";import{n as c,t as l}from"./Button-DBbC_pYz.js";import{r as u,t as d}from"./Label-mM6ve_8N.js";import{n as f,r as p,t as m}from"./SelectField-CLzSB5P9.js";import{l as h,o as g}from"./helpers-D3bl-wl9.js";import{_,a as v,n as y,o as b}from"./iframe-DkCQ6b6C.js";var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{x=t(),b(),i(),c(),u(),p(),g(),o(),S=n(),C=12,w=v.div`
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
`,T=v.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  color: var(--grey-8);
  height: 100%;
  text-align: left;
  padding-top: 1px;
  padding-right: 1px;
`,E=v.input`
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
  padding-right: ${C/2}px;
`,D=y`
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`,O=v.div`
  height: var(--input-height, 40px);
  animation: ${({$shouldShake:e})=>e?D:`none`} 150ms 2 linear;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 8px;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 102, 255, 0.04);
  ${({$borderColorState:e})=>e&&`border: 1px solid var(--input-${e}-border-color)`};
`,k=v(l)`
  height: 24px;
  padding: 0 8px;
  margin-left: 8px;
`,A=v.div`
  display: flex;
  gap: 0 8px;
`,j=v.button`
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
`,M=v.div`
  ${f} {
    width: ${({$width:e})=>e||`60px`};
  }
`,N=e=>{let{pageText:t=`Page:`,totalPages:n=1,activePage:r=1,buttonText:i=`GO`,itemsText:a=`Items Per Page`,itemsDefaultValue:o,selectId:c=`paginationPages`,selectWidth:l=`60px`,selectDisabled:u=!1,itemsOptions:f=[],onPageChange:p,onItemsChange:g}=e,[_,v]=(0,x.useState)(`default`),[y,b]=(0,x.useState)(r?r.toString():`1`),[D,N]=(0,x.useState)(!(parseInt(y,10)>n&&_!==``)),[P,F]=(0,x.useState)(!1),I=(0,x.useRef)(null),L=(0,x.useCallback)(()=>`${n.toString().length*C+C/2}px`,[n]),R=(0,x.useCallback)(e=>!(h(e)||parseInt(e,10)>n||parseInt(e,10)<=0||e===``),[n]),z=(0,x.useCallback)(({target:{value:e}})=>{if(F(!1),h(e))return;let t=e===``?``:Number(e.slice(-n.toString().length)).toString();b(t),R(t)?(v(`processing`),N(!1)):(v(`invalid`),N(!0),F(!0))},[R,n]),B=(0,x.useCallback)(({target:{value:e}})=>{if(e===``)b(r.toString());else if(R(e)&&parseInt(e,10)!==r){N(!1),v(`processing`);return}else if(!R(e)){v(`invalid`),N(!0);return}v(`default`)},[r,R]),V=e=>{e.key===`Enter`&&R(y)&&U()},H=({target:{value:e}})=>{R(e)?v(`processing`):(v(`invalid`),N(!0))},U=(0,x.useCallback)(()=>{p(parseInt(y,10)),I.current?.blur(),N(!0),v(`default`)},[p,y]),W=e=>{p(e),b(e.toString())},G=(0,x.useCallback)(e=>{g(Number(e))},[g]),K=e=>{let t=e.clipboardData.getData(`text`);/^\d+$/.test(t)||e.preventDefault()};return(0,x.useEffect)(()=>{if(!r||!R(r?r.toString():``)){console.warn(`Pagination: invalid activePage prop value was sent`);return}b(r.toString())},[r,R]),(0,S.jsxs)(w,{children:[(0,S.jsx)(M,{$width:l,children:(0,S.jsx)(m,{disabled:u,label:{htmlFor:c,text:a,direction:`row`},defaultValue:o||f[0].value||1,changeCallback:G,children:f.map(({value:e,textValue:t})=>(0,S.jsx)(`option`,{value:e,children:t},e))})}),(0,S.jsxs)(d,{labelText:t,htmlFor:`goButton`,direction:`row`,children:[(0,S.jsxs)(O,{$borderColorState:_,$shouldShake:P,children:[(0,S.jsx)(E,{ref:I,value:y,onChange:e=>z(e),onFocus:e=>H(e),onBlur:e=>B(e),onPaste:e=>K(e),onKeyDown:V,$maxWidth:L()}),(0,S.jsx)(T,{children:`/\u00A0${n.toString()}`}),(0,S.jsx)(k,{id:`goButton`,size:`small`,design:`primary`,disabled:D,onClick:U,children:i})]}),(0,S.jsxs)(A,{children:[(0,S.jsx)(j,{onClick:()=>W(r-1),disabled:r<=1,$active:_==="default"&&r>1,children:(0,S.jsx)(s,{icon:`Left`,color:`input-lead-icon`,size:8})}),(0,S.jsx)(j,{onClick:()=>W(r+1),disabled:r>=n,$active:_==="default"&&r<n,children:(0,S.jsx)(s,{icon:`Right`,color:`input-lead-icon`,size:8})})]})]})]})};try{N.displayName=`Pagination`,N.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/molecules/Pagination.tsx`,methods:[],props:{pageText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`pageText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},totalPages:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`totalPages`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`number`}},activePage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`activePage`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},buttonText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsText`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsDefaultValue:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsDefaultValue`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`number`}},selectWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectWidth`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},selectDisabled:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectDisabled`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},selectId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`selectId`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},itemsOptions:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`itemsOptions`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`IItemsOption[]`}},onPageChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onPageChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(page: number) => void`}},onItemsChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`}],description:``,name:`onItemsChange`,parent:{fileName:`packages/ui-lib/src/Misc/molecules/Pagination.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`(items: number) => void`}}},tags:{}}}catch{}})))()}var F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{F=_(),I=t(),P(),L=n(),{action:R}=__STORYBOOK_MODULE_ACTIONS__,z={title:`Misc/Molecules`,component:N,decorators:[]},B=[{value:5,textValue:`5`},{value:10,textValue:`10`},{value:20,textValue:`20`},{value:30,textValue:`30`},{value:100,textValue:`100`}],V=()=>{let e=(0,F.number)(`Active Page`,1),[t,n]=(0,I.useState)(e),r=R(`Page changed`),i=R(`Items Per Page`),a=(0,F.text)(`Page Text`,`Page:`),o=(0,F.text)(`Button Text`,`GO`),s=(0,F.text)(`Items Per Page`,`Items Per Page:`),c=(0,F.number)(`Items Default Value`,10),l=(0,F.text)(`Select Width`,`70px`),u=(0,F.text)(`SelectId`,`UniqID23`),d=(0,F.number)(`Total Pages`,20),f=(0,F.boolean)(`Select Disabled`,!1),p=(0,F.object)(`Items Options`,B);return(0,I.useEffect)(()=>{n(e)},[e]),(0,L.jsx)(N,{selectId:u,pageText:a,totalPages:d,activePage:t,buttonText:o,itemsText:s,selectWidth:l,selectDisabled:f,itemsDefaultValue:c,itemsOptions:p,onPageChange:e=>{r(e),n(e)},onItemsChange:e=>{i(e)}})},H=[`_Pagination`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const controlledActivePage = number('Active Page', 1);
  const [currentPage, setCurrentPage] = useState(controlledActivePage);
  const buttonOnClick = action('Page changed');
  const itemsChange = action('Items Per Page');
  const pageText = text('Page Text', 'Page:');
  const buttonText = text('Button Text', 'GO');
  const itemsText = text('Items Per Page', 'Items Per Page:');
  const itemsDefaultValue = number('Items Default Value', 10);
  const selectWidth = text('Select Width', '70px');
  const selectId = text('SelectId', 'UniqID23');
  const totalPages = number('Total Pages', 20);
  const selectDisabled = boolean('Select Disabled', false);
  const itemOptionsObj = object('Items Options', ItemsOptions);
  const onPageChange = (page: number) => {
    buttonOnClick(page);
    setCurrentPage(page);
  };
  const onItemsChange = (items: number) => {
    itemsChange(items);
  };
  useEffect(() => {
    setCurrentPage(controlledActivePage);
  }, [controlledActivePage]);
  return <Pagination selectId={selectId} pageText={pageText} totalPages={totalPages} activePage={currentPage} buttonText={buttonText} itemsText={itemsText} selectWidth={selectWidth} selectDisabled={selectDisabled} itemsDefaultValue={itemsDefaultValue} itemsOptions={itemOptionsObj} onPageChange={onPageChange} onItemsChange={onItemsChange} />;
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as _Pagination,H as __namedExportsOrder,z as default};