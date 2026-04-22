import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,Z as r,bt as i,jt as a,kt as o}from"./iframe-DPUDVTHl.js";var s,c,l,u,d,f;e((()=>{s=t(),i(),o(),c=n(),l={title:`Form/Input`,component:r,decorators:[]},u=a.div`
    margin: 100px;
    max-width: 200px;
`,d=()=>{let e=(0,s.select)(`Type`,{Text:`text`,Password:`password`,Email:`email`,Number:`number`},`text`),t=(0,s.text)(`Input Name`,`my_input`),n=(0,s.text)(`Label`,`My Input`),i=(0,s.text)(`Unit`,`º`),a=(0,s.text)(`Placeholder`,`Placeholder...`),o=(0,s.boolean)(`Required`,!1),l=(0,s.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,c.jsx)(u,{children:(0,c.jsx)(r,{id:t,type:e,unit:i,name:t,label:n,placeholder:a,fieldState:l,required:o,disabled:l===`disabled`})})},d.__docgenInfo={description:``,methods:[],displayName:`_SmallInput`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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