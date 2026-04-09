import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,J as r,Lt as i,Pt as a,Rt as o,Y as s,bt as c}from"./iframe-DufxECJ3.js";import{n as l,r as u}from"./helpers-Ds3vW7k8.js";var d,f,p,m,h,g,_,v,y,b;e((()=>{o(),n(),d=a(),c(),u(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Form/atoms`,component:r,decorators:[]},h=i.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,g=i.div`
  ${s} {
    width: ${({$width:e})=>e||`60px`};
  }
`,_=i.div`
  flex: 1;
`,v=i.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`,y=()=>{let e=l(),t=(0,d.boolean)(`isCompact`,!1),n=(0,d.boolean)(`Disabled`,!1),i=(0,d.select)(`State`,{Default:`default`,Disabled:`disabled`,Required:`required`,Valid:`valid`,Invalid:`invalid`,Processing:`processing`},`default`),a=(0,d.text)(`Placeholder (Free Width)`,`Choose an option...`),o=(0,d.text)(`Default Value (Free Width)`,``),s=p(`Free select value`),c=p(`Free select value`),u=(0,d.select)(`Icon`,e,Object.keys(e)[0]),m=(0,d.text)(`Fix width`,`80px`),y=(0,d.object)(`Free Select Label`,{htmlFor:`free_select`,text:`Field Label`}),b=(0,d.object)(`Fix Select Label`,{htmlFor:`fix_select`,text:`Page`,isSameRow:!0}),x=e=>{s(e)};return(0,f.jsxs)(h,{children:[(0,f.jsxs)(_,{children:[(0,f.jsx)(v,{children:`Select (Free Width)`}),(0,f.jsxs)(r,{isCompact:t,placeholder:a,label:y,disabled:n,defaultValue:o,fieldState:i,changeCallback:x,children:[(0,f.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,f.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,f.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,f.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)(v,{children:`Select (Fixed Width)`}),(0,f.jsx)(g,{$width:m,children:(0,f.jsxs)(r,{isCompact:t,disabled:n,fieldState:i,label:b,defaultValue:1,changeCallback:e=>{c(e)},children:[(0,f.jsx)(`option`,{value:1,children:`1`}),(0,f.jsx)(`option`,{value:5,children:`5`}),(0,f.jsx)(`option`,{value:10,children:`10`}),(0,f.jsx)(`option`,{value:15,children:`15`}),(0,f.jsx)(`option`,{value:20,children:`20`})]})})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)(v,{children:`Select (With Icon)`}),(0,f.jsxs)(r,{isCompact:t,placeholder:a,label:y,disabled:n,defaultValue:o,fieldState:i,icon:u,changeCallback:x,children:[(0,f.jsx)(`option`,{value:`option1`,children:`Example Option 1`}),(0,f.jsx)(`option`,{value:`option2`,children:`Example Option 2`}),(0,f.jsx)(`option`,{value:`option3`,children:`Example Option 3`}),(0,f.jsx)(`option`,{value:`option4`,children:`Example Option 4`})]})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_SelectField`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const isCompact = boolean('isCompact', false);
  const disabled = boolean('Disabled', false);
  const fieldState = select("State", {
    Default: "default",
    Disabled: 'disabled',
    Required: 'required',
    Valid: 'valid',
    Invalid: 'invalid',
    Processing: 'processing'
  }, "default");
  const placeholder = text('Placeholder (Free Width)', 'Choose an option...');
  const defaultValue = text('Default Value (Free Width)', '');
  const freeSelectValue = action('Free select value');
  const fixedSelectValue = action('Free select value');
  const icon = select("Icon", iconList, Object.keys(iconList)[0]);
  const selectWidth = text('Fix width', '80px');
  const label = object('Free Select Label', {
    htmlFor: 'free_select',
    text: 'Field Label'
  });
  const fixLabel = object('Fix Select Label', {
    htmlFor: 'fix_select',
    text: 'Page',
    isSameRow: true
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
          <option value="option1">Example Option 1</option>
          <option value="option2">Example Option 2</option>
          <option value="option3">Example Option 3</option>
          <option value="option4">Example Option 4</option>
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
          <option value="option1">Example Option 1</option>
          <option value="option2">Example Option 2</option>
          <option value="option3">Example Option 3</option>
          <option value="option4">Example Option 4</option>
        </SelectField>
      </Subsection>
    </Container>;
}`,...y.parameters?.docs?.source}}},b=[`_SelectField`]}))();export{y as _SelectField,b as __namedExportsOrder,m as default};