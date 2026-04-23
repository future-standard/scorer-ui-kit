import{n as e}from"./chunk-BneVvdWh.js";import{H as t,Ot as n,bt as r,jt as i,kt as a,s as o}from"./iframe-BrOiogMm.js";var s,c,l,u,d,f,p;e((()=>{r(),a(),s=n(),c={title:`Form/Buttons`,component:o,decorators:[]},l=i.div`
  display: flex;
`,u=i.div`
  margin: 20px;
`,d=i(o)`
  margin-right: 10px;
`,f=()=>(0,s.jsxs)(l,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(t,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,s.jsx)(o,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(t,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,s.jsx)(d,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(t,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,s.jsx)(o,{design:`primary`,children:`Primary`})]})]}),f.__docgenInfo={description:``,methods:[],displayName:`StyledWrapperPreservesDesignVariant`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return <Container>
      <Wrapper>
        <PageHeader title='Plain Button' introductionText='Reference — design prop applied directly, no styled() wrapper.' />
        <Button design='secondary'>Secondary</Button>
      </Wrapper>
      <Wrapper>
        <PageHeader title='Wrapped with styled(Button)' introductionText="Wrapped with styled() — design variant must be preserved alongside the wrapper's own class." />
        <StyledCancelButton design='secondary'>Secondary</StyledCancelButton>
      </Wrapper>
      <Wrapper>
        <PageHeader title='Primary Reference' introductionText='Baseline primary to make the design difference visible.' />
        <Button design='primary'>Primary</Button>
      </Wrapper>
    </Container>;
}`,...f.parameters?.docs?.source}}},p=[`StyledWrapperPreservesDesignVariant`]}))();export{f as StyledWrapperPreservesDesignVariant,p as __namedExportsOrder,c as default};