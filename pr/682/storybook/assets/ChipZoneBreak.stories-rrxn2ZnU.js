import{i as e}from"./preload-helper-xPQekRTU.js";import{Ft as t,It as n,Nt as r,St as i,Ut as a,_ as o,g as s,h as c,m as l}from"./iframe-DB8xyy-s.js";var u,d,f,p,m,h,g,_;e((()=>{u=a(),i(),n(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Chips/atoms`,component:o,decorators:[]},m=t.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`,h=t.div`
  flex-shrink: 0;
  width: 1px;
  height: 56px;
  background-color: var(--grey-4);
`,g=()=>{let e=(0,u.boolean)(`Use zone break (off = plain 1px divider)`,!0),t=(0,u.boolean)(`Trailing zone break`,!0),n=f(`cell-click`),r=e?o:h;return(0,d.jsxs)(m,{children:[(0,d.jsxs)(l,{"aria-label":`Spaces`,children:[(0,d.jsx)(c,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,onClick:n}),(0,d.jsx)(c,{label:`1`,onClick:n,"aria-label":`Space 1`}),(0,d.jsx)(c,{label:`2`,onClick:n,"aria-label":`Space 2`}),(0,d.jsx)(c,{label:`3`,selected:!0,onClick:n,"aria-label":`Space 3`}),(0,d.jsx)(s,{items:[{id:`add`,label:`Add Space`,icon:`Add`,onClick:n},{id:`duplicate`,label:`Duplicate Space 3`,icon:`Copy`,onClick:n},{id:`remove`,label:`Remove Space 3`,icon:`Delete`,onClick:n}]})]}),(0,d.jsx)(r,{}),(0,d.jsxs)(l,{"aria-label":`Layout controls`,children:[(0,d.jsx)(c,{variant:`icon`,icon:`LayoutList`,"aria-label":`Arrangement`,onClick:n}),(0,d.jsx)(c,{variant:`icon`,icon:`Download`,"aria-label":`Save`,onClick:n})]}),t?(0,d.jsx)(r,{}):null]})},g.__docgenInfo={description:``,methods:[],displayName:`_ChipZoneBreak`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const useZoneBreak = boolean('Use zone break (off = plain 1px divider)', true);
  const trailingBreak = boolean('Trailing zone break', true);
  const onClick = action('cell-click');
  const Separator = useZoneBreak ? ChipZoneBreak : Hairline;
  return <TopBar>
      <ChipBar aria-label='Spaces'>
        <ChipButton variant='icon' icon='LayoutGrid' aria-label='Workspace' onClick={onClick} />
        <ChipButton label='1' onClick={onClick} aria-label='Space 1' />
        <ChipButton label='2' onClick={onClick} aria-label='Space 2' />
        <ChipButton label='3' selected onClick={onClick} aria-label='Space 3' />
        <ChipDropdown items={[{
        id: 'add',
        label: 'Add Space',
        icon: 'Add',
        onClick
      }, {
        id: 'duplicate',
        label: 'Duplicate Space 3',
        icon: 'Copy',
        onClick
      }, {
        id: 'remove',
        label: 'Remove Space 3',
        icon: 'Delete',
        onClick
      }]} />
      </ChipBar>

      <Separator />

      <ChipBar aria-label='Layout controls'>
        <ChipButton variant='icon' icon='LayoutList' aria-label='Arrangement' onClick={onClick} />
        <ChipButton variant='icon' icon='Download' aria-label='Save' onClick={onClick} />
      </ChipBar>

      {trailingBreak ? <Separator /> : null}
    </TopBar>;
}`,...g.parameters?.docs?.source}}},_=[`_ChipZoneBreak`]}))();export{g as _ChipZoneBreak,_ as __namedExportsOrder,p as default};