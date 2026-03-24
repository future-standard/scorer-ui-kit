import{j as d}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as b}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as e}from"./index-BtgrC99a.js";import{Y as o}from"./index.modern-BCxVMgPd.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const p=b.div`
  margin: 20px;
`,S={title:"Form/Input",component:o,decorators:[]},a=()=>{const t=e.text("Textarea Name","example_texarea"),s=e.text("Label","Textarea Example"),c=e.boolean("Show Feedback",!1),n=e.text("Feedback","This is a feedback message."),f=e.text("Placeholder","Placeholder..."),m=e.boolean("Required",!1),x=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return d.jsx(p,{children:d.jsx(o,{id:t,name:t,label:s,placeholder:f,showFeedback:c,feedbackMessage:n,fieldState:x,required:m})})};a.__docgenInfo={description:"",methods:[],displayName:"_TextAreaField"};var r,l,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const fieldName = text("Textarea Name", "example_texarea");
  const fieldLabel = text("Label", "Textarea Example");
  const showFeedback = boolean("Show Feedback", false);
  const fieldFeedback = text("Feedback", "This is a feedback message.");
  const fieldPlaceholder = text("Placeholder", "Placeholder...");
  const fieldRequired = boolean("Required", false);
  const currentState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  return <Container>
      <TextAreaField id={fieldName} name={fieldName} label={fieldLabel} placeholder={fieldPlaceholder} showFeedback={showFeedback} feedbackMessage={fieldFeedback} fieldState={currentState} required={fieldRequired}></TextAreaField>
    </Container>;
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const P=["_TextAreaField"];export{a as _TextAreaField,P as __namedExportsOrder,S as default};
