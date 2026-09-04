import{Gt as e,It as t,Rt as n,i as r,wt as i,zt as a}from"./iframe-C8iM32yd.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=e(),i(),a(),c=t(),l=n.div`
  margin: 100px;
`,u={title:`Alerts/atoms`,component:r,decorators:[]},d=()=>{let e=(0,s.text)(`Message`,`Look Out!`),t=(0,s.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`error`),n=(0,s.boolean)(`Hide close icon`,!1);return(0,c.jsx)(l,{children:(0,c.jsx)(r,{message:e,type:t,hideCloseButton:n})})},d.__docgenInfo={description:``,methods:[],displayName:`_AlertBar`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const message = text('Message', 'Look Out!');
  const type = select('Type', {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success',
    Neutral: 'neutral'
  }, 'error');
  const hideCloseButton = boolean('Hide close icon', false);
  return <Container>
      <AlertBar {...{
      message,
      type,
      hideCloseButton
    }}></AlertBar>
    </Container>;
}`,...d.parameters?.docs?.source}}},f=[`_AlertBar`]})))()}p();export{d as _AlertBar,f as __namedExportsOrder,u as default};