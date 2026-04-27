import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Rt as i,V as a,s as o,vt as s}from"./iframe-BHdSP_o9.js";var c,l,u,d,f,p,m;e((()=>{i(),s(),n(),c=t(),l={title:`Form/Buttons`,component:o,decorators:[]},u=r.div`
  display: flex;
`,d=r.div`
  margin: 20px;
`,f=r(o)`
  margin-right: 10px;
`,p=()=>(0,c.jsxs)(u,{children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,c.jsx)(o,{design:`secondary`,children:`Secondary`})]}),(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,c.jsx)(f,{design:`secondary`,children:`Secondary`})]}),(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,c.jsx)(o,{design:`primary`,children:`Primary`})]})]}),p.__docgenInfo={description:``,methods:[],displayName:`StyledWrapperPreservesDesignVariant`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`StyledWrapperPreservesDesignVariant`]}))();export{p as StyledWrapperPreservesDesignVariant,m as __namedExportsOrder,l as default};