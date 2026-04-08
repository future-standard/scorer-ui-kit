import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,X as o,bt as s}from"./iframe-D4thBea3.js";var c,l,u,d,f,p,m,h;e((()=>{a(),c=i(),n(),s(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Form/Input`,component:o,decorators:[]},f=r.div`
    margin: 20px;
    width: 268px;
`,p=[{value:1,label:`1H`},{value:2,label:`2H`},{value:3,label:`3H`},{value:4,label:`4H`},{value:5,label:`5H`},{value:6,label:`6H`},{value:7,label:`7H`},{value:8,label:`8H`}],m=()=>{let e=(0,c.boolean)(`Disabled`,!1),t=(0,c.number)(`Max`,8),n=(0,c.number)(`Min`,1),r=(0,c.number)(`Default value`,6),i=u(`Input Callback`),a=(0,c.object)(`Marks`,p),s=(0,c.boolean)(`Center aligned end numbers`,!1);return(0,l.jsx)(f,{children:(0,l.jsx)(o,{max:t,min:n,disabled:e,inputCallback:e=>{console.log(`updated value`,e),i(`Returned value: ${e}`,e)},marks:a,defaultValue:r,allMarkCentered:s})})},m.__docgenInfo={description:``,methods:[],displayName:`_SliderInput`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 8);
  const minValue = number('Min', 1);
  const defaultValue = number('Default value', 6);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const allMarkCentered = boolean('Center aligned end numbers', false);
  // const step = number('Step', 1); // still fixing step option

  const handleUpdate = (value: number) => {
    console.log('updated value', value);
    showValue(\`Returned value: \${value}\`, value);
  };
  return <Container>
      <SliderInput max={maxValue} min={minValue} disabled={disabled}
    // step={step}
    inputCallback={handleUpdate} marks={marks} defaultValue={defaultValue} allMarkCentered={allMarkCentered} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_SliderInput`]}))();export{m as _SliderInput,h as __namedExportsOrder,d as default};