import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,Tt as o,vt as s}from"./iframe-BHdSP_o9.js";var c,l,u,d,f,p;e((()=>{a(),c=i(),n(),s(),l=t(),u={title:`Misc`,component:o,decorators:[]},d=r.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({$styling:e})=>`background-color: var(--${e}-9)`};
`,f=()=>{let e=(0,c.select)(`Size`,{Small:`small`,Medium:`medium`,Large:`large`,XLarge:`xlarge`},`medium`),t=(0,c.select)(`Style`,{Primary:`primary`,Secondary:`grey`,Warning:`warning`},`primary`),n=(0,c.number)(`Custom Size`,0),r=(0,c.text)(`Custom Base Color`,``),i=(0,c.text)(`Custom Top Color`,``),a=r===``?void 0:r,s=i===``?void 0:i;return a=r.indexOf(`(`)!==-1&&r.indexOf(`)`)===-1?r+`)`:r,s=i.indexOf(`(`)!==-1&&i.indexOf(`)`)===-1?i+`)`:i,(0,l.jsx)(d,{$styling:t,children:(0,l.jsx)(o,{size:e,styling:t,custom:{size:n,baseColor:a,topColor:s}})})},f.__docgenInfo={description:``,methods:[],displayName:`LoadingSpinner`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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