import{l as s,d as t,j as m}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,p={title:"Form/Buttons",component:s,decorators:[]},o=()=>{const l=t.text("Button Text","Example Title"),r=t.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",TextOnly:"text-only",Outline:"outline"},"primary"),i=t.select("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),c=t.boolean("Disabled",!1),d=t.boolean("Shadow",!1),u=b("button-click");return m.jsx(s,{design:r,size:i,shadow:d,onClick:u,disabled:c,children:l})};o.__docgenInfo={description:"",methods:[],displayName:"StandardButton"};var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const g=["StandardButton"];export{o as StandardButton,g as __namedExportsOrder,p as default};
