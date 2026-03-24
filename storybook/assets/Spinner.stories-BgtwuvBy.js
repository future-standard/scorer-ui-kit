import{j as m}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as r}from"./index-BtgrC99a.js";import{c as C}from"./styled-components.browser.esm-D8a0uvnT.js";import{af as u}from"./index.modern-BCxVMgPd.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const B={title:"Misc",component:u,decorators:[]},g=C.div`
  border-radius: 3px;
  height: calc(100vh - 2rem);
  display: flex;
  justify-content:center;
  align-items:center;
  ${({styling:t})=>`background-color: var(--${t}-9)`};
`,s=()=>{const t=r.select("Size",{Small:"small",Medium:"medium",Large:"large",XLarge:"xlarge"},"medium"),n=r.select("Style",{Primary:"primary",Secondary:"grey",Warning:"warning"},"primary"),d=r.number("Custom Size",0),o=r.text("Custom Base Color",""),e=r.text("Custom Top Color","");let i=o!==""?o:void 0,a=e!==""?e:void 0;return i=o.indexOf("(")!==-1&&o.indexOf(")")===-1?o+")":o,a=e.indexOf("(")!==-1&&e.indexOf(")")===-1?e+")":e,m.jsx(g,{styling:n,children:m.jsx(u,{size:t,styling:n,custom:{size:d,baseColor:i,topColor:a}})})};s.__docgenInfo={description:"",methods:[],displayName:"LoadingSpinner"};var l,c,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
  return <Container styling={spinnerType}>
    <Spinner size={spinnerSize} styling={spinnerType} custom={{
      size: customSize,
      ...{
        baseColor,
        topColor
      }
    }} />
  </Container>;
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const O=["LoadingSpinner"];export{s as LoadingSpinner,O as __namedExportsOrder,B as default};
