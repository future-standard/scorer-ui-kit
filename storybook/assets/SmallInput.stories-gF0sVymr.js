import{j as n}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as x}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{X as o}from"./index.modern-B3hCc7YS.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const P={title:"Form/Input",component:o,decorators:[]},b=x.div`
    margin: 100px;
    max-width: 200px;
`,t=()=>{const s=e.select("Type",{Text:"text",Password:"password",Email:"email",Number:"number"},"text"),a=e.text("Input Name","my_input"),p=e.text("Label","My Input"),u=e.text("Unit","º"),c=e.text("Placeholder","Placeholder..."),m=e.boolean("Required",!1),i=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return n.jsx(b,{children:n.jsx(o,{id:a,type:s,unit:u,name:a,label:p,placeholder:c,fieldState:i,required:m,disabled:i==="disabled"})})};t.__docgenInfo={description:"",methods:[],displayName:"_SmallInput"};var l,r,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const N=["_SmallInput"];export{t as _SmallInput,N as __namedExportsOrder,P as default};
