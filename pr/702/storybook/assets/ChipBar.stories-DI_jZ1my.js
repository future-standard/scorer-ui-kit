import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Wt as n,_ as r,g as i,h as a,wt as o}from"./iframe-DTJIpfwE.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{c=n(),l=e(),o(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Chips/organisms`,component:a,decorators:[]},p=6,m=()=>{let e=(0,c.boolean)(`Show workspace chip`,!0),[t,n]=(0,l.useState)([{uid:`s1`},{uid:`s2`},{uid:`s3`}]),[o,s]=(0,l.useState)(`s1`),[f,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1),_=(0,l.useRef)(t.length+1),v=e&&h,y=String(t.findIndex(e=>e.uid===o)+1),b=d(`workspace-click`),x=d(`space-click`),S=d(`add-space`),C=d(`duplicate-space`),w=d(`remove-space`),T=()=>{let e=`s${_.current++}`;n([...t,{uid:e}]),s(e),g(!1)},E=e=>{let r=t.findIndex(t=>t.uid===e);if(r<0)return;let i=t.filter(t=>t.uid!==e);n(i),s(i[Math.min(r,i.length-1)].uid),m(null),g(!1)},D=()=>m(o),O=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:t.length>=p,onClick:()=>{S(),T()}},{id:`duplicate`,label:`Duplicate Space ${y}`,icon:`Copy`,disabled:t.length>=p,onClick:()=>{C(y),T()}},{id:`remove`,label:`Remove Space ${y}`,icon:`Delete`,disabled:t.length<=1,onClick:()=>{w(y),D()}}];return(0,u.jsx)(`div`,{style:{padding:`0 0 220px`},children:(0,u.jsxs)(a,{"aria-label":`Spaces`,children:[e?(0,u.jsx)(i,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:v,onClick:()=>{b(),g(!0)}}):null,t.map((e,t)=>{let n=String(t+1);return(0,u.jsx)(i,{leaving:e.uid===f,onLeaveEnd:()=>E(e.uid),variant:`text`,label:n,selected:!v&&e.uid===o,"aria-label":`Space ${n}`,onClick:()=>{x(n),s(e.uid),g(!1)}},e.uid)}),(0,u.jsx)(r,{items:O,disabled:v,onOpenChange:d(`open-change`)})]})})},m.__docgenInfo={description:``,methods:[],displayName:`_ChipBar`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_ChipBar`]})))()}g();export{m as _ChipBar,h as __namedExportsOrder,f as default};