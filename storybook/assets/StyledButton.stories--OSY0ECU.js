import{n as e}from"./chunk-BneVvdWh.js";import{Ot as t,V as n,jt as r,kt as i,s as a,vt as o}from"./iframe-DxcqKzfJ.js";var s,c,l,u,d,f,p;e((()=>{o(),i(),s=t(),c={title:`Form/Buttons`,component:a,decorators:[]},l=r.div`
  display: flex;
`,u=r.div`
  margin: 20px;
`,d=r(a)`
  margin-right: 10px;
`,f=()=>(0,s.jsxs)(l,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(n,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,s.jsx)(a,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(n,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,s.jsx)(d,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(n,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,s.jsx)(a,{design:`primary`,children:`Primary`})]})]}),f.__docgenInfo={description:``,methods:[],displayName:`StyledWrapperPreservesDesignVariant`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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