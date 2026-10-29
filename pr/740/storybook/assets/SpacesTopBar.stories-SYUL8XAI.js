import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-BJL5XwXs.js";import{n as a,t as o}from"./EditableText-ys6e9eWj.js";import{n as s,t as c}from"./SplitButton-rkoPH6eQ.js";import{n as l,t as u}from"./ChipButton-BKRysW4J.js";import{n as d,t as f}from"./ChipZoneBreak-B1lhnRMh.js";import{n as p,t as m}from"./ChipDropdown-BM1v4PMf.js";import{n as h,t as g}from"./ChipBar-CGCxHReh.js";import{n as _,t as v}from"./TopBar-Bb9rK4ph.js";import{_ as y,a as b,o as x}from"./iframe-B9mgqNTy.js";import{n as S,r as ee}from"./helpers-DheDLI4G.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{C=y(),w=t(),r(),h(),l(),p(),d(),a(),s(),_(),x(),S(),T=n(),{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`Chips/organisms`,component:g,decorators:[]},O=b.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`,k=b.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`,A=b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,j=b.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding-left: 44px;
`,M=b.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`,N=b.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`,P=b.div`
  padding: 24px 16px;
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-12);
`,F=[{id:`controls`,width:`320px`,content:(0,T.jsx)(P,{children:`Playback and camera controls would live here.`})}],I=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],L=6,R={read:[],unread:[]},z=()=>{let e=(0,C.boolean)(`Show workspace chip`,!0),t=(0,C.boolean)(`Reset enabled (dirty)`,!0),n=(0,C.boolean)(`Show name bar (bottom area)`,!0),r=(0,C.boolean)(`Taller name bar (40px)`,!1),a=(0,C.boolean)(`Slow rename (shows Saving state)`,!1),[s,l]=(0,w.useState)([{uid:`s1`,name:`Example Name`},{uid:`s2`,name:`Example Name`},{uid:`s3`,name:`Example Name`}]),[d,p]=(0,w.useState)(`s3`),[h,_]=(0,w.useState)(null),[y,b]=(0,w.useState)(!1),[x,S]=(0,w.useState)(`4-up`),[D,P]=(0,w.useState)(!0),[z,B]=(0,w.useState)(null),V=(0,w.useRef)(s.length+1),H=e&&y,U=String(s.findIndex(e=>e.uid===d)+1),W=s.find(e=>e.uid===d),G=I.find(({id:e})=>e===x),K=E(`workspace-click`),q=E(`space-click`),J=E(`add-space`),Y=E(`duplicate-space`),X=E(`remove-space`),Z=E(`arrangement-select`),Q=E(`save-space`),te=E(`save-space-as`),ne=E(`reset-layout`),re=E(`admin-click`),ie=E(`rename-space`),ae=E(`fit-toggle`),oe=E(`controls-toggle`),$=()=>{let e=`s${V.current++}`;l([...s,{uid:e,name:`Example Name`}]),p(e),b(!1)},se=async(e,t)=>{a&&await ee(1200),l(n=>n.map(n=>n.uid===e?{...n,name:t}:n)),ie(e,t)},ce=e=>{let t=s.findIndex(t=>t.uid===e);if(t<0)return;let n=s.filter(t=>t.uid!==e);l(n),p(n[Math.min(t,n.length-1)].uid),_(null),b(!1)},le=()=>_(d),ue=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:s.length>=L,onClick:()=>{J(),$()}},{id:`duplicate`,label:`Duplicate Space ${U}`,icon:`Copy`,disabled:s.length>=L,onClick:()=>{Y(U),$()}},{id:`remove`,label:`Remove Space ${U}`,icon:`Delete`,disabled:s.length<=1,onClick:()=>{X(U),le()}}],de=I.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{Z(e),S(e)}})),fe=[...s.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>Q(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:s.length>=L,onClickCallback:()=>{te(),$()}}],pe=(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(g,{"aria-label":`Spaces`,children:[e?(0,T.jsx)(u,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:H,onClick:()=>{K(),b(!0)}}):null,s.map((e,t)=>{let n=String(t+1);return(0,T.jsx)(u,{leaving:e.uid===h,onLeaveEnd:()=>ce(e.uid),variant:`text`,label:n,selected:!H&&e.uid===d,"aria-label":`Space ${n}`,onClick:()=>{q(n),p(e.uid),b(!1)}},e.uid)}),(0,T.jsx)(m,{items:ue,disabled:H,onOpenChange:E(`space-menu-open-change`)})]}),(0,T.jsx)(f,{}),(0,T.jsx)(g,{"aria-label":`Layout controls`,children:(0,T.jsx)(m,{items:de,icon:G?.icon??`LayoutGrid`,label:G?.label,selectedId:x,triggerLabel:G?`${G.label} arrangement`:void 0,onOpenChange:E(`arrangement-open-change`)})}),(0,T.jsx)(O,{children:(0,T.jsx)(c,{mainButtonId:`save-${d}`,buttonList:fe})}),(0,T.jsx)(k,{children:(0,T.jsx)(i,{design:`text-only`,noPadding:!0,disabled:!t,onClick:ne,children:`Reset`})}),(0,T.jsx)(f,{})]}),me=(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(j,{children:[H?null:(0,T.jsx)(M,{children:`${U}:`}),(0,T.jsx)(o,{value:H?`Workspace`:W?.name??``,label:H?`Workspace`:`Space ${U} name`,disabled:H,fieldWidth:`200px`,onSave:e=>se(d,e)})]}),(0,T.jsx)(N,{children:(0,T.jsxs)(g,{isCompact:!0,leadingDivider:!0,"aria-label":`View controls`,children:[(0,T.jsx)(u,{variant:`icon-text`,icon:D?`Crop`:`GroupExpand`,label:D?`Crop`:`Full`,onClick:()=>{ae(D?`contain`:`cover`),P(!D)}}),(0,T.jsx)(u,{variant:`icon-text`,icon:`ViewSettings`,label:`Controls`,barOnly:!0,selected:z===`controls`,onClick:()=>{let e=z===`controls`?null:`controls`;oe(e),B(e)}})]})})]});return(0,T.jsx)(A,{children:(0,T.jsx)(v,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:R,badge:{text:`Admin`,color:`grey`,onClick:re},leftAreaElement:pe,bottomAreaElement:n?me:void 0,bottomAreaHeight:r?`40px`:void 0,sideDrawers:F,activeDrawer:z,onActiveDrawerChange:B})})},B=[`_SpacesTopBar`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as _SpacesTopBar,B as __namedExportsOrder,D as default};