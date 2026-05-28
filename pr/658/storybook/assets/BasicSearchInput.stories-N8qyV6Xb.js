import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Lt as r,Ot as i,Rt as a,jt as o,o as s,vt as c}from"./iframe-DoElEExu.js";var l,u,d,f,p,m,h,g;t((()=>{l=r(),u=e(a()),c(),o(),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Misc/atoms`,component:s,decorators:[],parameters:{jsx:{skip:1}}},m=n.div`
  margin: 20px;
`,h=()=>{let e=(0,l.text)(`Placeholder`,`Search by name...`),t=f(`Search value`),n=(0,l.boolean)(`Has border`,!0),r=(0,l.boolean)(`No Background`,!0),i=(0,l.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),a=(0,l.number)(`Icon size`,12),o=(0,l.boolean)(`Disabled`,!1);return(0,d.jsx)(m,{children:(0,d.jsx)(s,{placeholder:e,onChange:(0,u.useCallback)(e=>{let{value:n}=e.target;t(n)},[t]),hasBorder:n,noBackground:r,color:i,iconSize:a,disabled:o})})},h.__docgenInfo={description:``,methods:[],displayName:`_BasicSearchInput`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const inputPlaceholder = text('Placeholder', 'Search by name...');
  const textValue = action('Search value');
  const hasBorder = boolean('Has border', true);
  const noBackground = boolean('No Background', true);
  const color = select('Color', {
    Mono: 'mono',
    Dimmed: 'dimmed',
    Subtle: 'subtle'
  }, 'subtle');
  const iconSize = number('Icon size', 12);
  const disabled = boolean('Disabled', false);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = e.target;
    textValue(value);
  }, [textValue]);
  return <Container>
      <BasicSearchInput placeholder={inputPlaceholder} onChange={handleChange} {...{
      hasBorder,
      noBackground,
      color,
      iconSize,
      disabled
    }} />
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_BasicSearchInput`]}))();export{h as _BasicSearchInput,g as __namedExportsOrder,p as default};