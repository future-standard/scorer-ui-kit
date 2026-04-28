import{n as e}from"./chunk-BneVvdWh.js";import{$ as t,Et as n,Ft as r,Lt as i,Pt as a,Rt as o,h as s,j as c,k as l,vt as u}from"./iframe-BHdSP_o9.js";var d,f,p,m,h,g;e((()=>{o(),u(),r(),d=a(),f=n(),p={title:`Global/organisms`,component:c,decorators:[]},m=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,h=()=>{let e=(0,d.boolean)(`Nested`,!1);return(0,f.jsx)(m,{children:(0,f.jsx)(s,{layout:`dashboard`,children:e?(0,f.jsx)(t,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,f.jsx)(t,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,f.jsx)(l,{title:`Main Area`}),minSize:120},sideArea:{content:(0,f.jsx)(l,{title:`Side Area A`}),collapsable:!0,minSize:200}}),minSize:120},sideArea:{content:(0,f.jsx)(l,{title:`Side Area B`}),collapsable:!0,minSize:200}}):(0,f.jsx)(t,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,f.jsx)(l,{title:`Main Area`}),minSize:120},sideArea:{content:(0,f.jsx)(l,{title:`Side Area A`}),collapsable:!0,minSize:200}})})})},h.__docgenInfo={description:``,methods:[],displayName:`_SplitLayout`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const nested = boolean('Nested', false);
  const layout = 'horizontal';
  const reverse = false;
  const splitLayout = <SplitLayout layout={layout} persist persistenceKey='my_unique_layout_key' reverse={reverse} mainArea={{
    content: <FlexContentPlaceholder title='Main Area' />,
    minSize: 120
  }} sideArea={{
    content: <FlexContentPlaceholder title='Side Area A' />,
    collapsable: true,
    minSize: 200
  }} />;
  const nestedSplitChild = <SplitLayout layout='vertical' persist persistenceKey='my_nested_key' reverse={reverse} mainArea={{
    content: <FlexContentPlaceholder title='Main Area' />,
    minSize: 120
  }} sideArea={{
    content: <FlexContentPlaceholder title='Side Area A' />,
    collapsable: true,
    minSize: 200
  }} />;
  const nestedSplitLayout = <SplitLayout layout='horizontal' persist persistenceKey='my_unique_layout_key' reverse={reverse} mainArea={{
    content: nestedSplitChild,
    minSize: 120
  }} sideArea={{
    content: <FlexContentPlaceholder title='Side Area B' />,
    collapsable: true,
    minSize: 200
  }} />;
  return <Container>
      <ContentLayout layout='dashboard'>
        {nested ? nestedSplitLayout : splitLayout}
      </ContentLayout>
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_SplitLayout`]}))();export{h as _SplitLayout,g as __namedExportsOrder,p as default};