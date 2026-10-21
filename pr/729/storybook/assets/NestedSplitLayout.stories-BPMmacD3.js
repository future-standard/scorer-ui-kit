import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ContentPlaceholder-C8QDEnjj.js";import{n as i,t as a}from"./SplitLayout-zqKXh4C5.js";import{i as o,n as s,r as c,t as l}from"./GlobalUI-Dfu1dWTT.js";import{_ as u,a as d,o as f}from"./iframe-Cw1eIbNi.js";var p,m,h,g,_,v,y;function b(){return(b=e((()=>{p=u(),o(),n(),s(),i(),f(),m=t(),{action:h}=__STORYBOOK_MODULE_ACTIONS__,g={title:`Global/organisms`,component:l,decorators:[]},_=d.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,v=()=>{let e=(0,p.boolean)(`Side Area A - Default Collapsed`,!1),t=h(`Side Area A State`),n=(0,p.boolean)(`Side Area B - Default Collapsed`,!1),i=h(`Side Area B State`);return(0,m.jsx)(_,{children:(0,m.jsx)(c,{layout:`dashboard`,children:(0,m.jsx)(a,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,m.jsx)(a,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,m.jsx)(r,{title:`Main Area`}),minSize:120},sideArea:{content:(0,m.jsx)(r,{title:`Side Area A`}),collapsable:!0,minSize:200,onSideAreaStateChange:t,defaultCollapsed:e}}),minSize:120},sideArea:{content:(0,m.jsx)(r,{title:`Side Area B`}),collapsable:!0,minSize:200,onSideAreaStateChange:i,defaultCollapsed:n}})})})},y=[`_SplitLayoutNested`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as _SplitLayoutNested,y as __namedExportsOrder,g as default};