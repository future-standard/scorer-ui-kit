import{i as l,k as d,j as e,l as c,a as o,m as u,N as h,n as g}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const m=o.button`
  ${u};
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
`,f=o.div`
text-align: center;
margin-top: 10px;
${m} {
  margin: 15px auto 0 auto;
}
`,v=o.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,M=o.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,j=o.div`
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
`,y=o.div`
  display: flex;
  flex-direction: column;
`,p=()=>{const{sendNotification:i}=l(),{setModalOpen:n}=d(),x={type:"info",message:"You have enabled that requested process"};return e.jsxs(y,{children:[e.jsx(v,{}),e.jsxs(j,{children:[e.jsx(M,{children:"Welcome To Modal"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor."}),e.jsx("p",{children:"Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit."}),e.jsxs(f,{children:[e.jsx(c,{onClick:()=>{i(x),n(!1)},children:"Enable Now"}),e.jsx(m,{onClick:()=>{n(!1)},children:"Enable Later"})]})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"CardModalExample"};const C=o.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,w={title:"Alerts/Mix",components:l,decorator:[]},b=e.jsx(p,{}),N=()=>{const{createModal:i}=d(),n=()=>{i({isCloseEnable:!1,width:"480px",padding:!1,customComponent:b})};return e.jsx(c,{design:"secondary",size:"small",onClick:()=>{n()},children:"Open Welcome Modal"})},t=()=>e.jsx(C,{children:e.jsx(h,{children:e.jsx(g,{children:e.jsx(N,{})})})});t.__docgenInfo={description:"",methods:[],displayName:"_MixAlertsExample"};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  // Providers should be at main Index level, these are here just for the story example
  return <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>;
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const P=["_MixAlertsExample"];export{t as _MixAlertsExample,P as __namedExportsOrder,w as default};
