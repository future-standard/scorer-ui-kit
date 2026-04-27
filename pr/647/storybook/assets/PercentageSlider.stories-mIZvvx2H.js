import{n as e}from"./chunk-BneVvdWh.js";import{K as t,Lt as n,Ot as r,bt as i,jt as a,kt as o}from"./iframe-Csst3Hft.js";var s,c,l,u,d,f,p,m;e((()=>{s=n(),i(),o(),c=r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Input`,component:t,decorators:[]},d=a.div`
    margin: 20px;
    width: 268px;
`,f=[{value:0,label:`0%`},{value:20},{value:40},{value:60},{value:80},{value:100,label:`100%`}],p=()=>{let e=(0,s.text)(`Title`,`Duration`),n=(0,s.boolean)(`Disabled`,!1),r=(0,s.number)(`Default value`,30),i=(0,s.boolean)(`Custom colors function`,!1),a=(0,s.boolean)(`Custom Title function`,!1),o=l(`Input Callback`),u=(0,s.object)(`Marks`,f),p=(0,s.boolean)(`Show Value`,!0),m=(0,s.boolean)(`Center all mark values`,!1);return(0,c.jsx)(d,{children:(0,c.jsx)(t,{disabled:n,inputCallback:e=>{console.debug(`updated value`,e),o(`Returned value: ${e}`,e)},marks:u,defaultValue:r,title:e,updateThumbColor:i?e=>e<=20?`neutral`:e>20&&e<=80?`info`:`error`:void 0,updateTitle:a?e=>e<=20?`Small sound`:e>20&&e<=80?`Normal sound`:`Dangerous sound`:void 0,showValue:p,allMarkCentered:m})})},p.__docgenInfo={description:``,methods:[],displayName:`_PercentageSlider`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const title = text('Title', 'Duration');
  const disabled = boolean('Disabled', false);
  const defaultValue = number('Default value', 30);
  const customThumb = boolean('Custom colors function', false);
  const customTitle = boolean('Custom Title function', false);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const showTitle = boolean('Show Value', true);
  const allMarkCentered = boolean('Center all mark values', false);

  // const step = number('Step', 1); // still fixing step option
  const handleUpdate = (value: number) => {
    console.debug('updated value', value);
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
}`,...p.parameters?.docs?.source}}},m=[`_PercentageSlider`]}))();export{p as _PercentageSlider,m as __namedExportsOrder,u as default};