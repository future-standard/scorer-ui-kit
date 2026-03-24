import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{a0 as d,a2 as o,ad as r,a3 as i,a4 as n,q as c}from"./index.modern-BCxVMgPd.js";import{c as y}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as p}from"./index-BtgrC99a.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";const j={title:"Global/organisms",component:d,decorators:[]},m=y.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,h={UtilityHeaderOptions:{back:{label:"Back",link:"/"},breadcrumbs:[{text:"Examples",href:"/"},{text:"Two",href:"#2"},{text:"Three",href:"#3"},{text:"Four",href:"#4"},{text:"Five",href:"#5"}],showBreadcrumbs:!0,share:{show:!0,label:"Share",link:"https://www.example.com",copiedLabel:"Copied"}},PageHeaderArea:e.jsx(c,{title:"Welcome",introductionText:"Thanks for using our UI library.",icon:"Home"}),TabsElementArea:e.jsxs(i,{defaultTabId:"tab1",children:[e.jsx(n,{tabFor:"tab1",children:"Home"}),e.jsx(n,{tabFor:"tab2",children:"Example One"}),e.jsx(n,{tabFor:"tab3",children:"Example Two"})]})},t=()=>{const a=p.select("Layout Type",{Default:"default",Dashboard:"dashboard",Fullscreen:"fullscreen"},"default");return e.jsxs(m,{children:[a==="default"?e.jsx(o,{layout:"default",HeaderContent:h,children:e.jsx(r,{title:"Content Area"})}):null,a==="dashboard"?e.jsx(o,{layout:"dashboard",children:e.jsx(r,{title:"Content Area"})}):null,a==="fullscreen"?e.jsx(o,{layout:"fullscreen",children:e.jsx(r,{title:"Content Area"})}):null]})};t.__docgenInfo={description:"",methods:[],displayName:"_ContentLayout"};var l,s,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const F=["_ContentLayout"];export{t as _ContentLayout,F as __namedExportsOrder,j as default};
