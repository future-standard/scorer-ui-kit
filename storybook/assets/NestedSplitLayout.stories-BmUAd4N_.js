import{G as y,d as o,j as e,C,a as m,af as n,ae as a}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,b={title:"Global/organisms",component:y,decorators:[]},f=m.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,t=()=>{const d=o.boolean("Side Area A - Default Collapsed",!1),S=r("Side Area A State"),c=o.boolean("Side Area B - Default Collapsed",!1),u=r("Side Area B State"),p=e.jsx(n,{layout:"vertical",persist:!0,persistenceKey:"my_nested_key",reverse:!1,mainArea:{content:e.jsx(a,{title:"Main Area"}),minSize:120},sideArea:{content:e.jsx(a,{title:"Side Area A"}),collapsable:!0,minSize:200,onSideAreaStateChange:S,defaultCollapsed:d}}),A=e.jsx(n,{layout:"horizontal",persist:!0,persistenceKey:"my_unique_layout_key",reverse:!1,mainArea:{content:p,minSize:120},sideArea:{content:e.jsx(a,{title:"Side Area B"}),collapsable:!0,minSize:200,onSideAreaStateChange:u,defaultCollapsed:c}});return e.jsx(f,{children:e.jsx(C,{layout:"dashboard",children:A})})};t.__docgenInfo={description:"",methods:[],displayName:"_SplitLayoutNested"};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const x=["_SplitLayoutNested"];export{t as _SplitLayoutNested,x as __namedExportsOrder,b as default};
