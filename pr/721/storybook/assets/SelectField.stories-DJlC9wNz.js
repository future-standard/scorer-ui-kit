import{$ as e,Gt as t,It as n,Rt as r,et as i,wt as a,zt as o}from"./iframe-CPCyoU_U.js";import{n as s,t as c}from"./helpers-D3-spn5C.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=t(),a(),o(),s(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Form/atoms`,component:e,decorators:[]},m=r.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,h=r.div`
  ${i} {
    width: ${({$width:e})=>e||`60px`};
  }
`,g=r.div`
  flex: 1;
`,_=r.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`,v=()=>{let t=c(),n=(0,u.boolean)(`isCompact`,!1),r=(0,u.boolean)(`Disabled`,!1),i=(0,u.boolean)(`Required`,!1),a=(0,u.boolean)(`Always Show Required Dot`,!1),o=(0,u.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),s=(0,u.text)(`Placeholder (Free Width)`,`Choose an option...`),l=(0,u.text)(`Default Value (Free Width)`,``),p=f(`Free select value`),v=f(`Fixed select value`),y=(0,u.select)(`Icon`,t,Object.keys(t)[0]),b=(0,u.text)(`Fix width`,`80px`),x=(0,u.object)(`Free Select Label`,{htmlFor:`free_select`,text:`Field Label`}),S=(0,u.object)(`Fix Select Label`,{htmlFor:`fix_select`,text:`Page`,direction:`row`}),C=e=>{p(e)};return(0,d.jsxs)(m,{children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (Free Width)`}),(0,d.jsxs)(e,{isCompact:n,placeholder:s,label:x,disabled:r,defaultValue:l,fieldState:o,required:i,alwaysShowRequiredDot:a,changeCallback:C,children:[(0,d.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,d.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,d.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,d.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (Fixed Width)`}),(0,d.jsx)(h,{$width:b,children:(0,d.jsxs)(e,{isCompact:n,disabled:r,fieldState:o,required:i,alwaysShowRequiredDot:a,label:S,defaultValue:1,changeCallback:e=>{v(e)},children:[(0,d.jsx)(`option`,{value:1,children:`1`}),(0,d.jsx)(`option`,{value:5,children:`5`}),(0,d.jsx)(`option`,{value:10,children:`10`}),(0,d.jsx)(`option`,{value:15,children:`15`}),(0,d.jsx)(`option`,{value:20,children:`20`})]})})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (With Icon)`}),(0,d.jsxs)(e,{isCompact:n,placeholder:s,label:x,disabled:r,defaultValue:l,fieldState:o,icon:y,required:i,alwaysShowRequiredDot:a,changeCallback:C,children:[(0,d.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,d.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,d.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,d.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`_SelectField`},y=[`_SelectField`]})))()}b();export{v as _SelectField,y as __namedExportsOrder,p as default};