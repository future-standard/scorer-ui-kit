import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,M as i,Pt as a,Rt as o,vt as s}from"./iframe-BHdSP_o9.js";var c,l,u,d,f,p,m;e((()=>{o(),n(),s(),c=a(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d=r.div`
    margin: 20px;
`,f={title:`Form/File Management`,component:i,decorators:[]},p=()=>{let e=(0,c.boolean)(`Multiple`,!1),t=(0,c.text)(`Text`,`Select a File`),n=(0,c.select)(`Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),r=(0,c.select)(`Button Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),a=u(`Input Callback`);return(0,l.jsx)(d,{children:(0,l.jsx)(i,{text:t,buttonDesign:n,buttonSize:r,multiple:e,inputCallback:e=>{console.log(`file`,e),e.length===1?a(e[0].name):a(e)}})})},p.__docgenInfo={description:``,methods:[],displayName:`_InputFileButton`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`_InputFileButton`]}))();export{p as _InputFileButton,m as __namedExportsOrder,f as default};