import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./PageHeader-CPSv-dtM.js";import{a as i,o as a,r as o,t as s}from"./TabList-Cv1k--vY.js";import{n as c,t as l}from"./TabWithIcon-B8Rjr6Wp.js";import{n as u,t as d}from"./TabContent-BbBUcBp_.js";import{_ as f,a as p,o as m}from"./iframe-PEYaYO03.js";var h,g,_,v;function y(){return(y=e((()=>{m(),c(),u(),o(),a(),h=t(),g=p.div``,_=p.div`
  padding-top: 10px;
  padding-left: ${({$paddingLeft:e})=>e||`87px`};
  box-shadow: 0 -5px 5px 0 var(--black-a1);
  border-bottom: 1px solid var(--grey-6);
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
    &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`,v=({defaultTabId:e,tabList:t,paddingLeft:n})=>(0,h.jsx)(g,{children:(0,h.jsxs)(i,{children:[(0,h.jsx)(_,{$paddingLeft:n,children:(0,h.jsx)(s,{defaultTabId:e,children:t.map(({icon:e,title:t,subtitle:n,tabFor:r})=>(0,h.jsx)(l,{icon:e,title:t,subtitle:n,tabFor:r},`tabWithIcon-${r}`))})}),t.map(({tabFor:e,customComponent:t})=>(0,h.jsx)(d,{tabId:e,children:t},`TabContent-${e}`))]})});try{v.displayName=`TabsWithIconBar`,v.__docgenInfo={description:``,displayName:`TabsWithIconBar`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,methods:[],props:{defaultTabId:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`}],description:``,name:`defaultTabId`,parent:{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`},required:!0,tags:{},type:{name:`string`}},tabList:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`}],description:``,name:`tabList`,parent:{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`},required:!0,tags:{},type:{name:`ITabIcon[]`}},paddingLeft:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`}],description:``,name:`paddingLeft`,parent:{fileName:`packages/ui-lib/src/Tabs/molecules/TabsWithIconBar.tsx`,name:`ITabsWithIconBar`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{b=f(),n(),y(),m(),x=t(),S={title:`Misc/molecules`,component:v,decorators:[]},C=`87px`,w=p.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,T=p.div`
  padding: ${`30px 30px 30px ${C}`} ;
`,E=[{icon:`Success`,title:`New People`,subtitle:`Selected 120 of 120`,tabFor:`example1`,customComponent:(0,x.jsx)(T,{children:(0,x.jsx)(r,{title:`Success people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`RecognitionPhoto`,title:`Updates To People`,subtitle:`Selected 0 of 4`,tabFor:`example2`,customComponent:(0,x.jsx)(T,{children:(0,x.jsx)(r,{title:`Updates to people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`BigWarning`,title:`Missing Images`,subtitle:`4 entries w/out images`,tabFor:`example3`,customComponent:(0,x.jsx)(T,{children:(0,x.jsx)(r,{title:`Missing images`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`Warning`,title:`Errors`,subtitle:`6 entries with errors`,tabFor:`example4`,customComponent:(0,x.jsx)(T,{children:(0,x.jsx)(r,{title:`Errors`,introductionText:`This is an example of a page shown by a selected tab`})})}],D=()=>{let e=(0,b.text)(`Default Tab Id`,`example1`),t=(0,b.text)(`Padding Left Override`,C),n=(0,b.object)(`TabList`,E);return(0,x.jsx)(w,{children:(0,x.jsx)(v,{defaultTabId:e,tabList:n,paddingLeft:t})})},O=[`_TabWithIconBar`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const defaultTabId = text('Default Tab Id', 'example1');
  const paddingLeft = text('Padding Left Override', PADDING_LEFT);
  const tabList = object('TabList', list);
  return <Container>
      <TabsWithIconBar {...{
      defaultTabId,
      tabList,
      paddingLeft
    }} />
    </Container>;
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as _TabWithIconBar,O as __namedExportsOrder,S as default};