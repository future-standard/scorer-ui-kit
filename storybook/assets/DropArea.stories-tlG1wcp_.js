import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as x}from"./styled-components.browser.esm-CarAhzHj.js";import{K as i}from"./index.modern-B3hCc7YS.js";import{a as h}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as r}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const d=x.div`
  max-width: 500px;
`,w={title:"Form/File Management",component:i,decorators:[]},t=()=>{const c=r.text("Text","Drop a file"),p=r.text("Height","300px"),o=h("Input Callback"),m=e=>{console.log("file",e),e.length===1?o(e[0].name):o(e)};return a.jsx(d,{children:a.jsx(i,{height:p,text:c,dropCallback:m})})};t.__docgenInfo={description:"",methods:[],displayName:"_DropArea"};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const _=["_DropArea"];export{t as _DropArea,_ as __namedExportsOrder,w as default};
