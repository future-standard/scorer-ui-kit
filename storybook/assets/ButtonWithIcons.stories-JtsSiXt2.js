import{j as h}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as x}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as t}from"./index-C-6Xbh3D.js";import{z as a}from"./index.modern-CLl990BG.js";import{g as I}from"./index-DO1Udsuf.js";import"./v4-CtRu48qb.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const z={title:"Form/Buttons",component:a,decorators:[]},o=()=>{const n=I(),c=t.text("Button Text","Example Title"),l=t.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",TextOnly:"text-only",Outline:"outline"},"primary"),r=t.select("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),u=t.boolean("Disabled",!1),d=t.select("Icon",n,Object.keys(n)[0]),m=t.select("Icon Position",{Left:"left",Right:"right"},"right"),b=t.boolean("Loading",!1),g=t.boolean("Shadow",!1),p=x("button-click");return h.jsx(a,{design:l,size:r,shadow:g,onClick:p,icon:d,position:m,disabled:u,loading:b,children:c})};o.__docgenInfo={description:"",methods:[],displayName:"_WithIcon"};var e,i,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const w=["_WithIcon"];export{o as _WithIcon,w as __namedExportsOrder,z as default};
