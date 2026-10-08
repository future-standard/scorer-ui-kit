import{t as e}from"./react-Q1GcV6wX.js";import{D as t,Gt as n,It as r,Rt as i,_ as a,c as o,g as s,h as c,it as ee,v as l,wt as u,xt as d,zt as f}from"./iframe-BYCAIXzl.js";import{n as p,r as m}from"./helpers-BBzeDa8x.js";import{n as h}from"./rolldown-runtime-DkW27tQK.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=h((()=>{g=n(),_=e(),u(),f(),p(),v=r(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Chips/organisms`,component:c,decorators:[]},x=i.div`
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
`,O=[{id:`controls`,width:`320px`,content:(0,v.jsx)(D,{children:`Playback and camera controls would live here.`})}],k=[{id:`6-up`,label:`6-up`,icon:`LayoutGrid`},{id:`4-up`,label:`4-up`,icon:`LayoutGrid`},{id:`2-up`,label:`2-up`,icon:`LayoutList`},{id:`1-big-2`,label:`1 big + 2`,icon:`LayoutList`}],A=6,j={read:[],unread:[]},M=()=>{let e=(0,g.boolean)(`Show workspace chip`,!0),n=(0,g.boolean)(`Reset enabled (dirty)`,!0),r=(0,g.boolean)(`Show name bar (bottom area)`,!0),i=(0,g.boolean)(`Taller name bar (40px)`,!1),u=(0,g.boolean)(`Slow rename (shows Saving state)`,!1),[f,p]=(0,_.useState)([{uid:`s1`,name:`Example Name`},{uid:`s2`,name:`Example Name`},{uid:`s3`,name:`Example Name`}]),[h,b]=(0,_.useState)(`s3`),[D,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(!1),[F,I]=(0,_.useState)(`4-up`),[L,te]=(0,_.useState)(!0),[R,z]=(0,_.useState)(null),B=(0,_.useRef)(f.length+1),V=e&&N,H=String(f.findIndex(e=>e.uid===h)+1),U=f.find(e=>e.uid===h),W=k.find(({id:e})=>e===F),G=y(`workspace-click`),K=y(`space-click`),q=y(`add-space`),J=y(`duplicate-space`),Y=y(`remove-space`),X=y(`arrangement-select`),Z=y(`save-space`),ne=y(`save-space-as`),re=y(`reset-layout`),ie=y(`admin-click`),ae=y(`rename-space`),oe=y(`fit-toggle`),se=y(`controls-toggle`),Q=()=>{let e=`s${B.current++}`;p([...f,{uid:e,name:`Example Name`}]),b(e),P(!1)},ce=async(e,t)=>{u&&await m(1200),p(n=>n.map(n=>n.uid===e?{...n,name:t}:n)),ae(e,t)},$=e=>{let t=f.findIndex(t=>t.uid===e);if(t<0)return;let n=f.filter(t=>t.uid!==e);p(n),b(n[Math.min(t,n.length-1)].uid),M(null),P(!1)},le=()=>M(h),ue=[{id:`add`,label:`Add Space`,icon:`Add`,disabled:f.length>=A,onClick:()=>{q(),Q()}},{id:`duplicate`,label:`Duplicate Space ${H}`,icon:`Copy`,disabled:f.length>=A,onClick:()=>{J(H),Q()}},{id:`remove`,label:`Remove Space ${H}`,icon:`Delete`,disabled:f.length<=1,onClick:()=>{Y(H),le()}}],de=k.map(({id:e,label:t,icon:n})=>({id:e,label:t,icon:n,onClick:()=>{X(e),I(e)}})),fe=[...f.map((e,t)=>({id:`save-${e.uid}`,text:`Save Space ${t+1}`,onClickCallback:()=>Z(String(t+1))})),{id:`add-new`,text:`Add new space`,icon:`Add`,disabled:f.length>=A,onClickCallback:()=>{ne(),Q()}}],pe=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c,{"aria-label":`Spaces`,children:[e?(0,v.jsx)(s,{variant:`icon`,icon:`LayoutGrid`,"aria-label":`Workspace`,selected:V,onClick:()=>{G(),P(!0)}}):null,f.map((e,t)=>{let n=String(t+1);return(0,v.jsx)(s,{leaving:e.uid===D,onLeaveEnd:()=>$(e.uid),variant:`text`,label:n,selected:!V&&e.uid===h,"aria-label":`Space ${n}`,onClick:()=>{K(n),b(e.uid),P(!1)}},e.uid)}),(0,v.jsx)(a,{items:ue,disabled:V,onOpenChange:y(`space-menu-open-change`)})]}),(0,v.jsx)(l,{}),(0,v.jsx)(c,{"aria-label":`Layout controls`,children:(0,v.jsx)(a,{items:de,icon:W?.icon??`LayoutGrid`,label:W?.label,selectedId:F,triggerLabel:W?`${W.label} arrangement`:void 0,onOpenChange:y(`arrangement-open-change`)})}),(0,v.jsx)(x,{children:(0,v.jsx)(ee,{mainButtonId:`save-${h}`,buttonList:fe})}),(0,v.jsx)(S,{children:(0,v.jsx)(o,{design:`text-only`,noPadding:!0,disabled:!n,onClick:re,children:`Reset`})}),(0,v.jsx)(l,{})]}),me=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(w,{children:[V?null:(0,v.jsx)(T,{children:`${H}:`}),(0,v.jsx)(t,{value:V?`Workspace`:U?.name??``,label:V?`Workspace`:`Space ${H} name`,disabled:V,fieldWidth:`200px`,onSave:e=>ce(h,e)})]}),(0,v.jsx)(E,{children:(0,v.jsxs)(c,{isCompact:!0,leadingDivider:!0,"aria-label":`View controls`,children:[(0,v.jsx)(s,{variant:`icon-text`,icon:L?`Crop`:`GroupExpand`,label:L?`Crop`:`Full`,onClick:()=>{oe(L?`contain`:`cover`),te(!L)}}),(0,v.jsx)(s,{variant:`icon-text`,icon:`ViewSettings`,label:`Controls`,barOnly:!0,selected:R===`controls`,onClick:()=>{let e=R===`controls`?null:`controls`;se(e),z(e)}})]})})]});return(0,v.jsx)(C,{children:(0,v.jsx)(d,{loggedInUser:`full.name@example.com`,hasNotifications:!0,notificationsHistory:j,badge:{text:`Admin`,color:`grey`,onClick:ie},leftAreaElement:pe,bottomAreaElement:r?me:void 0,bottomAreaHeight:i?`40px`:void 0,sideDrawers:O,activeDrawer:R,onActiveDrawerChange:z})})},M.__docgenInfo={description:``,methods:[],displayName:`_SpacesTopBar`},N=[`_SpacesTopBar`]})))()}P();export{M as _SpacesTopBar,N as __namedExportsOrder,b as default};