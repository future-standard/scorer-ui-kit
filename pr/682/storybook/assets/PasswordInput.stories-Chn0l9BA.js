import{i as e}from"./preload-helper-xPQekRTU.js";import{Ft as t,It as n,J as r,Nt as i,St as a,Ut as o}from"./iframe-DB8xyy-s.js";var s,c,l,u,d,f;e((()=>{s=o(),a(),n(),c=i(),l=t.div`
    margin: 20px;
`,u={title:`Form/Input`,component:r,decorators:[]},d=()=>{let e=(0,s.text)(`Input Name`,`my_input`),t=(0,s.text)(`Label`,`My Input`),n=(0,s.text)(`Value`,`Test`),i=(0,s.text)(`Placeholder`,`Placeholder...`),a=(0,s.boolean)(`Required`,!1),o=(0,s.boolean)(`Show Feedback`,!1),u=(0,s.text)(`Feedback`,`This is a feedback message.`);return(0,c.jsx)(l,{children:(0,c.jsx)(r,{name:e,label:t,defaultValue:n,placeholder:i,fieldState:(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),showFeedback:o,feedbackMessage:u,required:a})})},d.__docgenInfo={description:``,methods:[],displayName:`PasswordInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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