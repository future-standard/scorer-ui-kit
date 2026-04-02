import{aa as i,d as t,j as e,a as n,ab as _}from"./iframe-BQPDKgpJ.js";import{g as L}from"./index-BKA4gAcn.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Form/atoms",component:i,decorators:[]},V=n.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,W=n.div`
  ${_} {
    width: ${({$width:o})=>o||"60px"};
  }
`,p=n.div`
  flex: 1;
`,r=n.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`,l=()=>{const o=L(),a=t.boolean("isCompact",!1),c=t.boolean("Disabled",!1),s=t.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default"),u=t.text("Placeholder (Free Width)","Choose an option..."),x=t.text("Default Value (Free Width)",""),F=S("Free select value"),j=S("Free select value"),O=t.select("Icon",o,Object.keys(o)[0]),g=t.text("Fix width","80px"),h=t.object("Free Select Label",{htmlFor:"free_select",text:"Field Label"}),C=t.object("Fix Select Label",{htmlFor:"fix_select",text:"Page",isSameRow:!0}),f=d=>{F(d)},E=d=>{j(d)};return e.jsxs(V,{children:[e.jsxs(p,{children:[e.jsx(r,{children:"Select (Free Width)"}),e.jsxs(i,{isCompact:a,placeholder:u,label:h,disabled:c,defaultValue:x,fieldState:s,changeCallback:f,children:[e.jsx("option",{value:"option1",children:"Example Option 1"}),e.jsx("option",{value:"option2",children:"Example Option 2"}),e.jsx("option",{value:"option3",children:"Example Option 3"}),e.jsx("option",{value:"option4",children:"Example Option 4"})]})]}),e.jsxs(p,{children:[e.jsx(r,{children:"Select (Fixed Width)"}),e.jsx(W,{$width:g,children:e.jsxs(i,{isCompact:a,disabled:c,fieldState:s,label:C,defaultValue:1,changeCallback:E,children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:15,children:"15"}),e.jsx("option",{value:20,children:"20"})]})})]}),e.jsxs(p,{children:[e.jsx(r,{children:"Select (With Icon)"}),e.jsxs(i,{isCompact:a,placeholder:u,label:h,disabled:c,defaultValue:x,fieldState:s,icon:O,changeCallback:f,children:[e.jsx("option",{value:"option1",children:"Example Option 1"}),e.jsx("option",{value:"option2",children:"Example Option 2"}),e.jsx("option",{value:"option3",children:"Example Option 3"}),e.jsx("option",{value:"option4",children:"Example Option 4"})]})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"_SelectField"};var b,m,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(v=(m=l.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const y=["_SelectField"];export{l as _SelectField,y as __namedExportsOrder,w as default};
