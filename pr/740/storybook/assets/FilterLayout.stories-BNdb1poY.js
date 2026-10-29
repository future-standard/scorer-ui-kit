import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{r as i,t as a}from"./Icon-CmxkaxYk.js";import{r as o,t as s}from"./SelectField-B-L4gYHN.js";import{n as c,t as l}from"./useClickOutside-gjKn5OLT.js";import{n as u,t as d}from"./FilterDropdownContainer-CD2vW9mp.js";import{_ as f,a as p,i as m,o as h}from"./iframe-BmxEQ5Tp.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{g=e(n()),h(),o(),l(),i(),u(),_=r(),v=p.div`
  display: inline-block;
  position: relative;
`,y=m`
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
`,b=p.div`
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
`,x=p.button`
  ${y}
  ${b}{
    cursor: pointer;
  }
  &:hover {
    div > svg > g {
      stroke: var(--white-1);
    }
  }
  &:hover ${b}{
    background-color: var(--primary-9);
    }
  }
  ${({$isActive:e})=>e&&m`
    ${b} {
      background-color: var(--primary-9);
      [stroke]{
        stroke: var(--white-1);
      }
    }
    &:hover ${b}{
      cursor: pointer;
    }
  `}
  ${({$isInnerContextButton:e})=>e&&m`
    margin-right: 5px;
  `}
`,S=p.div`
  z-index: 100;
  min-width: ${({$minWidth:e})=>e}px;
  position: absolute;
  ${({$openState:e,$disabled:t})=>e&&m`
    display: ${e.isOpen?`inline-block`:`none`};
    display: ${t&&`none`};
    ${e.position===`bottom-right`&&m`
      bottom: 0;
      left: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`bottom-left`&&m`
      bottom: 0;
      right: 0;
      transform: translateY(calc(100% + 5px ));
    `};
    ${e.position===`top-left`&&m`
      top: 0;
      right: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
    ${e.position===`top-right`&&m`
      top: 0;
      left: 0;
      transform: translateY(calc( -100% - 5px ));
    `};
  `};
`,C=p.div`
  display: inline-block;
`,w=m`
  display: flex;
  justify-content: space-between;
  width: auto;
  align-items: center;
  gap: 16px;
`,T=p.div`
  ${w};
  padding: 4px 8px 4px 10px;
`,E=p.div`
  ${w};
  border-top: var(--grey-6) 1px solid;
  padding: 4px 8px 4px 10px;
`,D=p.div`
  display: flex;
`,O=p.p`
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--grey-11);
  font-weight: 500;
`,k=p.div`
  display: flex;
`,A=p.div`
  select{
    background-color: transparent;
  }
`,j=(e,t,n)=>{let r=`bottom-right`,i=e.left+t>window.innerWidth,a=e.bottom+n>window.innerHeight,o=e.bottom>n;return i&&a&&o?r=`top-left`:a&&!i&&o?r=`top-right`:!a&&i&&(r=`bottom-left`),r},M=({disabled:e=!1,onToggleOpenCallback:t=()=>{},onCloseCallback:n=()=>{},pageSizeOptions:r=[10,20,30,50,100],onPageSizeChange:i=()=>{},defaultPageSize:o=10,getLayout:l=()=>{},layoutText:u=`Layout`,pageSizeText:f=`Items Per Page`,contentArray:p,minWidth:m=250,minHeight:h=90,hasPageSettings:y=!0})=>{let[w,M]=(0,g.useState)({isOpen:!1,position:`bottom-right`}),N=(0,g.useRef)(null),P=(0,g.useRef)(null),[F,I]=(0,g.useState)(`grid`),[L,R]=(0,g.useState)(o),z=(0,g.useCallback)(()=>{w.isOpen&&n(),M(e=>({...e,isOpen:!1}))},[n,w.isOpen]);c(P,z);let B=(0,g.useCallback)((e,n)=>{if(!N.current)return;let r=N.current.getBoundingClientRect();if(!r)return;let i=j(r,e,n);t(w.isOpen),M(e=>{let t=!e.isOpen;return{...e,isOpen:t,position:i}})},[t,w.isOpen]),V=(0,g.useCallback)(e=>{I(e),l(e)},[l]),H=(0,g.useCallback)(e=>{i(Number(e))},[i]);(0,g.useEffect)(()=>{R(o)},[o]);let U=(0,_.jsx)(g.Fragment,{children:(0,_.jsx)(b,{children:(0,_.jsx)(a,{icon:`ViewSettings`,color:w.isOpen?`inverse`:`dimmed`,size:16})})});return(0,_.jsxs)(v,{ref:P,children:[(0,_.jsx)(C,{ref:N,children:(0,_.jsx)(x,{$isActive:w.isOpen,$isInnerContextButton:!1,onClick:()=>B(m,h),children:U})}),(0,_.jsx)(S,{$openState:w,$disabled:e,$minWidth:m,children:(0,_.jsxs)(d,{children:[(0,_.jsxs)(T,{children:[(0,_.jsx)(O,{children:u}),(0,_.jsx)(D,{children:p.map((e,t)=>(0,_.jsx)(x,{$isInnerContextButton:t!==p.length-1,$isActive:F===e.id,onClick:()=>V(e.id),children:(0,_.jsx)(b,{title:e.tooltipText,children:(0,_.jsx)(a,{icon:e.icon,color:F===e.id?`inverse`:`dimmed`,size:16})})},e.id))})]}),y&&(0,_.jsxs)(E,{children:[(0,_.jsx)(O,{children:f}),r&&(0,_.jsx)(k,{children:(0,_.jsx)(A,{children:(0,_.jsx)(s,{changeCallback:H,isCompact:!0,value:L,children:r.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))})})})]})]})})]})};try{M.displayName=`FilterLayout`,M.__docgenInfo={description:``,displayName:`FilterLayout`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,methods:[],props:{disabled:{defaultValue:{value:`false`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`disabled`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}},onToggleOpenCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onToggleOpenCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`((isOpen: boolean) => void)`}},onCloseCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onCloseCallback`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(() => void)`}},pageSizeOptions:{defaultValue:{value:`[10, 20, 30, 50, 100]`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeOptions`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number[]`}},onPageSizeChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`onPageSizeChange`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(size: number) => void`}},defaultPage:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPage`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},defaultPageSize:{defaultValue:{value:`10`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`defaultPageSize`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},getLayout:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`getLayout`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`(layout: string) => void`}},layoutText:{defaultValue:{value:`Layout`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`layoutText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},pageSizeText:{defaultValue:{value:`Items Per Page`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`pageSizeText`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`string`}},contentArray:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`contentArray`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!0,tags:{},type:{name:`IOptionsItem[]`}},minWidth:{defaultValue:{value:`250`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minWidth`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},minHeight:{defaultValue:{value:`90`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`minHeight`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`number`}},hasPageSettings:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`}],description:``,name:`hasPageSettings`,parent:{fileName:`packages/ui-lib/src/Filters/molecules/FilterLayout.tsx`,name:`IProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{P=f(),F=n(),N(),h(),I=r(),{action:L}=__STORYBOOK_MODULE_ACTIONS__,R={title:`Filters/molecules`,component:M,decorators:[]},z=p.div``,B=()=>{let e=(0,P.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,P.boolean)(`Has Page Settings`,!0),n=L(`layout-button-click`),r=L(`page-size`),i=[10,20,50,100],[a,o]=(0,F.useState)(20),s=[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],c=(0,F.useCallback)(e=>{o(e)},[]);return(0,I.jsx)(z,{children:(0,I.jsx)(M,{onPageSizeChange:e=>{r(e),c(e)},pageSizeOptions:i,defaultPageSize:a,getLayout:n,layoutText:e===`english`?`Layout`:`レイアウト`,pageSizeText:e===`english`?`Items Per Page`:`１ページのアイテム数`,contentArray:s,hasPageSettings:t})})},V=[`_FilterLayout`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const hasPageSettings = boolean('Has Page Settings', true);
  const handleLayout = action('layout-button-click');
  const handlePageSizeChange = action('page-size');
  const sizeOptions = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(20);
  const arrayList = [{
    icon: 'LayoutGrid',
    id: 'grid',
    tooltipText: 'Grid View'
  }, {
    icon: 'LayoutList',
    id: 'list',
    tooltipText: 'List View'
  }];
  const onSizePerPageChange = useCallback((size: number) => {
    setPageSize(size);
  }, []);
  return <Container>
      <FilterLayout {...{
      onPageSizeChange: (size: number) => {
        handlePageSizeChange(size);
        onSizePerPageChange(size);
      },
      pageSizeOptions: sizeOptions,
      defaultPageSize: pageSize,
      getLayout: handleLayout,
      layoutText: language === 'english' ? 'Layout' : 'レイアウト',
      pageSizeText: language === 'english' ? 'Items Per Page' : '１ページのアイテム数',
      contentArray: arrayList,
      hasPageSettings: hasPageSettings
    }} />
    </Container>;
}`,...B.parameters?.docs?.source}}}})))()}H();export{B as _FilterLayout,V as __namedExportsOrder,R as default};