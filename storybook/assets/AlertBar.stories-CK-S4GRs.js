import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as m}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as r}from"./index-BtgrC99a.js";import{A as a}from"./index.modern-BCxVMgPd.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const p=m.div`
  margin: 100px;
`,y={title:"Alerts/atoms",component:a,decorators:[]},e=()=>{const c=r.text("Message","Look Out!"),i=r.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error"),l=r.boolean("Hide close icon",!1);return o.jsx(p,{children:o.jsx(a,{message:c,type:i,hideCloseButton:l})})};e.__docgenInfo={description:"",methods:[],displayName:"_AlertBar"};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const message = text("Message", 'Look Out!');
  const type = select("Type", {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'error');
  const hideCloseButton = boolean('Hide close icon', false);
  return <Container><AlertBar {...{
      message,
      type,
      hideCloseButton
    }}></AlertBar></Container>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const _=["_AlertBar"];export{e as _AlertBar,_ as __namedExportsOrder,y as default};
