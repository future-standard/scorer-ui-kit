import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,H as r,Lt as i,Pt as a,Rt as o,bt as s,ut as c}from"./iframe-Ctt8ZGpV.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),n(),s(),l=a(),u=t(),d={title:`Misc/molecules`,component:c,decorators:[]},f=`87px`,p=i.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,m=i.div`
  padding: ${`30px 30px 30px ${f}`} ;
`,h=[{icon:`Success`,title:`New People`,subtitle:`Selected 120 of 120`,tabFor:`example1`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(r,{title:`Success people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`RecognitionPhoto`,title:`Updates To People`,subtitle:`Selected 0 of 4`,tabFor:`example2`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(r,{title:`Updates to people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`BigWarning`,title:`Missing Images`,subtitle:`4 entries w/out images`,tabFor:`example3`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(r,{title:`Missing images`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`Warning`,title:`Errors`,subtitle:`6 entries with errors`,tabFor:`example4`,customComponent:(0,u.jsx)(m,{children:(0,u.jsx)(r,{title:`Errors`,introductionText:`This is an example of a page shown by a selected tab`})})}],g=()=>{let e=(0,l.text)(`Default Tab Id`,`example1`),t=(0,l.text)(`Padding Left Override`,f);return(0,u.jsx)(p,{children:(0,u.jsx)(c,{defaultTabId:e,tabList:(0,l.object)(`TabList`,h),paddingLeft:t})})},g.__docgenInfo={description:``,methods:[],displayName:`_TabWithIconBar`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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