import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,kt as n,vt as r,zt as i}from"./iframe-cNP1dtGl.js";import{n as a,t as o}from"./helpers-D7M4tyZO.js";var s,c,l,u,d,f;e((()=>{s=i(),r(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Form/Buttons`,component:t,decorators:[]},d=()=>{let e=o(),n=(0,s.text)(`Button Text`,`Example Title`),r=(0,s.select)(`Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`,TextOnly:`text-only`,Outline:`outline`},`primary`),i=(0,s.select)(`Size`,{Xsmall:`xsmall`,Small:`small`,Normal:`normal`,Large:`large`},`normal`),a=(0,s.boolean)(`Disabled`,!1),u=(0,s.select)(`Icon`,e,Object.keys(e)[0]),d=(0,s.select)(`Icon Position`,{Left:`left`,Right:`right`},`right`),f=(0,s.boolean)(`Loading`,!1);return(0,c.jsx)(t,{design:r,size:i,shadow:(0,s.boolean)(`Shadow`,!1),onClick:l(`button-click`),icon:u,position:d,disabled:a,loading:f,children:n})},d.__docgenInfo={description:``,methods:[],displayName:`_WithIcon`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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