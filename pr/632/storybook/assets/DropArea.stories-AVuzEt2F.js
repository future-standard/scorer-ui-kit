import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,bt as o,y as s}from"./iframe-C0e3YAX7.js";var c,l,u,d,f,p,m;e((()=>{a(),n(),o(),c=i(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d=r.div`
  max-width: 500px;
`,f={title:`Form/File Management`,component:s,decorators:[]},p=()=>{let e=(0,c.text)(`Text`,`Drop a file`),t=(0,c.text)(`Height`,`300px`),n=u(`Input Callback`);return(0,l.jsx)(d,{children:(0,l.jsx)(s,{height:t,text:e,dropCallback:e=>{console.log(`file`,e),e.length===1?n(e[0].name):n(e)}})})},p.__docgenInfo={description:``,methods:[],displayName:`_DropArea`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const textVal = text('Text', 'Drop a file');
  const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');
  const myCallback = (newFiles: FileList) => {
    console.log('file', newFiles);
    if (newFiles.length === 1) {
      showValue(newFiles[0].name);
    } else {
      showValue(newFiles);
    }
  };
  return <Container>
      <DropArea height={heightVal} text={textVal} dropCallback={myCallback} />
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_DropArea`]}))();export{p as _DropArea,m as __namedExportsOrder,f as default};