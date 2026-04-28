import{a as e,n as t}from"./chunk-BneVvdWh.js";import{K as n,Lt as r,Ot as i,P as a,Rt as o,jt as s,kt as c,vt as l}from"./iframe-YIV3yJSz.js";var u,d,f,p,m,h,g,_,v;t((()=>{u=r(),d=e(o()),l(),c(),f=i(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:n,decorators:[]},h=s.div``,g=s.div`
  margin: 20px 0;
`,_=()=>{let e=(0,u.boolean)(`Disabled`,!1),t=p(`value-changed`),r=(0,u.text)(`Name`,`Example`),[i,o]=(0,d.useState)(),s=e=>{t(e),o(e)};return(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,f.jsx)(n,{name:r,disabled:e,currentChecked:i,id:`option1`,value:`option1`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,f.jsx)(n,{name:r,disabled:e,currentChecked:i,id:`option2`,value:`option2`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,f.jsx)(n,{name:r,disabled:e,currentChecked:i,id:`option3`,value:`option3`,onChangeCallback:s})})})]})},_.__docgenInfo={description:``,methods:[],displayName:`_RadioButton`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const disabled = boolean('Disabled', false);
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
}`,..._.parameters?.docs?.source}}},v=[`_RadioButton`]}))();export{_ as _RadioButton,v as __namedExportsOrder,m as default};