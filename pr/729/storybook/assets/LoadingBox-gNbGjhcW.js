import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Spinner-H7-VDtNA.js";import{n as a,t as o}from"./checkmark-DMxx4NiA.js";import{n as s,t as c}from"./useClickOutside-gjKn5OLT.js";import{n as l,t as u}from"./FilterButton-DM77qk7-.js";import{a as d,i as f,l as p,o as m,u as h}from"./iframe-Cw1eIbNi.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{m(),a(),h(),g=n(),_=d.div`
  font-family: var(--font-ui);
  display: block;
  color: var(--grey-12);
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
`,v=d.div`
  box-sizing: border-box;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
`,y=d.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
`,b=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    display: block;
    [stroke]{
      stroke: transparent;
    }
    [fill] {
      fill: var(--inverse);
    }
  }
`,x=d.div`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  user-select: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-style: solid;
`,S=d.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  user-select: none;
`,C=d.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 12px;

  ${({$selected:e,$disabled:t})=>f`
    
    ${v}, ${x} {
      border-color: var(--input-toggle-unchecked-border-color);
    }

    &:hover {
      cursor: pointer;
      ${_} {
        color: var(--input-label-hover);
      }

      ${v}, ${x} {
        border-color: var(--input-toggle-unchecked-hover-border-color);
        ${S}, ${y} {
          background-color: var(--input-toggle-unchecked-background-color);
        }
      }
    }

    ${e&&f`
      ${_} {
        color: var(--input-label-active);
        font-weight: 600;
      }

      ${v}, ${x} {
        border-color: var(--input-toggle-checked-border-color);
        ${S}, ${y} {
          background-color: var(--input-toggle-checked-background-color);
        }
      }
      
      &:hover {
        cursor: pointer;
        ${_} {
          color: var(--input-label-hover);
        }

        ${v}, ${x} {
          border-color: var(--input-toggle-checked-hover-border-color);
          ${S}, ${y} {
            background-color: var(--input-toggle-checked-hover-background-color);
          }
        }
      }
     

    `};

    ${t&&f`
      cursor: not-allowed;
    `};

    ${v}, ${x} {
      transition: border-color var(--speed-faster) var(--easing-primary-out);
    }

    ${S} {
      transition: background-color var(--speed-faster) var(--easing-primary-out);
    }

    ${_}{
      transition: color var(--speed-faster) var(--easing-primary-out);
    }
    
  `};
`,w=({title:e,value:t,optionType:n=`text`,selected:r=!1,disabled:i=!1,onClick:a=()=>{},...s})=>{let c=p.icons.weights.regular;return(0,g.jsxs)(C,{onClick:a,$disabled:i,$selected:r,...s,children:[n===`checkbox`&&(0,g.jsx)(v,{children:(0,g.jsx)(y,{children:r&&(0,g.jsx)(b,{children:(0,g.jsx)(o,{color:`inverse`,stroke:`inverse`,size:12,weight:c})})})}),n===`radio`&&(0,g.jsx)(x,{children:(0,g.jsx)(S,{})}),(0,g.jsx)(_,{children:e})]})};try{w.displayName=`FilterOption`,w.__docgenInfo={description:``,displayName:`FilterOption`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/atoms/FilterOption.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!0,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`value`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!1,tags:{},type:{name:`string | number`}},optionType:{defaultValue:{value:`text`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`optionType`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!1,tags:{},type:{name:`enum`,raw:`IInputOptionsType`,value:[{value:`"checkbox"`},{value:`"radio"`},{value:`"text"`}]}},selected:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`selected`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!1,tags:{},type:{name:`boolean`}},onClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`}],description:``,name:`onClick`,parent:{fileName:`packages/ui-lib/src/Form/atoms/FilterOption.tsx`,name:`IFilterOption`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var E,D,O,k,A,j,M;function N(){return(N=e((()=>{E=t(),m(),c(),l(),D=n(),O=d.div`
  position: relative;
`,k=d.div`
  display: inline-block;
`,A=d.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;

  ${({$openState:e,$disabled:t})=>e&&f`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};

    ${e.position===`bottom-right`&&`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position===`bottom-left`&&`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};

    ${e.position===`top-left`&&`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

    ${e.position===`top-right`&&`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};

  `};
`,j=(e,t,n)=>{let r=`bottom-right`,i=e.left+t>window.innerWidth,a=e.bottom+n>window.innerHeight,o=e.bottom>n;return i&&a&&o&&(r=`top-left`),a&&!i&&o&&(r=`top-right`),!a&&i&&(r=`bottom-left`),r},M=({buttonIcon:e,buttonText:t,disabled:n=!1,minWidth:r=270,minHeight:i=190,isSortAscending:a,design:o=`default`,noCloseOnClickOutside:c,children:l,onToggleOpenCallback:d=()=>{},onCloseCallback:f=()=>{},ref:p,...m})=>{let[h,g]=(0,E.useState)({isOpen:!1,position:`bottom-right`}),_=(0,E.useRef)(null),v=(0,E.useRef)(null),y=(0,E.useCallback)(()=>{c||(h.isOpen&&f(),g(e=>({...e,isOpen:!1})))},[c,f,h.isOpen]);s(v,y);let b=(0,E.useCallback)((e,t)=>{if(!_.current)return;let n=_.current.getBoundingClientRect();if(!n)return;let r=j(n,e,t);d(!h.isOpen),g(e=>{let t=!e.isOpen;return{...e,isOpen:t,position:r}})},[d,h.isOpen]),x=(0,E.useCallback)(()=>{g(e=>({...e,isOpen:!1}))},[]);return(0,E.useImperativeHandle)(p,()=>({imperativeClose:x})),(0,D.jsxs)(O,{ref:v,...m,children:[(0,D.jsx)(k,{ref:_,children:(0,D.jsx)(u,{icon:e,isOpen:h.isOpen,onClick:()=>b(r,i),disabled:n,isSortAscending:a,design:o,hasFlipArrow:!0,children:t})}),(0,D.jsx)(A,{$openState:h,$disabled:n,$minWidth:r,children:l})]})};try{M.displayName=`FilterDropHandler`,M.__docgenInfo={description:``,displayName:`FilterDropHandler`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,methods:[],props:{buttonIcon:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`buttonIcon`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!0,tags:{},type:{name:`string`}},buttonText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`boolean`}},minWidth:{defaultValue:{value:`270`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`minWidth`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`number`}},minHeight:{defaultValue:{value:`190`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`minHeight`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`number`}},isSortAscending:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`isSortAscending`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`boolean`}},design:{defaultValue:{value:`default`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`design`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`enum`,raw:`FilterButtonDesign`,value:[{value:`"default"`},{value:`"basic"`}]}},noCloseOnClickOutside:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`noCloseOnClickOutside`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`boolean`}},onToggleOpenCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`onToggleOpenCallback`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`((isOpen: boolean) => void)`}},onCloseCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`onCloseCallback`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`(() => void)`}},ref:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`}],description:``,name:`ref`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/FilterDropHandler.tsx`,name:`IFilterDropHandler`},required:!1,tags:{},type:{name:`Ref<FilterDropHandlerRef>`}}},tags:{}}}catch{}})))()}var P,F,I,L;function R(){return(R=e((()=>{m(),r(),P=n(),F=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 146px;
  border-top: 1px solid var(--grey-5);
`,I=d.div`
  font-family: var(--font-data);
  color: var(--grey-11);
  font-size: 12px;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  padding: 15px 0;
`,L=({loadingText:e})=>(0,P.jsxs)(F,{children:[(0,P.jsx)(i,{size:`large`,styling:`primary`}),(0,P.jsx)(I,{children:e})]});try{L.displayName=`LoadingBox`,L.__docgenInfo={description:``,displayName:`LoadingBox`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/atoms/LoadingBox.tsx`,methods:[],props:{loadingText:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/atoms/LoadingBox.tsx`,name:`ILoadingBox`}],description:``,name:`loadingText`,parent:{fileName:`packages/ui-lib/src/Filters/atoms/LoadingBox.tsx`,name:`ILoadingBox`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}export{w as a,N as i,R as n,T as o,M as r,L as t};