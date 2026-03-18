import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as f}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{P as n}from"./index.modern-CLl990BG.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const h=f.div`
    margin: 20px;
`,g={title:"Form/Input",component:n,decorators:[]},t=()=>{const i=e.text("Input Name","my_input"),l=e.text("Label","My Input"),r=e.text("Value","Test"),c=e.text("Placeholder","Placeholder..."),u=e.boolean("Required",!1),p=e.boolean("Show Feedback",!1),m=e.text("Feedback","This is a feedback message."),b=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return a.jsx(h,{children:a.jsx(n,{name:i,label:l,defaultValue:r,placeholder:c,fieldState:b,showFeedback:p,feedbackMessage:m,required:u})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};var s,o,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const inputValue = text("Value", "Test");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const showFeedback = boolean("Show Feedback", false);
  const inputFeedback = text("Feedback", "This is a feedback message.");
  const inputState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  return <Container>
    <PasswordField name={inputName} label={inputLabel} defaultValue={inputValue} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} />
  </Container>;
}`,...(d=(o=t.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const q=["PasswordInput"];export{t as PasswordInput,q as __namedExportsOrder,g as default};
