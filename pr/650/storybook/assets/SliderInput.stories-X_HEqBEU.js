import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,Y as r,jt as i,kt as a,vt as o}from"./iframe-YIV3yJSz.js";var s,c,l,u,d,f,p,m;e((()=>{s=t(),o(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Input`,component:r,decorators:[]},d=i.div`
    margin: 20px;
    width: 268px;
`,f=[{value:1,label:`1H`},{value:2,label:`2H`},{value:3,label:`3H`},{value:4,label:`4H`},{value:5,label:`5H`},{value:6,label:`6H`},{value:7,label:`7H`},{value:8,label:`8H`}],p=()=>{let e=(0,s.boolean)(`Disabled`,!1),t=(0,s.number)(`Max`,8),n=(0,s.number)(`Min`,1),i=(0,s.number)(`Default value`,6),a=l(`Input Callback`),o=(0,s.object)(`Marks`,f),u=(0,s.boolean)(`Center aligned end numbers`,!1);return(0,c.jsx)(d,{children:(0,c.jsx)(r,{max:t,min:n,disabled:e,inputCallback:e=>{console.debug(`updated value`,e),a(`Returned value: ${e}`,e)},marks:o,defaultValue:i,allMarkCentered:u})})},p.__docgenInfo={description:``,methods:[],displayName:`_SliderInput`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const disabled = boolean('Disabled', false);
  const maxValue = number('Max', 8);
  const minValue = number('Min', 1);
  const defaultValue = number('Default value', 6);
  const showValue = action('Input Callback');
  const marks = object('Marks', exampleMarks);
  const allMarkCentered = boolean('Center aligned end numbers', false);
  // const step = number('Step', 1); // still fixing step option

  const handleUpdate = (value: number) => {
    console.debug('updated value', value);
    showValue(\`Returned value: \${value}\`, value);
  };
  return <Container>
      <SliderInput max={maxValue} min={minValue} disabled={disabled}
    // step={step}
    inputCallback={handleUpdate} marks={marks} defaultValue={defaultValue} allMarkCentered={allMarkCentered} />
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_SliderInput`]}))();export{p as _SliderInput,m as __namedExportsOrder,u as default};