import{i as e}from"./preload-helper-xPQekRTU.js";import{Mt as t,et as n,jt as r,kt as i,vt as a,zt as o}from"./iframe-cNP1dtGl.js";import{n as s,t as c}from"./helpers-D7M4tyZO.js";var l,u,d,f,p,m;e((()=>{l=o(),a(),t(),s(),u=i(),d={title:`Misc`,component:n,decorators:[]},f=r.div`
  margin: 20px;
`,p=()=>{let e=c(),t=(0,l.select)(`Name`,e,Object.keys(e)[0]),r=(0,l.number)(`Counter`,5),i=(0,l.select)(`Status`,{Caution:`caution`,Danger:`danger`,Good:`good`,Neutral:`neutral`,Highlight:`highlight`},`danger`),a=(0,l.boolean)(`Show empty counter`,!1),o=(0,l.number)(`MaxCounter`,999);return(0,u.jsx)(f,{children:(0,u.jsx)(n,{icon:t,status:i,counter:a?void 0:r,maxCounter:o})})},p.__docgenInfo={description:``,methods:[],displayName:`_Status_Icon`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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