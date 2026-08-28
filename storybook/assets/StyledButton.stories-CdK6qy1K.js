import{i as e}from"./preload-helper-xPQekRTU.js";import{Ct as t,It as n,K as r,Lt as i,Pt as a,s as o}from"./iframe-a2YLqPZY.js";var s,c,l,u,d,f,p;e((()=>{t(),i(),s=a(),c={title:`Form/Buttons`,component:o,decorators:[]},l=n.div`
  display: flex;
`,u=n.div`
  margin: 20px;
`,d=n(o)`
  margin-right: 10px;
`,f=()=>(0,s.jsxs)(l,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(r,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,s.jsx)(o,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(r,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,s.jsx)(d,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(r,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,s.jsx)(o,{design:`primary`,children:`Primary`})]})]}),f.__docgenInfo={description:``,methods:[],displayName:`StyledWrapperPreservesDesignVariant`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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