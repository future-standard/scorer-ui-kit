import{Ft as e,Wt as t,g as n,wt as r}from"./iframe-DFQHAkQ-.js";import{n as i,t as a}from"./helpers-CXAXeTVq.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f;function p(){return(p=o((()=>{s=t(),r(),i(),c=e(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Chips/atoms`,component:n,decorators:[]},d=()=>{let e=a(),t=(0,s.select)(`Variant`,{Icon:`icon`,Text:`text`,"Icon + text":`icon-text`},`text`),r=(0,s.select)(`Icon`,e,`LayoutGrid`),i=(0,s.text)(`Label`,`1`),o=(0,s.boolean)(`Compact`,!1),u=(0,s.boolean)(`Selected`,!1),d=(0,s.boolean)(`Bar only (no wash, needs Selected)`,!1),f=(0,s.boolean)(`No divider`,!1),p=l(`chip-click`);return(0,c.jsx)(n,{variant:t,icon:r,label:i,isCompact:o,selected:u,barOnly:d,noDivider:f,onClick:p,"aria-label":t===`icon`?`Workspace`:t===`text`?`Space ${i}`:void 0})},d.__docgenInfo={description:``,methods:[],displayName:`_ChipButton`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const variant = select('Variant', {
    Icon: 'icon',
    Text: 'text',
    'Icon + text': 'icon-text'
  }, 'text');
  const icon = select('Icon', iconList, 'LayoutGrid');
  const label = text('Label', '1');
  const isCompact = boolean('Compact', false);
  const selected = boolean('Selected', false);
  const barOnly = boolean('Bar only (no wash, needs Selected)', false);
  const noDivider = boolean('No divider', false);
  const onClick = action('chip-click');
  return <ChipButton variant={variant as IChipVariant} icon={icon} label={label} isCompact={isCompact} selected={selected} barOnly={barOnly} noDivider={noDivider} onClick={onClick}
  // the rendered label is the accessible name in icon-text mode, so an aria-label that dropped
  // it would fail WCAG 2.5.3 — the same trap ChipDropdown documents for its labelled trigger
  aria-label={variant === 'icon' ? 'Workspace' : variant === 'text' ? \`Space \${label}\` : undefined} />;
}`,...d.parameters?.docs?.source}}},f=[`_ChipButton`]})))()}p();export{d as _ChipButton,f as __namedExportsOrder,u as default};