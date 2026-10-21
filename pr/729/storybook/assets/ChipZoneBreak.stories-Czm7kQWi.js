import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ChipButton-GvD4BqKN.js";import{n as i,t as a}from"./ChipZoneBreak-Dfc8qhhT.js";import{n as o,t as s}from"./ChipDropdown-B5kOOcaK.js";import{n as c,t as l}from"./ChipBar-Ds94yyAA.js";import{_ as u,a as d,o as f}from"./iframe-Cw1eIbNi.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{p=u(),c(),n(),o(),i(),f(),m=t(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Chips/atoms`,component:a,decorators:[]},_=d.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`,v=d.div`
  flex-shrink: 0;
  width: 1px;
  height: 56px;
  background-color: var(--grey-4);
`,y=()=>{let e=(0,p.boolean)(`Use zone break (off = plain 1px divider)`,!0),t=(0,p.boolean)(`Trailing zone break`,!0),n=h(`cell-click`),i=e?a:v;return(0,m.jsxs)(_,{children:[(0,m.jsxs)(l,{"aria-label":`Spaces`,children:[(0,m.jsx)(r,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,onClick:n}),(0,m.jsx)(r,{label:`1`,onClick:n,"aria-label":`Space 1`}),(0,m.jsx)(r,{label:`2`,onClick:n,"aria-label":`Space 2`}),(0,m.jsx)(r,{label:`3`,selected:!0,onClick:n,"aria-label":`Space 3`}),(0,m.jsx)(s,{items:[{id:`add`,label:`Add Space`,icon:`Add`,onClick:n},{id:`duplicate`,label:`Duplicate Space 3`,icon:`Copy`,onClick:n},{id:`remove`,label:`Remove Space 3`,icon:`Delete`,onClick:n}]})]}),(0,m.jsx)(i,{}),(0,m.jsxs)(l,{"aria-label":`Layout controls`,children:[(0,m.jsx)(r,{variant:`icon`,icon:`LayoutList`,"aria-label":`Arrangement`,onClick:n}),(0,m.jsx)(r,{variant:`icon`,icon:`Download`,"aria-label":`Save`,onClick:n})]}),t?(0,m.jsx)(i,{}):null]})},b=[`_ChipZoneBreak`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as _ChipZoneBreak,b as __namedExportsOrder,g as default};