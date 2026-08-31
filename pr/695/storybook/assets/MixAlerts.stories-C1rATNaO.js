import{Dt as e,Et as t,Ft as n,K as r,Lt as i,Ot as a,Rt as o,W as s,c,wt as l}from"./iframe-DFQHAkQ-.js";import{n as u}from"./rolldown-runtime-DkW27tQK.js";var d,f,p,m,h,g,_,v;function y(){return(y=u((()=>{o(),l(),d=n(),f=i.button`
  ${t};
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
`,p=i.div`
text-align: center;
margin-top: 10px;
${f} {
  margin: 15px auto 0 auto;
}
`,m=i.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,h=i.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,g=i.div`
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
`,_=i.div`
  display: flex;
  flex-direction: column;
`,v=()=>{let{sendNotification:t}=a(),{setModalOpen:n}=e(),r={type:`info`,message:`You have enabled that requested process`};return(0,d.jsxs)(_,{children:[(0,d.jsx)(m,{}),(0,d.jsxs)(g,{children:[(0,d.jsx)(h,{children:`Welcome To Modal`}),(0,d.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.`}),(0,d.jsx)(`p`,{children:`Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.`}),(0,d.jsxs)(p,{children:[(0,d.jsx)(c,{onClick:()=>{t(r),n(!1)},children:`Enable Now`}),(0,d.jsx)(f,{onClick:()=>{n(!1)},children:`Enable Later`})]})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`CardModalExample`}})))()}var b,x,S,C,w,T,E;function D(){return(D=u((()=>{l(),o(),y(),b=n(),x=i.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,S={title:`Alerts/Mix`,components:a,decorator:[]},C=(0,b.jsx)(v,{}),w=()=>{let{createModal:t}=e(),n=()=>{t({isCloseEnable:!1,width:`480px`,padding:!1,customComponent:C})};return(0,b.jsx)(c,{design:`secondary`,size:`small`,onClick:()=>{n()},children:`Open Welcome Modal`})},T=()=>(0,b.jsx)(x,{children:(0,b.jsx)(r,{children:(0,b.jsx)(s,{children:(0,b.jsx)(w,{})})})}),T.__docgenInfo={description:``,methods:[],displayName:`_MixAlertsExample`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  // Providers should be at main Index level, these are here just for the story example
  return <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>;
}`,...T.parameters?.docs?.source}}},E=[`_MixAlertsExample`]})))()}D();export{T as _MixAlertsExample,E as __namedExportsOrder,S as default};