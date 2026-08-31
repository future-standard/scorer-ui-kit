import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,s as a,wt as o}from"./iframe-DFQHAkQ-.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{c=i(),l=e(),o(),r(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Misc/atoms`,component:a,decorators:[],parameters:{jsx:{skip:1}}},p=n.div`
  margin: 20px;
`,m=()=>{let e=(0,c.text)(`Placeholder`,`Search by name...`),t=d(`Search value`),n=(0,c.boolean)(`Has border`,!0),r=(0,c.boolean)(`No Background`,!0),i=(0,c.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`},`subtle`),o=(0,c.number)(`Icon size`,12),s=(0,c.boolean)(`Disabled`,!1),f=(0,l.useCallback)(e=>{let{value:n}=e.target;t(n)},[t]);return(0,u.jsx)(p,{children:(0,u.jsx)(a,{placeholder:e,onChange:f,hasBorder:n,noBackground:r,color:i,iconSize:o,disabled:s})})},m.__docgenInfo={description:``,methods:[],displayName:`_BasicSearchInput`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_BasicSearchInput`]})))()}g();export{m as _BasicSearchInput,h as __namedExportsOrder,f as default};