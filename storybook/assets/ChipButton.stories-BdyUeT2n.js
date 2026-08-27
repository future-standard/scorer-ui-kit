import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,Pt as n,Wt as r,h as i}from"./iframe-FLpC4IdY.js";import{n as a,t as o}from"./helpers-BJkmT8eL.js";var s,c,l,u,d,f;e((()=>{s=r(),t(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Chips/atoms`,component:i,decorators:[]},d=()=>{let e=o(),t=(0,s.select)(`Variant`,{Icon:`icon`,Text:`text`,"Icon + text":`icon-text`},`text`),n=(0,s.select)(`Icon`,e,`LayoutGrid`),r=(0,s.text)(`Label`,`1`);return(0,c.jsx)(i,{variant:t,icon:n,label:r,isCompact:(0,s.boolean)(`Compact`,!1),selected:(0,s.boolean)(`Selected`,!1),barOnly:(0,s.boolean)(`Bar only (no wash, needs Selected)`,!1),noDivider:(0,s.boolean)(`No divider`,!1),onClick:l(`chip-click`),"aria-label":t===`icon`?`Workspace`:t===`text`?`Space ${r}`:void 0})},d.__docgenInfo={description:``,methods:[],displayName:`_ChipButton`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f=[`_ChipButton`]}))();export{d as _ChipButton,f as __namedExportsOrder,u as default};