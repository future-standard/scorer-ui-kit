import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-q266cx_-.js";import{n as i,t as a}from"./PageHeader-BSu9VdND.js";import{a as o,o as s}from"./iframe-BmxEQ5Tp.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),s(),c=t(),l={title:`Form/Buttons`,component:r,decorators:[]},u=o.div`
  display: flex;
`,d=o.div`
  margin: 20px;
`,f=o(r)`
  margin-right: 10px;
`,p=()=>(0,c.jsxs)(u,{children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Plain Button`,introductionText:`Reference — design prop applied directly, no styled() wrapper.`}),(0,c.jsx)(r,{design:`secondary`,children:`Secondary`})]}),(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Wrapped with styled(Button)`,introductionText:`Wrapped with styled() — design variant must be preserved alongside the wrapper's own class.`}),(0,c.jsx)(f,{design:`secondary`,children:`Secondary`})]}),(0,c.jsxs)(d,{children:[(0,c.jsx)(a,{title:`Primary Reference`,introductionText:`Baseline primary to make the design difference visible.`}),(0,c.jsx)(r,{design:`primary`,children:`Primary`})]})]}),m=[`StyledWrapperPreservesDesignVariant`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as StyledWrapperPreservesDesignVariant,m as __namedExportsOrder,l as default};