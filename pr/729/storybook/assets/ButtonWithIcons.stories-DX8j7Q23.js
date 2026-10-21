import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ButtonWithIcon-5CaPln_c.js";import{_ as i}from"./iframe-PEYaYO03.js";import{n as a,t as o}from"./helpers-DugtZnoE.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{s=i(),n(),a(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Buttons`,component:r,decorators:[]},d=()=>{let e=o(),t=(0,s.text)(`Button Text`,`Example Title`),n=(0,s.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),i=(0,s.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),a=(0,s.boolean)(`Disabled`,!1),u=(0,s.select)(`Icon`,e,Object.keys(e)[0]),d=(0,s.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,s.boolean)(`Loading`,!1),p=(0,s.boolean)(`Shadow`,!1),m=l(`button-click`);return(0,c.jsx)(r,{design:n,size:i,shadow:p,onClick:m,icon:u,position:d,disabled:a,loading:f,children:t})},f=[`_WithIcon`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
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
  const buttonIcon = select('Icon', iconList, Object.keys(iconList)[0]);
  const buttonIconPosition = select('Icon Position', {
    Left: 'left',
    Right: 'right'
  }, 'right');
  const buttonLoading = boolean('Loading', false);
  const buttonShadow = boolean('Shadow', false);
  const buttonOnClick = action('button-click');
  return <ButtonWithIcon design={buttonDesign} size={buttonSize} shadow={buttonShadow} onClick={buttonOnClick} icon={buttonIcon} position={buttonIconPosition} disabled={buttonDisabled} loading={buttonLoading}>
      {buttonText}
    </ButtonWithIcon>;
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as _WithIcon,f as __namedExportsOrder,u as default};