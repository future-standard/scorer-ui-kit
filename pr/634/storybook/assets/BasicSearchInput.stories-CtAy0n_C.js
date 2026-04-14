import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,o as c}from"./iframe-Bq-bFTg_.js";import{r as l,t as u}from"./helpers-CmedATVk.js";var d,f,p,m,h,g,_,v;t((()=>{d=e(o()),r(),s(),f=a(),l(),p=n(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Misc/atoms`,component:c,decorators:[],parameters:{jsx:{skip:1}}},g=i.div`
  margin: 20px;
`,_=()=>{let e=(0,f.text)(`Placeholder`,`Search by name...`),t=m(`Search value`),n=(0,f.boolean)(`Has border`,!0),r=(0,f.boolean)(`No Background`,!0),i=(0,f.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),a=(0,f.number)(`Icon size`,12),o=(0,f.boolean)(`Disabled`,!1);return(0,p.jsx)(g,{children:(0,p.jsx)(c,{placeholder:e,onChange:u((0,d.useCallback)(e=>{let{value:n}=e.target;t(n)},[t])),hasBorder:n,noBackground:r,color:i,iconSize:a,disabled:o})})},_.__docgenInfo={description:``,methods:[],displayName:`_BasicSearchInput`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`_BasicSearchInput`]}))();export{_ as _BasicSearchInput,v as __namedExportsOrder,h as default};