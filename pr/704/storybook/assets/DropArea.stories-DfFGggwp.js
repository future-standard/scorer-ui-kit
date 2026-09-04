import{Gt as e,It as t,Rt as n,w as r,wt as i,zt as a}from"./iframe-C28gtL4u.js";import{n as o}from"./rolldown-runtime-DkW27tQK.js";var s,c,l,u,d,f,p;function m(){return(m=o((()=>{s=e(),i(),a(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=n.div`
  max-width: 500px;
`,d={title:`Form/File Management`,component:r,decorators:[]},f=()=>{let e=(0,s.text)(`Text`,`Drop a file`),t=(0,s.text)(`Height`,`300px`),n=l(`Input Callback`);return(0,c.jsx)(u,{children:(0,c.jsx)(r,{height:t,text:e,dropCallback:e=>{console.debug(`file`,e),e.length===1?n(e[0].name):n(e)}})})},f.__docgenInfo={description:``,methods:[],displayName:`_DropArea`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`_DropArea`]})))()}m();export{f as _DropArea,p as __namedExportsOrder,d as default};