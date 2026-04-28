import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,jt as a,kt as o,v as s,vt as c}from"./iframe-DxcqKzfJ.js";var l,u,d,f,p,m,h,g;t((()=>{l=n(),u=e(i()),c(),o(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Misc/molecules`,component:s,decorators:[],parameters:{jsx:{skip:1}}},m=a.div`
  margin: 20px;
`,h=()=>{let e=(0,l.text)(`Placeholder`,`Search by name...`),t=f(`Search value`),n=(0,l.boolean)(`Has border`,!0),r=(0,l.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),i=(0,l.number)(`Icon size`,12),a=(0,l.boolean)(`Disabled`,!1),o=(0,l.text)(`Default Value`,``);return(0,d.jsx)(m,{children:(0,d.jsx)(s,{placeholder:e,onDebouncedChange:(0,u.useCallback)(e=>{t(e)},[t]),hasBorder:n,color:r,iconSize:i,disabled:a,defaultValue:o})})},h.__docgenInfo={description:``,methods:[],displayName:`_DebouncedSearcher`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const inputPlaceholder = text('Placeholder', 'Search by name...');
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const color = select('Color', {
    Mono: 'mono',
    Dimmed: 'dimmed',
    Subtle: 'subtle'
  }, 'subtle');
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);
  const defaultValue = text('Default Value', '');
  const handleChange = useCallback((debounceInput: string) => {
    textValue(debounceInput);
  }, [textValue]);
  return <Container>
      <DebouncedSearcher placeholder={inputPlaceholder} onDebouncedChange={handleChange} {...{
      hasBorder,
      color,
      iconSize,
      disabled,
      defaultValue
    }} />
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_DebouncedSearcher`]}))();export{h as _DebouncedSearcher,g as __namedExportsOrder,p as default};