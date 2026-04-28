import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,v as s,vt as c}from"./iframe-BHdSP_o9.js";import{r as l,t as u}from"./helpers-DamNdi88.js";var d,f,p,m,h,g,_,v;t((()=>{d=e(o()),r(),c(),f=a(),l(),p=n(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`Misc/molecules`,component:s,decorators:[],parameters:{jsx:{skip:1}}},g=i.div`
  margin: 20px;
`,_=()=>{let e=(0,f.text)(`Placeholder`,`Search by name...`),t=m(`Search value`),n=(0,f.boolean)(`Has border`,!0),r=(0,f.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),i=(0,f.number)(`Icon size`,12),a=(0,f.boolean)(`Disabled`,!1),o=(0,f.text)(`Default Value`,``);return(0,p.jsx)(g,{children:(0,p.jsx)(s,{placeholder:e,onDebouncedChange:u((0,d.useCallback)(e=>{t(e)},[t])),hasBorder:n,color:r,iconSize:i,disabled:a,defaultValue:o})})},_.__docgenInfo={description:``,methods:[],displayName:`_DebouncedSearcher`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`_DebouncedSearcher`]}))();export{_ as _DebouncedSearcher,v as __namedExportsOrder,h as default};