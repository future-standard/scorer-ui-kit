import{n as e}from"./chunk-BneVvdWh.js";import{H as t,Lt as n,Ot as r,at as i,bt as a,h as o,it as s,j as c,jt as l,k as u,kt as d}from"./iframe-Du_t-W6m.js";var f,p,m,h,g,_,v;e((()=>{f=n(),a(),d(),p=r(),m={title:`Global/organisms`,component:c,decorators:[]},h=l.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,g={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,p.jsx)(t,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,p.jsxs)(i,{defaultTabId:`tab1`,children:[(0,p.jsx)(s,{tabFor:`tab1`,children:`Home`}),(0,p.jsx)(s,{tabFor:`tab2`,children:`Example One`}),(0,p.jsx)(s,{tabFor:`tab3`,children:`Example Two`})]})},_=()=>{let e=(0,f.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,p.jsxs)(h,{children:[e===`default`?(0,p.jsx)(o,{layout:`default`,HeaderContent:g,children:(0,p.jsx)(u,{title:`Content Area`})}):null,e===`dashboard`?(0,p.jsx)(o,{layout:`dashboard`,children:(0,p.jsx)(u,{title:`Content Area`})}):null,e===`fullscreen`?(0,p.jsx)(o,{layout:`fullscreen`,children:(0,p.jsx)(u,{title:`Content Area`})}):null]})},_.__docgenInfo={description:``,methods:[],displayName:`_ContentLayout`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const layoutType = select('Layout Type', {
    Default: 'default',
    Dashboard: 'dashboard',
    Fullscreen: 'fullscreen'
  }, 'default');
  return <Container>
      {layoutType === 'default' ? <ContentLayout layout='default' HeaderContent={ExampleContent}>
          <FlexContentPlaceholder title='Content Area' />
        </ContentLayout> : null}

      {layoutType === 'dashboard' ? <ContentLayout layout='dashboard'>
          <FlexContentPlaceholder title='Content Area' />
        </ContentLayout> : null}

      {layoutType === 'fullscreen' ? <ContentLayout layout='fullscreen'>
          <FlexContentPlaceholder title='Content Area' />
        </ContentLayout> : null}
    </Container>;
}`,..._.parameters?.docs?.source}}},v=[`_ContentLayout`]}))();export{_ as _ContentLayout,v as __namedExportsOrder,m as default};