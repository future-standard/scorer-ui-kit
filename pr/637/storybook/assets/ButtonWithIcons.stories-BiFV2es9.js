import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Pt as n,Rt as r,bt as i,c as a}from"./iframe-l0RDpzCT.js";import{n as o,r as s}from"./helpers-C6-oK8dq.js";var c,l,u,d,f,p;e((()=>{r(),c=n(),i(),s(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Form/Buttons`,component:a,decorators:[]},f=()=>{let e=o(),t=(0,c.text)(`Button Text`,`Example Title`),n=(0,c.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),r=(0,c.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),i=(0,c.boolean)(`Disabled`,!1),s=(0,c.select)(`Icon`,e,Object.keys(e)[0]),d=(0,c.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,c.boolean)(`Loading`,!1);return(0,l.jsx)(a,{design:n,size:r,shadow:(0,c.boolean)(`Shadow`,!1),onClick:u(`button-click`),icon:s,position:d,disabled:i,loading:f,children:t})},f.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
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
  const buttonIcon = select("Icon", iconList, Object.keys(iconList)[0]);
  const buttonIconPosition = select("Icon Position", {
    Left: "left",
    Right: "right"
  }, "right");
  const buttonLoading = boolean("Loading", false);
  const buttonShadow = boolean("Shadow", false);
  const buttonOnClick = action('button-click');
  return <ButtonWithIcon design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} icon={buttonIcon} position={buttonIconPosition} disabled={buttonDisabled} loading={buttonLoading}>{buttonText}</ButtonWithIcon>;
}`,...f.parameters?.docs?.source}}},p=[`_WithIcon`]}))();export{f as _WithIcon,p as __namedExportsOrder,d as default};