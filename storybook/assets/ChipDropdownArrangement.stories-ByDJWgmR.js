import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Nt as n,St as r,Ut as i,Wt as a,g as o}from"./iframe-CW3QRQX7.js";import{n as s,t as c}from"./helpers-ChWV1T_Y.js";var l,u,d,f,p,m,h,g;e((()=>{l=i(),u=t(a()),r(),s(),d=n(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Chips/molecules`,component:o,decorators:[]},m=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],h=()=>{let e=c(),t=(0,l.boolean)(`Labelled mode (off = icon-only 56px trigger)`,!0),n=(0,l.select)(`Check icon`,e,`Success`),r=(0,l.boolean)(`Disabled`,!1),[i,a]=(0,u.useState)(`6-up`),s=f(`arrangement-select`),p=m.find(({id:e})=>e===i);return(0,d.jsx)(`div`,{style:{padding:`20px 20px 220px`},children:(0,d.jsx)(o,{items:m.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{s(e),a(e)}})),icon:p?.icon??`LayoutGrid`,label:t?p?.label:void 0,selectedId:i,checkIcon:n,triggerLabel:p?`${p.label} arrangement`:void 0,noDivider:!0,disabled:r,onOpenChange:f(`open-change`)})})},h.__docgenInfo={description:``,methods:[],displayName:`_ChipDropdownArrangement`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();

  // clearing \`label\` returns the trigger to the icon-only 56px square. A toggle, not a text knob:
  // the trigger text tracks the selected row rather than being free-form.
  const labelled = boolean('Labelled mode (off = icon-only 56px trigger)', true);
  const checkIcon = select('Check icon', iconList, 'Success');
  const disabled = boolean('Disabled', false);
  const [selectedId, setSelectedId] = useState('6-up');
  const onSelect = action('arrangement-select');
  const current = ARRANGEMENTS.find(({
    id
  }) => id === selectedId);
  const items: IChipDropdownItem[] = ARRANGEMENTS.map(({
    id,
    label,
    icon
  }) => ({
    id,
    label,
    icon,
    onClick: () => {
      onSelect(id);
      setSelectedId(id);
    }
  }));
  return (
    // room below the trigger so the open menu is visible in the canvas
    <div style={{
      padding: '20px 20px 220px'
    }}>
      <ChipDropdown items={items} icon={current?.icon ?? 'LayoutGrid'} label={labelled ? current?.label : undefined} selectedId={selectedId} checkIcon={checkIcon}
      /* aria-label replaces the content as the accessible name, so it has to lead with the value
         on screen — otherwise "6-up" is unreachable by voice and fails WCAG 2.5.3 */ triggerLabel={current ? \`\${current.label} arrangement\` : undefined}
      // no left divider: in the top bar a Zone Break owns that hairline
      noDivider disabled={disabled} onOpenChange={action('open-change')} />
    </div>
  );
}`,...h.parameters?.docs?.source}}},g=[`_ChipDropdownArrangement`]}))();export{h as _ChipDropdownArrangement,g as __namedExportsOrder,p as default};