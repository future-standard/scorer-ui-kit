import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as x}from"./index-DnkWte70.js";import{c as u}from"./styled-components.browser.esm-CarAhzHj.js";import{a as g}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as c}from"./index-C-6Xbh3D.js";import{U as t,V as s}from"./index.modern-B3hCc7YS.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const W={title:"Form/Input",component:t,decorators:[]},v=u.div``,l=u.div`
  margin: 20px 0;
`,o=()=>{const n=c.boolean("Disabled",!1),C=g("value-changed"),a=c.text("Name","Example"),[r,b]=x.useState(),i=p=>{C(p),b(p)};return e.jsxs(v,{children:[e.jsx(l,{children:e.jsx(s,{htmlFor:"option1",labelText:"Option 1",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option1",value:"option1",onChangeCallback:i})})}),e.jsx(l,{children:e.jsx(s,{htmlFor:"option2",labelText:"Option 2",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option2",value:"option2",onChangeCallback:i})})}),e.jsx(l,{children:e.jsx(s,{htmlFor:"option3",labelText:"Option 3",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option3",value:"option3",onChangeCallback:i})})})]})};o.__docgenInfo={description:"",methods:[],displayName:"_RadioButton"};var d,m,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const disabled = boolean("Disabled", false);
  const selection = action('value-changed');
  const name = text('Name', 'Example');
  const [currentChecked, setCurrentCheck] = useState<string | number>();
  const handleChange = (value: string | number) => {
    selection(value);
    setCurrentCheck(value);
  };
  return <Container>
      <OptionsWrapper>
        <Label htmlFor={'option1'} labelText={'Option 1'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option1'} value='option1' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option2'} labelText={'Option 2'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option2'} value='option2' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
      <OptionsWrapper>
        <Label htmlFor={'option3'} labelText={'Option 3'} direction='row-reverse'>
          <RadioButton {...{
          name,
          disabled,
          currentChecked
        }} id={'option3'} value='option3' onChangeCallback={handleChange} />
        </Label>
      </OptionsWrapper>
    </Container>;
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const _=["_RadioButton"];export{o as _RadioButton,_ as __namedExportsOrder,W as default};
