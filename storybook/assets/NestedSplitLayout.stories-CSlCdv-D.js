import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,h as s,j as c,k as l,tt as u}from"./iframe-DUfvGjia.js";var d,f,p,m,h,g,_;e((()=>{d=i(),a(),o(),n(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={title:`Global/organisms`,component:c,decorators:[]},h=r.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,g=()=>{let e=(0,d.boolean)(`Side Area A - Default Collapsed`,!1),t=p(`Side Area A State`),n=(0,d.boolean)(`Side Area B - Default Collapsed`,!1),r=p(`Side Area B State`);return(0,f.jsx)(h,{children:(0,f.jsx)(s,{layout:`dashboard`,children:(0,f.jsx)(u,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,f.jsx)(u,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,f.jsx)(l,{title:`Main Area`}),minSize:120},sideArea:{content:(0,f.jsx)(l,{title:`Side Area A`}),collapsable:!0,minSize:200,onSideAreaStateChange:t,defaultCollapsed:e}}),minSize:120},sideArea:{content:(0,f.jsx)(l,{title:`Side Area B`}),collapsable:!0,minSize:200,onSideAreaStateChange:r,defaultCollapsed:n}})})})},g.__docgenInfo={description:``,methods:[],displayName:`_SplitLayoutNested`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const reverse = false;
  const defaultSideAState = boolean("Side Area A - Default Collapsed", false);
  const onSideAreaAChange = action('Side Area A State');
  const defaultSideBState = boolean("Side Area B - Default Collapsed", false);
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
      <ContentLayout layout='dashboard'>
        {nestedSplitLayout}
      </ContentLayout>
    </Container>;
}`,...g.parameters?.docs?.source}}},_=[`_SplitLayoutNested`]}))();export{g as _SplitLayoutNested,_ as __namedExportsOrder,m as default};