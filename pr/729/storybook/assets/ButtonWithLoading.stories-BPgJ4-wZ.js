import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ButtonWithLoading-GpbKNA0Y.js";import{_ as i}from"./iframe-PEYaYO03.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{a=i(),n(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/Buttons`,component:r,decorators:[]},l=()=>{let e=(0,a.text)(`Button Text`,`Example Title`),t=(0,a.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),n=(0,a.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),i=(0,a.boolean)(`Disabled`,!1),c=(0,a.boolean)(`Loading`,!0),l=(0,a.select)(`Loading Position`,{Left:`left`,Right:`right`},`right`),u=(0,a.boolean)(`Shadow`,!1),d=s(`button-click`);return(0,o.jsx)(r,{design:t,size:n,shadow:u,onClick:d,loading:c,position:l,disabled:i,children:e})},u=[`_WithLoading`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
  const buttonLoading = boolean('Loading', true);
  const buttonLoadingPosition = select('Loading Position', {
    Left: 'left',
    Right: 'right'
  }, 'right');
  const buttonShadow = boolean('Shadow', false);
  const buttonOnClick = action('button-click');
  return <ButtonWithLoading design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} loading={buttonLoading} position={buttonLoadingPosition} disabled={buttonDisabled}>
      {buttonText}
    </ButtonWithLoading>;
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as _WithLoading,u as __namedExportsOrder,c as default};