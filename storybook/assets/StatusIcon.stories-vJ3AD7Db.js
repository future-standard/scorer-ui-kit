import{ai as c,d as t,j as n,a as l}from"./iframe-BQPDKgpJ.js";import{g as p}from"./index-BKA4gAcn.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const _={title:"Misc",component:c,decorators:[]},C=l.div`
  margin: 20px;
`,o=()=>{const e=p(),u=t.select("Name",e,Object.keys(e)[0]),i=t.number("Counter",5),d=t.select("Status",{Caution:"caution",Danger:"danger",Good:"good",Neutral:"neutral",Highlight:"highlight"},"danger"),m=t.boolean("Show empty counter",!1),g=t.number("MaxCounter",999);return n.jsx(C,{children:n.jsx(c,{icon:u,status:d,counter:m?void 0:i,maxCounter:g})})};o.__docgenInfo={description:"",methods:[],displayName:"_Status_Icon"};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const I=["_Status_Icon"];export{o as _Status_Icon,I as __namedExportsOrder,_ as default};
