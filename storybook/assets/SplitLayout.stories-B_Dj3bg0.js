import{G as p,d as m,j as e,C as S,a as A,af as o,ae as t}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const b={title:"Global/organisms",component:p,decorators:[]},_=A.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,n=()=>{const l=m.boolean("Nested",!1),c="horizontal",a=!1,u=e.jsx(o,{layout:c,persist:!0,persistenceKey:"my_unique_layout_key",reverse:a,mainArea:{content:e.jsx(t,{title:"Main Area"}),minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area A"}),collapsable:!0,minSize:200}}),d=e.jsx(o,{layout:"vertical",persist:!0,persistenceKey:"my_nested_key",reverse:a,mainArea:{content:e.jsx(t,{title:"Main Area"}),minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area A"}),collapsable:!0,minSize:200}}),y=e.jsx(o,{layout:"horizontal",persist:!0,persistenceKey:"my_unique_layout_key",reverse:a,mainArea:{content:d,minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area B"}),collapsable:!0,minSize:200}});return e.jsx(_,{children:e.jsx(S,{layout:"dashboard",children:l?y:u})})};n.__docgenInfo={description:"",methods:[],displayName:"_SplitLayout"};var i,s,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const z=["_SplitLayout"];export{n as _SplitLayout,z as __namedExportsOrder,b as default};
