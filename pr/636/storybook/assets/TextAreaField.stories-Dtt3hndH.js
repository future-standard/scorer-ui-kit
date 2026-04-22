import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,jt as i,kt as a,pt as o}from"./iframe-DPUDVTHl.js";var s,c,l,u,d,f;e((()=>{s=t(),r(),a(),c=n(),l=i.div`
  margin: 20px;
`,u={title:`Form/Input`,component:o,decorators:[]},d=()=>{let e=(0,s.text)(`Textarea Name`,`example_texarea`),t=(0,s.text)(`Label`,`Textarea Example`),n=(0,s.boolean)(`Show Feedback`,!1),r=(0,s.text)(`Feedback`,`This is a feedback message.`),i=(0,s.text)(`Placeholder`,`Placeholder...`),a=(0,s.boolean)(`Required`,!1);return(0,c.jsx)(l,{children:(0,c.jsx)(o,{id:e,name:e,label:t,placeholder:i,showFeedback:n,feedbackMessage:r,fieldState:(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),required:a})})},d.__docgenInfo={description:``,methods:[],displayName:`_TextAreaField`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const fieldName = text('Textarea Name', 'example_texarea');
  const fieldLabel = text('Label', 'Textarea Example');
  const showFeedback = boolean('Show Feedback', false);
  const fieldFeedback = text('Feedback', 'This is a feedback message.');
  const fieldPlaceholder = text('Placeholder', 'Placeholder...');
  const fieldRequired = boolean('Required', false);
  const currentState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  return <Container>
      <TextAreaField id={fieldName} name={fieldName} label={fieldLabel} placeholder={fieldPlaceholder} showFeedback={showFeedback} feedbackMessage={fieldFeedback} fieldState={currentState} required={fieldRequired}></TextAreaField>
    </Container>;
}`,...d.parameters?.docs?.source}}},f=[`_TextAreaField`]}))();export{d as _TextAreaField,f as __namedExportsOrder,u as default};