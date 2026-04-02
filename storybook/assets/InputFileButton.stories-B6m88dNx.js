import{j as a}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as g}from"./styled-components.browser.esm-CarAhzHj.js";import{O as i}from"./index.modern-CMonYql-.js";import{a as x}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as o}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const b=g.div`
    margin: 20px;
`,D={title:"Form/File Management",component:i,decorators:[]},t=()=>{const c=o.boolean("Multiple",!1),m=o.text("Text","Select a File"),u=o.select("Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),p=o.select("Button Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),n=x("Input Callback"),d=e=>{console.log("file",e),e.length===1?n(e[0].name):n(e)};return a.jsx(b,{children:a.jsx(i,{text:m,buttonDesign:u,buttonSize:p,multiple:c,inputCallback:d})})};t.__docgenInfo={description:"",methods:[],displayName:"_InputFileButton"};var l,r,s;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const multiple = boolean('Multiple', false);
  const textVal = text('Text', 'Select a File');
  const buttonDesign = select("Button Design", {
    Primary: "primary",
    Secondary: "secondary",
    Danger: "danger"
  }, "primary");
  const buttonSize = select("Button Size", {
    Small: "small",
    Normal: "normal",
    Large: "large"
  }, "normal");
  const showValue = action('Input Callback');
  const inputCallback = (newFiles: FileList) => {
    console.log('file', newFiles);
    if (newFiles.length === 1) {
      showValue(newFiles[0].name);
    } else {
      showValue(newFiles);
    }
  };
  return <Container>
      <InputFileButton text={textVal} {...{
      buttonDesign,
      buttonSize,
      multiple,
      inputCallback
    }} />
    </Container>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const V=["_InputFileButton"];export{t as _InputFileButton,V as __namedExportsOrder,D as default};
