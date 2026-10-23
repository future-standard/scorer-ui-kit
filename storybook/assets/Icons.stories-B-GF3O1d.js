import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{Ft as t,Gt as n,It as r,Pt as i,Rt as a,jt as o,wt as s,zt as c}from"./iframe-BclkYTZO.js";import{n as l,t as u}from"./helpers-BQWMenXp.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),d=n(),s(),c(),l(),f=r(),p={title:`Misc`,component:o,decorators:[]},m=a.div`
  padding: 12px 24px;
  width: 100px;
  border-radius: 3px;

  margin: 15% auto;
  display:flex;
  justify-content:center;
  align-items:center;

`,h=a.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  column-gap: 24px;
  row-gap: 24px;
  text-align: center;
`,g=()=>{let e=u(),t=(0,d.boolean)(`Show All`,!1),n=(0,d.boolean)(`For SVG Usage`,!1),r=(0,d.select)(`Name`,e,Object.keys(e)[0]),a=(0,d.select)(`Color`,{Mono:`mono`,Dimmed:`dimmed`,Subtle:`subtle`,Inverse:`inverse`,Primary:`primary`,Danger:`danger`},`mono`),s=(0,d.select)(`Weight`,{Light:`light`,Regular:`regular`,Heavy:`heavy`,Strong:`strong`},`regular`),c=(0,d.number)(`Size`,24);return(0,f.jsx)(m,{children:t?(0,f.jsx)(h,{children:(e=>Object.keys(i).map(t=>(0,f.jsx)(`div`,{title:t,children:(0,f.jsx)(o,{icon:t,...e})},t)))({color:a,weight:s,size:c,forSvgUsage:n})}):(0,f.jsx)(o,{icon:r,weight:s,color:a,size:c,forSvgUsage:n})})},g.__docgenInfo={description:``,methods:[],displayName:`_Icons`},_=[`_Icons`]})))()}v();export{g as _Icons,_ as __namedExportsOrder,p as default};