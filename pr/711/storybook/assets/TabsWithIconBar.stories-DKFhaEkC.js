import{Gt as e,It as t,Rt as n,mt as r,q as i,wt as a,zt as o}from"./iframe-Dnr5f4i3.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=s((()=>{c=e(),a(),o(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Misc/molecules`,component:r,decorators:[]},f=`87px`,p=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,m=n.div`
  padding: ${`30px 30px 30px ${f}`} ;
`,h=u(`tab-click`),g=e=>()=>h(e),_=[{icon:`Success`,title:`New People`,subtitle:`Selected 120 of 120`,tabFor:`newPeopleTab`,onClick:g(`newPeopleTab`),customComponent:(0,l.jsx)(m,{children:(0,l.jsx)(i,{title:`Success people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`RecognitionPhoto`,title:`Updates To People`,subtitle:`Selected 0 of 4`,tabFor:`updatesToPeopleTab`,onClick:g(`updatesToPeopleTab`),customComponent:(0,l.jsx)(m,{children:(0,l.jsx)(i,{title:`Updates to people`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`BigWarning`,title:`Missing Images`,subtitle:`4 entries w/out images`,tabFor:`missingImagesTab`,onClick:g(`missingImagesTab`),customComponent:(0,l.jsx)(m,{children:(0,l.jsx)(i,{title:`Missing images`,introductionText:`This is an example of a page shown by a selected tab`})})},{icon:`Warning`,title:`Errors`,subtitle:`6 entries with errors`,tabFor:`errorsTab`,onClick:g(`errorsTab`),customComponent:(0,l.jsx)(m,{children:(0,l.jsx)(i,{title:`Errors`,introductionText:`This is an example of a page shown by a selected tab`})})}],v=()=>{let e=(0,c.text)(`Default Tab Id`,`newPeopleTab`),t=(0,c.text)(`Padding Left Override`,f),n=(0,c.object)(`TabList`,_);return(0,l.jsx)(p,{children:(0,l.jsx)(r,{defaultTabId:e,tabList:n,paddingLeft:t})})},v.__docgenInfo={description:``,methods:[],displayName:`_TabWithIconBar`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const defaultTabId = text('Default Tab Id', 'newPeopleTab');
  const paddingLeft = text('Padding Left Override', PADDING_LEFT);
  const tabList = object('TabList', list);
  return <Container>
      <TabsWithIconBar {...{
      defaultTabId,
      tabList,
      paddingLeft
    }} />
    </Container>;
}`,...v.parameters?.docs?.source}}},y=[`_TabWithIconBar`]})))()}b();export{v as _TabWithIconBar,y as __namedExportsOrder,d as default};