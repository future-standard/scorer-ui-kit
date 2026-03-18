import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as n}from"./styled-components.browser.esm-CarAhzHj.js";import{d as t}from"./index-C-6Xbh3D.js";import{a as S}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{Z as i,_ as V}from"./index.modern-CLl990BG.js";import{g as W}from"./index-DO1Udsuf.js";import"./index-DnkWte70.js";import"./v4-CtRu48qb.js";import"./index-nkfPnFJx.js";const $={title:"Form/atoms",component:i,decorators:[]},L=n.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,_=n.div`
  ${V} {
    width: ${({width:o})=>o||"60px"};
  }
`,r=n.div`
  flex: 1;
`,x=n.h1`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--grey-12);
  font-weight: 500;
`,l=()=>{const o=W(),a=t.boolean("isCompact",!1),c=t.boolean("Disabled",!1),s=t.select("State",{Default:"default",Disabled:"disabled",Required:"required",Valid:"valid",Invalid:"invalid",Processing:"processing"},"default"),u=t.text("Placeholder (Free Width)","Choose an option..."),h=t.text("Default Value (Free Width)",""),j=S("Free select value"),g=S("Free select value"),O=t.select("Icon",o,Object.keys(o)[0]),p=t.text("Fix width","80px"),f=t.object("Free Select Label",{htmlFor:"free_select",text:"Field Label"}),C=t.object("Fix Select Label",{htmlFor:"fix_select",text:"Page",isSameRow:!0}),m=d=>{j(d)},E=d=>{g(d)};return e.jsxs(L,{children:[e.jsxs(r,{children:[e.jsx(x,{children:"Select (Free Width)"}),e.jsxs(i,{isCompact:a,placeholder:u,label:f,selectWidth:p,disabled:c,defaultValue:h,fieldState:s,changeCallback:m,children:[e.jsx("option",{value:"option1",children:"Example Option 1"}),e.jsx("option",{value:"option2",children:"Example Option 2"}),e.jsx("option",{value:"option3",children:"Example Option 3"}),e.jsx("option",{value:"option4",children:"Example Option 4"})]})]}),e.jsxs(r,{children:[e.jsx(x,{children:"Select (Fixed Width)"}),e.jsx(_,{width:p,children:e.jsxs(i,{isCompact:a,disabled:c,fieldState:s,label:C,defaultValue:1,changeCallback:E,children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:15,children:"15"}),e.jsx("option",{value:20,children:"20"})]})})]}),e.jsxs(r,{children:[e.jsx(x,{children:"Select (With Icon)"}),e.jsxs(i,{isCompact:a,placeholder:u,label:f,selectWidth:p,disabled:c,defaultValue:h,fieldState:s,icon:O,changeCallback:m,children:[e.jsx("option",{value:"option1",children:"Example Option 1"}),e.jsx("option",{value:"option2",children:"Example Option 2"}),e.jsx("option",{value:"option3",children:"Example Option 3"}),e.jsx("option",{value:"option4",children:"Example Option 4"})]})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"_SelectField"};var b,v,F;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
        selectWidth,
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
        <FixedSelect width={selectWidth}>
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
        selectWidth,
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
}`,...(F=(v=l.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};const z=["_SelectField"];export{l as _SelectField,z as __namedExportsOrder,$ as default};
