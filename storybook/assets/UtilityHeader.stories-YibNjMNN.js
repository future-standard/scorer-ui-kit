import{ad as s,d as e,j as t,a as k}from"./iframe-Dbt4m4Aq.js";import"./preload-helper-C1FmrZbK.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,g={title:"Global/molecules",component:s,decorators:[]},p=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,o=()=>{const i=r("Return action"),l=e.object("Back Link",{label:"Back",onClick:i}),b=e.boolean("Show Breadcrumbs",!0),d=e.boolean("Show Home Icon",!0),u=r("The Breadcrumb is using a callback"),m=e.object("breadcrumbs",[{text:"Examples",href:"/"},{text:"Two",href:"#2"},{text:"Three",href:"#3"},{text:"Four",onClick:u},{text:"Five"}]),h=e.object("Share Link",{show:!0,label:"Share",link:"https://www.example.com",copiedLabel:"Copied"});return t.jsx(p,{children:t.jsx(s,{back:l,showBreadcrumbs:b,breadcrumbs:m,showHomeIcon:d,share:h})})};o.__docgenInfo={description:"",methods:[],displayName:"_UtilityHeader"};var a,c,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const L=["_UtilityHeader"];export{o as _UtilityHeader,L as __namedExportsOrder,g as default};
