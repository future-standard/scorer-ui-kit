import{A as n,d as r,j as t,a as u}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const d=u.div`
  margin: 100px;
`,x={title:"Alerts/atoms",component:n,decorators:[]},e=()=>{const c=r.text("Message","Look Out!"),i=r.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error"),l=r.boolean("Hide close icon",!1);return t.jsx(d,{children:t.jsx(n,{message:c,type:i,hideCloseButton:l})})};e.__docgenInfo={description:"",methods:[],displayName:"_AlertBar"};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["_AlertBar"];export{e as _AlertBar,B as __namedExportsOrder,x as default};
