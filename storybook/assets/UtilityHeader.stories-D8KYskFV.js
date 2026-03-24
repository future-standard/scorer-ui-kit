import{j as r}from"./emotion-unitless.esm-y1ruXoeO.js";import{ac as s}from"./index.modern-B3hCc7YS.js";import{c as p}from"./styled-components.browser.esm-CarAhzHj.js";import{d as e}from"./index-C-6Xbh3D.js";import{a as t}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const j={title:"Global/molecules",component:s,decorators:[]},k=p.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,o=()=>{const i=t("Return action"),l=e.object("Back Link",{label:"Back",onClick:i}),m=e.boolean("Show Breadcrumbs",!0),b=e.boolean("Show Home Icon",!0),d=t("The Breadcrumb is using a callback"),u=e.object("breadcrumbs",[{text:"Examples",href:"/"},{text:"Two",href:"#2"},{text:"Three",href:"#3"},{text:"Four",onClick:d},{text:"Five"}]),h=e.object("Share Link",{show:!0,label:"Share",link:"https://www.example.com",copiedLabel:"Copied"});return r.jsx(k,{children:r.jsx(s,{back:l,showBreadcrumbs:m,breadcrumbs:u,showHomeIcon:b,share:h})})};o.__docgenInfo={description:"",methods:[],displayName:"_UtilityHeader"};var a,c,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const S=["_UtilityHeader"];export{o as _UtilityHeader,S as __namedExportsOrder,j as default};
