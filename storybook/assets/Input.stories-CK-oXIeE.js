import{j as s}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as f}from"./index-DnkWte70.js";import{c as g}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{d as l}from"./index.modern-B3hCc7YS.js";import"./index-nkfPnFJx.js";const x=g.div`
    margin: 20px;
`,E={title:"Form/Input",component:l,decorators:[]},t=()=>{const a=e.select("Language",{English:"en",Japanese:"ja"},"ja"),n=e.text("Input Name","my_input"),r=e.text("Label","My Input"),c=e.boolean("Show Feedback",!1),u=e.text("Input Feedback","This is a feedback message."),p=e.text("Placeholder","Placeholder..."),m=e.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default"),b=e.boolean("Required",!1);return f.useEffect(()=>{document.documentElement.setAttribute("lang",a)},[a]),s.jsx(x,{children:s.jsx(l,{id:n,name:n,label:r,placeholder:p,fieldState:m,showFeedback:c,feedbackMessage:u,required:b})})};t.__docgenInfo={description:"",methods:[],displayName:"TextInput"};var o,i,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const P=["TextInput"];export{t as TextInput,P as __namedExportsOrder,E as default};
