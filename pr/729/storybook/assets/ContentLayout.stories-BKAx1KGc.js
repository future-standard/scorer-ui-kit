import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ContentPlaceholder-I0yyTiOB.js";import{n as i,t as a}from"./PageHeader-CPSv-dtM.js";import{r as o,t as s}from"./TabList-Cv1k--vY.js";import{i as c,n as l,r as u,t as d}from"./GlobalUI-B0FPWUMM.js";import{n as f,t as p}from"./Tab-BWipqmJJ.js";import{_ as m,a as h,o as g}from"./iframe-PEYaYO03.js";var _,v,y,b,x,S,C;function w(){return(w=e((()=>{_=m(),c(),n(),l(),i(),f(),o(),g(),v=t(),y={title:`Global/organisms`,component:d,decorators:[]},b=h.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,x={UtilityHeaderOptions:{back:{label:`Back`,link:`/`},breadcrumbs:[{text:`Examples`,href:`/`},{text:`Two`,href:`#2`},{text:`Three`,href:`#3`},{text:`Four`,href:`#4`},{text:`Five`,href:`#5`}],showBreadcrumbs:!0,share:{show:!0,label:`Share`,link:`https://www.example.com`,copiedLabel:`Copied`}},PageHeaderArea:(0,v.jsx)(a,{title:`Welcome`,introductionText:`Thanks for using our UI library.`,icon:`Home`}),TabsElementArea:(0,v.jsxs)(s,{defaultTabId:`tab1`,children:[(0,v.jsx)(p,{tabFor:`tab1`,children:`Home`}),(0,v.jsx)(p,{tabFor:`tab2`,children:`Example One`}),(0,v.jsx)(p,{tabFor:`tab3`,children:`Example Two`})]})},S=()=>{let e=(0,_.select)(`Layout Type`,{Default:`default`,Dashboard:`dashboard`,Fullscreen:`fullscreen`},`default`);return(0,v.jsxs)(b,{children:[e==="default"?(0,v.jsx)(u,{layout:`default`,HeaderContent:x,children:(0,v.jsx)(r,{title:`Content Area`})}):null,e===`dashboard`?(0,v.jsx)(u,{layout:`dashboard`,children:(0,v.jsx)(r,{title:`Content Area`})}):null,e===`fullscreen`?(0,v.jsx)(u,{layout:`fullscreen`,children:(0,v.jsx)(r,{title:`Content Area`})}):null]})},C=[`_ContentLayout`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as _ContentLayout,C as __namedExportsOrder,y as default};