import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{c}from"./styled-components.browser.esm-CarAhzHj.js";import{ao as p,q as o}from"./index.modern-B3hCc7YS.js";import{d as s}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";const L={title:"Misc/molecules",component:p,decorators:[]},d="87px",b=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px 0;
`,a=c.div`
  padding: ${`30px 30px 30px ${d}`} ;
`,u=[{icon:"Success",title:"New People",subtitle:"Selected 120 of 120",tabFor:"example1",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Success people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"RecognitionPhoto",title:"Updates To People",subtitle:"Selected 0 of 4",tabFor:"example2",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Updates to people",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"BigWarning",title:"Missing Images",subtitle:"4 entries w/out images",tabFor:"example3",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Missing images",introductionText:"This is an example of a page shown by a selected tab"})})},{icon:"Warning",title:"Errors",subtitle:"6 entries with errors",tabFor:"example4",customComponent:t.jsx(a,{children:t.jsx(o,{title:"Errors",introductionText:"This is an example of a page shown by a selected tab"})})}],e=()=>{const l=s.text("Default Tab Id","example1"),m=s.text("Padding Left Override",d),x=s.object("TabList",u);return t.jsx(b,{children:t.jsx(p,{defaultTabId:l,tabList:x,paddingLeft:m})})};e.__docgenInfo={description:"",methods:[],displayName:"_TabWithIconBar"};var n,i,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const W=["_TabWithIconBar"];export{e as _TabWithIconBar,W as __namedExportsOrder,L as default};
