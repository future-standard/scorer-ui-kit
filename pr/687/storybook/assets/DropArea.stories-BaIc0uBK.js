import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,Ct as n,It as r,Lt as i,Pt as a,Wt as o}from"./iframe-BMz55O8f.js";var s,c,l,u,d,f,p;e((()=>{s=o(),n(),i(),c=a(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=r.div`
  max-width: 500px;
`,d={title:`Form/File Management`,component:t,decorators:[]},f=()=>{let e=(0,s.text)(`Text`,`Drop a file`),n=(0,s.text)(`Height`,`300px`),r=l(`Input Callback`);return(0,c.jsx)(u,{children:(0,c.jsx)(t,{height:n,text:e,dropCallback:e=>{console.debug(`file`,e),e.length===1?r(e[0].name):r(e)}})})},f.__docgenInfo={description:``,methods:[],displayName:`_DropArea`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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