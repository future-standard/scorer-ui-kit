import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,nt as s}from"./iframe-DufxECJ3.js";import{n as c,r as l}from"./helpers-Ds3vW7k8.js";var u,d,f,p,m,h;e((()=>{a(),u=i(),n(),o(),l(),d=t(),f={title:`Misc`,component:s,decorators:[]},p=r.div`
  margin: 20px;
`,m=()=>{let e=c(),t=(0,u.select)(`Name`,e,Object.keys(e)[0]),n=(0,u.number)(`Counter`,5),r=(0,u.select)(`Status`,{Caution:`caution`,Danger:`danger`,Good:`good`,Neutral:`neutral`,Highlight:`highlight`},`danger`),i=(0,u.boolean)(`Show empty counter`,!1),a=(0,u.number)(`MaxCounter`,999);return(0,d.jsx)(p,{children:(0,d.jsx)(s,{icon:t,status:r,counter:i?void 0:n,maxCounter:a})})},m.__docgenInfo={description:``,methods:[],displayName:`_Status_Icon`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const icon = select("Name", iconList, Object.keys(iconList)[0]);
  const counter = number('Counter', 5);
  const status = select("Status", {
    Caution: 'caution',
    Danger: 'danger',
    Good: 'good',
    Neutral: 'neutral',
    Highlight: 'highlight'
  }, 'danger');
  const undefineCounter = boolean('Show empty counter', false);
  const maxCounter = number('MaxCounter', 999);
  return <Container>
      <StatusIcon {...{
      icon,
      status
    }} counter={undefineCounter ? undefined : counter} maxCounter={maxCounter} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_Status_Icon`]}))();export{m as _Status_Icon,h as __namedExportsOrder,f as default};