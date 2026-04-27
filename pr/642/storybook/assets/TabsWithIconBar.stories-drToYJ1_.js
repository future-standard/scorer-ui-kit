import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,V as o,ct as s,vt as c}from"./iframe-BHdSP_o9.js";var l,u,d,f,p,m,h,g,_;e((()=>{a(),n(),c(),l=i(),u=t(),d={title:`Misc/molecules`,component:s,decorators:[]},f=`87px`,p=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,m=r.div`
  padding: ${`30px 30px 30px ${f}`} ;
`,h=[{icon:`Success`,title:`New People`,subtitle:`Selected 120 of 120`,tabFor:`example1`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(o,{title:`Success people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`RecognitionPhoto`,title:`Updates To People`,subtitle:`Selected 0 of 4`,tabFor:`example2`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(o,{title:`Updates to people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`BigWarning`,title:`Missing Images`,subtitle:`4 entries w/out images`,tabFor:`example3`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(o,{title:`Missing images`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`Warning`,title:`Errors`,subtitle:`6 entries with errors`,tabFor:`example4`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(o,{title:`Errors`,introductionText:`This is an example of a page shown by a selected tab`})})}],g=()=>{let e=(0,l.text)(`Default Tab Id`,`example1`),t=(0,l.text)(`Padding Left Override`,f);return(0,u.jsx)(p,{children:(0,u.jsx)(s,{defaultTabId:e,tabList:(0,l.object)(`TabList`,h),paddingLeft:t})})},g.__docgenInfo={description:``,methods:[],displayName:`_TabWithIconBar`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_TabWithIconBar`]}))();export{g as _TabWithIconBar,_ as __namedExportsOrder,d as default};