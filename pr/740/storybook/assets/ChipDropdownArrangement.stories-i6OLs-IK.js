import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ChipDropdown-bs8k7ufC.js";import{_ as a}from"./iframe-BmxEQ5Tp.js";import{n as o,t as s}from"./helpers-DslKeo0d.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{c=a(),l=t(),r(),o(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Chips/molecules`,component:i,decorators:[]},p=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],m=()=>{let e=s(),t=(0,c.boolean)(`Labelled mode (off = icon-only 56px trigger)`,!0),n=(0,c.select)(`Check icon`,e,`Success`),r=(0,c.boolean)(`Disabled`,!1),[a,o]=(0,l.useState)(`6-up`),f=d(`arrangement-select`),m=p.find(({id:e})=>e===a),h=p.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{f(e),o(e)}}));return(0,u.jsx)(`div`,{style:{padding:`20px 20px 220px`},children:(0,u.jsx)(i,{items:h,icon:m?.icon??`LayoutGrid`,label:t?m?.label:void 0,selectedId:a,checkIcon:n,triggerLabel:m?`${m.label} arrangement`:void 0,noDivider:!0,disabled:r,onOpenChange:d(`open-change`)})})},h=[`_ChipDropdownArrangement`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as _ChipDropdownArrangement,h as __namedExportsOrder,f as default};