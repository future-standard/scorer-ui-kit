import{i as e}from"./preload-helper-xPQekRTU.js";import{At as t,M as n,Mt as r,kt as i,vt as a,zt as o}from"./iframe-Bwz4qBV9.js";var s,c,l,u,d,f,p;e((()=>{s=o(),a(),t(),c=i(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=r.div`
    margin: 20px;
`,d={title:`Form/File Management`,component:n,decorators:[]},f=()=>{let e=(0,s.boolean)(`Multiple`,!1),t=(0,s.text)(`Text`,`Select a File`),r=(0,s.select)(`Button Design`,{Primary:`primary`,Secondary:`secondary`,Danger:`danger`},`primary`),i=(0,s.select)(`Button Size`,{Small:`small`,Normal:`normal`,Large:`large`},`normal`),a=l(`Input Callback`);return(0,c.jsx)(u,{children:(0,c.jsx)(n,{text:t,buttonDesign:r,buttonSize:i,multiple:e,inputCallback:e=>{console.debug(`file`,e),e.length===1?a(e[0].name):a(e)}})})},f.__docgenInfo={description:``,methods:[],displayName:`_InputFileButton`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const multiple = boolean('Multiple', false);
  const textVal = text('Text', 'Select a File');
  const buttonDesign = select('Button Design', {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger'
  }, 'primary');
  const buttonSize = select('Button Size', {
    Small: 'small',
    Normal: 'normal',
    Large: 'large'
  }, 'normal');
  const showValue = action('Input Callback');
  const inputCallback = (newFiles: FileList) => {
    console.debug('file', newFiles);
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
}`,...f.parameters?.docs?.source}}},p=[`_InputFileButton`]}))();export{f as _InputFileButton,p as __namedExportsOrder,d as default};