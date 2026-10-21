import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TextField-CBxof5_Q.js";import{_ as a,a as o,o as s}from"./iframe-PEYaYO03.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=a(),l=t(),r(),s(),u=n(),d=o.div`
    margin: 20px;
`,f={title:`Form/Input`,component:i,decorators:[]},p=()=>{let e=(0,c.select)(`Language`,{English:`en`,Japanese:`ja`},`ja`),t=(0,c.text)(`Input Name`,`my_input`),n=(0,c.text)(`Label`,`My Input`),r=(0,c.boolean)(`Show Feedback`,!1),a=(0,c.text)(`Input Feedback`,`This is a feedback message.`),o=(0,c.text)(`Placeholder`,`Placeholder...`),s=(0,c.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),f=(0,c.boolean)(`Required`,!1),p=(0,c.boolean)(`Always Show Required Dot`,!1);return(0,l.useEffect)(()=>{document.documentElement.setAttribute(`lang`,e)},[e]),(0,u.jsx)(d,{children:(0,u.jsx)(i,{id:t,name:t,label:n,placeholder:o,fieldState:s,showFeedback:r,feedbackMessage:a,required:f,alwaysShowRequiredDot:p})})},m=[`TextInput`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
  const alwaysShowRequiredDot = boolean('Always Show Required Dot', false);
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);
  return <Container>
      <TextField id={inputName} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} alwaysShowRequiredDot={alwaysShowRequiredDot} />
    </Container>;
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as TextInput,m as __namedExportsOrder,f as default};