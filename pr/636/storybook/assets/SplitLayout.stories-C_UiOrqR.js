import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,h as i,j as a,jt as o,k as s,kt as c,tt as l}from"./iframe-DFLY1_j6.js";var u,d,f,p,m,h;e((()=>{u=t(),r(),c(),d=n(),f={title:`Global/organisms`,component:a,decorators:[]},p=o.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,m=()=>{let e=(0,u.boolean)(`Nested`,!1);return(0,d.jsx)(p,{children:(0,d.jsx)(i,{layout:`dashboard`,children:e?(0,d.jsx)(l,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,d.jsx)(l,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,d.jsx)(s,{title:`Main Area`}),minSize:120},sideArea:{content:(0,d.jsx)(s,{title:`Side Area A`}),collapsable:!0,minSize:200}}),minSize:120},sideArea:{content:(0,d.jsx)(s,{title:`Side Area B`}),collapsable:!0,minSize:200}}):(0,d.jsx)(l,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,d.jsx)(s,{title:`Main Area`}),minSize:120},sideArea:{content:(0,d.jsx)(s,{title:`Side Area A`}),collapsable:!0,minSize:200}})})})},m.__docgenInfo={description:``,methods:[],displayName:`_SplitLayout`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
      <ContentLayout layout='dashboard'>{nested ? nestedSplitLayout : splitLayout}</ContentLayout>
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_SplitLayout`]}))();export{m as _SplitLayout,h as __namedExportsOrder,f as default};