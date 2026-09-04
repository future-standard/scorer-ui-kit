import{F as e,Gt as t,It as n,L as r,Rt as i,b as a,ct as o,lt as s,q as c,wt as l,zt as u}from"./iframe-C8iM32yd.js";import{n as d}from"./rolldown-runtime-DkW27tQK.js";var f,p,m,h,g,_,v;function y(){return(y=d((()=>{f=t(),l(),u(),p=n(),m={title:`Global/organisms`,component:r,decorators:[]},h=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,g={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,p.jsx)(c,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,p.jsxs)(s,{defaultTabId:`tab1`,children:[(0,p.jsx)(o,{tabFor:`tab1`,children:`Home`}),(0,p.jsx)(o,{tabFor:`tab2`,children:`Example One`}),(0,p.jsx)(o,{tabFor:`tab3`,children:`Example Two`})]})},_=()=>{let t=(0,f.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,p.jsxs)(h,{children:[t==="default"?(0,p.jsx)(a,{layout:`default`,HeaderContent:g,children:(0,p.jsx)(e,{title:`Content Area`})}):null,t===`dashboard`?(0,p.jsx)(a,{layout:`dashboard`,children:(0,p.jsx)(e,{title:`Content Area`})}):null,t===`fullscreen`?(0,p.jsx)(a,{layout:`fullscreen`,children:(0,p.jsx)(e,{title:`Content Area`})}):null]})},_.__docgenInfo={description:``,methods:[],displayName:`_ContentLayout`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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