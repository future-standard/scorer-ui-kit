import{a1 as i,d as o,j as n,a as h}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,d=h.div`
  max-width: 500px;
`,C={title:"Form/File Management",component:i,decorators:[]},e=()=>{const c=o.text("Text","Drop a file"),p=o.text("Height","300px"),a=m("Input Callback"),x=t=>{console.log("file",t),t.length===1?a(t[0].name):a(t)};return n.jsx(d,{children:n.jsx(i,{height:p,text:c,dropCallback:x})})};e.__docgenInfo={description:"",methods:[],displayName:"_DropArea"};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const V=["_DropArea"];export{e as _DropArea,V as __namedExportsOrder,C as default};
