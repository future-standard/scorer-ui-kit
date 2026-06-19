import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,K as r,Mt as i,P as a,jt as o,kt as s,vt as c,zt as l}from"./iframe-C59WqszT.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=l(),d=t(n()),c(),i(),f=s(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:r,decorators:[]},h=o.div``,g=o.div`
  margin: 20px 0;
`,_=()=>{let e=(0,u.boolean)(`Disabled`,!1),t=p(`value-changed`),n=(0,u.text)(`Name`,`Example`),[i,o]=(0,d.useState)(),s=e=>{t(e),o(e)};return(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option1`,value:`option1`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option2`,value:`option2`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(a,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option3`,value:`option3`,onChangeCallback:s})})})]})},_.__docgenInfo={description:``,methods:[],displayName:`_RadioButton`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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