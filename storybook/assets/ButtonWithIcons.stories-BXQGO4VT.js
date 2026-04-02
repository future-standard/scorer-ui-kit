import{X as a,d as t,j as h}from"./iframe-BQPDKgpJ.js";import{g as x}from"./index-BKA4gAcn.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,f={title:"Form/Buttons",component:a,decorators:[]},o=()=>{const n=x(),c=t.text("Button Text","Example Title"),l=t.select("Design",{Primary:"primary",Secondary:"secondary",Danger:"danger",TextOnly:"text-only",Outline:"outline"},"primary"),r=t.select("Size",{Xsmall:"xsmall",Small:"small",Normal:"normal",Large:"large"},"normal"),u=t.boolean("Disabled",!1),d=t.select("Icon",n,Object.keys(n)[0]),b=t.select("Icon Position",{Left:"left",Right:"right"},"right"),m=t.boolean("Loading",!1),g=t.boolean("Shadow",!1),p=I("button-click");return h.jsx(a,{design:l,size:r,shadow:g,onClick:p,icon:d,position:b,disabled:u,loading:m,children:c})};o.__docgenInfo={description:"",methods:[],displayName:"_WithIcon"};var e,s,i;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
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
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const D=["_WithIcon"];export{o as _WithIcon,D as __namedExportsOrder,f as default};
