import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,It as r,Nt as i,St as a,Ut as o,Wt as s,_ as c,g as l,h as u,m as d,nt as f,s as p}from"./iframe-DB8xyy-s.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{m=o(),h=t(s()),a(),r(),g=i(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Chips/organisms`,component:d,decorators:[]},y=n.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: var(--grey-2);
  border-bottom: 1px solid var(--dividing-line);
`,b=n.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`,x=n.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`,S=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],C=6,w=()=>{let e=(0,m.boolean)(`Show workspace chip`,!0),t=(0,m.boolean)(`Reset enabled (dirty)`,!0),[n,r]=(0,h.useState)([{uid:`s1`},{uid:`s2`},{uid:`s3`}]),[i,a]=(0,h.useState)(`s3`),[o,s]=(0,h.useState)(null),[v,w]=(0,h.useState)(!1),[T,E]=(0,h.useState)(`4-up`),D=(0,h.useRef)(n.length+1),O=e&&v,k=String(n.findIndex(e=>e.uid===i)+1),A=S.find(({id:e})=>e===T),j=_(`workspace-click`),M=_(`space-click`),N=_(`add-space`),P=_(`duplicate-space`),F=_(`remove-space`),I=_(`arrangement-select`),L=_(`save-space`),R=_(`save-space-as`),z=_(`reset-layout`),B=()=>{let e=`s${D.current++}`;r([...n,{uid:e}]),a(e),w(!1)},V=e=>{let t=n.findIndex(t=>t.uid===e);if(t<0)return;let i=n.filter(t=>t.uid!==e);r(i),a(i[Math.min(t,i.length-1)].uid),s(null),w(!1)},H=()=>s(i),U=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:n.length>=C,onClick:()=>{N(),B()}},{id:`duplicate`,label:`Duplicate Space ${k}`,icon:`Copy`,disabled:n.length>=C,onClick:()=>{P(k),B()}},{id:`remove`,label:`Remove Space ${k}`,icon:`Delete`,disabled:n.length<=1,onClick:()=>{F(k),H()}}],W=S.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{I(e),E(e)}})),G=[...n.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>L(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:n.length>=C,onClickCallback:()=>{R(),B()}}];return(0,g.jsx)(`div`,{style:{padding:`0 0 260px`},children:(0,g.jsxs)(y,{children:[(0,g.jsxs)(d,{"aria-label":`Spaces`,children:[e?(0,g.jsx)(u,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:O,onClick:()=>{j(),w(!0)}}):null,n.map((e,t)=>{let n=String(t+1);return(0,g.jsx)(u,{leaving:e.uid===o,onLeaveEnd:()=>V(e.uid),variant:`text`,label:n,selected:!O&&e.uid===i,"aria-label":`Space ${n}`,onClick:()=>{M(n),a(e.uid),w(!1)}},e.uid)}),(0,g.jsx)(l,{items:U,disabled:O,onOpenChange:_(`space-menu-open-change`)})]}),(0,g.jsx)(c,{}),(0,g.jsx)(d,{"aria-label":`Layout controls`,children:(0,g.jsx)(l,{items:W,icon:A?.icon??`LayoutGrid`,label:A?.label,selectedId:T,triggerLabel:A?`${A.label} arrangement`:void 0,onOpenChange:_(`arrangement-open-change`)})}),(0,g.jsx)(b,{children:(0,g.jsx)(f,{mainButtonId:`save-${i}`,buttonList:G})}),(0,g.jsx)(x,{children:(0,g.jsx)(p,{design:`text-only`,noPadding:!0,disabled:!t,onClick:z,children:`Reset`})}),(0,g.jsx)(c,{})]})})},w.__docgenInfo={description:``,methods:[],displayName:`_SpacesTopBar`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const showWorkspace = boolean('Show workspace chip', true);
  const canReset = boolean('Reset enabled (dirty)', true);

  // a stable uid with the number taken from position, so the chip you remove is the one that
  // unmounts and the chips to its right really do renumber
  const [spaces, setSpaces] = useState<ISpace[]>([{
    uid: 's1'
  }, {
    uid: 's2'
  }, {
    uid: 's3'
  }]);
  const [selectedUid, setSelectedUid] = useState('s3');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const [arrangementId, setArrangementId] = useState('4-up');
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex(space => space.uid === selectedUid) + 1);
  const arrangement = ARRANGEMENTS.find(({
    id
  }) => id === arrangementId);
  const onWorkspaceClick = action('workspace-click');
  const onSpaceClick = action('space-click');
  const onAdd = action('add-space');
  const onDuplicate = action('duplicate-space');
  const onRemove = action('remove-space');
  const onArrangement = action('arrangement-select');
  const onSave = action('save-space');
  const onSaveAs = action('save-space-as');
  const onReset = action('reset-layout');
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

  // ChipButton collapses the cell and calls onLeaveEnd when done, so the renumbering waits for the
  // gap to close
  const removeSelectedSpace = () => setLeavingUid(selectedUid);

  // interpolating the active Space into these labels is the consumer's job, not ChipDropdown's
  const spaceMenuItems: IChipDropdownItem[] = [{
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
  const arrangementItems: IChipDropdownItem[] = ARRANGEMENTS.map(({
    id,
    label,
    icon
  }) => ({
    id,
    label,
    icon,
    onClick: () => {
      onArrangement(id);
      setArrangementId(id);
    }
  }));

  // one row per Space with the active one as mainButtonId, which SplitButton excludes from the
  // dropdown. Derived from \`spaces\`, so it tracks additions and removals on its own.
  const saveButtonList = [...spaces.map((space, index) => ({
    id: \`save-\${space.uid}\`,
    text: \`Save Space \${index + 1}\`,
    onClickCallback: () => onSave(String(index + 1))
  })), {
    id: 'add-new',
    text: 'Add new space',
    icon: 'Add',
    disabled: spaces.length >= MAX_SPACES,
    onClickCallback: () => {
      onSaveAs();
      appendSpace();
    }
  }];
  return (
    // room below the bar so the open menus are visible in the canvas
    <div style={{
      padding: '0 0 260px'
    }}>
      <TopBar>
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
          {/* the Workspace is not a Space, so it cannot be duplicated or removed */}
          <ChipDropdown items={spaceMenuItems} disabled={workspaceActive} onOpenChange={action('space-menu-open-change')} />
        </ChipBar>

        {/* both zone breaks present, so the "cells beside a break drop their border" rule reads */}
        <ChipZoneBreak />
        <ChipBar aria-label='Layout controls'>
          <ChipDropdown items={arrangementItems} icon={arrangement?.icon ?? 'LayoutGrid'} label={arrangement?.label} selectedId={arrangementId}
          // leads with the value on screen: an aria-label that dropped it would fail WCAG 2.5.3
          triggerLabel={arrangement ? \`\${arrangement.label} arrangement\` : undefined} onOpenChange={action('arrangement-open-change')} />
        </ChipBar>
        <SaveCell>
          <SplitButton mainButtonId={\`save-\${selectedUid}\`} buttonList={saveButtonList} />
        </SaveCell>
        <ResetCell>
          <Button design='text-only' noPadding disabled={!canReset} onClick={onReset}>
            Reset
          </Button>
        </ResetCell>
        <ChipZoneBreak />
      </TopBar>
    </div>
  );
}`,...w.parameters?.docs?.source}}},T=[`_SpacesTopBar`]}))();export{w as _SpacesTopBar,T as __namedExportsOrder,v as default};