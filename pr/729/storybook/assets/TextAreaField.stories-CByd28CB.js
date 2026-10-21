import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./TextAreaField-Chd9gr5l.js";import{_ as i,a,o}from"./iframe-Cw1eIbNi.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=i(),n(),o(),c=t(),l=a.div`
  margin: 20px;
`,u={title:`Form/Input`,component:r,decorators:[]},d=()=>{let e=(0,s.text)(`Textarea Name`,`example_texarea`),t=(0,s.text)(`Label`,`Textarea Example`),n=(0,s.boolean)(`Show Feedback`,!1),i=(0,s.text)(`Feedback`,`This is a feedback message.`),a=(0,s.text)(`Placeholder`,`Placeholder...`),o=(0,s.boolean)(`Required`,!1),u=(0,s.boolean)(`Always Show Required Dot`,!1),d=(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,c.jsx)(l,{children:(0,c.jsx)(r,{id:e,name:e,label:t,placeholder:a,showFeedback:n,feedbackMessage:i,fieldState:d,required:o,alwaysShowRequiredDot:u})})},f=[`_TextAreaField`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const fieldName = text('Textarea Name', 'example_texarea');
  const fieldLabel = text('Label', 'Textarea Example');
  const showFeedback = boolean('Show Feedback', false);
  const fieldFeedback = text('Feedback', 'This is a feedback message.');
  const fieldPlaceholder = text('Placeholder', 'Placeholder...');
  const fieldRequired = boolean('Required', false);
  const alwaysShowRequiredDot = boolean('Always Show Required Dot', false);
  const currentState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  return <Container>
      <TextAreaField id={fieldName} name={fieldName} label={fieldLabel} placeholder={fieldPlaceholder} showFeedback={showFeedback} feedbackMessage={fieldFeedback} fieldState={currentState} required={fieldRequired} alwaysShowRequiredDot={alwaysShowRequiredDot}></TextAreaField>
    </Container>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as _TextAreaField,f as __namedExportsOrder,u as default};