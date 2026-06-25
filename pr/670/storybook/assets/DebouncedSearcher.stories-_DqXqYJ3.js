import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,Mt as r,jt as i,kt as a,v as o,vt as s,zt as c}from"./iframe-cNP1dtGl.js";var l,u,d,f,p,m,h,g;e((()=>{l=c(),u=t(n()),s(),r(),d=a(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Misc/molecules`,component:o,decorators:[],parameters:{jsx:{skip:1}}},m=i.div`
  margin: 20px;
`,h=()=>{let e=(0,l.text)(`Placeholder`,`Search by name...`),t=f(`Search value`),n=(0,l.boolean)(`Has border`,!0),r=(0,l.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),i=(0,l.number)(`Icon size`,12),a=(0,l.boolean)(`Disabled`,!1),s=(0,l.text)(`Default Value`,``);return(0,d.jsx)(m,{children:(0,d.jsx)(o,{placeholder:e,onDebouncedChange:(0,u.useCallback)(e=>{t(e)},[t]),hasBorder:n,color:r,iconSize:i,disabled:a,defaultValue:s})})},h.__docgenInfo={description:``,methods:[],displayName:`_DebouncedSearcher`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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