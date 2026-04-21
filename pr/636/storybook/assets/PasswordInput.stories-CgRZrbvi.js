import{n as e}from"./chunk-BneVvdWh.js";import{G as t,Lt as n,Ot as r,bt as i,jt as a,kt as o}from"./iframe-CJ0F5Yjx.js";var s,c,l,u,d,f;e((()=>{s=n(),i(),o(),c=r(),l=a.div`
    margin: 20px;
`,u={title:`Form/Input`,component:t,decorators:[]},d=()=>{let e=(0,s.text)(`Input Name`,`my_input`),n=(0,s.text)(`Label`,`My Input`),r=(0,s.text)(`Value`,`Test`),i=(0,s.text)(`Placeholder`,`Placeholder...`),a=(0,s.boolean)(`Required`,!1),o=(0,s.boolean)(`Show Feedback`,!1),u=(0,s.text)(`Feedback`,`This is a feedback message.`);return(0,c.jsx)(l,{children:(0,c.jsx)(t,{name:e,label:n,defaultValue:r,placeholder:i,fieldState:(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),showFeedback:o,feedbackMessage:u,required:a})})},d.__docgenInfo={description:``,methods:[],displayName:`PasswordInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const inputName = text('Input Name', 'my_input');
  const inputLabel = text('Label', 'My Input');
  const inputValue = text('Value', 'Test');
  const inputPlaceholder = text('Placeholder', 'Placeholder...');
  const fieldRequired = boolean('Required', false);
  const showFeedback = boolean('Show Feedback', false);
  const inputFeedback = text('Feedback', 'This is a feedback message.');
  const inputState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  return <Container>
      <PasswordField name={inputName} label={inputLabel} defaultValue={inputValue} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} />
    </Container>;
}`,...d.parameters?.docs?.source}}},f=[`PasswordInput`]}))();export{d as PasswordInput,f as __namedExportsOrder,u as default};