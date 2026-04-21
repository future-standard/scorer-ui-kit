import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,c as i}from"./iframe-CqAvHUfG.js";import{n as a,t as o}from"./helpers-62T94qZR.js";var s,c,l,u,d,f;e((()=>{s=t(),r(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Buttons`,component:i,decorators:[]},d=()=>{let e=o(),t=(0,s.text)(`Button Text`,`Example Title`),n=(0,s.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),r=(0,s.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),a=(0,s.boolean)(`Disabled`,!1),u=(0,s.select)(`Icon`,e,Object.keys(e)[0]),d=(0,s.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,s.boolean)(`Loading`,!1);return(0,c.jsx)(i,{design:n,size:r,shadow:(0,s.boolean)(`Shadow`,!1),onClick:l(`button-click`),icon:u,position:d,disabled:a,loading:f,children:t})},d.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_WithIcon`]}))();export{d as _WithIcon,f as __namedExportsOrder,u as default};