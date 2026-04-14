import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Pt as n,Rt as r,bt as i,s as a}from"./iframe-Bq-bFTg_.js";var o,s,c,l,u,d;e((()=>{r(),o=n(),i(),s=t(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Form/Buttons`,component:a,decorators:[]},u=()=>{let e=(0,o.text)(`Button Text`,`Example Title`),t=(0,o.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),n=(0,o.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),r=(0,o.boolean)(`Disabled`,!1);return(0,s.jsx)(a,{design:t,size:n,shadow:(0,o.boolean)(`Shadow`,!1),onClick:c(`button-click`),disabled:r,children:e})},u.__docgenInfo={description:``,methods:[],displayName:`StandardButton`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const buttonText = text("Button Text", "Example Title");
  const buttonDesign = select("Design", {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger",
    TextOnly: "text-only",
    Outline: 'outline'
  }, "primary");
  const buttonSize = select("Size", {
    Xsmall: 'xsmall',
    Small: "small",
    Normal: "normal",
    Large: "large"
  }, "normal");
  const buttonDisabled = boolean("Disabled", false);
  const buttonShadow = boolean("Shadow", false);
  const buttonOnClick = action('button-click');
  return <Button design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} disabled={buttonDisabled}>{buttonText}</Button>;
}`,...u.parameters?.docs?.source}}},d=[`StandardButton`]}))();export{u as StandardButton,d as __namedExportsOrder,l as default};