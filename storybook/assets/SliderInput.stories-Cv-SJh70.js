import{a8 as r,d as e,j as l,a as v}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Form/Input",component:r,decorators:[]},f=v.div`
    margin: 20px;
    width: 268px;
`,C=[{value:1,label:"1H"},{value:2,label:"2H"},{value:3,label:"3H"},{value:4,label:"4H"},{value:5,label:"5H"},{value:6,label:"6H"},{value:7,label:"7H"},{value:8,label:"8H"}],a=()=>{const u=e.boolean("Disabled",!1),d=e.number("Max",8),i=e.number("Min",1),c=e.number("Default value",6),m=k("Input Callback"),p=e.object("Marks",C),b=e.boolean("Center aligned end numbers",!1),x=n=>{console.log("updated value",n),m(`Returned value: ${n}`,n)};return l.jsx(f,{children:l.jsx(r,{max:d,min:i,disabled:u,inputCallback:x,marks:p,defaultValue:c,allMarkCentered:b})})};a.__docgenInfo={description:"",methods:[],displayName:"_SliderInput"};var t,s,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const I=["_SliderInput"];export{a as _SliderInput,I as __namedExportsOrder,_ as default};
