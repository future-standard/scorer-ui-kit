import{Gt as e,It as t,c as n,wt as r}from"./iframe-C28gtL4u.js";import{n as i}from"./rolldown-runtime-DkW27tQK.js";var a,o,s,c,l,u;function d(){return(d=i((()=>{a=e(),r(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/Buttons`,component:n,decorators:[]},l=()=>{let e=(0,a.text)(`Button Text`,`Example Title`),t=(0,a.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),r=(0,a.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),i=(0,a.boolean)(`Disabled`,!1),c=(0,a.boolean)(`Shadow`,!1),l=s(`button-click`);return(0,o.jsx)(n,{design:t,size:r,shadow:c,onClick:l,disabled:i,children:e})},l.__docgenInfo={description:``,methods:[],displayName:`StandardButton`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const buttonText = text('Button Text', 'Example Title');
  const buttonDesign = select('Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
    TextOnly: 'text-only',
    Outline: 'outline'
  }, 'primary');
  const buttonSize = select('Size', {
    Xsmall: 'xsmall',
    Small: 'small',
    Normal: 'normal',
    Large: 'large'
  }, 'normal');
  const buttonDisabled = boolean('Disabled', false);
  const buttonShadow = boolean('Shadow', false);
  const buttonOnClick = action('button-click');
  return <Button design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} disabled={buttonDisabled}>
      {buttonText}
    </Button>;
}`,...l.parameters?.docs?.source}}},u=[`StandardButton`]})))()}d();export{l as StandardButton,u as __namedExportsOrder,c as default};