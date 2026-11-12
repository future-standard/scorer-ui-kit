import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r}from"./styled-components.browser.esm-DRoLZq3m.js";import{i,n as a}from"./common-CUVz1sPu.js";import{n as o,t as s}from"./Button-CVePDF2Y.js";import{n as c,t as l}from"./useModal-DVdiqdN1.js";import{n as u,t as d}from"./useNotification-DAwO5zL2.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),o(),a(),l(),d(),f=t(),p=r.button`
  ${i};
  color: var(--grey-9);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  &:lang(ja) {
      font-style: normal;
  }
  line-height: 1.79;
`,m=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`,h=r.div`
  height: 210px;
  border-radius: 5px 5px 0 0;
  position: relative;
  z-index:99;
  background-image: linear-gradient(114deg, hsl(250, 60%, 62%), hsl(0, 46%, 54%));
  overflow: hidden;
`,g=r.div`
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
color: var(--grey-11);
`,_=r.div`
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
`,v=r.div`
  display: flex;
  flex-direction: column;
`,y=()=>{let{sendNotification:e}=u(),{setModalOpen:t}=c(),n={type:`info`,message:`You have enabled that requested process`};return(0,f.jsxs)(v,{children:[(0,f.jsx)(h,{}),(0,f.jsxs)(_,{children:[(0,f.jsx)(g,{children:`Welcome To Modal`}),(0,f.jsx)(`p`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra porta mi, eget sollicitudin orci blandit eget. Morbi risus tortor.`}),(0,f.jsx)(`p`,{children:`Vivamus condimentum mi ac nibh faucibus, ac vehicula libero fermentum. Aenean et nisl non enim elementum vestibulum sed sit.`}),(0,f.jsxs)(m,{children:[(0,f.jsx)(s,{onClick:()=>{e(n),t(!1)},children:`Enable Now`}),(0,f.jsx)(p,{onClick:()=>{t(!1)},children:`Enable Later`})]})]})]})};try{y.displayName=`CardModalExample`,y.__docgenInfo={description:``,displayName:`CardModalExample`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/storybook/src/stories/Alerts/MixAlerts/CardModalExample.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var x,S,C,w,T;function E(){return(E=e((()=>{o(),l(),b(),x=t(),S=()=>{let{createModal:e}=c();return(0,x.jsx)(s,{design:`secondary`,size:`small`,onClick:()=>{e({isCloseEnable:!1,width:`480px`,padding:!1,customComponent:(0,x.jsx)(y,{})})},children:`Open Welcome Modal`})},C={title:`Alerts/Mix/MixAlerts`,parameters:{docs:{description:{component:"useModal() and useNotification() together: the button opens a welcome card through `createModal()`, and the buttons inside the card (`CardModalExample.tsx` next to this story) send notifications through `useNotification()` and close the modal with `setModalOpen(false)`."}}},render:()=>(0,x.jsx)(S,{})},w={},T=[`Default`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Default,T as __namedExportsOrder,C as default};