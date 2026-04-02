import{a5 as s,d as t,j as o,a as k}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V={title:"Form/Input",component:s,decorators:[]},S=k.div`
    margin: 20px;
    width: 268px;
`,x=[{value:0,label:"0%"},{value:20},{value:40},{value:60},{value:80},{value:100,label:"100%"}],a=()=>{const u=t.text("Title","Duration"),i=t.boolean("Disabled",!1),d=t.number("Default value",30),c=t.boolean("Custom colors function",!1),m=t.boolean("Custom Title function",!1),p=g("Input Callback"),b=t.object("Marks",x),f=t.boolean("Show Value",!0),h=t.boolean("Center all mark values",!1),C=e=>{console.log("updated value",e),p(`Returned value: ${e}`,e)},v=e=>e<=20?"neutral":e>20&&e<=80?"info":"error",T=e=>e<=20?"Small sound":e>20&&e<=80?"Normal sound":"Dangerous sound";return o.jsx(S,{children:o.jsx(s,{disabled:i,inputCallback:C,marks:b,defaultValue:d,title:u,updateThumbColor:c?v:void 0,updateTitle:m?T:void 0,showValue:f,allMarkCentered:h})})};a.__docgenInfo={description:"",methods:[],displayName:"_PercentageSlider"};var l,n,r;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const title = text('Title', 'Duration');
  const disabled = boolean('Disabled', false);
  const defaultValue = number('Default value', 30);
  const customThumb = boolean("Custom colors function", false);
  const customTitle = boolean("Custom Title function", false);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const showTitle = boolean("Show Value", true);
  const allMarkCentered = boolean('Center all mark values', false);

  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(\`Returned value: \${value}\`, value);
  };
  const otherColorHandler = (value: number): IFeedbackColor => {
    if (value <= 20) {
      return 'neutral';
    }
    if (value > 20 && value <= 80) {
      return 'info';
    }
    return 'error';
  };
  const otherTitlesHandler = (value: number): string => {
    if (value <= 20) {
      return 'Small sound';
    }
    if (value > 20 && value <= 80) {
      return 'Normal sound';
    }
    return 'Dangerous sound';
  };
  return <Container>
      <PercentageSlider disabled={disabled}
    // step={step}
    inputCallback={handleUpdate} marks={marks} defaultValue={defaultValue} title={title} updateThumbColor={customThumb ? otherColorHandler : undefined} updateTitle={customTitle ? otherTitlesHandler : undefined} showValue={showTitle} allMarkCentered={allMarkCentered} />
    </Container>;
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const D=["_PercentageSlider"];export{a as _PercentageSlider,D as __namedExportsOrder,V as default};
