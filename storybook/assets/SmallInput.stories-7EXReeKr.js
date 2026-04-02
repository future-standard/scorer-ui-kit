import{a9 as r,d as e,j as n,a as x}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const I={title:"Form/Input",component:r,decorators:[]},b=x.div`
    margin: 100px;
    max-width: 200px;
`,t=()=>{const o=e.select("Type",{Text:"text",Password:"password",Email:"email",Number:"number"},"text"),a=e.text("Input Name","my_input"),u=e.text("Label","My Input"),p=e.text("Unit","º"),c=e.text("Placeholder","Placeholder..."),m=e.boolean("Required",!1),i=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return n.jsx(b,{children:n.jsx(r,{id:a,type:o,unit:p,name:a,label:u,placeholder:c,fieldState:i,required:m,disabled:i==="disabled"})})};t.__docgenInfo={description:"",methods:[],displayName:"_SmallInput"};var l,d,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const y=["_SmallInput"];export{t as _SmallInput,y as __namedExportsOrder,I as default};
