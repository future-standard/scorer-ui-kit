import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./UtilityHeader-DpNWJZfE.js";import{_ as i,a,o}from"./iframe-Cw1eIbNi.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{s=i(),n(),o(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Global/molecules`,component:r,decorators:[]},d=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,f=()=>{let e=l(`Return action`),t=(0,s.object)(`Back Link`,{label:`Back`,onClick:e}),n=(0,s.boolean)(`Show Breadcrumbs`,!0),i=(0,s.boolean)(`Show Home Icon`,!0),a=l(`The Breadcrumb is using a callback`),o=(0,s.object)(`breadcrumbs`,[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,onClick:a},{text:`Five`}]),u=(0,s.object)(`Share Link`,{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`});return(0,c.jsx)(d,{children:(0,c.jsx)(r,{back:t,showBreadcrumbs:n,breadcrumbs:o,showHomeIcon:i,share:u})})},p=[`_UtilityHeader`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as _UtilityHeader,p as __namedExportsOrder,u as default};