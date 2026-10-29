import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ChipButton-B2i6cDuN.js";import{n as a,t as o}from"./ChipDropdown-bs8k7ufC.js";import{n as s,t as c}from"./ChipBar-D3U3k2Dw.js";import{_ as l}from"./iframe-BmxEQ5Tp.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=l(),d=t(),s(),r(),a(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Chips/organisms`,component:c,decorators:[]},h=6,g=()=>{let e=(0,u.boolean)(`Show workspace chip`,!0),[t,n]=(0,d.useState)([{uid:`s1`},{uid:`s2`},{uid:`s3`}]),[r,a]=(0,d.useState)(`s1`),[s,l]=(0,d.useState)(null),[m,g]=(0,d.useState)(!1),_=(0,d.useRef)(t.length+1),v=e&&m,y=String(t.findIndex(e=>e.uid===r)+1),b=p(`workspace-click`),x=p(`space-click`),S=p(`add-space`),C=p(`duplicate-space`),w=p(`remove-space`),T=()=>{let e=`s${_.current++}`;n([...t,{uid:e}]),a(e),g(!1)},E=e=>{let r=t.findIndex(t=>t.uid===e);if(r<0)return;let i=t.filter(t=>t.uid!==e);n(i),a(i[Math.min(r,i.length-1)].uid),l(null),g(!1)},D=()=>l(r),O=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:t.length>=h,onClick:()=>{S(),T()}},{id:`duplicate`,label:`Duplicate Space ${y}`,icon:`Copy`,disabled:t.length>=h,onClick:()=>{C(y),T()}},{id:`remove`,label:`Remove Space ${y}`,icon:`Delete`,disabled:t.length<=1,onClick:()=>{w(y),D()}}];return(0,f.jsx)(`div`,{style:{padding:`0 0 220px`},children:(0,f.jsxs)(c,{"aria-label":`Spaces`,children:[e?(0,f.jsx)(i,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:v,onClick:()=>{b(),g(!0)}}):null,t.map((e,t)=>{let n=String(t+1);return(0,f.jsx)(i,{leaving:e.uid===s,onLeaveEnd:()=>E(e.uid),variant:`text`,label:n,selected:!v&&e.uid===r,"aria-label":`Space ${n}`,onClick:()=>{x(n),a(e.uid),g(!1)}},e.uid)}),(0,f.jsx)(o,{items:O,disabled:v,onOpenChange:p(`open-change`)})]})})},_=[`_ChipBar`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as _ChipBar,_ as __namedExportsOrder,m as default};