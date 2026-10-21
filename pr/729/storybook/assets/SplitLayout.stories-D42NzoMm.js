import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ContentPlaceholder-I0yyTiOB.js";import{n as i,t as a}from"./SplitLayout-_XgSSpCd.js";import{i as o,n as s,r as c,t as l}from"./GlobalUI-B0FPWUMM.js";import{_ as u,a as d,o as f}from"./iframe-PEYaYO03.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{p=u(),o(),n(),s(),i(),f(),m=t(),h={title:`Global/organisms`,component:l,decorators:[]},g=d.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,_=()=>{let e=(0,p.boolean)(`Nested`,!1);return(0,m.jsx)(g,{children:(0,m.jsx)(c,{layout:`dashboard`,children:e?(0,m.jsx)(a,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,m.jsx)(a,{layout:`vertical`,persist:!0,persistenceKey:`my_nested_key`,reverse:!1,mainArea:{content:(0,m.jsx)(r,{title:`Main Area`}),minSize:120},sideArea:{content:(0,m.jsx)(r,{title:`Side Area A`}),collapsable:!0,minSize:200}}),minSize:120},sideArea:{content:(0,m.jsx)(r,{title:`Side Area B`}),collapsable:!0,minSize:200}}):(0,m.jsx)(a,{layout:`horizontal`,persist:!0,persistenceKey:`my_unique_layout_key`,reverse:!1,mainArea:{content:(0,m.jsx)(r,{title:`Main Area`}),minSize:120},sideArea:{content:(0,m.jsx)(r,{title:`Side Area A`}),collapsable:!0,minSize:200}})})})},v=[`_SplitLayout`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as _SplitLayout,v as __namedExportsOrder,h as default};