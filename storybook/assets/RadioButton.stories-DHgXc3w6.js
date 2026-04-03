import{a6 as t,d,r as x,j as e,a7 as s,a as C}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Form/Input",component:t,decorators:[]},g=C.div``,l=C.div`
  margin: 20px 0;
`,o=()=>{const n=d.boolean("Disabled",!1),m=O("value-changed"),a=d.text("Name","Example"),[r,b]=x.useState(),i=c=>{m(c),b(c)};return e.jsxs(g,{children:[e.jsx(l,{children:e.jsx(s,{htmlFor:"option1",labelText:"Option 1",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option1",value:"option1",onChangeCallback:i})})}),e.jsx(l,{children:e.jsx(s,{htmlFor:"option2",labelText:"Option 2",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option2",value:"option2",onChangeCallback:i})})}),e.jsx(l,{children:e.jsx(s,{htmlFor:"option3",labelText:"Option 3",direction:"row-reverse",children:e.jsx(t,{name:a,disabled:n,currentChecked:r,id:"option3",value:"option3",onChangeCallback:i})})})]})};o.__docgenInfo={description:"",methods:[],displayName:"_RadioButton"};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const j=["_RadioButton"];export{o as _RadioButton,j as __namedExportsOrder,_ as default};
