import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,Lt as n,Ot as r,bt as i,jt as a,kt as o}from"./iframe-DiPaNbrM.js";var s,c,l,u,d,f;e((()=>{s=n(),i(),o(),c=r(),l={title:`Misc`,component:t,decorators:[]},u=a.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({$styling:e})=>`background-color: var(--${e}-9)`};
`,d=()=>{let e=(0,s.select)(`Size`,{Small:`small`,Medium:`medium`,Large:`large`,XLarge:`xlarge`},`medium`),n=(0,s.select)(`Style`,{Primary:`primary`,Secondary:`grey`,Warning:`warning`},`primary`),r=(0,s.number)(`Custom Size`,0),i=(0,s.text)(`Custom Base Color`,``),a=(0,s.text)(`Custom Top Color`,``),o=i===``?void 0:i,l=a===``?void 0:a;return o=i.indexOf(`(`)!==-1&&i.indexOf(`)`)===-1?`${i})`:i,l=a.indexOf(`(`)!==-1&&a.indexOf(`)`)===-1?`${a})`:a,(0,c.jsx)(u,{$styling:n,children:(0,c.jsx)(t,{size:e,styling:n,custom:{size:r,baseColor:o,topColor:l}})})},d.__docgenInfo={description:``,methods:[],displayName:`LoadingSpinner`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const spinnerSize = select('Size', {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    XLarge: 'xlarge'
  }, 'medium');
  const spinnerType = select('Style', {
    Primary: 'primary',
    Secondary: 'grey',
    Warning: 'warning'
  }, 'primary');
  const customSize = number('Custom Size', 0);
  const customBaseColor = text('Custom Base Color', '');
  const customTopColor = text('Custom Top Color', '');
  let baseColor = customBaseColor !== '' ? customBaseColor : undefined;
  let topColor = customTopColor !== '' ? customTopColor : undefined;

  // Fixes issue if story breaks when typing an open bracket for var()
  baseColor = customBaseColor.indexOf('(') !== -1 && customBaseColor.indexOf(')') === -1 ? \`\${customBaseColor})\` : customBaseColor;
  topColor = customTopColor.indexOf('(') !== -1 && customTopColor.indexOf(')') === -1 ? \`\${customTopColor})\` : customTopColor;
  return <Container $styling={spinnerType}>
      <Spinner size={spinnerSize} styling={spinnerType} custom={{
      size: customSize,
      ...{
        baseColor,
        topColor
      }
    }} />
    </Container>;
}`,...d.parameters?.docs?.source}}},f=[`LoadingSpinner`]}))();export{d as LoadingSpinner,f as __namedExportsOrder,l as default};