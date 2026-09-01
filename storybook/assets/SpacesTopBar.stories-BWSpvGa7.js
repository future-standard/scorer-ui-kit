import{t as e}from"./react-BZJXY1be.js";import{D as t,Ft as n,Lt as r,Rt as i,Wt as a,_ as o,c as s,g as c,h as l,it as ee,v as u,wt as d,xt as te}from"./iframe-C-UcmyvH.js";import{n as f,r as p}from"./helpers-Cktaogyc.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=m((()=>{h=a(),g=e(),d(),i(),f(),_=n(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={title:`Chips/organisms`,component:l,decorators:[]},b=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`,x=r.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`,S=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,C=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding-left: 44px;
`,w=r.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`,T=r.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`,E=r.div`
  padding: 24px 16px;
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-12);
`,D=[{id:`controls`,width:`320px`,content:(0,_.jsx)(E,{children:`Playback and camera controls would live here.`})}],O=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],k=6,A={read:[],unread:[]},j=()=>{let e=(0,h.boolean)(`Show workspace chip`,!0),n=(0,h.boolean)(`Reset enabled (dirty)`,!0),r=(0,h.boolean)(`Show name bar (bottom area)`,!0),i=(0,h.boolean)(`Taller name bar (40px)`,!1),a=(0,h.boolean)(`Slow rename (shows Saving state)`,!1),[d,f]=(0,g.useState)([{uid:`s1`,name:`Example Name`},{uid:`s2`,name:`Example Name`},{uid:`s3`,name:`Example Name`}]),[m,y]=(0,g.useState)(`s3`),[E,j]=(0,g.useState)(null),[M,N]=(0,g.useState)(!1),[P,F]=(0,g.useState)(`4-up`),[I,L]=(0,g.useState)(!0),[R,z]=(0,g.useState)(null),B=(0,g.useRef)(d.length+1),V=e&&M,H=String(d.findIndex(e=>e.uid===m)+1),U=d.find(e=>e.uid===m),W=O.find(({id:e})=>e===P),G=v(`workspace-click`),K=v(`space-click`),q=v(`add-space`),J=v(`duplicate-space`),Y=v(`remove-space`),X=v(`arrangement-select`),Z=v(`save-space`),ne=v(`save-space-as`),re=v(`reset-layout`),ie=v(`admin-click`),ae=v(`rename-space`),oe=v(`fit-toggle`),se=v(`controls-toggle`),Q=()=>{let e=`s${B.current++}`;f([...d,{uid:e,name:`Example Name`}]),y(e),N(!1)},ce=async(e,t)=>{a&&await p(1200),f(n=>n.map(n=>n.uid===e?{...n,name:t}:n)),ae(e,t)},$=e=>{let t=d.findIndex(t=>t.uid===e);if(t<0)return;let n=d.filter(t=>t.uid!==e);f(n),y(n[Math.min(t,n.length-1)].uid),j(null),N(!1)},le=()=>j(m),ue=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:d.length>=k,onClick:()=>{q(),Q()}},{id:`duplicate`,label:`Duplicate Space ${H}`,icon:`Copy`,disabled:d.length>=k,onClick:()=>{J(H),Q()}},{id:`remove`,label:`Remove Space ${H}`,icon:`Delete`,disabled:d.length<=1,onClick:()=>{Y(H),le()}}],de=O.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{X(e),F(e)}})),fe=[...d.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>Z(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:d.length>=k,onClickCallback:()=>{ne(),Q()}}],pe=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(l,{"aria-label":`Spaces`,children:[e?(0,_.jsx)(c,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:V,onClick:()=>{G(),N(!0)}}):null,d.map((e,t)=>{let n=String(t+1);return(0,_.jsx)(c,{leaving:e.uid===E,onLeaveEnd:()=>$(e.uid),variant:`text`,label:n,selected:!V&&e.uid===m,"aria-label":`Space ${n}`,onClick:()=>{K(n),y(e.uid),N(!1)}},e.uid)}),(0,_.jsx)(o,{items:ue,disabled:V,onOpenChange:v(`space-menu-open-change`)})]}),(0,_.jsx)(u,{}),(0,_.jsx)(l,{"aria-label":`Layout controls`,children:(0,_.jsx)(o,{items:de,icon:W?.icon??`LayoutGrid`,label:W?.label,selectedId:P,triggerLabel:W?`${W.label} arrangement`:void 0,onOpenChange:v(`arrangement-open-change`)})}),(0,_.jsx)(b,{children:(0,_.jsx)(ee,{mainButtonId:`save-${m}`,buttonList:fe})}),(0,_.jsx)(x,{children:(0,_.jsx)(s,{design:`text-only`,noPadding:!0,disabled:!n,onClick:re,children:`Reset`})}),(0,_.jsx)(u,{})]}),me=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(C,{children:[V?null:(0,_.jsx)(w,{children:`${H}:`}),(0,_.jsx)(t,{value:V?`Workspace`:U?.name??``,label:V?`Workspace`:`Space ${H} name`,disabled:V,fieldWidth:`200px`,onSave:e=>ce(m,e)})]}),(0,_.jsx)(T,{children:(0,_.jsxs)(l,{isCompact:!0,leadingDivider:!0,"aria-label":`View controls`,children:[(0,_.jsx)(c,{variant:`icon-text`,icon:I?`Crop`:`GroupExpand`,label:I?`Crop`:`Full`,onClick:()=>{oe(I?`contain`:`cover`),L(!I)}}),(0,_.jsx)(c,{variant:`icon-text`,icon:`ViewSettings`,label:`Controls`,barOnly:!0,selected:R===`controls`,onClick:()=>{let e=R===`controls`?null:`controls`;se(e),z(e)}})]})})]});return(0,_.jsx)(S,{children:(0,_.jsx)(te,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:A,badge:{text:`Admin`,color:`grey`,onClick:ie},leftAreaElement:pe,bottomAreaElement:r?me:void 0,bottomAreaHeight:i?`40px`:void 0,sideDrawers:D,activeDrawer:R,onActiveDrawerChange:z})})},j.__docgenInfo={description:``,methods:[],displayName:`_SpacesTopBar`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const showWorkspace = boolean('Show workspace chip', true);
  const canReset = boolean('Reset enabled (dirty)', true);
  const showNameBar = boolean('Show name bar (bottom area)', true);
  const isTallNameBar = boolean('Taller name bar (40px)', false);
  const isSlowSave = boolean('Slow rename (shows Saving state)', false);

  // a stable uid with the number taken from position, so the chip you remove is the one that
  // unmounts and the chips to its right really do renumber
  const [spaces, setSpaces] = useState<ISpace[]>([{
    uid: 's1',
    name: 'Example Name'
  }, {
    uid: 's2',
    name: 'Example Name'
  }, {
    uid: 's3',
    name: 'Example Name'
  }]);
  const [selectedUid, setSelectedUid] = useState('s3');
  const [leavingUid, setLeavingUid] = useState<string | null>(null);
  const [isWorkspaceActive, setIsWorkspaceActive] = useState(false);
  const [arrangementId, setArrangementId] = useState('4-up');
  // Crop = cover, Full = contain. The cell shows the state it is in and flips on click.
  const [isCrop, setIsCrop] = useState(true);
  const [activeDrawer, setActiveDrawer] = useState<IActiveDrawer>(null);
  const nextUid = useRef(spaces.length + 1);

  // a hidden Workspace chip cannot be the active cell
  const workspaceActive = showWorkspace && isWorkspaceActive;
  const selectedNumber = String(spaces.findIndex(space => space.uid === selectedUid) + 1);
  const selectedSpace = spaces.find(space => space.uid === selectedUid);
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
  const onRename = action('rename-space');
  const onFitToggle = action('fit-toggle');
  const onControlsToggle = action('controls-toggle');
  const appendSpace = () => {
    const uid = \`s\${nextUid.current++}\`;
    setSpaces([...spaces, {
      uid,
      name: 'Example Name'
    }]);
    setSelectedUid(uid);
    setIsWorkspaceActive(false);
  };

  // the name belongs to the Space, not to the row, so it follows the chip you switch back to
  const renameSpace = async (uid: string, name: string) => {
    if (isSlowSave) {
      // database wait example
      await sleep(1200);
    }
    // a functional update, unlike the rest of this story: the await above means \`spaces\` may have
    // gained or lost a cell by now, and a stale copy would bring a removed Space back
    setSpaces(current => current.map(space => space.uid === uid ? {
      ...space,
      name
    } : space));
    onRename(uid, name);
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

  /* The name bar. \`Crop\` / \`GroupExpand\` / \`ViewSettings\` stand in for Figma's corner-bracket,
     contain and sliders glyphs, none of which any icon package provides yet. Both cells keep a
     left hairline, so the bar opts in with \`leadingDivider\`. */
  const bottomAreaElement = <>
      {/* The Workspace is not a Space: it has no position and no name of its own, so the bar drops
          the number and falls back to a fixed label. \`disabled\` rather than a different element, so
          the text keeps the same typography and the row does not shift as you switch between them. */}
      <NameBar>
        {workspaceActive ? null : <NameNumber>{\`\${selectedNumber}:\`}</NameNumber>}
        <EditableText value={workspaceActive ? 'Workspace' : selectedSpace?.name ?? ''} label={workspaceActive ? 'Workspace' : \`Space \${selectedNumber} name\`} disabled={workspaceActive} fieldWidth='200px' onSave={name => renameSpace(selectedUid, name)} />
      </NameBar>
      <ViewControls>
        <ChipBar isCompact leadingDivider aria-label='View controls'>
          <ChipButton variant='icon-text' icon={isCrop ? 'Crop' : 'GroupExpand'} label={isCrop ? 'Crop' : 'Full'} onClick={() => {
          onFitToggle(isCrop ? 'contain' : 'cover');
          setIsCrop(!isCrop);
        }} />
          <ChipButton variant='icon-text' icon='ViewSettings' label='Controls' barOnly selected={activeDrawer === 'controls'} onClick={() => {
          const next = activeDrawer === 'controls' ? null : 'controls';
          onControlsToggle(next);
          setActiveDrawer(next);
        }} />
        </ChipBar>
      </ViewControls>
    </>;
  return <FixedTopBar>
      <TopBar loggedInUser='full.name@example.com' hasNotifications notificationsHistory={NOTIFICATIONS_HISTORY} badge={{
      text: 'Admin',
      color: 'grey',
      onClick: onAdminClick
    }} leftAreaElement={leftAreaElement} bottomAreaElement={showNameBar ? bottomAreaElement : undefined} bottomAreaHeight={isTallNameBar ? '40px' : undefined} sideDrawers={SIDE_DRAWERS} activeDrawer={activeDrawer} onActiveDrawerChange={setActiveDrawer} />
    </FixedTopBar>;
}`,...j.parameters?.docs?.source}}},M=[`_SpacesTopBar`]})))()}N();export{j as _SpacesTopBar,M as __namedExportsOrder,y as default};