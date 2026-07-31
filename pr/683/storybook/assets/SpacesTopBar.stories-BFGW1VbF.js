import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,It as r,Nt as i,St as a,Ut as o,Wt as s,_ as c,g as l,h as u,m as d,nt as f,s as p,yt as m}from"./iframe-CW3QRQX7.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{h=o(),g=t(s()),a(),r(),_=i(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`Chips/organisms`,component:d,decorators:[]},b=n.div`
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
`,S=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,C=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],w=6,T={read:[],unread:[]},E=()=>{let e=(0,h.boolean)(`Show workspace chip`,!0),t=(0,h.boolean)(`Reset enabled (dirty)`,!0),[n,r]=(0,g.useState)([{uid:`s1`},{uid:`s2`},{uid:`s3`}]),[i,a]=(0,g.useState)(`s3`),[o,s]=(0,g.useState)(null),[y,E]=(0,g.useState)(!1),[D,O]=(0,g.useState)(`4-up`),k=(0,g.useRef)(n.length+1),A=e&&y,j=String(n.findIndex(e=>e.uid===i)+1),M=C.find(({id:e})=>e===D),N=v(`workspace-click`),P=v(`space-click`),F=v(`add-space`),I=v(`duplicate-space`),L=v(`remove-space`),R=v(`arrangement-select`),z=v(`save-space`),B=v(`save-space-as`),V=v(`reset-layout`),H=v(`admin-click`),U=()=>{let e=`s${k.current++}`;r([...n,{uid:e}]),a(e),E(!1)},W=e=>{let t=n.findIndex(t=>t.uid===e);if(t<0)return;let i=n.filter(t=>t.uid!==e);r(i),a(i[Math.min(t,i.length-1)].uid),s(null),E(!1)},G=()=>s(i),K=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:n.length>=w,onClick:()=>{F(),U()}},{id:`duplicate`,label:`Duplicate Space ${j}`,icon:`Copy`,disabled:n.length>=w,onClick:()=>{I(j),U()}},{id:`remove`,label:`Remove Space ${j}`,icon:`Delete`,disabled:n.length<=1,onClick:()=>{L(j),G()}}],q=C.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{R(e),O(e)}})),J=[...n.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>z(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:n.length>=w,onClickCallback:()=>{B(),U()}}],Y=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(d,{"aria-label":`Spaces`,children:[e?(0,_.jsx)(u,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:A,onClick:()=>{N(),E(!0)}}):null,n.map((e,t)=>{let n=String(t+1);return(0,_.jsx)(u,{leaving:e.uid===o,onLeaveEnd:()=>W(e.uid),variant:`text`,label:n,selected:!A&&e.uid===i,"aria-label":`Space ${n}`,onClick:()=>{P(n),a(e.uid),E(!1)}},e.uid)}),(0,_.jsx)(l,{items:K,disabled:A,onOpenChange:v(`space-menu-open-change`)})]}),(0,_.jsx)(c,{}),(0,_.jsx)(d,{"aria-label":`Layout controls`,children:(0,_.jsx)(l,{items:q,icon:M?.icon??`LayoutGrid`,label:M?.label,selectedId:D,triggerLabel:M?`${M.label} arrangement`:void 0,onOpenChange:v(`arrangement-open-change`)})}),(0,_.jsx)(b,{children:(0,_.jsx)(f,{mainButtonId:`save-${i}`,buttonList:J})}),(0,_.jsx)(x,{children:(0,_.jsx)(p,{design:`text-only`,noPadding:!0,disabled:!t,onClick:V,children:`Reset`})}),(0,_.jsx)(c,{})]});return(0,_.jsx)(S,{children:(0,_.jsx)(m,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:T,badge:{text:`Admin`,color:`grey`,onClick:H},leftAreaElement:Y})})},E.__docgenInfo={description:``,methods:[],displayName:`_SpacesTopBar`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
  const onAdminClick = action('admin-click');
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
  const leftAreaElement = <>
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
    </>;
  return <FixedTopBar>
      <TopBar loggedInUser='full.name@example.com' hasNotifications notificationsHistory={NOTIFICATIONS_HISTORY} badge={{
      text: 'Admin',
      color: 'grey',
      onClick: onAdminClick
    }} leftAreaElement={leftAreaElement} />
    </FixedTopBar>;
}`,...E.parameters?.docs?.source}}},D=[`_SpacesTopBar`]}))();export{E as _SpacesTopBar,D as __namedExportsOrder,y as default};