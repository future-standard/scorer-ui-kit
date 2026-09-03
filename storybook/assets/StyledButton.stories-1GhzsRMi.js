import{Ft as e,Lt as t,Rt as n,c as r,q as i,wt as a}from"./iframe-CeL4Hqgv.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f,p;function m(){return(m=o((()=>{a(),n(),s=e(),c={title:`Form/Buttons`,component:r,decorators:[]},l=t.div`
  display: flex;
`,u=t.div`
  margin: 20px;
`,d=t(r)`
  margin-right: 10px;
`,f=()=>(0,s.jsxs)(l,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(i,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,s.jsx)(r,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(i,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,s.jsx)(d,{design:`secondary`,children:`Secondary`})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(i,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,s.jsx)(r,{design:`primary`,children:`Primary`})]})]}),f.__docgenInfo={description:``,methods:[],displayName:`StyledWrapperPreservesDesignVariant`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`StyledWrapperPreservesDesignVariant`]})))()}m();export{f as StyledWrapperPreservesDesignVariant,p as __namedExportsOrder,c as default};