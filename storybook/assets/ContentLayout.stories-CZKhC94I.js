import{G as d,d as c,j as e,C as o,ae as n,a as i,T as y,b as r,P as b}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const f={title:"Global/organisms",component:d,decorators:[]},h=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,p={UtilityHeaderOptions:{back:{label:"Back",link:"/"},breadcrumbs:[{text:"Examples",href:"/"},{text:"Two",href:"#2"},{text:"Three",href:"#3"},{text:"Four",href:"#4"},{text:"Five",href:"#5"}],showBreadcrumbs:!0,share:{show:!0,label:"Share",link:"https://www.example.com",copiedLabel:"Copied"}},PageHeaderArea:e.jsx(b,{title:"Welcome",introductionText:"Thanks for using our UI library.",icon:"Home"}),TabsElementArea:e.jsxs(y,{defaultTabId:"tab1",children:[e.jsx(r,{tabFor:"tab1",children:"Home"}),e.jsx(r,{tabFor:"tab2",children:"Example One"}),e.jsx(r,{tabFor:"tab3",children:"Example Two"})]})},t=()=>{const a=c.select("Layout Type",{Default:"default",Dashboard:"dashboard",Fullscreen:"fullscreen"},"default");return e.jsxs(h,{children:[a==="default"?e.jsx(o,{layout:"default",HeaderContent:p,children:e.jsx(n,{title:"Content Area"})}):null,a==="dashboard"?e.jsx(o,{layout:"dashboard",children:e.jsx(n,{title:"Content Area"})}):null,a==="fullscreen"?e.jsx(o,{layout:"fullscreen",children:e.jsx(n,{title:"Content Area"})}):null]})};t.__docgenInfo={description:"",methods:[],displayName:"_ContentLayout"};var l,s,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const layoutType = select('Layout Type', {
    Default: 'default',
    Dashboard: 'dashboard',
    Fullscreen: 'fullscreen'
  }, 'default');
  return <Container>
      
        {layoutType === 'default' ? <ContentLayout layout="default" HeaderContent={ExampleContent}>
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout> : null}

        {layoutType === 'dashboard' ? <ContentLayout layout="dashboard">
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout> : null}

        {layoutType === 'fullscreen' ? <ContentLayout layout="fullscreen">
            <FlexContentPlaceholder title='Content Area' />
          </ContentLayout> : null}

    </Container>;
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const T=["_ContentLayout"];export{t as _ContentLayout,T as __namedExportsOrder,f as default};
