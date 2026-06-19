import{i as e}from"./preload-helper-xPQekRTU.js";import{Mt as t,W as n,jt as r,kt as i,vt as a,zt as o}from"./iframe-C59WqszT.js";var s,c,l,u,d,f;e((()=>{s=o(),a(),t(),c=i(),l=r.div`
    margin: 20px;
`,u={title:`Form/Input`,component:n,decorators:[]},d=()=>{let e=(0,s.text)(`Input Name`,`my_input`),t=(0,s.text)(`Label`,`My Input`),r=(0,s.text)(`Value`,`Test`),i=(0,s.text)(`Placeholder`,`Placeholder...`),a=(0,s.boolean)(`Required`,!1),o=(0,s.boolean)(`Show Feedback`,!1),u=(0,s.text)(`Feedback`,`This is a feedback message.`);return(0,c.jsx)(l,{children:(0,c.jsx)(n,{name:e,label:t,defaultValue:r,placeholder:i,fieldState:(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),showFeedback:o,feedbackMessage:u,required:a})})},d.__docgenInfo={description:``,methods:[],displayName:`PasswordInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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