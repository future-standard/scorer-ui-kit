import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,pt as s}from"./iframe-l0RDpzCT.js";var c,l,u,d,f,p;e((()=>{a(),n(),c=i(),o(),l=t(),u=r.div`
  margin: 20px;
`,d={title:`Form/Input`,component:s,decorators:[]},f=()=>{let e=(0,c.text)(`Textarea Name`,`example_texarea`),t=(0,c.text)(`Label`,`Textarea Example`),n=(0,c.boolean)(`Show Feedback`,!1),r=(0,c.text)(`Feedback`,`This is a feedback message.`),i=(0,c.text)(`Placeholder`,`Placeholder...`),a=(0,c.boolean)(`Required`,!1);return(0,l.jsx)(u,{children:(0,l.jsx)(s,{id:e,name:e,label:t,placeholder:i,showFeedback:n,feedbackMessage:r,fieldState:(0,c.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),required:a})})},f.__docgenInfo={description:``,methods:[],displayName:`_TextAreaField`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`_TextAreaField`]}))();export{f as _TextAreaField,p as __namedExportsOrder,d as default};