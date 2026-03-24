import{j as u}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as b}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as t}from"./index-BtgrC99a.js";import{b as s}from"./index.modern-BCxVMgPd.js";import"./v4-CtRu48qb.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const h={title:"Form/Buttons",component:s,decorators:[]},o=()=>{const r=t.text("Button Text","Example Title"),l=t.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",TextOnly:"text-only",Outline:"outline"},"primary"),i=t.select("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),c=t.boolean("Disabled",!1),d=t.boolean("Shadow",!1),m=b("button-click");return u.jsx(s,{design:l,size:i,shadow:d,onClick:m,disabled:c,children:r})};o.__docgenInfo={description:"",methods:[],displayName:"StandardButton"};var n,e,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(a=(e=o.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const T=["StandardButton"];export{o as StandardButton,T as __namedExportsOrder,h as default};
