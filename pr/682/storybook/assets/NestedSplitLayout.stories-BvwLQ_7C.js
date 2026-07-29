import{i as e}from"./preload-helper-xPQekRTU.js";import{F as t,Ft as n,It as r,N as i,Nt as a,St as o,Ut as s,rt as c,y as l}from"./iframe-CW3QRQX7.js";var u,d,f,p,m,h,g;e((()=>{u=s(),o(),r(),d=a(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Global/organisms`,component:t,decorators:[]},m=n.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,h=()=>{let e=(0,u.boolean)(`Side Area A - Default Collapsed`,!1),t=f(`Side Area A State`),n=(0,u.boolean)(`Side Area B - Default Collapsed`,!1),r=f(`Side Area B State`);return(0,d.jsx)(m,{children:(0,d.jsx)(l,{layout:`dashboard`,children:(0,d.jsx)(c,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,d.jsx)(c,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,d.jsx)(i,{title:`Main Area`}),minSize:120},sideArea:{content:(0,d.jsx)(i,{title:`Side Area A`}),collapsable:!0,minSize:200,onSideAreaStateChange:t,defaultCollapsed:e}}),minSize:120},sideArea:{content:(0,d.jsx)(i,{title:`Side Area B`}),collapsable:!0,minSize:200,onSideAreaStateChange:r,defaultCollapsed:n}})})})},h.__docgenInfo={description:``,methods:[],displayName:`_SplitLayoutNested`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const reverse = false;
  const defaultSideAState = boolean('Side Area A - Default Collapsed', false);
  const onSideAreaAChange = action('Side Area A State');
  const defaultSideBState = boolean('Side Area B - Default Collapsed', false);
  const onSideAreaBChange = action('Side Area B State');
  const nestedSplitChild = <SplitLayout layout='vertical' persist persistenceKey='my_nested_key' reverse={reverse} mainArea={{
    content: <FlexContentPlaceholder title='Main Area' />,
    minSize: 120
  }} sideArea={{
    content: <FlexContentPlaceholder title='Side Area A' />,
    collapsable: true,
    minSize: 200,
    onSideAreaStateChange: onSideAreaAChange,
    defaultCollapsed: defaultSideAState
  }} />;
  const nestedSplitLayout = <SplitLayout layout='horizontal' persist persistenceKey='my_unique_layout_key' reverse={reverse} mainArea={{
    content: nestedSplitChild,
    minSize: 120
  }} sideArea={{
    content: <FlexContentPlaceholder title='Side Area B' />,
    collapsable: true,
    minSize: 200,
    onSideAreaStateChange: onSideAreaBChange,
    defaultCollapsed: defaultSideBState
  }} />;
  return <Container>
      <ContentLayout layout='dashboard'>{nestedSplitLayout}</ContentLayout>
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_SplitLayoutNested`]}))();export{h as _SplitLayoutNested,g as __namedExportsOrder,p as default};