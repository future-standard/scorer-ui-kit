import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-BR6KFKcD.js";import{n as a,t as o}from"./useClickOutside-gjKn5OLT.js";import{n as s,t as c}from"./ChipButton-BKRysW4J.js";import{a as l,i as u,o as d}from"./iframe-B9mgqNTy.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=t(),d(),o(),r(),s(),p=n(),m=l.div`
  position: relative;
  display: inline-flex;
`,h=l(c)`
  && {
    background-color: transparent;

    ${({$labelled:e})=>e&&u`
      width: auto;
      padding: 0 16px 0 14px;
      gap: 8px;
      justify-content: flex-start;
      white-space: nowrap;
      color: var(--grey-12);
      & svg [stroke] { stroke: var(--grey-12); }
    `}
  }
`,g=l.div`
  position: absolute;
  top: calc(100% + 8px);
  left: -1px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 216px;
  padding: 0;
  overflow: hidden;
  background: var(--grey-1);
  border: 1px solid var(--grey-7);
  border-radius: 4px;
  box-shadow: 0px 5px 25px 0px var(--filter-button-shadow-color);
`,_=l.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: var(--button-height, 32px);
  padding: 0 8px;
  border: none;
  border-bottom: 1px solid var(--grey-7);
  background: transparent;
  cursor: pointer;
  user-select: none;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
  text-align: left;
  transition: background-color var(--speed-fast) var(--easing-primary-in-out);

  & svg [stroke] { stroke: var(--grey-10); }

  &:last-child { border-bottom: none; }
  &:hover:enabled { background-color: var(--grey-3); }
  &:disabled {
    cursor: not-allowed;
    color: var(--grey-7);
    & svg [stroke] { stroke: var(--grey-7); }
  }

  ${({$current:e})=>e&&u`
    background-color: var(--grey-4);
    &:hover:enabled { background-color: var(--grey-5); }
  `}
`,v=l.span`
  display: flex;
  margin-left: auto;

  & svg [stroke] { stroke: var(--primary-11); }
`,y=({items:e,icon:t=`FilterEllipsis`,label:n,selectedId:r,checkIcon:o=`Success`,triggerLabel:s,noDivider:c=!1,disabled:l=!1,onOpenChange:u,onKeyDown:d,...y})=>{let[b,x]=(0,f.useState)(!1),S=(0,f.useRef)(null),C=!!n,w=r!==void 0,T=s??(C?void 0:`Space actions`),E=(0,f.useCallback)(e=>{x(e),u?.(e)},[u]),D=(0,f.useCallback)(()=>E(!1),[E]),O=(0,f.useCallback)(()=>E(!b),[b,E]),k=(0,f.useCallback)(()=>{b&&D()},[b,D]);a(S,k),(0,f.useEffect)(()=>{l&&b&&D()},[l,b,D]);let A=(0,f.useCallback)(e=>{d?.(e),e.key===`Escape`&&b&&D()},[b,D,d]);return(0,p.jsxs)(m,{ref:S,...y,onKeyDown:A,children:[(0,p.jsx)(h,{$labelled:C,variant:C?void 0:`icon`,icon:C?void 0:t,selected:b,noDivider:c,disabled:l,"aria-label":T,"aria-haspopup":`menu`,"aria-expanded":b,onClick:O,children:C?(0,p.jsxs)(p.Fragment,{children:[t?(0,p.jsx)(i,{icon:t,size:18}):null,n,(0,p.jsx)(i,{icon:`Down`,size:12})]}):null}),b&&!l?(0,p.jsx)(g,{role:`menu`,children:e.map(e=>{let t=w&&e.id===r;return(0,p.jsxs)(_,{type:`button`,role:w?`menuitemradio`:`menuitem`,"aria-checked":w?t:void 0,$current:t,disabled:e.disabled,onClick:()=>{e.onClick?.(),D()},children:[e.icon?(0,p.jsx)(i,{icon:e.icon,size:14}):null,e.label,t?(0,p.jsx)(v,{"aria-hidden":`true`,children:(0,p.jsx)(i,{icon:o,size:14,weight:`light`})}):null]},e.id)})}):null]})};try{y.displayName=`ChipDropdown`,y.__docgenInfo={description:``,displayName:`ChipDropdown`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:``,name:`items`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!0,tags:{},type:{name:`IChipDropdownItem[]`}},icon:{defaultValue:{value:`FilterEllipsis`},declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`icon-only mode: the trigger icon, 16px. Labelled mode: the leading glyph, 18px`,name:`icon`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`visible trigger text, e.g. '6-up'; switches the trigger to labelled mode`,name:`label`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},selectedId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`items[].id of the current row: --grey-4 background, check, radio semantics`,name:`selectedId`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},checkIcon:{defaultValue:{value:`Success`},declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`icon name for the current-row indicator (default 'Success')`,name:`checkIcon`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},triggerLabel:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`trigger aria-label; defaulted to 'Space actions' in icon-only mode only`,name:`triggerLabel`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},noDivider:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`pass-through: hide the chip's 1px left divider`,name:`noDivider`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:`disable the trigger`,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`}],description:``,name:`onOpenChange`,parent:{fileName:`packages/ui-lib/src/Chips/molecules/ChipDropdown.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}}},tags:{}}}catch{}})))()}export{b as n,y as t};