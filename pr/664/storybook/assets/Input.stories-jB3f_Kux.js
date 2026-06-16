import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{At as n,Bt as r,Mt as i,ft as a,kt as o,vt as s,zt as c}from"./iframe-Bwz4qBV9.js";var l,u,d,f,p,m,h;e((()=>{l=c(),u=t(r()),s(),n(),d=o(),f=i.div`
    margin: 20px;
`,p={title:`Form/Input`,component:a,decorators:[]},m=()=>{let e=(0,l.select)(`Language`,{English:`en`,Japanese:`ja`},`ja`),t=(0,l.text)(`Input Name`,`my_input`),n=(0,l.text)(`Label`,`My Input`),r=(0,l.boolean)(`Show Feedback`,!1),i=(0,l.text)(`Input Feedback`,`This is a feedback message.`),o=(0,l.text)(`Placeholder`,`Placeholder...`),s=(0,l.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),c=(0,l.boolean)(`Required`,!1);return(0,u.useEffect)(()=>{document.documentElement.setAttribute(`lang`,e)},[e]),(0,d.jsx)(f,{children:(0,d.jsx)(a,{id:t,name:t,label:n,placeholder:o,fieldState:s,showFeedback:r,feedbackMessage:i,required:c})})},m.__docgenInfo={description:``,methods:[],displayName:`TextInput`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'en',
    Japanese: 'ja'
  }, 'ja');
  const inputName = text('Input Name', 'my_input');
  const inputLabel = text('Label', 'My Input');
  const showFeedback = boolean('Show Feedback', false);
  const inputFeedback = text('Input Feedback', 'This is a feedback message.');
  const inputPlaceholder = text('Placeholder', 'Placeholder...');
  const inputState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  const fieldRequired = boolean('Required', false);
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);
  return <Container>
      <TextField id={inputName} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`TextInput`]}))();export{m as TextInput,h as __namedExportsOrder,p as default};