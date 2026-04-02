import{an as s,d as e,r as S,j as t,a as x}from"./iframe-Dbt4m4Aq.js";import{e as C}from"./index-BfWBpCCZ.js";import"./preload-helper-C1FmrZbK.js";const{action:D}=__STORYBOOK_MODULE_ACTIONS__,y={title:"Misc/molecules",component:s,decorators:[],parameters:{jsx:{skip:1}}},_=x.div`
  margin: 20px;
`,o=()=>{const l=e.text("Placeholder","Search by name..."),a=D("Search value"),d=e.boolean("Has border",!0),u=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),i=e.number("Icon size",12),b=e.boolean("Disabled",!1),m=e.text("Default Value",""),h=S.useCallback(p=>{a(p)},[a]);return t.jsx(_,{children:t.jsx(s,{placeholder:l,onDebouncedChange:C(h),hasBorder:d,color:u,iconSize:i,disabled:b,defaultValue:m})})};o.__docgenInfo={description:"",methods:[],displayName:"_DebouncedSearcher"};var r,n,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const inputPlaceholder = text("Placeholder", "Search by name...");
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const color = select("Color", {
    Mono: "mono",
    Dimmed: "dimmed",
    Subtle: "subtle"
  }, "subtle");
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);
  const defaultValue = text('Default Value', '');
  const handleChange = useCallback((debounceInput: string) => {
    textValue(debounceInput);
  }, [textValue]);
  return <Container>
      <DebouncedSearcher placeholder={inputPlaceholder} onDebouncedChange={emptyCallbackForStory(handleChange)} {...{
      hasBorder,
      color,
      iconSize,
      disabled,
      defaultValue
    }} />
    </Container>;
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const I=["_DebouncedSearcher"];export{o as _DebouncedSearcher,I as __namedExportsOrder,y as default};
