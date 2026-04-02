import{A as n,d as r,j as s,a as u}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const d=u.div`
  margin: 100px;
`,g={title:"Alerts/atoms",component:n,decorators:[]},e=()=>{const c=r.text("Message","Look Out!"),i=r.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error"),l=r.boolean("Hide close icon",!1);return s.jsx(d,{children:s.jsx(n,{message:c,type:i,hideCloseButton:l})})};e.__docgenInfo={description:"",methods:[],displayName:"_AlertBar"};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["_AlertBar"];export{e as _AlertBar,x as __namedExportsOrder,g as default};
