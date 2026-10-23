import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Gt as t,It as n,Rt as r,l as i,wt as a,zt as o}from"./iframe-BclkYTZO.js";import{n as s,t as c}from"./helpers-BQWMenXp.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{l=t(),a(),o(),s(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f=r.div`
  width: ${({$width:e})=>e}px;
  box-sizing: border-box;
  padding: 24px 16px;
  border: 1px solid var(--grey-6);
  border-radius: 3px;
  background-color: var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 8px;
`,p=r.h2`
  margin: 0 0 16px;
  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: 500;
  color: var(--grey-12);
`,m={Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},h={Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},g={title:`Form/Buttons`,component:i,decorators:[]},_=()=>{let e=c(),t=(0,l.text)(`Button Text`,`Example Title`),n=(0,l.select)(`Design`,m,`primary`),r=(0,l.select)(`Size`,h,`normal`),a=(0,l.boolean)(`Disabled`,!1),o=(0,l.select)(`Icon`,e,Object.keys(e)[0]),s=(0,l.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,l.boolean)(`Loading`,!1),p=(0,l.boolean)(`Shadow`,!1),g=d(`button-click`);return(0,u.jsx)(i,{design:n,size:r,shadow:p,onClick:g,icon:o,position:s,disabled:a,loading:f,children:t})},v=()=>{let e=(0,l.number)(`Container Width`,320),t=(0,l.text)(`Panel Title`,`Save current work`),n=[{id:`save`,icon:`Success`,design:`primary`,label:(0,l.text)(`Button 1 Text`,`Save changes`)},{id:`discard`,icon:`Warning`,design:`warning`,label:(0,l.text)(`Button 2 Text`,`Discard changes`)},{id:`cancel`,icon:`Invalid`,design:`secondary`,label:(0,l.text)(`Button 3 Text`,`Cancel`)}],r=(0,l.select)(`Size`,h,`normal`),a=(0,l.select)(`Icon Position`,{Left:`left`,Right:`right`},`left`),o=d(`button-click`);return(0,u.jsxs)(f,{$width:e,children:[(0,u.jsx)(p,{children:t}),n.map(({id:e,icon:t,design:n,label:s})=>(0,u.jsx)(i,{design:n,size:r,onClick:o,icon:t,position:a,isFullWidth:!0,children:s},e))]})},_.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},v.__docgenInfo={description:``,methods:[],displayName:`_WithIconFullWidth`},y=[`_WithIcon`,`_WithIconFullWidth`]})))()}b();export{_ as _WithIcon,v as _WithIconFullWidth,y as __namedExportsOrder,g as default};