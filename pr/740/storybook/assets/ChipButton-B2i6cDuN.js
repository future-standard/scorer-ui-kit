import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Icon-CmxkaxYk.js";import{a,i as o,n as s,o as c}from"./iframe-BmxEQ5Tp.js";var l,u;function d(){return(d=e((()=>{l=t(),u=(0,l.createContext)(!1);try{u.displayName=`ChipCompactContext`,u.__docgenInfo={description:``,displayName:`ChipCompactContext`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Chips/ChipCompactContext.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),c(),r(),d(),p=n(),m=s`
  to {
    width: 0;
    padding-left: 0;
    padding-right: 0;
    opacity: 0;
    border-left-width: 0;
  }
`,h=a.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  user-select: none;
  outline: none;
  box-sizing: border-box;
  font-family: var(--font-ui);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--grey-12);
  transition:
    color var(--speed-normal) var(--easing-primary-in-out),
    background-color var(--speed-normal) var(--easing-primary-in-out);

  ${({$showDivider:e})=>e&&o`border-left: 1px solid var(--grey-4);`}

  & svg [stroke] { stroke: var(--grey-12); }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -1px;
    right: -1px;
    height: 4px;
    background-color: transparent;
    transition: background-color var(--speed-normal) var(--easing-primary-in-out);
  }
  &:hover:enabled::after { background-color: var(--primary-6); }

  &:focus-visible {
    outline: 2px solid var(--primary-9);
    outline-offset: -2px;
  }

  ${({$isCompact:e})=>e&&o`
    width: auto;
    height: 100%;
    min-height: 32px;
    padding: 0 12px;
    justify-content: flex-start;
    white-space: nowrap;

    &::after { height: 2px; }
  `}

  ${({$selected:e,$barOnly:t})=>e&&o`
    ${!t&&o`
      background-color: var(--primary-a3);
      color: var(--primary-11);
      & svg [stroke] { stroke: var(--primary-11); }
    `}
    &::after { background-color: var(--primary-9); }
    &:hover:enabled::after { background-color: var(--primary-9); }
  `}

  &:disabled { cursor: not-allowed; opacity: 0.5; }

  ${({$leaving:e})=>e&&o`
    overflow: hidden;
    min-width: 0;
    pointer-events: none;
    animation: ${m} var(--speed-fast) var(--easing-primary-in-out) forwards;

    @media (prefers-reduced-motion: reduce) { animation: none; }
  `}
`,g=({variant:e=`text`,isCompact:t,barOnly:n=!1,icon:r,label:a,selected:o=!1,noDivider:s=!1,leaving:c=!1,onLeaveEnd:l,onAnimationEnd:d,children:m,...g})=>{let _=!s,v=(0,f.useContext)(u),y=t??v,b=e!==`text`&&!!r,x=e!==`icon`||!r,S=g[`aria-haspopup`]!==void 0,C=(0,f.useRef)(null);(0,f.useLayoutEffect)(()=>{let e=C.current;e&&(e.style.width=c&&y?`${e.offsetWidth}px`:``)},[c,y]);let w=(0,f.useRef)(!1),T=(0,f.useCallback)(()=>{w.current||(w.current=!0,l?.())},[l]);(0,f.useEffect)(()=>{if(!c){w.current=!1;return}window.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&T()},[c,T]);let E=(0,f.useCallback)(e=>{d?.(e),c&&e.target===e.currentTarget&&T()},[c,T,d]);return(0,p.jsxs)(h,{ref:C,type:`button`,"aria-pressed":S?void 0:o,$selected:o,$showDivider:_,$leaving:c,$isCompact:y,$barOnly:n,...g,onAnimationEnd:E,children:[b?(0,p.jsx)(i,{icon:r,size:16}):null,x?a??m:null]})};try{g.displayName=`ChipButton`,g.__docgenInfo={description:``,displayName:`ChipButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,methods:[],props:{variant:{defaultValue:{value:`text`},declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`content mode (default 'text')`,name:`variant`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`enum`,raw:`IChipVariant`,value:[{value:`"text"`},{value:`"icon"`},{value:`"icon-text"`}]}},isCompact:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:"the shorter name-bar cell: auto width, 12px side padding, 2px state bar. Left undefined on\npurpose — a ChipBar supplies it, and `false` opts a single cell back out",name:`isCompact`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},barOnly:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`selected shows the bar only: no wash, and the label stays on --grey-12`,name:`barOnly`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},icon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`icon name (@future-standard/icons) when variant='icon' or 'icon-text'`,name:`icon`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`numeral/text when variant='text' or 'icon-text' (falls back to children)`,name:`label`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`string`}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`persistent selected state (Figma "Active"): wash + bar`,name:`selected`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},noDivider:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`force-hide the 1px left divider`,name:`noDivider`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},leaving:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`collapse the cell to zero width — the removal animation`,name:`leaving`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`boolean`}},onLeaveEnd:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`}],description:`collapse finished (or was skipped): safe to unmount the cell now`,name:`onLeaveEnd`,parent:{fileName:`packages/ui-lib/src/Chips/atoms/ChipButton.tsx`,name:`OwnProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}export{d as i,_ as n,u as r,g as t};