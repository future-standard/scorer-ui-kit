import{j as l}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as e}from"./index-C-6Xbh3D.js";import{a as f}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{c as v}from"./styled-components.browser.esm-CarAhzHj.js";import{W as s}from"./index.modern-B3hCc7YS.js";import"./index-DnkWte70.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const j={title:"Form/Input",component:s,decorators:[]},k=v.div`
    margin: 20px;
    width: 268px;
`,C=[{value:1,label:"1H"},{value:2,label:"2H"},{value:3,label:"3H"},{value:4,label:"4H"},{value:5,label:"5H"},{value:6,label:"6H"},{value:7,label:"7H"},{value:8,label:"8H"}],a=()=>{const u=e.boolean("Disabled",!1),d=e.number("Max",8),i=e.number("Min",1),m=e.number("Default value",6),c=f("Input Callback"),p=e.object("Marks",C),b=e.boolean("Center aligned end numbers",!1),x=n=>{console.log("updated value",n),c(`Returned value: ${n}`,n)};return l.jsx(k,{children:l.jsx(s,{max:d,min:i,disabled:u,inputCallback:x,marks:p,defaultValue:m,allMarkCentered:b})})};a.__docgenInfo={description:"",methods:[],displayName:"_SliderInput"};var t,o,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const w=["_SliderInput"];export{a as _SliderInput,w as __namedExportsOrder,j as default};
