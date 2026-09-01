import{t as e}from"./react-BZJXY1be.js";import{C as t,Ft as n,Lt as r,Rt as i,Wt as a,wt as o}from"./iframe-C-UcmyvH.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{c=a(),l=e(),o(),i(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Misc/molecules`,component:t,decorators:[],parameters:{jsx:{skip:1}}},p=r.div`
  margin: 20px;
`,m=()=>{let e=(0,c.text)(`Placeholder`,`Search by name...`),n=d(`Search value`),r=(0,c.boolean)(`Has border`,!0),i=(0,c.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),a=(0,c.number)(`Icon size`,12),o=(0,c.boolean)(`Disabled`,!1),s=(0,c.text)(`Default Value`,``),f=(0,l.useCallback)(e=>{n(e)},[n]);return(0,u.jsx)(p,{children:(0,u.jsx)(t,{placeholder:e,onDebouncedChange:f,hasBorder:r,color:i,iconSize:a,disabled:o,defaultValue:s})})},m.__docgenInfo={description:``,methods:[],displayName:`_DebouncedSearcher`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_DebouncedSearcher`]})))()}g();export{m as _DebouncedSearcher,h as __namedExportsOrder,f as default};