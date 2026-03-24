import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as x}from"./styled-components.browser.esm-D8a0uvnT.js";import{K as i}from"./index.modern-BCxVMgPd.js";import{a as h}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as r}from"./index-BtgrC99a.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./v4-CtRu48qb.js";import"./iframe-CQb0CZlC.js";const d=x.div`
  max-width: 500px;
`,_={title:"Form/File Management",component:i,decorators:[]},t=()=>{const c=r.text("Text","Drop a file"),p=r.text("Height","300px"),o=h("Input Callback"),m=e=>{console.log("file",e),e.length===1?o(e[0].name):o(e)};return a.jsx(d,{children:a.jsx(i,{height:p,text:c,dropCallback:m})})};t.__docgenInfo={description:"",methods:[],displayName:"_DropArea"};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const A=["_DropArea"];export{t as _DropArea,A as __namedExportsOrder,_ as default};
