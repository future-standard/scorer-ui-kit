import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ct as n,Gt as r,Pt as i,Wt as a,g as o,h as s,m as c}from"./iframe-a2YLqPZY.js";var l,u,d,f,p,m,h,g;e((()=>{l=a(),u=t(r()),n(),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Chips/organisms`,component:c,decorators:[]},m=6,h=()=>{let e=(0,l.boolean)(`Show workspace chip`,!0),[t,n]=(0,u.useState)([{uid:`s1`},{uid:`s2`},{uid:`s3`}]),[r,i]=(0,u.useState)(`s1`),[a,p]=(0,u.useState)(null),[h,g]=(0,u.useState)(!1),_=(0,u.useRef)(t.length+1),v=e&&h,y=String(t.findIndex(e=>e.uid===r)+1),b=f(`workspace-click`),x=f(`space-click`),S=f(`add-space`),C=f(`duplicate-space`),w=f(`remove-space`),T=()=>{let e=`s${_.current++}`;n([...t,{uid:e}]),i(e),g(!1)},E=e=>{let r=t.findIndex(t=>t.uid===e);if(r<0)return;let a=t.filter(t=>t.uid!==e);n(a),i(a[Math.min(r,a.length-1)].uid),p(null),g(!1)},D=()=>p(r),O=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:t.length>=m,onClick:()=>{S(),T()}},{id:`duplicate`,label:`Duplicate Space ${y}`,icon:`Copy`,disabled:t.length>=m,onClick:()=>{C(y),T()}},{id:`remove`,label:`Remove Space ${y}`,icon:`Delete`,disabled:t.length<=1,onClick:()=>{w(y),D()}}];return(0,d.jsx)(`div`,{style:{padding:`0 0 220px`},children:(0,d.jsxs)(c,{"aria-label":`Spaces`,children:[e?(0,d.jsx)(s,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:v,onClick:()=>{b(),g(!0)}}):null,t.map((e,t)=>{let n=String(t+1);return(0,d.jsx)(s,{leaving:e.uid===a,onLeaveEnd:()=>E(e.uid),variant:`text`,label:n,selected:!v&&e.uid===r,"aria-label":`Space ${n}`,onClick:()=>{x(n),i(e.uid),g(!1)}},e.uid)}),(0,d.jsx)(o,{items:O,disabled:v,onOpenChange:f(`open-change`)})]})})},h.__docgenInfo={description:``,methods:[],displayName:`_ChipBar`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const showWorkspace = boolean('Show workspace chip', true);

  // Spaces carry a stable uid and take their number from their position. That is what makes the
  // removal legible: the chip you removed is the one that unmounts, and the chips to its right
  // really do get a new number. Keying by the number instead would silently unmount the
  // *rightmost* chip and change no label at all.
  const [spaces, setSpaces] = useState<ISpace[]>([{
    uid: 's1'
  }, {
    uid: 's2'
  }, {
    uid: 's3'
  }]);
  const [selectedUid, setSelectedUid] = useState('s1');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex(space => space.uid === selectedUid) + 1);
  const onWorkspaceClick = action('workspace-click');
  const onSpaceClick = action('space-click');
  const onAdd = action('add-space');
  const onDuplicate = action('duplicate-space');
  const onRemove = action('remove-space');

  // Add and Duplicate both append: a Space carries no content of its own here, so a copy is just
  // another Space on the right, taking the next number.
  const appendSpace = () => {
    const uid = \`s\${nextUid.current++}\`;
    setSpaces([...spaces, {
      uid
    }]);
    setSelectedUid(uid);
    setIsWorkspaceActive(false);
  };
  const dropSpace = (uid: string) => {
    const index = spaces.findIndex(space => space.uid === uid);
    if (index < 0) {
      return; // already gone
    }
    const remaining = spaces.filter(space => space.uid !== uid);
    setSpaces(remaining);
    // the Space that sat to the right takes its number — clamp when the last one went
    setSelectedUid(remaining[Math.min(index, remaining.length - 1)].uid);
    setLeavingUid(null);
    setIsWorkspaceActive(false);
  };

  // Mark the cell as leaving and let the chip collapse; it calls onLeaveEnd when it is done (or
  // immediately, if the user prefers reduced motion). The numbers to its right therefore only
  // shift once the gap has finished closing.
  const removeSelectedSpace = () => setLeavingUid(selectedUid);
  const menuItems: IChipDropdownItem[] = [{
    id: 'add',
    label: 'Add Space',
    icon: 'Add',
    disabled: spaces.length >= MAX_SPACES,
    onClick: () => {
      onAdd();
      appendSpace();
    }
  }, {
    id: 'duplicate',
    label: \`Duplicate Space \${selectedNumber}\`,
    icon: 'Copy',
    disabled: spaces.length >= MAX_SPACES,
    onClick: () => {
      onDuplicate(selectedNumber);
      appendSpace();
    }
  }, {
    id: 'remove',
    label: \`Remove Space \${selectedNumber}\`,
    icon: 'Delete',
    disabled: spaces.length <= 1,
    onClick: () => {
      onRemove(selectedNumber);
      removeSelectedSpace();
    }
  }];
  return (
    // room below the bar so the open dropdown menu is visible in the canvas
    <div style={{
      padding: '0 0 220px'
    }}>
      <ChipBar aria-label='Spaces'>
        {showWorkspace ? <ChipButton variant='icon' icon='LayoutGrid' aria-label='Workspace' selected={workspaceActive} onClick={() => {
          onWorkspaceClick();
          setIsWorkspaceActive(true);
        }} /> : null}
        {spaces.map((space, index) => {
          const number = String(index + 1);
          return <ChipButton key={space.uid} leaving={space.uid === leavingUid} onLeaveEnd={() => dropSpace(space.uid)} variant='text' label={number} selected={!workspaceActive && space.uid === selectedUid} aria-label={\`Space \${number}\`} onClick={() => {
            onSpaceClick(number);
            setSelectedUid(space.uid);
            setIsWorkspaceActive(false);
          }} />;
        })}
        {/* the Workspace is not a Space, so it cannot be duplicated or removed —
            the whole menu is disabled while it is the active cell */}
        <ChipDropdown items={menuItems} disabled={workspaceActive} onOpenChange={action('open-change')} />
      </ChipBar>
    </div>
  );
}`,...h.parameters?.docs?.source}}},g=[`_ChipBar`]}))();export{h as _ChipBar,g as __namedExportsOrder,p as default};