import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r}from"./styled-components.browser.esm-DRoLZq3m.js";import{a as i,i as a,r as o,t as s}from"./Icon-jcMQaGO-.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),o(),n(),c=t(),l=r.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,u=r.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,d=[`mono`,`dimmed`,`subtle`,`inverse`,`primary`,`danger`],f=[`primary`,`secondary`,`grey`,`info`,`success`,`caution`,`warning`,`orange`,`red`,`green`,`black`,`white`],p=[...d,...f.flatMap(e=>Array.from({length:12},(t,n)=>`${e}-${n+1}`))],m=e=>Object.keys(a).map(t=>(0,c.jsx)(`div`,{title:t,children:(0,c.jsx)(s,{icon:t,...e})},t)),h=({showAll:e,icon:t,...n})=>(0,c.jsx)(l,{children:e?(0,c.jsx)(u,{children:m(n)}):(0,c.jsx)(s,{icon:t,...n})}),g={title:`Misc/Icons`,component:s,tags:[`!autodocs`],argTypes:{showAll:{name:`Show all`},icon:{control:`select`,options:Object.keys(a)},color:{control:`select`,options:p},weight:{control:`select`}},args:{showAll:!1,icon:`ActionPause`,color:`mono`,weight:`regular`,size:24,forSvgUsage:!1},render:e=>(0,c.jsx)(h,{...e})},_={},v=[`Default`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}}})))()}y();export{_ as Default,v as __namedExportsOrder,g as default};