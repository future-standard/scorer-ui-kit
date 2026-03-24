import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as g}from"./index-Dh2lLoQQ.js";import{c as x}from"./styled-components.browser.esm-D8a0uvnT.js";import{ai as c}from"./index.modern-BCxVMgPd.js";import{d as e}from"./index-BtgrC99a.js";import{a as C}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{e as B}from"./index-CTv9zpMR.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";const M={title:"Misc/atoms",component:c,decorators:[],parameters:{jsx:{skip:1}}},f=x.div`
  margin: 20px;
`,o=()=>{const l=e.text("Placeholder","Search by name..."),a=C("Search value"),i=e.boolean("Has border",!0),d=e.boolean("No Background",!0),m=e.select("Color",{Mono:"mono",Dimmed:"dimmed",Subtle:"subtle"},"subtle"),u=e.number("Icon size",12),p=e.boolean("Disabled",!1),h=g.useCallback(b=>{const{value:S}=b.target;a(S)},[a]);return t.jsx(f,{children:t.jsx(c,{placeholder:l,onChange:B(h),hasBorder:i,noBackground:d,color:m,iconSize:u,disabled:p})})};o.__docgenInfo={description:"",methods:[],displayName:"_BasicSearchInput"};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const V=["_BasicSearchInput"];export{o as _BasicSearchInput,V as __namedExportsOrder,M as default};
