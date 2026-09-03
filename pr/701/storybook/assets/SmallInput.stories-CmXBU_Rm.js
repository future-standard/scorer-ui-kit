import{Ft as e,Lt as t,Rt as n,Wt as r,nt as i,wt as a}from"./iframe-CH2zgN-8.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=r(),a(),n(),c=e(),l={title:`Form/Input`,component:i,decorators:[]},u=t.div`
    margin: 100px;
    max-width: 200px;
`,d=()=>{let e=(0,s.select)(`Type`,{Text:`text`,Password:`password`,Email:`email`,Number:`number`},`text`),t=(0,s.text)(`Input Name`,`my_input`),n=(0,s.text)(`Label`,`My Input`),r=(0,s.text)(`Unit`,`º`),a=(0,s.text)(`Placeholder`,`Placeholder...`),o=(0,s.boolean)(`Required`,!1),l=(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,c.jsx)(u,{children:(0,c.jsx)(i,{id:t,type:e,unit:r,name:t,label:n,placeholder:a,fieldState:l,required:o,disabled:l===`disabled`})})},d.__docgenInfo={description:``,methods:[],displayName:`_SmallInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const inputType = select('Type', {
    Text: 'text',
    Password: 'password',
    Email: 'email',
    Number: 'number'
  }, 'text');
  const inputName = text('Input Name', 'my_input');
  const inputLabel = text('Label', 'My Input');
  const inputUnit = text('Unit', 'º');
  const inputPlaceholder = text('Placeholder', 'Placeholder...');
  const fieldRequired = boolean('Required', false);
  const inputState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  return <Container>
      <SmallInput id={inputName} type={inputType} unit={inputUnit} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} required={fieldRequired} disabled={inputState === 'disabled'} />
    </Container>;
}`,...d.parameters?.docs?.source}}},f=[`_SmallInput`]})))()}p();export{d as _SmallInput,f as __namedExportsOrder,l as default};