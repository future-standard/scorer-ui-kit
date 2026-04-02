import{p as o,d as e,r as g,j as s,a as f}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const x=f.div`
    margin: 20px;
`,F={title:"Form/Input",component:o,decorators:[]},t=()=>{const a=e.select("Language",{English:"en",Japanese:"ja"},"ja"),n=e.text("Input Name","my_input"),c=e.text("Label","My Input"),r=e.boolean("Show Feedback",!1),u=e.text("Input Feedback","This is a feedback message."),p=e.text("Placeholder","Placeholder..."),b=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default"),m=e.boolean("Required",!1);return g.useEffect(()=>{document.documentElement.setAttribute("lang",a)},[a]),s.jsx(x,{children:s.jsx(o,{id:n,name:n,label:c,placeholder:p,fieldState:b,showFeedback:r,feedbackMessage:u,required:m})})};t.__docgenInfo={description:"",methods:[],displayName:"TextInput"};var d,i,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'en',
    Japanese: "ja"
  }, "ja");
  const inputName = text("Input Name", "my_input");
  const inputLabel = text("Label", "My Input");
  const showFeedback = boolean("Show Feedback", false);
  const inputFeedback = text("Input Feedback", "This is a feedback message.");
  const inputPlaceholder = text("Placeholder", "Placeholder...");
  const inputState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  const fieldRequired = boolean("Required", false);
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);
  return <Container>
    <TextField id={inputName} name={inputName} label={inputLabel} placeholder={inputPlaceholder} fieldState={inputState} showFeedback={showFeedback} feedbackMessage={inputFeedback} required={fieldRequired} />
    </Container>;
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const I=["TextInput"];export{t as TextInput,I as __namedExportsOrder,F as default};
