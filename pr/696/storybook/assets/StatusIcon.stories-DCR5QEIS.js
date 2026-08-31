import{Ft as e,Lt as t,Rt as n,Wt as r,ot as i,wt as a}from"./iframe-DFQHAkQ-.js";import{n as o,t as s}from"./helpers-CXAXeTVq.js";import{n as c}from"./rolldown-runtime-DkW27tQK.js";var l,u,d,f,p,m;function h(){return(h=c((()=>{l=r(),a(),n(),o(),u=e(),d={title:`Misc`,component:i,decorators:[]},f=t.div`
  margin: 20px;
`,p=()=>{let e=s(),t=(0,l.select)(`Name`,e,Object.keys(e)[0]),n=(0,l.number)(`Counter`,5),r=(0,l.select)(`Status`,{Caution:`caution`,Danger:`danger`,Good:`good`,Neutral:`neutral`,Highlight:`highlight`},`danger`),a=(0,l.boolean)(`Show empty counter`,!1),o=(0,l.number)(`MaxCounter`,999);return(0,u.jsx)(f,{children:(0,u.jsx)(i,{icon:t,status:r,counter:a?void 0:n,maxCounter:o})})},p.__docgenInfo={description:``,methods:[],displayName:`_Status_Icon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const iconList = generateIconList();
  const icon = select('Name', iconList, Object.keys(iconList)[0]);
  const counter = number('Counter', 5);
  const status = select('Status', {
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
}`,...p.parameters?.docs?.source}}},m=[`_Status_Icon`]})))()}h();export{p as _Status_Icon,m as __namedExportsOrder,d as default};