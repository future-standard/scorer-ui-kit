import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,V as o,h as s,j as c,k as l,nt as u,rt as d,vt as f}from"./iframe-BHdSP_o9.js";var p,m,h,g,_,v,y;e((()=>{a(),f(),n(),p=i(),m=t(),h={title:`Global/organisms`,component:c,decorators:[]},g=r.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,_={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,m.jsx)(o,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,m.jsxs)(d,{defaultTabId:`tab1`,children:[(0,m.jsx)(u,{tabFor:`tab1`,children:`Home`}),(0,m.jsx)(u,{tabFor:`tab2`,children:`Example One`}),(0,m.jsx)(u,{tabFor:`tab3`,children:`Example Two`})]})},v=()=>{let e=(0,p.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,m.jsxs)(g,{children:[e===`default`?(0,m.jsx)(s,{layout:`default`,HeaderContent:_,children:(0,m.jsx)(l,{title:`Content Area`})}):null,e===`dashboard`?(0,m.jsx)(s,{layout:`dashboard`,children:(0,m.jsx)(l,{title:`Content Area`})}):null,e===`fullscreen`?(0,m.jsx)(s,{layout:`fullscreen`,children:(0,m.jsx)(l,{title:`Content Area`})}):null]})},v.__docgenInfo={description:``,methods:[],displayName:`_ContentLayout`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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