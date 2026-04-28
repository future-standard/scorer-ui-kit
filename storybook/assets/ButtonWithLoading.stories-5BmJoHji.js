import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,l as r,vt as i}from"./iframe-DxcqKzfJ.js";var a,o,s,c,l,u;e((()=>{a=t(),i(),o=n(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Form/Buttons`,component:r,decorators:[]},l=()=>{let e=(0,a.text)(`Button Text`,`Example Title`),t=(0,a.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),n=(0,a.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),i=(0,a.boolean)(`Disabled`,!1),c=(0,a.boolean)(`Loading`,!0),l=(0,a.select)(`Loading Position`,{Left:`left`,Right:`right`},`right`);return(0,o.jsx)(r,{design:t,size:n,shadow:(0,a.boolean)(`Shadow`,!1),onClick:s(`button-click`),loading:c,position:l,disabled:i,children:e})},l.__docgenInfo={description:``,methods:[],displayName:`_WithLoading`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u=[`_WithLoading`]}))();export{l as _WithLoading,u as __namedExportsOrder,c as default};