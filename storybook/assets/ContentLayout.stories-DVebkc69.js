import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,H as r,Lt as i,Pt as a,Rt as o,at as s,bt as c,h as l,it as u,j as d,k as f}from"./iframe-DufxECJ3.js";var p,m,h,g,_,v,y;e((()=>{o(),c(),n(),p=a(),m=t(),h={title:`Global/organisms`,component:d,decorators:[]},g=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,_={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,m.jsx)(r,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,m.jsxs)(s,{defaultTabId:`tab1`,children:[(0,m.jsx)(u,{tabFor:`tab1`,children:`Home`}),(0,m.jsx)(u,{tabFor:`tab2`,children:`Example One`}),(0,m.jsx)(u,{tabFor:`tab3`,children:`Example Two`})]})},v=()=>{let e=(0,p.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,m.jsxs)(g,{children:[e===`default`?(0,m.jsx)(l,{layout:`default`,HeaderContent:_,children:(0,m.jsx)(f,{title:`Content Area`})}):null,e===`dashboard`?(0,m.jsx)(l,{layout:`dashboard`,children:(0,m.jsx)(f,{title:`Content Area`})}):null,e===`fullscreen`?(0,m.jsx)(l,{layout:`fullscreen`,children:(0,m.jsx)(f,{title:`Content Area`})}):null]})},v.__docgenInfo={description:``,methods:[],displayName:`_ContentLayout`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`_ContentLayout`]}))();export{v as _ContentLayout,y as __namedExportsOrder,h as default};