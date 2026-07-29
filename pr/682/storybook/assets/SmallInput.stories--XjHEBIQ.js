import{i as e}from"./preload-helper-xPQekRTU.js";import{Ft as t,It as n,Nt as r,St as i,Ut as a,et as o}from"./iframe-DB8xyy-s.js";var s,c,l,u,d,f;e((()=>{s=a(),i(),n(),c=r(),l={title:`Form/Input`,component:o,decorators:[]},u=t.div`
    margin: 100px;
    max-width: 200px;
`,d=()=>{let e=(0,s.select)(`Type`,{Text:`text`,Password:`password`,Email:`email`,Number:`number`},`text`),t=(0,s.text)(`Input Name`,`my_input`),n=(0,s.text)(`Label`,`My Input`),r=(0,s.text)(`Unit`,`º`),i=(0,s.text)(`Placeholder`,`Placeholder...`),a=(0,s.boolean)(`Required`,!1),l=(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,c.jsx)(u,{children:(0,c.jsx)(o,{id:t,type:e,unit:r,name:t,label:n,placeholder:i,fieldState:l,required:a,disabled:l===`disabled`})})},d.__docgenInfo={description:``,methods:[],displayName:`_SmallInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_SmallInput`]}))();export{d as _SmallInput,f as __namedExportsOrder,l as default};