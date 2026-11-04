import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{r as i,t as a}from"./Icon-W-FFwI7F.js";import{r as o,t as s}from"./SelectField-DatOXclN.js";import{n as c,t as l}from"./useClickOutside-gjKn5OLT.js";import{n as u,t as d}from"./FilterDropdownContainer-CPGRHcoM.js";import{a as f,i as p,o as m}from"./iframe-D4JXfpgr.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{h=e(n()),m(),o(),l(),i(),u(),g=r(),_=f.div`
  display: inline-block;
  position: relative;
`,v=p`
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
`,y=f.div`
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
`,b=f.button`
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
  ${({$isActive:e})=>e&&p`
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
  ${({$isInnerContextButton:e})=>e&&p`
    margin-right: 5px;
  `}
`,x=f.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:t})=>e&&p`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};
    ${e.position===`bottom-right`&&p`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`bottom-left`&&p`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`top-left`&&p`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position===`top-right`&&p`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`,S=f.div`
  display: inline-block;
`,C=p`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`,w=f.div`
  ${C};
  padding: 4px 8px 4px 10px;
`,T=f.div`
  ${C};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`,E=f.div`
  display: flex;
`,D=f.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`,O=f.div`
  display: flex;
`,k=f.div`
  select{
    background-color: transparent;
  }
`,A=(e,t,n)=>{let r=`bottom-right`,i=e.left+t>window.innerWidth,a=e.bottom+n>window.innerHeight,o=e.bottom>n;return i&&a&&o?r=`top-left`:a&&!i&&o?r=`top-right`:!a&&i&&(r=`bottom-left`),r},j=({disabled:e=!1,onToggleOpenCallback:t=()=>{},onCloseCallback:n=()=>{},pageSizeOptions:r=[10,20,30,50,100],onPageSizeChange:i=()=>{},defaultPageSize:o=10,getLayout:l=()=>{},layoutText:u=`Layout`,pageSizeText:f=`Items Per Page`,contentArray:p,minWidth:m=250,minHeight:v=90,hasPageSettings:C=!0})=>{let[j,M]=(0,h.useState)({isOpen:!1,position:`bottom-right`}),N=(0,h.useRef)(null),P=(0,h.useRef)(null),[F,I]=(0,h.useState)(`grid`),[L,R]=(0,h.useState)(o),z=(0,h.useCallback)(()=>{j.isOpen&&n(),M(e=>({...e,isOpen:!1}))},[n,j.isOpen]);c(P,z);let B=(0,h.useCallback)((e,n)=>{if(!N.current)return;let r=N.current.getBoundingClientRect();if(!r)return;let i=A(r,e,n);t(j.isOpen),M(e=>{let t=!e.isOpen;return{...e,isOpen:t,position:i}})},[t,j.isOpen]),V=(0,h.useCallback)(e=>{I(e),l(e)},[l]),H=(0,h.useCallback)(e=>{i(Number(e))},[i]);(0,h.useEffect)(()=>{R(o)},[o]);let U=(0,g.jsx)(h.Fragment,{children:(0,g.jsx)(y,{children:(0,g.jsx)(a,{icon:`ViewSettings`,color:j.isOpen?`inverse`:`dimmed`,size:16})})});return(0,g.jsxs)(_,{ref:P,children:[(0,g.jsx)(S,{ref:N,children:(0,g.jsx)(b,{$isActive:j.isOpen,$isInnerContextButton:!1,onClick:()=>B(m,v),children:U})}),(0,g.jsx)(x,{$openState:j,$disabled:e,$minWidth:m,children:(0,g.jsxs)(d,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)(D,{children:u}),(0,g.jsx)(E,{children:p.map((e,t)=>(0,g.jsx)(b,{$isInnerContextButton:t!==p.length-1,$isActive:F===e.id,onClick:()=>V(e.id),children:(0,g.jsx)(y,{title:e.tooltipText,children:(0,g.jsx)(a,{icon:e.icon,color:F===e.id?`inverse`:`dimmed`,size:16})})},e.id))})]}),C&&(0,g.jsxs)(T,{children:[(0,g.jsx)(D,{children:f}),r&&(0,g.jsx)(O,{children:(0,g.jsx)(k,{children:(0,g.jsx)(s,{changeCallback:H,isCompact:!0,value:L,children:r.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))})})})]})]})})]})};try{j.displayName=`FilterLayout`,j.__docgenInfo={description:``,displayName:`FilterLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,methods:[],props:{disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onToggleOpenCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onToggleOpenCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((isOpen: boolean) => void)`}},onCloseCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onCloseCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}},pageSizeOptions:{defaultValue:{value:`[10, 20, 30, 50, 100]`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeOptions`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number[]`}},onPageSizeChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onPageSizeChange`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(size: number) => void`}},defaultPage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPage`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},defaultPageSize:{defaultValue:{value:`10`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPageSize`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},getLayout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`getLayout`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(layout: string) => void`}},layoutText:{defaultValue:{value:`Layout`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`layoutText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},pageSizeText:{defaultValue:{value:`Items Per Page`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},contentArray:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`contentArray`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IOptionsItem[]`}},minWidth:{defaultValue:{value:`250`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minWidth`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},minHeight:{defaultValue:{value:`90`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minHeight`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},hasPageSettings:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`hasPageSettings`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var N,P,F,I,L,R;function z(){return(z=t((()=>{M(),N=r(),{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:F}=__STORYBOOK_MODULE_TEST__,I={title:`Filters/molecules/FilterLayout`,component:j,tags:[`autodocs`],decorators:[e=>(0,N.jsx)(`div`,{style:{paddingBottom:`160px`},children:(0,N.jsx)(e,{})})],argTypes:{language:{control:`select`,options:[`english`,`japanese`]},defaultPage:{control:!1,table:{defaultValue:{summary:`unset`}}}},args:{language:`japanese`,disabled:!1,pageSizeOptions:[10,20,50,100],defaultPageSize:20,layoutText:`Layout`,pageSizeText:`Items Per Page`,contentArray:[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],minWidth:250,minHeight:90,hasPageSettings:!0,onPageSizeChange:F(),getLayout:F(),onToggleOpenCallback:F(),onCloseCallback:F()},render:function({language:e,...t}){let[{defaultPageSize:n},r]=P(),i=e=>{t.onPageSizeChange(e),r({defaultPageSize:e})};return(0,N.jsx)(j,{...t,defaultPageSize:n,onPageSizeChange:i,layoutText:e===`japanese`?`レイアウト`:t.layoutText,pageSizeText:e===`japanese`?`１ページのアイテム数`:t.pageSizeText})}},L={},R=[`Default`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{}`,...L.parameters?.docs?.source}}}})))()}z();export{L as Default,R as __namedExportsOrder,I as default};