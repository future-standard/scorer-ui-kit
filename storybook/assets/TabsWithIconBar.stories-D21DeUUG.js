import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{c}from"./styled-components.browser.esm-D8a0uvnT.js";import{ao as p,q as o}from"./index.modern-BCxVMgPd.js";import{d as s}from"./index-BtgrC99a.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";const W={title:"Misc/molecules",component:p,decorators:[]},d="87px",b=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,a=c.div`
  padding: ${`30px 30px 30px ${d}`} ;
`,u=[{icon:"Success",title:"New People",subtitle:"Selected 120 of 120",tabFor:"example1",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Success people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"RecognitionPhoto",title:"Updates To People",subtitle:"Selected 0 of 4",tabFor:"example2",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Updates to people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"BigWarning",title:"Missing Images",subtitle:"4 entries w/out images",tabFor:"example3",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Missing images",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"Warning",title:"Errors",subtitle:"6 entries with errors",tabFor:"example4",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Errors",introductionText:"This is an example of a page shown by a selected tab"})})}],e=()=>{const l=s.text("Default Tab Id","example1"),m=s.text("Padding Left Override",d),x=s.object("TabList",u);return t.jsx(b,{children:t.jsx(p,{defaultTabId:l,tabList:x,paddingLeft:m})})};e.__docgenInfo={description:"",methods:[],displayName:"_TabWithIconBar"};var i,n,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const defaultTabId = text('Default Tab Id', 'example1');
  const paddingLeft = text('Padding Left Override', PADDING_LEFT);
  const tabList = object('TabList', list);
  return <Container>
      <TabsWithIconBar {...{
      defaultTabId,
      tabList,
      paddingLeft
    }} />
    </Container>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const _=["_TabWithIconBar"];export{e as _TabWithIconBar,_ as __namedExportsOrder,W as default};
