import{j as n}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as t}from"./index-C-6Xbh3D.js";import{c as l}from"./styled-components.browser.esm-CarAhzHj.js";import{ah as c}from"./index.modern-CMonYql-.js";import{g as p}from"./index-DQYbOqls.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const j={title:"Misc",component:c,decorators:[]},C=l.div`
  margin: 20px;
`,o=()=>{const e=p(),i=t.select("Name",e,Object.keys(e)[0]),u=t.number("Counter",5),m=t.select("Status",{Caution:"caution",Danger:"danger",Good:"good",Neutral:"neutral",Highlight:"highlight"},"danger"),d=t.boolean("Show empty counter",!1),g=t.number("MaxCounter",999);return n.jsx(C,{children:n.jsx(c,{icon:i,status:m,counter:d?void 0:u,maxCounter:g})})};o.__docgenInfo={description:"",methods:[],displayName:"_Status_Icon"};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const y=["_Status_Icon"];export{o as _Status_Icon,y as __namedExportsOrder,j as default};
