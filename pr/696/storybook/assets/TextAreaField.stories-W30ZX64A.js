import{Ft as e,Lt as t,Rt as n,Wt as r,_t as i,wt as a}from"./iframe-DFQHAkQ-.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=r(),a(),n(),c=e(),l=t.div`
  margin: 20px;
`,u={title:`Form/Input`,component:i,decorators:[]},d=()=>{let e=(0,s.text)(`Textarea Name`,`example_texarea`),t=(0,s.text)(`Label`,`Textarea Example`),n=(0,s.boolean)(`Show Feedback`,!1),r=(0,s.text)(`Feedback`,`This is a feedback message.`),a=(0,s.text)(`Placeholder`,`Placeholder...`),o=(0,s.boolean)(`Required`,!1),u=(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,c.jsx)(l,{children:(0,c.jsx)(i,{id:e,name:e,label:t,placeholder:a,showFeedback:n,feedbackMessage:r,fieldState:u,required:o})})},d.__docgenInfo={description:``,methods:[],displayName:`_TextAreaField`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_TextAreaField`]})))()}p();export{d as _TextAreaField,f as __namedExportsOrder,u as default};