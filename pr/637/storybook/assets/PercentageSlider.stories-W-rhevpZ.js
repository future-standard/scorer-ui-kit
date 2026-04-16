import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,K as r,Lt as i,Pt as a,Rt as o,bt as s}from"./iframe-l0RDpzCT.js";var c,l,u,d,f,p,m,h;e((()=>{o(),c=a(),n(),s(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Form/Input`,component:r,decorators:[]},f=i.div`
    margin: 20px;
    width: 268px;
`,p=[{value:0,label:`0%`},{value:20},{value:40},{value:60},{value:80},{value:100,label:`100%`}],m=()=>{let e=(0,c.text)(`Title`,`Duration`),t=(0,c.boolean)(`Disabled`,!1),n=(0,c.number)(`Default value`,30),i=(0,c.boolean)(`Custom colors function`,!1),a=(0,c.boolean)(`Custom Title function`,!1),o=u(`Input Callback`),s=(0,c.object)(`Marks`,p),d=(0,c.boolean)(`Show Value`,!0),m=(0,c.boolean)(`Center all mark values`,!1);return(0,l.jsx)(f,{children:(0,l.jsx)(r,{disabled:t,inputCallback:e=>{console.log(`updated value`,e),o(`Returned value: ${e}`,e)},marks:s,defaultValue:n,title:e,updateThumbColor:i?e=>e<=20?`neutral`:e>20&&e<=80?`info`:`error`:void 0,updateTitle:a?e=>e<=20?`Small sound`:e>20&&e<=80?`Normal sound`:`Dangerous sound`:void 0,showValue:d,allMarkCentered:m})})},m.__docgenInfo={description:``,methods:[],displayName:`_PercentageSlider`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_PercentageSlider`]}))();export{m as _PercentageSlider,h as __namedExportsOrder,d as default};