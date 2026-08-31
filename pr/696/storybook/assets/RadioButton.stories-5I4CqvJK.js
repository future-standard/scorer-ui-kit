import{t as e}from"./react-BZJXY1be.js";import{B as t,Ft as n,Lt as r,Q as i,Rt as a,Wt as o,wt as s}from"./iframe-DFQHAkQ-.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=c((()=>{l=o(),u=e(),s(),a(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Form/Input`,component:i,decorators:[]},m=r.div``,h=r.div`
  margin: 20px 0;
`,g=()=>{let e=(0,l.boolean)(`Disabled`,!1),n=f(`value-changed`),r=(0,l.text)(`Name`,`Example`),[a,o]=(0,u.useState)(),s=e=>{n(e),o(e)};return(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:(0,d.jsx)(t,{htmlFor:`option1`,labelText:`Option 1`,direction:`row-reverse`,children:(0,d.jsx)(i,{name:r,disabled:e,currentChecked:a,id:`option1`,value:`option1`,onChangeCallback:s})})}),(0,d.jsx)(h,{children:(0,d.jsx)(t,{htmlFor:`option2`,labelText:`Option 2`,direction:`row-reverse`,children:(0,d.jsx)(i,{name:r,disabled:e,currentChecked:a,id:`option2`,value:`option2`,onChangeCallback:s})})}),(0,d.jsx)(h,{children:(0,d.jsx)(t,{htmlFor:`option3`,labelText:`Option 3`,direction:`row-reverse`,children:(0,d.jsx)(i,{name:r,disabled:e,currentChecked:a,id:`option3`,value:`option3`,onChangeCallback:s})})})]})},g.__docgenInfo={description:``,methods:[],displayName:`_RadioButton`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_RadioButton`]})))()}v();export{g as _RadioButton,_ as __namedExportsOrder,p as default};