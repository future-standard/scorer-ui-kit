import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,yt as s}from"./iframe-DUfvGjia.js";var c,l,u,d,f,p,m;e((()=>{a(),o(),n(),c=i(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Global/molecules`,component:s,decorators:[]},f=r.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,p=()=>{let e=(0,c.object)(`Back Link`,{label:`Back`,onClick:u(`Return action`)}),t=(0,c.boolean)(`Show Breadcrumbs`,!0),n=(0,c.boolean)(`Show Home Icon`,!0);return(0,l.jsx)(f,{children:(0,l.jsx)(s,{back:e,showBreadcrumbs:t,breadcrumbs:(0,c.object)(`breadcrumbs`,[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,onClick:u(`The Breadcrumb is using a callback`)},{text:`Five`}]),showHomeIcon:n,share:(0,c.object)(`Share Link`,{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`})})})},p.__docgenInfo={description:``,methods:[],displayName:`_UtilityHeader`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const returnAction = action('Return action');
  const backLink = object("Back Link", {
    label: "Back",
    onClick: returnAction
  });
  const showBreadcrumbs = boolean("Show Breadcrumbs", true);
  const showHomeIcon = boolean("Show Home Icon", true);
  const clickAction = action('The Breadcrumb is using a callback');
  const breadcrumbs = object("breadcrumbs", [{
    text: 'Examples',
    href: '/'
  }, {
    text: 'Two',
    href: '#2'
  }, {
    text: 'Three',
    href: '#3'
  }, {
    text: 'Four',
    onClick: clickAction
  }, {
    text: 'Five' //Last breadcrumb is current page so it will not be a link
  }]);
  const shareLink = object("Share Link", {
    show: true,
    label: "Share",
    link: "https://www.example.com",
    copiedLabel: "Copied"
  });
  return <Container>
      <UtilityHeader back={backLink} showBreadcrumbs={showBreadcrumbs} breadcrumbs={breadcrumbs} showHomeIcon={showHomeIcon} share={shareLink} />
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_UtilityHeader`]}))();export{p as _UtilityHeader,m as __namedExportsOrder,d as default};