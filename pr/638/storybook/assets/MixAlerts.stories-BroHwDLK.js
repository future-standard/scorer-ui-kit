import{n as e}from"./chunk-BneVvdWh.js";import{Ct as t,Et as n,Ft as r,Lt as i,Rt as a,St as o,V as s,bt as c,s as l,wt as u,z as d}from"./iframe-DUfvGjia.js";var f,p,m,h,g,_,v,y,b=e((()=>{a(),r(),c(),f=n(),p=i.button`
  ${o};
  color: var(--grey-9);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 1.79;
  color: var(--grey-9);
  display: block;
`,m=i.div`
text-align: center;
margin-top: 10px;
${p} {
  margin: 15px auto 0 auto;
}
`,h=i.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,g=i.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,_=i.div`
  padding: 30px 40px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  color: var(--grey-10);
  p {
    margin: 1.4rem 0
  }
`,v=i.div`
  display: flex;
  flex-direction: column;
`,y=()=>{let{sendNotification:e}=u(),{setModalOpen:n}=t(),r={type:`info`,message:`You have enabled that requested process`};return(0,f.jsxs)(v,{children:[(0,f.jsx)(h,{}),(0,f.jsxs)(_,{children:[(0,f.jsx)(g,{children:`Welcome To Modal`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.`}),(0,f.jsx)(`p`,{children:`Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.`}),(0,f.jsxs)(m,{children:[(0,f.jsx)(l,{onClick:()=>{e(r),n(!1)},children:`Enable Now`}),(0,f.jsx)(p,{onClick:()=>{n(!1)},children:`Enable Later`})]})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`CardModalExample`}})),x,S,C,w,T,E,D;e((()=>{a(),r(),b(),c(),x=n(),S=i.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,C={title:`Alerts/Mix`,components:u,decorator:[]},w=(0,x.jsx)(y,{}),T=()=>{let{createModal:e}=t(),n=()=>{e({isCloseEnable:!1,width:`480px`,padding:!1,customComponent:w})};return(0,x.jsx)(l,{design:`secondary`,size:`small`,onClick:()=>{n()},children:`Open Welcome Modal`})},E=()=>(0,x.jsx)(S,{children:(0,x.jsx)(s,{children:(0,x.jsx)(d,{children:(0,x.jsx)(T,{})})})}),E.__docgenInfo={description:``,methods:[],displayName:`_MixAlertsExample`},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  // Providers should be at main Index level, these are here just for the story example
  return <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>;
}`,...E.parameters?.docs?.source}}},D=[`_MixAlertsExample`]}))();export{E as _MixAlertsExample,D as __namedExportsOrder,C as default};