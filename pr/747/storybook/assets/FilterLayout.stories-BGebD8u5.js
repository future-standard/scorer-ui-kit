import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{a as i,i as a,r as o}from"./styled-components.browser.esm-DRoLZq3m.js";import{r as s,t as c}from"./Icon-jcMQaGO-.js";import{r as l,t as u}from"./SelectField-Du-qetJ0.js";import{n as d,t as f}from"./useClickOutside-gjKn5OLT.js";import{n as p,t as m}from"./FilterDropdownContainer-uG9v15Mx.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{h=e(n()),i(),l(),f(),s(),p(),g=r(),_=a.div`
  display: inline-block;
  position: relative;
`,v=o`
  -webkit-tap-highlight-color: transparent;
  border: none;
  background: none;
  display: flex;
  justify-content:left;
  align-items:center;
  flex-wrap: wrap;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  padding: 0;
`,y=a.div`
  background-color: var(--grey-2);
  transition: background-color var(--speed-fast) var(--easing-primary-in-out);
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display:flex;
  justify-content:center;
  align-items:center;
  svg {
    display: block;
  }
`,b=a.button`
  ${v}
  ${y}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${y}{
    background-color: var(--primary-9);
    }
  }
  ${({$isActive:e})=>e&&o`
    ${y} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${y}{
      cursor: pointer;
    }
  `}
  ${({$isInnerContextButton:e})=>e&&o`
    margin-right: 5px;
  `}
`,x=a.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:t})=>e&&o`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};
    ${e.position===`bottom-right`&&o`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`bottom-left`&&o`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`top-left`&&o`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position===`top-right`&&o`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`,S=a.div`
  display: inline-block;
`,C=o`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`,w=a.div`
  ${C};
  padding: 4px 8px 4px 10px;
`,T=a.div`
  ${C};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`,E=a.div`
  display: flex;
`,D=a.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`,O=a.div`
  display: flex;
`,k=a.div`
  select{
    background-color: transparent;
  }
`,A=(e,t,n)=>{let r=`bottom-right`,i=e.left+t>window.innerWidth,a=e.bottom+n>window.innerHeight,o=e.bottom>n;return i&&a&&o?r=`top-left`:a&&!i&&o?r=`top-right`:!a&&i&&(r=`bottom-left`),r},j=({disabled:e=!1,onToggleOpenCallback:t=()=>{},onCloseCallback:n=()=>{},pageSizeOptions:r=[10,20,30,50,100],onPageSizeChange:i=()=>{},defaultPageSize:a=10,getLayout:o=()=>{},layoutText:s=`Layout`,pageSizeText:l=`Items Per Page`,contentArray:f,minWidth:p=250,minHeight:v=90,hasPageSettings:C=!0})=>{let[j,M]=(0,h.useState)({isOpen:!1,position:`bottom-right`}),N=(0,h.useRef)(null),P=(0,h.useRef)(null),[F,I]=(0,h.useState)(`grid`),[L,R]=(0,h.useState)(a),z=(0,h.useCallback)(()=>{j.isOpen&&n(),M(e=>({...e,isOpen:!1}))},[n,j.isOpen]);d(P,z);let B=(0,h.useCallback)((e,n)=>{if(!N.current)return;let r=N.current.getBoundingClientRect();if(!r)return;let i=A(r,e,n);t(j.isOpen),M(e=>{let t=!e.isOpen;return{...e,isOpen:t,position:i}})},[t,j.isOpen]),V=(0,h.useCallback)(e=>{I(e),o(e)},[o]),H=(0,h.useCallback)(e=>{i(Number(e))},[i]);(0,h.useEffect)(()=>{R(a)},[a]);let U=(0,g.jsx)(h.Fragment,{children:(0,g.jsx)(y,{children:(0,g.jsx)(c,{icon:`ViewSettings`,color:j.isOpen?`inverse`:`dimmed`,size:16})})});return(0,g.jsxs)(_,{ref:P,children:[(0,g.jsx)(S,{ref:N,children:(0,g.jsx)(b,{$isActive:j.isOpen,$isInnerContextButton:!1,onClick:()=>B(p,v),children:U})}),(0,g.jsx)(x,{$openState:j,$disabled:e,$minWidth:p,children:(0,g.jsxs)(m,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(D,{children:s}),(0,g.jsx)(E,{children:f.map((e,t)=>(0,g.jsx)(b,{$isInnerContextButton:t!==f.length-1,$isActive:F===e.id,onClick:()=>V(e.id),children:(0,g.jsx)(y,{title:e.tooltipText,children:(0,g.jsx)(c,{icon:e.icon,color:F===e.id?`inverse`:`dimmed`,size:16})})},e.id))})]}),C&&(0,g.jsxs)(T,{children:[(0,g.jsx)(D,{children:l}),r&&(0,g.jsx)(O,{children:(0,g.jsx)(k,{children:(0,g.jsx)(u,{changeCallback:H,isCompact:!0,value:L,children:r.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))})})})]})]})})]})};try{j.displayName=`FilterLayout`,j.__docgenInfo={description:``,displayName:`FilterLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,methods:[],props:{disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onToggleOpenCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onToggleOpenCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((isOpen: boolean) => void)`}},onCloseCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onCloseCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}},pageSizeOptions:{defaultValue:{value:`[10, 20, 30, 50, 100]`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeOptions`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number[]`}},onPageSizeChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onPageSizeChange`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(size: number) => void`}},defaultPage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPage`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},defaultPageSize:{defaultValue:{value:`10`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPageSize`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},getLayout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`getLayout`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(layout: string) => void`}},layoutText:{defaultValue:{value:`Layout`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`layoutText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},pageSizeText:{defaultValue:{value:`Items Per Page`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},contentArray:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`contentArray`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IOptionsItem[]`}},minWidth:{defaultValue:{value:`250`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minWidth`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},minHeight:{defaultValue:{value:`90`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minHeight`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},hasPageSettings:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`hasPageSettings`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var N,P,F,I,L,R;function z(){return(z=t((()=>{M(),N=r(),{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:F}=__STORYBOOK_MODULE_TEST__,I={title:`Filters/molecules/FilterLayout`,component:j,decorators:[e=>(0,N.jsx)(`div`,{style:{paddingBottom:`160px`},children:(0,N.jsx)(e,{})})],argTypes:{language:{control:`select`,options:[`english`,`japanese`]},defaultPage:{control:!1,table:{defaultValue:{summary:`unset`}}}},args:{language:`japanese`,disabled:!1,pageSizeOptions:[10,20,50,100],defaultPageSize:20,layoutText:`Layout`,pageSizeText:`Items Per Page`,contentArray:[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],minWidth:250,minHeight:90,hasPageSettings:!0,onPageSizeChange:F(),getLayout:F(),onToggleOpenCallback:F(),onCloseCallback:F()},render:function({language:e,...t}){let[{defaultPageSize:n},r]=P(),i=e=>{t.onPageSizeChange(e),r({defaultPageSize:e})};return(0,N.jsx)(j,{...t,defaultPageSize:n,onPageSizeChange:i,layoutText:e===`japanese`?`レイアウト`:t.layoutText,pageSizeText:e===`japanese`?`１ページのアイテム数`:t.pageSizeText})}},L={},R=[`Default`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}}})))()}z();export{L as Default,R as __namedExportsOrder,I as default};