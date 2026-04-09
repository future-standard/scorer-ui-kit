import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Pt as n,Rt as r,bt as i,l as a}from"./iframe-D4thBea3.js";var o,s,c,l,u,d;e((()=>{r(),o=n(),i(),s=t(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Form/Buttons`,component:a,decorators:[]},u=()=>{let e=(0,o.text)(`Button Text`,`Example Title`),t=(0,o.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),n=(0,o.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),r=(0,o.boolean)(`Disabled`,!1),i=(0,o.boolean)(`Loading`,!0),l=(0,o.select)(`Loading Position`,{Left:`left`,Right:`right`},`right`);return(0,s.jsx)(a,{design:t,size:n,shadow:(0,o.boolean)(`Shadow`,!1),onClick:c(`button-click`),loading:i,position:l,disabled:r,children:e})},u.__docgenInfo={description:``,methods:[],displayName:`_WithLoading`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
  const buttonLoading = boolean("Loading", true);
  const buttonLoadingPosition = select("Loading Position", {
    Left: "left",
    Right: "right"
  }, "right");
  const buttonShadow = boolean("Shadow", false);
  const buttonOnClick = action('button-click');
  return <ButtonWithLoading design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} loading={buttonLoading} position={buttonLoadingPosition} disabled={buttonDisabled}>{buttonText}</ButtonWithLoading>;
}`,...u.parameters?.docs?.source}}},d=[`_WithLoading`]}))();export{u as _WithLoading,d as __namedExportsOrder,l as default};