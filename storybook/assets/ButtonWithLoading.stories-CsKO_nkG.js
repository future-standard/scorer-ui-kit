import{j as b}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as p}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as t}from"./index-C-6Xbh3D.js";import{e as a}from"./index.modern-CLl990BG.js";import"./v4-CtRu48qb.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const T={title:"Form/Buttons",component:a,decorators:[]},o=()=>{const s=t.text("Button Text","Example Title"),l=t.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",TextOnly:"text-only",Outline:"outline"},"primary"),r=t.select("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),d=t.boolean("Disabled",!1),c=t.boolean("Loading",!0),u=t.select("Loading Position",{Left:"left",Right:"right"},"right"),m=t.boolean("Shadow",!1),g=p("button-click");return b.jsx(a,{design:l,size:r,shadow:m,onClick:g,loading:c,position:u,disabled:d,children:s})};o.__docgenInfo={description:"",methods:[],displayName:"_WithLoading"};var n,e,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const O=["_WithLoading"];export{o as _WithLoading,O as __namedExportsOrder,T as default};
