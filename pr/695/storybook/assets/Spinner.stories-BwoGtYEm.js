import{Ft as e,Lt as t,Rt as n,Wt as r,jt as i,wt as a}from"./iframe-DFQHAkQ-.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=r(),a(),n(),c=e(),l={title:`Misc`,component:i,decorators:[]},u=t.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({$styling:e})=>`background-color: var(--${e}-9)`};
`,d=()=>{let e=(0,s.select)(`Size`,{Small:`small`,Medium:`medium`,Large:`large`,XLarge:`xlarge`},`medium`),t=(0,s.select)(`Style`,{Primary:`primary`,Secondary:`grey`,Warning:`warning`},`primary`),n=(0,s.number)(`Custom Size`,0),r=(0,s.text)(`Custom Base Color`,``),a=(0,s.text)(`Custom Top Color`,``),o=r===``?void 0:r,l=a===``?void 0:a;return o=r.indexOf(`(`)!==-1&&r.indexOf(`)`)===-1?`${r})`:r,l=a.indexOf(`(`)!==-1&&a.indexOf(`)`)===-1?`${a})`:a,(0,c.jsx)(u,{$styling:t,children:(0,c.jsx)(i,{size:e,styling:t,custom:{size:n,baseColor:o,topColor:l}})})},d.__docgenInfo={description:``,methods:[],displayName:`LoadingSpinner`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`LoadingSpinner`]})))()}p();export{d as LoadingSpinner,f as __namedExportsOrder,l as default};