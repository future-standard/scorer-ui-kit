import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{a0 as y,a2 as m,ae as a,ad as t}from"./index.modern-CMonYql-.js";import{c as S}from"./styled-components.browser.esm-CarAhzHj.js";import{d as A}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const v={title:"Global/organisms",component:y,decorators:[]},_=S.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--grey-2);
  background-image: linear-gradient(180.00deg, var(--grey-2) 0%, var(--grey-3) 100%);
`,n=()=>{const l=A.boolean("Nested",!1),c="horizontal",o=!1,d=e.jsx(a,{layout:c,persist:!0,persistenceKey:"my_unique_layout_key",reverse:o,mainArea:{content:e.jsx(t,{title:"Main Area"}),minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area A"}),collapsable:!0,minSize:200}}),u=e.jsx(a,{layout:"vertical",persist:!0,persistenceKey:"my_nested_key",reverse:o,mainArea:{content:e.jsx(t,{title:"Main Area"}),minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area A"}),collapsable:!0,minSize:200}}),p=e.jsx(a,{layout:"horizontal",persist:!0,persistenceKey:"my_unique_layout_key",reverse:o,mainArea:{content:u,minSize:120},sideArea:{content:e.jsx(t,{title:"Side Area B"}),collapsable:!0,minSize:200}});return e.jsx(_,{children:e.jsx(m,{layout:"dashboard",children:l?p:d})})};n.__docgenInfo={description:"",methods:[],displayName:"_SplitLayout"};var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const g=["_SplitLayout"];export{n as _SplitLayout,g as __namedExportsOrder,v as default};
