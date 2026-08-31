import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,vt as a,wt as o}from"./iframe-DFQHAkQ-.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m;function h(){return(h=s((()=>{c=i(),l=e(),o(),r(),u=t(),d=n.div`
    margin: 20px;
`,f={title:`Form/Input`,component:a,decorators:[]},p=()=>{let e=(0,c.select)(`Language`,{English:`en`,Japanese:`ja`},`ja`),t=(0,c.text)(`Input Name`,`my_input`),n=(0,c.text)(`Label`,`My Input`),r=(0,c.boolean)(`Show Feedback`,!1),i=(0,c.text)(`Input Feedback`,`This is a feedback message.`),o=(0,c.text)(`Placeholder`,`Placeholder...`),s=(0,c.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),f=(0,c.boolean)(`Required`,!1);return(0,l.useEffect)(()=>{document.documentElement.setAttribute(`lang`,e)},[e]),(0,u.jsx)(d,{children:(0,u.jsx)(a,{id:t,name:t,label:n,placeholder:o,fieldState:s,showFeedback:r,feedbackMessage:i,required:f})})},p.__docgenInfo={description:``,methods:[],displayName:`TextInput`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`TextInput`]})))()}h();export{p as TextInput,m as __namedExportsOrder,f as default};