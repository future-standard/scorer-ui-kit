import{aj as c,d as e,r as g,j as t,a as x}from"./iframe-Dbt4m4Aq.js";import{e as C}from"./index-BfWBpCCZ.js";import"./preload-helper-C1FmrZbK.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,v={title:"Misc/atoms",component:c,decorators:[],parameters:{jsx:{skip:1}}},_=x.div`
  margin: 20px;
`,o=()=>{const l=e.text("Placeholder","Search by name..."),a=B("Search value"),d=e.boolean("Has border",!0),i=e.boolean("No Background",!0),u=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),m=e.number("Icon size",12),p=e.boolean("Disabled",!1),h=g.useCallback(b=>{const{value:S}=b.target;a(S)},[a]);return t.jsx(_,{children:t.jsx(c,{placeholder:l,onChange:C(h),hasBorder:d,noBackground:i,color:u,iconSize:m,disabled:p})})};o.__docgenInfo={description:"",methods:[],displayName:"_BasicSearchInput"};var n,r,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const inputPlaceholder = text("Placeholder", "Search by name...");
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const noBackground = boolean('No Background', true);
  const color = select("Color", {
    Mono: "mono",
    Dimmed: "dimmed",
    Subtle: "subtle"
  }, "subtle");
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = e.target;
    textValue(value);
  }, [textValue]);
  return <Container>
      <BasicSearchInput placeholder={inputPlaceholder} onChange={emptyCallbackForStory(handleChange)} {...{
      hasBorder,
      noBackground,
      color,
      iconSize,
      disabled
    }} />
    </Container>;
}`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["_BasicSearchInput"];export{o as _BasicSearchInput,E as __namedExportsOrder,v as default};
