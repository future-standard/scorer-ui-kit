import{t as e}from"./react-BZJXY1be.js";import{D as t,Gt as n,It as r,Rt as i,_ as a,c as o,g as s,h as c,it as ee,v as l,wt as u,xt as d,zt as f}from"./iframe-C8iM32yd.js";import{n as p,r as m}from"./helpers-Cvr4c3Xq.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=h((()=>{g=n(),_=e(),u(),f(),p(),v=r(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Chips/organisms`,component:c,decorators:[]},x=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`,S=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`,C=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,w=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding-left: 44px;
`,T=i.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`,E=i.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`,D=i.div`
  padding: 24px 16px;
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-12);
`,O=[{id:`controls`,width:`320px`,content:(0,v.jsx)(D,{children:`Playback and camera controls would live here.`})}],k=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],A=6,j={read:[],unread:[]},M=()=>{let e=(0,g.boolean)(`Show workspace chip`,!0),n=(0,g.boolean)(`Reset enabled (dirty)`,!0),r=(0,g.boolean)(`Show name bar (bottom area)`,!0),i=(0,g.boolean)(`Taller name bar (40px)`,!1),u=(0,g.boolean)(`Slow rename (shows Saving state)`,!1),[f,p]=(0,_.useState)([{uid:`s1`,name:`Example Name`},{uid:`s2`,name:`Example Name`},{uid:`s3`,name:`Example Name`}]),[h,b]=(0,_.useState)(`s3`),[D,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(!1),[F,I]=(0,_.useState)(`4-up`),[L,te]=(0,_.useState)(!0),[R,z]=(0,_.useState)(null),B=(0,_.useRef)(f.length+1),V=e&&N,H=String(f.findIndex(e=>e.uid===h)+1),U=f.find(e=>e.uid===h),W=k.find(({id:e})=>e===F),G=y(`workspace-click`),K=y(`space-click`),q=y(`add-space`),J=y(`duplicate-space`),Y=y(`remove-space`),X=y(`arrangement-select`),Z=y(`save-space`),ne=y(`save-space-as`),re=y(`reset-layout`),ie=y(`admin-click`),ae=y(`rename-space`),oe=y(`fit-toggle`),se=y(`controls-toggle`),Q=()=>{let e=`s${B.current++}`;p([...f,{uid:e,name:`Example Name`}]),b(e),P(!1)},ce=async(e,t)=>{u&&await m(1200),p(n=>n.map(n=>n.uid===e?{...n,name:t}:n)),ae(e,t)},$=e=>{let t=f.findIndex(t=>t.uid===e);if(t<0)return;let n=f.filter(t=>t.uid!==e);p(n),b(n[Math.min(t,n.length-1)].uid),M(null),P(!1)},le=()=>M(h),ue=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:f.length>=A,onClick:()=>{q(),Q()}},{id:`duplicate`,label:`Duplicate Space ${H}`,icon:`Copy`,disabled:f.length>=A,onClick:()=>{J(H),Q()}},{id:`remove`,label:`Remove Space ${H}`,icon:`Delete`,disabled:f.length<=1,onClick:()=>{Y(H),le()}}],de=k.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{X(e),I(e)}})),fe=[...f.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>Z(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:f.length>=A,onClickCallback:()=>{ne(),Q()}}],pe=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c,{"aria-label":`Spaces`,children:[e?(0,v.jsx)(s,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:V,onClick:()=>{G(),P(!0)}}):null,f.map((e,t)=>{let n=String(t+1);return(0,v.jsx)(s,{leaving:e.uid===D,onLeaveEnd:()=>$(e.uid),variant:`text`,label:n,selected:!V&&e.uid===h,"aria-label":`Space ${n}`,onClick:()=>{K(n),b(e.uid),P(!1)}},e.uid)}),(0,v.jsx)(a,{items:ue,disabled:V,onOpenChange:y(`space-menu-open-change`)})]}),(0,v.jsx)(l,{}),(0,v.jsx)(c,{"aria-label":`Layout controls`,children:(0,v.jsx)(a,{items:de,icon:W?.icon??`LayoutGrid`,label:W?.label,selectedId:F,triggerLabel:W?`${W.label} arrangement`:void 0,onOpenChange:y(`arrangement-open-change`)})}),(0,v.jsx)(x,{children:(0,v.jsx)(ee,{mainButtonId:`save-${h}`,buttonList:fe})}),(0,v.jsx)(S,{children:(0,v.jsx)(o,{design:`text-only`,noPadding:!0,disabled:!n,onClick:re,children:`Reset`})}),(0,v.jsx)(l,{})]}),me=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(w,{children:[V?null:(0,v.jsx)(T,{children:`${H}:`}),(0,v.jsx)(t,{value:V?`Workspace`:U?.name??``,label:V?`Workspace`:`Space ${H} name`,disabled:V,fieldWidth:`200px`,onSave:e=>ce(h,e)})]}),(0,v.jsx)(E,{children:(0,v.jsxs)(c,{isCompact:!0,leadingDivider:!0,"aria-label":`View controls`,children:[(0,v.jsx)(s,{variant:`icon-text`,icon:L?`Crop`:`GroupExpand`,label:L?`Crop`:`Full`,onClick:()=>{oe(L?`contain`:`cover`),te(!L)}}),(0,v.jsx)(s,{variant:`icon-text`,icon:`ViewSettings`,label:`Controls`,barOnly:!0,selected:R===`controls`,onClick:()=>{let e=R===`controls`?null:`controls`;se(e),z(e)}})]})})]});return(0,v.jsx)(C,{children:(0,v.jsx)(d,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:j,badge:{text:`Admin`,color:`grey`,onClick:ie},leftAreaElement:pe,bottomAreaElement:r?me:void 0,bottomAreaHeight:i?`40px`:void 0,sideDrawers:O,activeDrawer:R,onActiveDrawerChange:z})})},M.__docgenInfo={description:``,methods:[],displayName:`_SpacesTopBar`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}},N=[`_SpacesTopBar`]})))()}P();export{M as _SpacesTopBar,N as __namedExportsOrder,b as default};