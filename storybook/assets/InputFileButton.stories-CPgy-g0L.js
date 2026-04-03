import{a3 as i,d as n,j as a,a as g}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,S=g.div`
    margin: 20px;
`,_={title:"Form/File Management",component:i,decorators:[]},t=()=>{const c=n.boolean("Multiple",!1),u=n.text("Text","Select a File"),m=n.select("Button Design",{Primary:"primary",Secondary:"secondary",Danger:"danger"},"primary"),p=n.select("Button Size",{Small:"small",Normal:"normal",Large:"large"},"normal"),o=x("Input Callback"),d=e=>{console.log("file",e),e.length===1?o(e[0].name):o(e)};return a.jsx(S,{children:a.jsx(i,{text:u,buttonDesign:m,buttonSize:p,multiple:c,inputCallback:d})})};t.__docgenInfo={description:"",methods:[],displayName:"_InputFileButton"};var l,s,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const y=["_InputFileButton"];export{t as _InputFileButton,y as __namedExportsOrder,_ as default};
