import{Ct as e,Gt as t,It as n,Rt as r,wt as i,zt as a}from"./iframe-C8iM32yd.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f,p;function m(){return(m=o((()=>{s=t(),i(),a(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Global/molecules`,component:e,decorators:[]},d=r.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,f=()=>{let t=l(`Return action`),n=(0,s.object)(`Back Link`,{label:`Back`,onClick:t}),r=(0,s.boolean)(`Show Breadcrumbs`,!0),i=(0,s.boolean)(`Show Home Icon`,!0),a=l(`The Breadcrumb is using a callback`),o=(0,s.object)(`breadcrumbs`,[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,onClick:a},{text:`Five`}]),u=(0,s.object)(`Share Link`,{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`});return(0,c.jsx)(d,{children:(0,c.jsx)(e,{back:n,showBreadcrumbs:r,breadcrumbs:o,showHomeIcon:i,share:u})})},f.__docgenInfo={description:``,methods:[],displayName:`_UtilityHeader`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`_UtilityHeader`]})))()}m();export{f as _UtilityHeader,p as __namedExportsOrder,u as default};