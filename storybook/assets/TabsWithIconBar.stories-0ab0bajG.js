import{ap as c,d as s,j as t,P as a,a as d}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const h={title:"Misc/molecules",component:c,decorators:[]},p="87px",m=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,o=d.div`
  padding: ${`30px 30px 30px ${p}`} ;
`,u=[{icon:"Success",title:"New People",subtitle:"Selected 120 of 120",tabFor:"example1",customComponent:t.jsx(o,{children:t.jsx(a,{title:"Success people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"RecognitionPhoto",title:"Updates To People",subtitle:"Selected 0 of 4",tabFor:"example2",customComponent:t.jsx(o,{children:t.jsx(a,{title:"Updates to people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"BigWarning",title:"Missing Images",subtitle:"4 entries w/out images",tabFor:"example3",customComponent:t.jsx(o,{children:t.jsx(a,{title:"Missing images",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"Warning",title:"Errors",subtitle:"6 entries with errors",tabFor:"example4",customComponent:t.jsx(o,{children:t.jsx(a,{title:"Errors",introductionText:"This is an example of a page shown by a selected tab"})})}],e=()=>{const l=s.text("Default Tab Id","example1"),x=s.text("Padding Left Override",p),b=s.object("TabList",u);return t.jsx(m,{children:t.jsx(c,{defaultTabId:l,tabList:b,paddingLeft:x})})};e.__docgenInfo={description:"",methods:[],displayName:"_TabWithIconBar"};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const f=["_TabWithIconBar"];export{e as _TabWithIconBar,f as __namedExportsOrder,h as default};
