import{n as e}from"./chunk-BneVvdWh.js";import{At as t,Lt as n,Ot as r,jt as i,r as a,vt as o}from"./iframe-DoElEExu.js";var s,c,l,u,d,f;e((()=>{s=n(),o(),i(),c=r(),l=t.div`
  margin: 100px;
`,u={title:`Alerts/atoms`,component:a,decorators:[]},d=()=>(0,c.jsx)(l,{children:(0,c.jsx)(a,{message:(0,s.text)(`Message`,`Look Out!`),type:(0,s.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`error`),hideCloseButton:(0,s.boolean)(`Hide close icon`,!1)})}),d.__docgenInfo={description:``,methods:[],displayName:`_AlertBar`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_AlertBar`]}))();export{d as _AlertBar,f as __namedExportsOrder,u as default};