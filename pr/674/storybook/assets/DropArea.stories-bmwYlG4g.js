import{i as e}from"./preload-helper-xPQekRTU.js";import{Mt as t,jt as n,kt as r,vt as i,y as a,zt as o}from"./iframe-cNP1dtGl.js";var s,c,l,u,d,f,p;e((()=>{s=o(),i(),t(),c=r(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=n.div`
  max-width: 500px;
`,d={title:`Form/File Management`,component:a,decorators:[]},f=()=>{let e=(0,s.text)(`Text`,`Drop a file`),t=(0,s.text)(`Height`,`300px`),n=l(`Input Callback`);return(0,c.jsx)(u,{children:(0,c.jsx)(a,{height:t,text:e,dropCallback:e=>{console.debug(`file`,e),e.length===1?n(e[0].name):n(e)}})})},f.__docgenInfo={description:``,methods:[],displayName:`_DropArea`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const textVal = text('Text', 'Drop a file');
  const heightVal = text('Height', '300px');
  const showValue = action('Input Callback');
  const myCallback = (newFiles: FileList) => {
    console.debug('file', newFiles);
    if (newFiles.length === 1) {
      showValue(newFiles[0].name);
    } else {
      showValue(newFiles);
    }
  };
  return <Container>
      <DropArea height={heightVal} text={textVal} dropCallback={myCallback} />
    </Container>;
}`,...f.parameters?.docs?.source}}},p=[`_DropArea`]}))();export{f as _DropArea,p as __namedExportsOrder,d as default};