import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,St as n,Ut as r,h as i}from"./iframe-CW3QRQX7.js";import{n as a,t as o}from"./helpers-ChWV1T_Y.js";var s,c,l,u,d,f;e((()=>{s=r(),n(),a(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Chips/atoms`,component:i,decorators:[]},d=()=>{let e=o(),t=(0,s.select)(`Variant`,{Icon:`icon`,Text:`text`},`text`),n=(0,s.select)(`Icon`,e,`LayoutGrid`),r=(0,s.text)(`Label`,`1`);return(0,c.jsx)(i,{variant:t,icon:n,label:r,selected:(0,s.boolean)(`Selected`,!1),noDivider:(0,s.boolean)(`No divider`,!1),onClick:l(`chip-click`),"aria-label":t===`icon`?`Workspace`:`Space ${r}`})},d.__docgenInfo={description:``,methods:[],displayName:`_ChipButton`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const variant = select('Variant', {
    Icon: 'icon',
    Text: 'text'
  }, 'text');
  const icon = select('Icon', iconList, 'LayoutGrid');
  const label = text('Label', '1');
  const selected = boolean('Selected', false);
  const noDivider = boolean('No divider', false);
  const onClick = action('chip-click');
  return <ChipButton variant={variant as IChipVariant} icon={icon} label={label} selected={selected} noDivider={noDivider} onClick={onClick} aria-label={variant === 'icon' ? 'Workspace' : \`Space \${label}\`} />;
}`,...d.parameters?.docs?.source}}},f=[`_ChipButton`]}))();export{d as _ChipButton,f as __namedExportsOrder,u as default};