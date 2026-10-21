import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./AlertBar-DIHzCymH.js";import{_ as i,a,o}from"./iframe-PEYaYO03.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=i(),n(),o(),c=t(),l=a.div`
  margin: 100px;
`,u={title:`Alerts/atoms`,component:r,decorators:[]},d=()=>{let e=(0,s.text)(`Message`,`Look Out!`),t=(0,s.select)(`Type`,{Error:`error`,Warning:`warning`,Info:`info`,Success:`success`,Neutral:`neutral`},`error`),n=(0,s.boolean)(`Hide close icon`,!1);return(0,c.jsx)(l,{children:(0,c.jsx)(r,{message:e,type:t,hideCloseButton:n})})},f=[`_AlertBar`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as _AlertBar,f as __namedExportsOrder,u as default};