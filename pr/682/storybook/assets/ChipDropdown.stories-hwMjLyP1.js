import{i as e}from"./preload-helper-xPQekRTU.js";import{Nt as t,St as n,Ut as r,g as i}from"./iframe-DB8xyy-s.js";var a,o,s,c,l,u;e((()=>{a=r(),n(),o=t(),{action:s}=__STORYBOOK_MODULE_ACTIONS__,c={title:`Chips/molecules`,component:i,decorators:[]},l=()=>{let e=(0,a.boolean)(`No divider`,!1),t=(0,a.boolean)(`Disabled`,!1);return(0,o.jsx)(`div`,{style:{padding:`20px 20px 220px`},children:(0,o.jsx)(i,{items:[{id:`add`,label:`Add Space`,icon:`Add`,onClick:s(`add-space`)},{id:`duplicate`,label:`Duplicate Space 3`,icon:`Copy`,onClick:s(`duplicate-space`)},{id:`remove`,label:`Remove Space 3`,icon:`Delete`,onClick:s(`remove-space`)}],noDivider:e,disabled:t,onOpenChange:s(`open-change`)})})},l.__docgenInfo={description:``,methods:[],displayName:`_ChipDropdown`},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const noDivider = boolean('No divider', false);
  const disabled = boolean('Disabled', false);
  const items: IChipDropdownItem[] = [{
    id: 'add',
    label: 'Add Space',
    icon: 'Add',
    onClick: action('add-space')
  }, {
    id: 'duplicate',
    label: 'Duplicate Space 3',
    icon: 'Copy',
    onClick: action('duplicate-space')
  }, {
    id: 'remove',
    label: 'Remove Space 3',
    icon: 'Delete',
    onClick: action('remove-space')
  }];
  return (
    // room below the trigger so the open menu is visible in the canvas
    <div style={{
      padding: '20px 20px 220px'
    }}>
      <ChipDropdown items={items} noDivider={noDivider} disabled={disabled} onOpenChange={action('open-change')} />
    </div>
  );
}`,...l.parameters?.docs?.source}}},u=[`_ChipDropdown`]}))();export{l as _ChipDropdown,u as __namedExportsOrder,c as default};