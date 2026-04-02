import{e as s,d as e,j as d,a as m}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const u=m.div`
  margin: 20px;
`,k={title:"Form/Input",component:s,decorators:[]},a=()=>{const t=e.text("Textarea Name","example_texarea"),o=e.text("Label","Textarea Example"),c=e.boolean("Show Feedback",!1),n=e.text("Feedback","This is a feedback message."),f=e.text("Placeholder","Placeholder..."),x=e.boolean("Required",!1),b=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default");return d.jsx(u,{children:d.jsx(s,{id:t,name:t,label:o,placeholder:f,showFeedback:c,feedbackMessage:n,fieldState:b,required:x})})};a.__docgenInfo={description:"",methods:[],displayName:"_TextAreaField"};var l,r,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const T=["_TextAreaField"];export{a as _TextAreaField,T as __namedExportsOrder,k as default};
