import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,bt as a,jt as o,kt as s,mt as c}from"./iframe-Du_t-W6m.js";var l,u,d,f,p,m,h;t((()=>{l=n(),u=e(i()),a(),s(),d=r(),f=o.div`
    margin: 20px;
`,p={title:`Form/Input`,component:c,decorators:[]},m=()=>{let e=(0,l.select)(`Language`,{English:`en`,Japanese:`ja`},`ja`),t=(0,l.text)(`Input Name`,`my_input`),n=(0,l.text)(`Label`,`My Input`),r=(0,l.boolean)(`Show Feedback`,!1),i=(0,l.text)(`Input Feedback`,`This is a feedback message.`),a=(0,l.text)(`Placeholder`,`Placeholder...`),o=(0,l.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),s=(0,l.boolean)(`Required`,!1);return(0,u.useEffect)(()=>{document.documentElement.setAttribute(`lang`,e)},[e]),(0,d.jsx)(f,{children:(0,d.jsx)(c,{id:t,name:t,label:n,placeholder:a,fieldState:o,showFeedback:r,feedbackMessage:i,required:s})})},m.__docgenInfo={description:``,methods:[],displayName:`TextInput`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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