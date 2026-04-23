import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,bt as r,jt as i,kt as a,nt as o}from"./iframe-DwiLRrks.js";import{n as s,t as c}from"./helpers-B7vqI1hH.js";var l,u,d,f,p,m;e((()=>{l=t(),r(),a(),s(),u=n(),d={title:`Misc`,component:o,decorators:[]},f=i.div`
  margin: 20px;
`,p=()=>{let e=c(),t=(0,l.select)(`Name`,e,Object.keys(e)[0]),n=(0,l.number)(`Counter`,5),r=(0,l.select)(`Status`,{Caution:`caution`,Danger:`danger`,Good:`good`,Neutral:`neutral`,Highlight:`highlight`},`danger`),i=(0,l.boolean)(`Show empty counter`,!1),a=(0,l.number)(`MaxCounter`,999);return(0,u.jsx)(f,{children:(0,u.jsx)(o,{icon:t,status:r,counter:i?void 0:n,maxCounter:a})})},p.__docgenInfo={description:``,methods:[],displayName:`_Status_Icon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`_Status_Icon`]}))();export{p as _Status_Icon,m as __namedExportsOrder,d as default};