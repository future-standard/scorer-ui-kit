import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,V as r,ct as i,jt as a,kt as o,vt as s}from"./iframe-YIV3yJSz.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(),s(),o(),l=n(),u={title:`Misc/molecules`,component:i,decorators:[]},d=`87px`,f=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,p=a.div`
  padding: ${`30px 30px 30px ${d}`} ;
`,m=[{icon:`Success`,title:`New People`,subtitle:`Selected 120 of 120`,tabFor:`example1`,customComponent:(0,l.jsx)(p,{children:(0,l.jsx)(r,{title:`Success people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`RecognitionPhoto`,title:`Updates To People`,subtitle:`Selected 0 of 4`,tabFor:`example2`,customComponent:(0,l.jsx)(p,{children:(0,l.jsx)(r,{title:`Updates to people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`BigWarning`,title:`Missing Images`,subtitle:`4 entries w/out images`,tabFor:`example3`,customComponent:(0,l.jsx)(p,{children:(0,l.jsx)(r,{title:`Missing images`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`Warning`,title:`Errors`,subtitle:`6 entries with errors`,tabFor:`example4`,customComponent:(0,l.jsx)(p,{children:(0,l.jsx)(r,{title:`Errors`,introductionText:`This is an example of a page shown by a selected tab`})})}],h=()=>{let e=(0,c.text)(`Default Tab Id`,`example1`),t=(0,c.text)(`Padding Left Override`,d);return(0,l.jsx)(f,{children:(0,l.jsx)(i,{defaultTabId:e,tabList:(0,c.object)(`TabList`,m),paddingLeft:t})})},h.__docgenInfo={description:``,methods:[],displayName:`_TabWithIconBar`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`_TabWithIconBar`]}))();export{h as _TabWithIconBar,g as __namedExportsOrder,u as default};