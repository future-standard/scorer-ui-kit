import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,K as r,Lt as i,Ot as a,P as o,Rt as s,jt as c,vt as l}from"./iframe-DoElEExu.js";var u,d,f,p,m,h,g,_,v;t((()=>{u=i(),d=e(s()),l(),c(),f=a(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:r,decorators:[]},h=n.div``,g=n.div`
  margin: 20px 0;
`,_=()=>{let e=(0,u.boolean)(`Disabled`,!1),t=p(`value-changed`),n=(0,u.text)(`Name`,`Example`),[i,a]=(0,d.useState)(),s=e=>{t(e),a(e)};return(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:(0,f.jsx)(o,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option1`,value:`option1`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(o,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option2`,value:`option2`,onChangeCallback:s})})}),(0,f.jsx)(g,{children:(0,f.jsx)(o,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,f.jsx)(r,{name:n,disabled:e,currentChecked:i,id:`option3`,value:`option3`,onChangeCallback:s})})})]})},_.__docgenInfo={description:``,methods:[],displayName:`_RadioButton`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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