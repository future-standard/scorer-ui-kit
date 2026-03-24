import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as t}from"./index-C-6Xbh3D.js";import{a as k}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{c as g}from"./styled-components.browser.esm-CarAhzHj.js";import{R as s}from"./index.modern-B3hCc7YS.js";import"./index-DnkWte70.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const I={title:"Form/Input",component:s,decorators:[]},x=g.div`
    margin: 20px;
    width: 268px;
`,S=[{value:0,label:"0%"},{value:20},{value:40},{value:60},{value:80},{value:100,label:"100%"}],o=()=>{const u=t.text("Title","Duration"),i=t.boolean("Disabled",!1),d=t.number("Default value",30),c=t.boolean("Custom colors function",!1),m=t.boolean("Custom Title function",!1),p=k("Input Callback"),f=t.object("Marks",S),b=t.boolean("Show Value",!0),h=t.boolean("Center all mark values",!1),v=e=>{console.log("updated value",e),p(`Returned value: ${e}`,e)},C=e=>e<=20?"neutral":e>20&&e<=80?"info":"error",T=e=>e<=20?"Small sound":e>20&&e<=80?"Normal sound":"Dangerous sound";return a.jsx(x,{children:a.jsx(s,{disabled:i,inputCallback:v,marks:f,defaultValue:d,title:u,updateThumbColor:c?C:void 0,updateTitle:m?T:void 0,showValue:b,allMarkCentered:h})})};o.__docgenInfo={description:"",methods:[],displayName:"_PercentageSlider"};var l,r,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const R=["_PercentageSlider"];export{o as _PercentageSlider,R as __namedExportsOrder,I as default};
