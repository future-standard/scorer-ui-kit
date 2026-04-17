import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s}from"./iframe-DUfvGjia.js";var c,l,u,d,f,p;e((()=>{o(),c=a(),r(),s(),l=n(),u={title:`Misc`,component:t,decorators:[]},d=i.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({$styling:e})=>`background-color: var(--${e}-9)`};
`,f=()=>{let e=(0,c.select)(`Size`,{Small:`small`,Medium:`medium`,Large:`large`,XLarge:`xlarge`},`medium`),n=(0,c.select)(`Style`,{Primary:`primary`,Secondary:`grey`,Warning:`warning`},`primary`),r=(0,c.number)(`Custom Size`,0),i=(0,c.text)(`Custom Base Color`,``),a=(0,c.text)(`Custom Top Color`,``),o=i===``?void 0:i,s=a===``?void 0:a;return o=i.indexOf(`(`)!==-1&&i.indexOf(`)`)===-1?i+`)`:i,s=a.indexOf(`(`)!==-1&&a.indexOf(`)`)===-1?a+`)`:a,(0,l.jsx)(d,{$styling:n,children:(0,l.jsx)(t,{size:e,styling:n,custom:{size:r,baseColor:o,topColor:s}})})},f.__docgenInfo={description:``,methods:[],displayName:`LoadingSpinner`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const spinnerSize = select("Size", {
    Small: "small",
    Medium: "medium",
    Large: "large",
    XLarge: "xlarge"
  }, "medium");
  const spinnerType = select("Style", {
    Primary: "primary",
    Secondary: "grey",
    Warning: "warning"
  }, "primary");
  const customSize = number("Custom Size", 0);
  const customBaseColor = text("Custom Base Color", "");
  const customTopColor = text("Custom Top Color", "");
  let baseColor = customBaseColor !== '' ? customBaseColor : undefined;
  let topColor = customTopColor !== '' ? customTopColor : undefined;

  // Fixes issue if story breaks when typing an open bracket for var()
  baseColor = customBaseColor.indexOf('(') !== -1 && customBaseColor.indexOf(')') === -1 ? customBaseColor + ')' : customBaseColor;
  topColor = customTopColor.indexOf('(') !== -1 && customTopColor.indexOf(')') === -1 ? customTopColor + ')' : customTopColor;
  return <Container $styling={spinnerType}>
    <Spinner size={spinnerSize} styling={spinnerType} custom={{
      size: customSize,
      ...{
        baseColor,
        topColor
      }
    }} />
  </Container>;
}`,...f.parameters?.docs?.source}}},p=[`LoadingSpinner`]}))();export{f as LoadingSpinner,p as __namedExportsOrder,u as default};