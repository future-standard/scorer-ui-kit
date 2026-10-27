import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Gt as t,It as n,Kt as r,Rt as i,dt as a,wt as o,zt as s}from"./iframe-CG6MPxmZ.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=t(),l=r(),o(),s(),u=n(),d={title:`Tables/atoms`,component:a,decorators:[]},f=i.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,p=()=>{let[e,t]=(0,l.useState)(!0),n=(0,c.boolean)(`isSortActive`,!0),r=(0,c.boolean)(`sortable`,e),i=(0,c.boolean)(`ascending`,e),o=(0,c.text)(`header`,`Device Name`);(0,l.useEffect)(()=>{t(i)},[i]);let s=(0,l.useCallback)(n=>{console.debug(`arriving ${n}`,e),t(e=>!e)},[e]);return(0,u.jsx)(f,{children:(0,u.jsx)(a,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:o,toggleSort:s})})},p.__docgenInfo={description:``,methods:[],displayName:`_TableHeaderTitle`},m=[`_TableHeaderTitle`]})))()}h();export{p as _TableHeaderTitle,m as __namedExportsOrder,d as default};