import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as m}from"./styled-components.browser.esm-CarAhzHj.js";import{d as r}from"./index-C-6Xbh3D.js";import{A as a}from"./index.modern-CLl990BG.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const p=m.div`
  margin: 100px;
`,A={title:"Alerts/atoms",component:a,decorators:[]},e=()=>{const c=r.text("Message","Look Out!"),i=r.select("Type",{Error:"error",Warning:"warning",Info:"info",Success:"success",Neutral:"neutral"},"error"),l=r.boolean("Hide close icon",!1);return o.jsx(p,{children:o.jsx(a,{message:c,type:i,hideCloseButton:l})})};e.__docgenInfo={description:"",methods:[],displayName:"_AlertBar"};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["_AlertBar"];export{e as _AlertBar,y as __namedExportsOrder,A as default};
