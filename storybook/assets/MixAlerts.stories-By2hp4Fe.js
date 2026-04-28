import{n as e}from"./chunk-BneVvdWh.js";import{B as t,Ot as n,R as r,St as i,bt as a,jt as o,kt as s,s as c,vt as l,xt as u}from"./iframe-YIV3yJSz.js";var d,f,p,m,h,g,_,v,y=e((()=>{s(),l(),d=n(),f=o.button`
  ${a};
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
`,p=o.div`
text-align: center;
margin-top: 10px;
${f} {
  margin: 15px auto 0 auto;
}
`,m=o.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,h=o.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,g=o.div`
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
`,_=o.div`
  display: flex;
  flex-direction: column;
`,v=()=>{let{sendNotification:e}=i(),{setModalOpen:t}=u(),n={type:`info`,message:`You have enabled that requested process`};return(0,d.jsxs)(_,{children:[(0,d.jsx)(m,{}),(0,d.jsxs)(g,{children:[(0,d.jsx)(h,{children:`Welcome To Modal`}),(0,d.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.`}),(0,d.jsx)(`p`,{children:`Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.`}),(0,d.jsxs)(p,{children:[(0,d.jsx)(c,{onClick:()=>{e(n),t(!1)},children:`Enable Now`}),(0,d.jsx)(f,{onClick:()=>{t(!1)},children:`Enable Later`})]})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`CardModalExample`}})),b,x,S,C,w,T,E;e((()=>{l(),s(),y(),b=n(),x=o.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,S={title:`Alerts/Mix`,components:i,decorator:[]},C=(0,b.jsx)(v,{}),w=()=>{let{createModal:e}=u(),t=()=>{e({isCloseEnable:!1,width:`480px`,padding:!1,customComponent:C})};return(0,b.jsx)(c,{design:`secondary`,size:`small`,onClick:()=>{t()},children:`Open Welcome Modal`})},T=()=>(0,b.jsx)(x,{children:(0,b.jsx)(t,{children:(0,b.jsx)(r,{children:(0,b.jsx)(w,{})})})}),T.__docgenInfo={description:``,methods:[],displayName:`_MixAlertsExample`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  // Providers should be at main Index level, these are here just for the story example
  return <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>;
}`,...T.parameters?.docs?.source}}},E=[`_MixAlertsExample`]}))();export{T as _MixAlertsExample,E as __namedExportsOrder,S as default};