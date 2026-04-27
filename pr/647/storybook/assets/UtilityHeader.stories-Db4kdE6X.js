import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,jt as i,kt as a,yt as o}from"./iframe-Csst3Hft.js";var s,c,l,u,d,f,p;e((()=>{s=t(),r(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Global/molecules`,component:o,decorators:[]},d=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,f=()=>{let e=(0,s.object)(`Back Link`,{label:`Back`,onClick:l(`Return action`)}),t=(0,s.boolean)(`Show Breadcrumbs`,!0),n=(0,s.boolean)(`Show Home Icon`,!0);return(0,c.jsx)(d,{children:(0,c.jsx)(o,{back:e,showBreadcrumbs:t,breadcrumbs:(0,s.object)(`breadcrumbs`,[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,onClick:l(`The Breadcrumb is using a callback`)},{text:`Five`}]),showHomeIcon:n,share:(0,s.object)(`Share Link`,{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`})})})},f.__docgenInfo={description:``,methods:[],displayName:`_UtilityHeader`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const returnAction = action('Return action');
  const backLink = object('Back Link', {
    label: 'Back',
    onClick: returnAction
  });
  const showBreadcrumbs = boolean('Show Breadcrumbs', true);
  const showHomeIcon = boolean('Show Home Icon', true);
  const clickAction = action('The Breadcrumb is using a callback');
  const breadcrumbs = object('breadcrumbs', [{
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
  const shareLink = object('Share Link', {
    show: true,
    label: 'Share',
    link: 'https://www.example.com',
    copiedLabel: 'Copied'
  });
  return <Container>
      <UtilityHeader back={backLink} showBreadcrumbs={showBreadcrumbs} breadcrumbs={breadcrumbs} showHomeIcon={showHomeIcon} share={shareLink} />
    </Container>;
}`,...f.parameters?.docs?.source}}},p=[`_UtilityHeader`]}))();export{f as _UtilityHeader,p as __namedExportsOrder,u as default};