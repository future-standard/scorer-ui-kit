import{j as d}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as b}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{Y as o}from"./index.modern-B3hCc7YS.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const u=b.div`
  margin: 20px;
`,q={title:"Form/Input",component:o,decorators:[]},a=()=>{const t=e.text("Textarea Name","example_texarea"),s=e.text("Label","Textarea Example"),c=e.boolean("Show Feedback",!1),n=e.text("Feedback","This is a feedback message."),f=e.text("Placeholder","Placeholder..."),m=e.boolean("Required",!1),x=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return d.jsx(u,{children:d.jsx(o,{id:t,name:t,label:s,placeholder:f,showFeedback:c,feedbackMessage:n,fieldState:x,required:m})})};a.__docgenInfo={description:"",methods:[],displayName:"_TextAreaField"};var l,r,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const S=["_TextAreaField"];export{a as _TextAreaField,S as __namedExportsOrder,q as default};
