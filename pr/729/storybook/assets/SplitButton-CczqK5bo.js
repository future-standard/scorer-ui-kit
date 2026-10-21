import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i}from"./common-C1LGBsDL.js";import{n as a,r as o,t as s}from"./Icon-DEQ-SMMn.js";import{n as c,t as l}from"./Spinner-H7-VDtNA.js";import{n as u,t as d}from"./useClickOutside-gjKn5OLT.js";import{a as f,i as p,o as m}from"./iframe-Cw1eIbNi.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=t(),m(),i(),o(),c(),g=n(),_=f.button`
  ${r}
  ${({$noBorderTop:e})=>e?`border-top: none`:p`
        border-top: 1px solid var(--border-color)`};

  color: var(--text-color);
  height: var(--button-height);
  display: flex;
  flex: 1 0 0;
  align-items: center;
  align-self: stretch;

  &:hover:enabled {
    background: var(--button-hover-bg);

    ${a} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:active:enabled {
    background: var(--button-active-bg);

    ${({$noBorderTop:e})=>e?`border-top: none`:p`
          border-top: 1px solid var(--border-active-color)`};

    ${a} {
      svg g, svg path {
        stroke: var(--white-a12);
      }
    }
  }

  &:disabled {
    color: var(--text-disabled-color);
    cursor: not-allowed;
  }
`,v=f.div`
  font-family: var(--font-ui);
  font-size: var(--button-font-size);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`,y=f.div`
  ${({$textMaxWidth:e})=>e&&p`max-width: ${e};`}
  display: flex;
  padding: 0px var(--button-h-padding);
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`,b=f.div`
  ${({$isAscendingIcon:e})=>e&&p`
      transform: scaleY(-1);
  `};

  height: var(--button-height);
  display: flex;
  padding: 3px var(--button-icon-h-padding);
  align-items: center;
  align-self: stretch;

  ${a} {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      height: var(--button-icon-size);
      width: var(--button-icon-size);
      g, path {
        stroke: var(--white-a10);
      }
    }
  }
`,x=({text:e,icon:t=``,design:n=`primary`,noBorderTop:r=!1,textMaxWidth:i=``,onClickCallback:a,closeCallback:o,hasOnSelectLoading:c,children:u,formAction:d,...f})=>{let p=(0,h.useRef)(null),[m,x]=(0,h.useState)(!1),[S,C]=(0,h.useState)(0),w=(0,h.useCallback)(()=>{a?.(),c?(x(!0),setTimeout(()=>{x(!1),o()},2e3)):setTimeout(()=>{o()},200)},[o,c,a]);return(0,h.useEffect)(()=>{p.current&&C(parseInt(getComputedStyle(p.current).getPropertyValue(`--button-icon-size`),10))},[]),(0,g.jsxs)(_,{ref:p,$noBorderTop:r,onClick:w,...f,children:[(0,g.jsx)(b,{$isAscendingIcon:t===`FilterAscending`,children:m?(0,g.jsx)(l,{custom:{size:S},styling:n}):(0,g.jsx)(s,{icon:t})}),(0,g.jsx)(y,{$textMaxWidth:i,children:(0,g.jsx)(v,{children:e})})]})};try{x.displayName=`SplitButtonOption`,x.__docgenInfo={description:``,displayName:`SplitButtonOption`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,methods:[],props:{text:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`text`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!0,tags:{},type:{name:`string`}},icon:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`icon`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`string`}},hasOnSelectLoading:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`hasOnSelectLoading`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`boolean`}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`string`}},noBorderTop:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`noBorderTop`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`boolean`}},textMaxWidth:{defaultValue:{value:``},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`textMaxWidth`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`string`}},onClickCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`onClickCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!1,tags:{},type:{name:`(() => void)`}},closeCallback:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`}],description:``,name:`closeCallback`,parent:{fileName:`packages/ui-lib/src/Form/atoms/SplitButtonOption.tsx`,name:`IMOption`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}var C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{C=t(),m(),i(),d(),o(),S(),w=n(),T=30,E=f.div`
  height: var(--button-height);
  overflow: visible;
`,D=f.div`
  ${({$isOpen:e})=>e&&`z-index: 100`};
  font-family: var(--font-ui);
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 3px;
  border: 1px solid var(--border);
  background: linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 100%);
  box-shadow: var(--button-lift-default-x, 0px) var(--button-lift-default-y, 2px) var(--button-lift-default-blur, 4px) var(--button-lift-default-spread, 2px) var(--button-lift-default-color, rgba(221, 234, 248, 0.08));
`,O=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`,k=f.button`
  ${r}
  display: flex;
  height: var(--button-height);
  padding: 3px var(--button-icon-h-padding);
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid var(--toggle-icon-border);
  cursor: pointer;

  ${a} {
    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      path, g {
        stroke: var(--toggle-icon);
      }
    }
  }

  &:hover:enabled {
    background: var(--toggle-icon-hover-bg);
  }

  &:active:enabled {
    background: var(--toggle-icon-active-bg);
    ${a} {
      svg path, svg g {
        stroke: var(--toggle-icon-active);
      }
    }
  }

  &:disabled {
    cursor: not-allowed;

    ${a} {
      svg path {
        stroke: var(--toggle-icon-disabled);
      }
    }
  }

`,A=(e,t)=>{if(t)return t;if(e)return`${e-T}px`},j=({mainButtonId:e,buttonList:t,design:n=`primary`,size:r,textMaxWidth:i,disabled:a=!1,...o})=>{let[c,l]=(0,C.useState)(!1),d=(0,C.useRef)(null),f=(0,C.useRef)(null),p=(0,C.useCallback)(()=>{l(e=>!e)},[]),m=(0,C.useCallback)(()=>{l(!1)},[]);return u(f,m),(0,w.jsx)(E,{children:(0,w.jsxs)(D,{ref:f,className:`split-button-${n} split-button-size-${r}`,$isOpen:c,...o,children:[(0,w.jsxs)(O,{ref:d,children:[t.filter(t=>t.id===e).map(({id:e,text:t,icon:r,disabled:i,...o})=>(0,w.jsx)(x,{noBorderTop:!0,disabled:a||i,closeCallback:m,icon:r||`NoIcon`,text:t,design:n,...o},e)),(0,w.jsx)(k,{onClick:p,disabled:a,children:(0,w.jsx)(s,{icon:c?`Close`:`Down`,size:8})})]}),c&&!a?t.filter(t=>t.id!==e).map(({id:e,text:t,icon:r,disabled:a,...o})=>(0,w.jsx)(x,{icon:r||`NoIcon`,text:t,design:n,disabled:a,textMaxWidth:A(d.current?.clientWidth,i),...o,closeCallback:m},e)):null]})})};try{j.displayName=`SplitButton`,j.__docgenInfo={description:``,displayName:`SplitButton`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/molecules/SplitButton.tsx`,methods:[],props:{mainButtonId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`mainButtonId`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!0,tags:{},type:{name:`string`}},buttonList:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`buttonList`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!0,tags:{},type:{name:`ISplitButtonItem[]`}},isSortAscending:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`isSortAscending`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`TypeButtonSizes`,value:[{value:`"normal"`},{value:`"large"`},{value:`"small"`},{value:`"xsmall"`}]}},design:{defaultValue:{value:`primary`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!1,tags:{},type:{name:`string`}},textMaxWidth:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`textMaxWidth`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Form/molecules/SplitButton.tsx`,name:`ISplitButtonProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}export{M as n,j as t};