import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ct as n,Gt as r,It as i,Lt as a,Pt as o,Wt as s,Z as c,z as l}from"./iframe-BMz55O8f.js";var u,d,f,p,m,h,g,_,v;e((()=>{u=s(),d=t(r()),n(),a(),f=o(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/Input`,component:c,decorators:[]},h=i.div``,g=i.div`
  margin: 20px 0;
`,_=()=>{let e=(0,u.boolean)(`Disabled`,!1),t=p(`value-changed`),n=(0,u.text)(`Name`,`Example`),[r,i]=(0,d.useState)(),a=e=>{t(e),i(e)};return(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:(0,f.jsx)(l,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,f.jsx)(c,{name:n,disabled:e,currentChecked:r,id:`option1`,value:`option1`,onChangeCallback:a})})}),(0,f.jsx)(g,{children:(0,f.jsx)(l,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,f.jsx)(c,{name:n,disabled:e,currentChecked:r,id:`option2`,value:`option2`,onChangeCallback:a})})}),(0,f.jsx)(g,{children:(0,f.jsx)(l,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,f.jsx)(c,{name:n,disabled:e,currentChecked:r,id:`option3`,value:`option3`,onChangeCallback:a})})})]})},_.__docgenInfo={description:``,methods:[],displayName:`_RadioButton`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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