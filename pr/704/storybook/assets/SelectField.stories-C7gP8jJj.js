import{$ as e,Gt as t,It as n,Rt as r,et as i,wt as a,zt as o}from"./iframe-C28gtL4u.js";import{n as s,t as c}from"./helpers-D7JEnc-e.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=t(),a(),o(),s(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Form/atoms`,component:e,decorators:[]},m=r.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,h=r.div`
  ${i} {
    width: ${({$width:e})=>e||`60px`};
  }
`,g=r.div`
  flex: 1;
`,_=r.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`,v=()=>{let t=c(),n=(0,u.boolean)(`isCompact`,!1),r=(0,u.boolean)(`Disabled`,!1),i=(0,u.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),a=(0,u.text)(`Placeholder (Free Width)`,`Choose an option...`),o=(0,u.text)(`Default Value (Free Width)`,``),s=f(`Free select value`),l=f(`Free select value`),p=(0,u.select)(`Icon`,t,Object.keys(t)[0]),v=(0,u.text)(`Fix width`,`80px`),y=(0,u.object)(`Free Select Label`,{htmlFor:`free_select`,text:`Field Label`}),b=(0,u.object)(`Fix Select Label`,{htmlFor:`fix_select`,text:`Page`,direction:`row`}),x=e=>{s(e)};return(0,d.jsxs)(m,{children:[(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (Free Width)`}),(0,d.jsxs)(e,{isCompact:n,placeholder:a,label:y,disabled:r,defaultValue:o,fieldState:i,changeCallback:x,children:[(0,d.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,d.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,d.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,d.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (Fixed Width)`}),(0,d.jsx)(h,{$width:v,children:(0,d.jsxs)(e,{isCompact:n,disabled:r,fieldState:i,label:b,defaultValue:1,changeCallback:e=>{l(e)},children:[(0,d.jsx)(`option`,{value:1,children:`1`}),(0,d.jsx)(`option`,{value:5,children:`5`}),(0,d.jsx)(`option`,{value:10,children:`10`}),(0,d.jsx)(`option`,{value:15,children:`15`}),(0,d.jsx)(`option`,{value:20,children:`20`})]})})]}),(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:`Select (With Icon)`}),(0,d.jsxs)(e,{isCompact:n,placeholder:a,label:y,disabled:r,defaultValue:o,fieldState:i,icon:p,changeCallback:x,children:[(0,d.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,d.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,d.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,d.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`_SelectField`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const isCompact = boolean('isCompact', false);
  const disabled = boolean('Disabled', false);
  const fieldState = select('State', {
    Default: 'default',
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, 'default');
  const placeholder = text('Placeholder (Free Width)', 'Choose an option...');
  const defaultValue = text('Default Value (Free Width)', '');
  const freeSelectValue = action('Free select value');
  const fixedSelectValue = action('Free select value');
  const icon = select('Icon', iconList, Object.keys(iconList)[0]);
  const selectWidth = text('Fix width', '80px');
  const label = object('Free Select Label', {
    htmlFor: 'free_select',
    text: 'Field Label'
  });
  const fixLabel = object('Fix Select Label', {
    htmlFor: 'fix_select',
    text: 'Page',
    direction: 'row' as const
  });
  const freeOnChange = (value: string) => {
    freeSelectValue(value);
  };
  const fixSelectOnChange = (value: string) => {
    fixedSelectValue(value);
  };
  return <Container>
      <Subsection>
        <Title>Select (Free Width)</Title>
        <SelectField {...{
        isCompact,
        placeholder,
        label,
        disabled,
        defaultValue,
        fieldState
      }} changeCallback={freeOnChange}>
          <option value='option1'>Example Option 1</option>
          <option value='option2'>Example Option 2</option>
          <option value='option3'>Example Option 3</option>
          <option value='option4'>Example Option 4</option>
        </SelectField>
      </Subsection>

      <Subsection>
        <Title>Select (Fixed Width)</Title>
        <FixedSelect $width={selectWidth}>
          <SelectField {...{
          isCompact,
          disabled,
          fieldState
        }} label={fixLabel} defaultValue={1} changeCallback={fixSelectOnChange}>
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </SelectField>
        </FixedSelect>
      </Subsection>

      <Subsection>
        <Title>Select (With Icon)</Title>
        <SelectField {...{
        isCompact,
        placeholder,
        label,
        disabled,
        defaultValue,
        fieldState,
        icon
      }} changeCallback={freeOnChange}>
          <option value='option1'>Example Option 1</option>
          <option value='option2'>Example Option 2</option>
          <option value='option3'>Example Option 3</option>
          <option value='option4'>Example Option 4</option>
        </SelectField>
      </Subsection>
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_SelectField`]})))()}b();export{v as _SelectField,y as __namedExportsOrder,p as default};