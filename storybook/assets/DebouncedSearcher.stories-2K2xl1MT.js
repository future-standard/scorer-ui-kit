import{j as r}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as S}from"./index-Dh2lLoQQ.js";import{c as x}from"./styled-components.browser.esm-D8a0uvnT.js";import{am as s}from"./index.modern-BCxVMgPd.js";import{d as e}from"./index-BtgrC99a.js";import{a as f}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{e as C}from"./index-CTv9zpMR.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";const v={title:"Misc/molecules",component:s,decorators:[],parameters:{jsx:{skip:1}}},D=x.div`
  margin: 20px;
`,o=()=>{const l=e.text("Placeholder","Search by name..."),a=f("Search value"),d=e.boolean("Has border",!0),u=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),i=e.number("Icon size",12),m=e.boolean("Disabled",!1),b=e.text("Default Value",""),p=S.useCallback(h=>{a(h)},[a]);return r.jsx(D,{children:r.jsx(s,{placeholder:l,onDebouncedChange:C(p),hasBorder:d,color:u,iconSize:i,disabled:m,defaultValue:b})})};o.__docgenInfo={description:"",methods:[],displayName:"_DebouncedSearcher"};var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const B=["_DebouncedSearcher"];export{o as _DebouncedSearcher,B as __namedExportsOrder,v as default};
