import{j as n}from"./emotion-unitless.esm-y1ruXoeO.js";import{d as t}from"./index-BtgrC99a.js";import{c as p}from"./styled-components.browser.esm-D8a0uvnT.js";import{ah as c}from"./index.modern-BCxVMgPd.js";import{g as l}from"./index-CTv9zpMR.js";import"./index-Dh2lLoQQ.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const y={title:"Misc",component:c,decorators:[]},C=p.div`
  margin: 20px;
`,o=()=>{const e=l(),i=t.select("Name",e,Object.keys(e)[0]),u=t.number("Counter",5),m=t.select("Status",{Caution:"caution",Danger:"danger",Good:"good",Neutral:"neutral",Highlight:"highlight"},"danger"),d=t.boolean("Show empty counter",!1),g=t.number("MaxCounter",999);return n.jsx(C,{children:n.jsx(c,{icon:i,status:m,counter:d?void 0:u,maxCounter:g})})};o.__docgenInfo={description:"",methods:[],displayName:"_Status_Icon"};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const L=["_Status_Icon"];export{o as _Status_Icon,L as __namedExportsOrder,y as default};
