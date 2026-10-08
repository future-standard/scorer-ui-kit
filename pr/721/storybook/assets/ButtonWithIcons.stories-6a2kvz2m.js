import{Gt as e,It as t,Rt as n,l as r,wt as i,zt as a}from"./iframe-DlslPBnL.js";import{n as o,t as s}from"./helpers-D76RwDl1.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=c((()=>{l=e(),i(),a(),o(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=n.div`
  width: ${({$width:e})=>e}px;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=n.h2`
  margin: 0 0 16px;
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-12);
`,m={Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},h={Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},g={title:`Form/Buttons`,component:r,decorators:[]},_=()=>{let e=s(),t=(0,l.text)(`Button Text`,`Example Title`),n=(0,l.select)(`Design`,m,`primary`),i=(0,l.select)(`Size`,h,`normal`),a=(0,l.boolean)(`Disabled`,!1),o=(0,l.select)(`Icon`,e,Object.keys(e)[0]),c=(0,l.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,l.boolean)(`Loading`,!1),p=(0,l.boolean)(`Shadow`,!1),g=d(`button-click`);return(0,u.jsx)(r,{design:n,size:i,shadow:p,onClick:g,icon:o,position:c,disabled:a,loading:f,children:t})},v=()=>{let e=(0,l.number)(`Container Width`,320),t=(0,l.text)(`Panel Title`,`Save current work`),n=[{id:`save`,icon:`Success`,design:`primary`,label:(0,l.text)(`Button 1 Text`,`Save changes`)},{id:`discard`,icon:`Warning`,design:`warning`,label:(0,l.text)(`Button 2 Text`,`Discard changes`)},{id:`cancel`,icon:`Invalid`,design:`secondary`,label:(0,l.text)(`Button 3 Text`,`Cancel`)}],i=(0,l.select)(`Size`,h,`normal`),a=(0,l.select)(`Icon Position`,{Left:`left`,Right:`right`},`left`),o=d(`button-click`);return(0,u.jsxs)(f,{$width:e,children:[(0,u.jsx)(p,{children:t}),n.map(({id:e,icon:t,design:n,label:s})=>(0,u.jsx)(r,{design:n,size:i,onClick:o,icon:t,position:a,isFullWidth:!0,children:s},e))]})},_.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},v.__docgenInfo={description:``,methods:[],displayName:`_WithIconFullWidth`},y=[`_WithIcon`,`_WithIconFullWidth`]})))()}b();export{_ as _WithIcon,v as _WithIconFullWidth,y as __namedExportsOrder,g as default};