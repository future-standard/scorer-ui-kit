import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r}from"./common-BPRGr8Pd.js";import{i,n as a,r as o,t as s}from"./useNotification-CIqtuL6b.js";import{n as c,t as l}from"./Button-q266cx_-.js";import{i as u,n as d,r as f,t as p}from"./useModal-BLX3i2BE.js";import{a as m,o as h}from"./iframe-BmxEQ5Tp.js";var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{h(),c(),r(),p(),s(),g=t(),_=m.button`
  ${n};
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
`,v=m.div`
text-align: center;
margin-top: 10px;
${_} {
  margin: 15px auto 0 auto;
}
`,y=m.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,b=m.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,x=m.div`
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
`,S=m.div`
  display: flex;
  flex-direction: column;
`,C=()=>{let{sendNotification:e}=a(),{setModalOpen:t}=d(),n={type:`info`,message:`You have enabled that requested process`};return(0,g.jsxs)(S,{children:[(0,g.jsx)(y,{}),(0,g.jsxs)(x,{children:[(0,g.jsx)(b,{children:`Welcome To Modal`}),(0,g.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.`}),(0,g.jsx)(`p`,{children:`Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.`}),(0,g.jsxs)(v,{children:[(0,g.jsx)(l,{onClick:()=>{e(n),t(!1)},children:`Enable Now`}),(0,g.jsx)(_,{onClick:()=>{t(!1)},children:`Enable Later`})]})]})]})};try{C.displayName=`CardModalExample`,C.__docgenInfo={description:``,displayName:`CardModalExample`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/storybook/src/stories/Alerts/MixAlerts/CardModalExample.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D,O,k,A,j;function M(){return(M=e((()=>{c(),u(),i(),p(),s(),h(),w(),T=t(),E=m.div`
  margin: 100px 20px 20px 20px;
  display: grid;
  grid-template-columns: 200px;
  row-gap: 15px;
`,D={title:`Alerts/Mix`,components:a,decorator:[]},O=(0,T.jsx)(C,{}),k=()=>{let{createModal:e}=d(),t=()=>{e({isCloseEnable:!1,width:`480px`,padding:!1,customComponent:O})};return(0,T.jsx)(l,{design:`secondary`,size:`small`,onClick:()=>{t()},children:`Open Welcome Modal`})},A=()=>(0,T.jsx)(E,{children:(0,T.jsx)(o,{children:(0,T.jsx)(f,{children:(0,T.jsx)(k,{})})})}),j=[`_MixAlertsExample`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  // Providers should be at main Index level, these are here just for the story example
  return <Container>
      <NotificationProvider>
        <ModalProvider>
          <ModalAndNotification />
        </ModalProvider>
      </NotificationProvider>
    </Container>;
}`,...A.parameters?.docs?.source}}}})))()}M();export{A as _MixAlertsExample,j as __namedExportsOrder,D as default};