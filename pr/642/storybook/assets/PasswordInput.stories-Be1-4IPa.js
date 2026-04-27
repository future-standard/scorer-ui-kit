import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,W as o,vt as s}from"./iframe-BHdSP_o9.js";var c,l,u,d,f,p;e((()=>{a(),n(),c=i(),s(),l=t(),u=r.div`
    margin: 20px;
`,d={title:`Form/Input`,component:o,decorators:[]},f=()=>{let e=(0,c.text)(`Input Name`,`my_input`),t=(0,c.text)(`Label`,`My Input`),n=(0,c.text)(`Value`,`Test`),r=(0,c.text)(`Placeholder`,`Placeholder...`),i=(0,c.boolean)(`Required`,!1),a=(0,c.boolean)(`Show Feedback`,!1),s=(0,c.text)(`Feedback`,`This is a feedback message.`);return(0,l.jsx)(u,{children:(0,l.jsx)(o,{name:e,label:t,defaultValue:n,placeholder:r,fieldState:(0,c.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),showFeedback:a,feedbackMessage:s,required:i})})},f.__docgenInfo={description:``,methods:[],displayName:`PasswordInput`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputValue = text("Value", "Test");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const showFeedback = boolean("Show Feedback", false);
  const inputFeedback = text("Feedback", "This is a feedback message.");
  const inputState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  return <Container>
    <PasswordField name={inputName} label={inputLabel} defaultValue={inputValue} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} />
  </Container>;
}`,...f.parameters?.docs?.source}}},p=[`PasswordInput`]}))();export{f as PasswordInput,p as __namedExportsOrder,d as default};