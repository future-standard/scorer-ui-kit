import{Ft as e,Wt as t,l as n,wt as r}from"./iframe-DTJIpfwE.js";import{n as i,t as a}from"./helpers-Dou4BzkT.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=t(),r(),i(),c=e(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Buttons`,component:n,decorators:[]},d=()=>{let e=a(),t=(0,s.text)(`Button Text`,`Example Title`),r=(0,s.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),i=(0,s.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),o=(0,s.boolean)(`Disabled`,!1),u=(0,s.select)(`Icon`,e,Object.keys(e)[0]),d=(0,s.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,s.boolean)(`Loading`,!1),p=(0,s.boolean)(`Shadow`,!1),m=l(`button-click`);return(0,c.jsx)(n,{design:r,size:i,shadow:p,onClick:m,icon:u,position:d,disabled:o,loading:f,children:t})},d.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_WithIcon`]})))()}p();export{d as _WithIcon,f as __namedExportsOrder,u as default};