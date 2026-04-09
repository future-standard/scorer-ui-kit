import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,r as s}from"./iframe-DufxECJ3.js";var c,l,u,d,f,p;e((()=>{a(),n(),c=i(),o(),l=t(),u=r.div`
  margin: 100px;
`,d={title:`Alerts/atoms`,component:s,decorators:[]},f=()=>(0,l.jsx)(u,{children:(0,l.jsx)(s,{message:(0,c.text)(`Message`,`Look Out!`),type:(0,c.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`error`),hideCloseButton:(0,c.boolean)(`Hide close icon`,!1)})}),f.__docgenInfo={description:``,methods:[],displayName:`_AlertBar`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`_AlertBar`]}))();export{f as _AlertBar,p as __namedExportsOrder,d as default};