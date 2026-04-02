import{q as o,d as e,j as a,a as f}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const h=f.div`
    margin: 20px;
`,F={title:"Form/Input",component:o,decorators:[]},t=()=>{const i=e.text("Input Name","my_input"),l=e.text("Label","My Input"),r=e.text("Value","Test"),u=e.text("Placeholder","Placeholder..."),c=e.boolean("Required",!1),p=e.boolean("Show Feedback",!1),b=e.text("Feedback","This is a feedback message."),m=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return a.jsx(h,{children:a.jsx(o,{name:i,label:l,defaultValue:r,placeholder:u,fieldState:m,showFeedback:p,feedbackMessage:b,required:c})})};t.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};var s,d,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const q=["PasswordInput"];export{t as PasswordInput,q as __namedExportsOrder,F as default};
