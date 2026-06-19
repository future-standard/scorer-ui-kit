import{i as e}from"./preload-helper-xPQekRTU.js";import{$ as t,Mt as n,h as r,j as i,jt as a,k as o,kt as s,vt as c,zt as l}from"./iframe-C59WqszT.js";var u,d,f,p,m,h;e((()=>{u=l(),c(),n(),d=s(),f={title:`Global/organisms`,component:i,decorators:[]},p=a.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,m=()=>{let e=(0,u.boolean)(`Nested`,!1);return(0,d.jsx)(p,{children:(0,d.jsx)(r,{layout:`dashboard`,children:e?(0,d.jsx)(t,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,d.jsx)(t,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,d.jsx)(o,{title:`Main Area`}),minSize:120},sideArea:{content:(0,d.jsx)(o,{title:`Side Area A`}),collapsable:!0,minSize:200}}),minSize:120},sideArea:{content:(0,d.jsx)(o,{title:`Side Area B`}),collapsable:!0,minSize:200}}):(0,d.jsx)(t,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,d.jsx)(o,{title:`Main Area`}),minSize:120},sideArea:{content:(0,d.jsx)(o,{title:`Side Area A`}),collapsable:!0,minSize:200}})})})},m.__docgenInfo={description:``,methods:[],displayName:`_SplitLayout`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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