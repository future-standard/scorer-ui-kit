import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,Z as o,bt as s}from"./iframe-Bq-bFTg_.js";var c,l,u,d,f,p;e((()=>{a(),n(),c=i(),s(),l=t(),u={title:`Form/Input`,component:o,decorators:[]},d=r.div`
    margin: 100px;
    max-width: 200px;
`,f=()=>{let e=(0,c.select)(`Type`,{Text:`text`,Password:`password`,Email:`email`,Number:`number`},`text`),t=(0,c.text)(`Input Name`,`my_input`),n=(0,c.text)(`Label`,`My Input`),r=(0,c.text)(`Unit`,`º`),i=(0,c.text)(`Placeholder`,`Placeholder...`),a=(0,c.boolean)(`Required`,!1),s=(0,c.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`);return(0,l.jsx)(d,{children:(0,l.jsx)(o,{id:t,type:e,unit:r,name:t,label:n,placeholder:i,fieldState:s,required:a,disabled:s===`disabled`})})},f.__docgenInfo={description:``,methods:[],displayName:`_SmallInput`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const inputType = select("Type", {
    Text: "text",
    Password: "password",
    Email: "email",
    Number: "number"
  }, "text");
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputUnit = text("Unit", "º");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const inputState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  return <Container>
    <SmallInput id={inputName} type={inputType} unit={inputUnit} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} required={fieldRequired} disabled={inputState === 'disabled'} />
  </Container>;
}`,...f.parameters?.docs?.source}}},p=[`_SmallInput`]}))();export{f as _SmallInput,p as __namedExportsOrder,u as default};