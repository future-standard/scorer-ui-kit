import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i}from"./styled-components.browser.esm-DRoLZq3m.js";import{n as a,t as ee}from"./Button-CVePDF2Y.js";import{n as o,t as te}from"./EditableText-qc8cWbou.js";import{n as s,t as ne}from"./SplitButton-BcHV72Uw.js";import{n as c,t as l}from"./ChipButton-BK1h7FyO.js";import{n as u,t as d}from"./ChipZoneBreak-D3TRttfU.js";import{n as f,t as p}from"./ChipDropdown-CmIiYM9H.js";import{n as m,t as h}from"./ChipBar-CBlvzlmA.js";import{n as g,t as re}from"./TopBar-CNfZpzVG.js";import{n as _,r as v,t as y}from"./helpers-B80ekcMq.js";import{n as b,t as x}from"./FramedDocsPage-uw4IpaO3.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{S=t(),a(),m(),c(),f(),u(),o(),s(),g(),r(),y(),b(),C=n(),{fn:w}=__STORYBOOK_MODULE_TEST__,T=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 12px;
  border-left: 1px solid var(--grey-4);
`,E=i.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 56px;
  padding: 0 16px 0 14px;
`,D=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`,O=i.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding-left: 44px;
`,k=i.span`
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
`,A=i.div`
  display: flex;
  height: 100%;
  margin-left: auto;
`,j=i.div`
  padding: 24px 16px;
  font-family: var(--font-ui);
  font-size: 14px;
  line-height: 20px;
  color: var(--grey-12);
`,M=[{id:`controls`,width:`320px`,content:(0,C.jsx)(j,{children:`Playback and camera controls would live here.`})}],N=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],P=6,F={read:[],unread:[]},I=({showWorkspace:e,canReset:t,showNameBar:n,isTallNameBar:r,isSlowSave:i,onWorkspaceClick:a,onSpaceClick:o,onAdd:s,onDuplicate:c,onRemove:u,onSpaceMenuOpenChange:f,onArrangement:m,onArrangementOpenChange:g,onSave:_,onSaveAs:y,onReset:b,onAdminClick:x,onRename:w,onFitToggle:j,onControlsToggle:I})=>{let[L,R]=(0,S.useState)([{uid:`s1`,name:`Example Name`},{uid:`s2`,name:`Example Name`},{uid:`s3`,name:`Example Name`}]),[z,B]=(0,S.useState)(`s3`),[V,H]=(0,S.useState)(null),[U,W]=(0,S.useState)(!1),[G,ie]=(0,S.useState)(`4-up`),[K,q]=(0,S.useState)(!0),[J,Y]=(0,S.useState)(null),ae=(0,S.useRef)(L.length+1),X=e&&U,Z=String(L.findIndex(e=>e.uid===z)+1),oe=L.find(e=>e.uid===z),Q=N.find(({id:e})=>e===G),$=()=>{let e=`s${ae.current++}`;R([...L,{uid:e,name:`Example Name`}]),B(e),W(!1)},se=async(e,t)=>{i&&await v(1200),R(n=>n.map(n=>n.uid===e?{...n,name:t}:n)),w(e,t)},ce=e=>{let t=L.findIndex(t=>t.uid===e);if(t<0)return;let n=L.filter(t=>t.uid!==e);R(n),B(n[Math.min(t,n.length-1)].uid),H(null),W(!1)},le=()=>H(z),ue=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:L.length>=P,onClick:()=>{s(),$()}},{id:`duplicate`,label:`Duplicate Space ${Z}`,icon:`Copy`,disabled:L.length>=P,onClick:()=>{c(Z),$()}},{id:`remove`,label:`Remove Space ${Z}`,icon:`Delete`,disabled:L.length<=1,onClick:()=>{u(Z),le()}}],de=N.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{m(e),ie(e)}})),fe=[...L.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>_(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:L.length>=P,onClickCallback:()=>{y(),$()}}],pe=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(h,{"aria-label":`Spaces`,children:[e?(0,C.jsx)(l,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:X,onClick:()=>{a(),W(!0)}}):null,L.map((e,t)=>{let n=String(t+1);return(0,C.jsx)(l,{leaving:e.uid===V,onLeaveEnd:()=>ce(e.uid),variant:`text`,label:n,selected:!X&&e.uid===z,"aria-label":`Space ${n}`,onClick:()=>{o(n),B(e.uid),W(!1)}},e.uid)}),(0,C.jsx)(p,{items:ue,disabled:X,onOpenChange:f})]}),(0,C.jsx)(d,{}),(0,C.jsx)(h,{"aria-label":`Layout controls`,children:(0,C.jsx)(p,{items:de,icon:Q?.icon??`LayoutGrid`,label:Q?.label,selectedId:G,triggerLabel:Q?`${Q.label} arrangement`:void 0,onOpenChange:g})}),(0,C.jsx)(T,{children:(0,C.jsx)(ne,{mainButtonId:`save-${z}`,buttonList:fe})}),(0,C.jsx)(E,{children:(0,C.jsx)(ee,{design:`text-only`,noPadding:!0,disabled:!t,onClick:b,children:`Reset`})}),(0,C.jsx)(d,{})]}),me=(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(O,{children:[X?null:(0,C.jsx)(k,{children:`${Z}:`}),(0,C.jsx)(te,{value:X?`Workspace`:oe?.name??``,label:X?`Workspace`:`Space ${Z} name`,disabled:X,fieldWidth:`200px`,onSave:e=>se(z,e)})]}),(0,C.jsx)(A,{children:(0,C.jsxs)(h,{isCompact:!0,leadingDivider:!0,"aria-label":`View controls`,children:[(0,C.jsx)(l,{variant:`icon-text`,icon:K?`Crop`:`GroupExpand`,label:K?`Crop`:`Full`,onClick:()=>{j(K?`contain`:`cover`),q(!K)}}),(0,C.jsx)(l,{variant:`icon-text`,icon:`ViewSettings`,label:`Controls`,barOnly:!0,selected:J===`controls`,onClick:()=>{let e=J===`controls`?null:`controls`;I(e),Y(e)}})]})})]});return(0,C.jsx)(D,{children:(0,C.jsx)(re,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:F,badge:{text:`Admin`,color:`grey`,onClick:x},leftAreaElement:pe,bottomAreaElement:n?me:void 0,bottomAreaHeight:r?`40px`:void 0,sideDrawers:M,activeDrawer:J,onActiveDrawerChange:Y})})},L={title:`Chips/organisms/SpacesTopBar`,component:h,parameters:{docs:{page:x,story:{inline:!1,iframeHeight:`420px`}}},argTypes:{showWorkspace:{name:`Show workspace chip`},canReset:{name:`Reset enabled (dirty)`},showNameBar:{name:`Show name bar (bottom area)`},isTallNameBar:{name:`Taller name bar (40px)`},isSlowSave:{name:`Slow rename (shows Saving state)`},children:_(`built by the scene: Spaces, Layout and View controls bars`),isCompact:_(`set per bar by the scene: only the View controls bar is compact`),leadingDivider:_(`set per bar by the scene: only the View controls bar has it`)},args:{children:null,showWorkspace:!0,canReset:!0,showNameBar:!0,isTallNameBar:!1,isSlowSave:!1,onWorkspaceClick:w(),onSpaceClick:w(),onAdd:w(),onDuplicate:w(),onRemove:w(),onSpaceMenuOpenChange:w(),onArrangement:w(),onArrangementOpenChange:w(),onSave:w(),onSaveAs:w(),onReset:w(),onAdminClick:w(),onRename:w(),onFitToggle:w(),onControlsToggle:w()},render:e=>(0,C.jsx)(I,{...e})},R={},z=[`Default`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Default,z as __namedExportsOrder,L as default};