import{F as e,Ft as t,L as n,Lt as r,Rt as i,Wt as a,b as o,ct as s,lt as c,q as l,wt as u}from"./iframe-CeL4Hqgv.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v;function y(){return(y=d((()=>{f=a(),u(),i(),p=t(),m={title:`Global/organisms`,component:n,decorators:[]},h=r.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,g={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,p.jsx)(l,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,p.jsxs)(c,{defaultTabId:`tab1`,children:[(0,p.jsx)(s,{tabFor:`tab1`,children:`Home`}),(0,p.jsx)(s,{tabFor:`tab2`,children:`Example One`}),(0,p.jsx)(s,{tabFor:`tab3`,children:`Example Two`})]})},_=()=>{let t=(0,f.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,p.jsxs)(h,{children:[t==="default"?(0,p.jsx)(o,{layout:`default`,HeaderContent:g,children:(0,p.jsx)(e,{title:`Content Area`})}):null,t===`dashboard`?(0,p.jsx)(o,{layout:`dashboard`,children:(0,p.jsx)(e,{title:`Content Area`})}):null,t===`fullscreen`?(0,p.jsx)(o,{layout:`fullscreen`,children:(0,p.jsx)(e,{title:`Content Area`})}):null]})},_.__docgenInfo={description:``,methods:[],displayName:`_ContentLayout`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`_ContentLayout`]})))()}y();export{_ as _ContentLayout,v as __namedExportsOrder,m as default};