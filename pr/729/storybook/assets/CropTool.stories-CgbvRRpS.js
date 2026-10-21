import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./CropTool-Bw0j-_gW.js";import{_ as a,a as o,o as s}from"./iframe-Cw1eIbNi.js";import{n as c,t as l}from"./placeholder-Trrcww9-.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u=a(),d=t(),r(),s(),l(),f=n(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=o.div`
    margin: 20px;
`,h=o.img`
`,g=o.div``,_={title:`Form/File Management`,component:i,decorators:[],escapeHTML:!1},v=()=>{let e=(0,u.boolean)(`Is Resizable`,!0),[t,n]=(0,d.useState)(``),[r,a]=(0,d.useState)(!0),o=(0,u.text)(`Title`,`Crop Image`),s=(0,u.text)(`Cancel Button Text`,`Cancel`),l=(0,u.text)(`Crop Button Text`,`Crop and Save`),_=(0,u.number)(`Canvas Height`,400),v=(0,u.number)(`Canvas Width`,450),y=(0,u.number)(`Crop Height`,300),b=(0,u.number)(`Crop Width`,300),x=(0,u.number)(`Aspect Ratio`,0),S=p(`Error`);return(0,f.jsxs)(m,{children:[r?(0,f.jsx)(i,{imgUrl:c,title:o,onCrop:e=>{n(e),a(!1)},onClose:()=>{a(!1)},cancelBtnTxt:s,cropBtnTxt:l,isResizable:e,canvasHeight:_,canvasWidth:v,cropHeight:y,cropWidth:b,onError:e=>{console.debug(e),S(e)},aspectRatio:x},`${e} - ${_} - ${v} - ${y} - ${b} - ${x}`):null,(0,f.jsxs)(g,{children:[(0,f.jsx)(`h3`,{children:`Cropped Area`}),(0,f.jsx)(h,{src:t||void 0})]})]})},y=[`_CropTool`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const isResizable = boolean('Is Resizable', true);
  const [cropImg, setCropImg] = useState('');
  const [isCropping, setIsCropping] = useState(true);
  const title = text('Title', 'Crop Image');
  const cancelBtnTxt = text('Cancel Button Text', 'Cancel');
  const cropBtnTxt = text('Crop Button Text', \`Crop and Save\`);
  const canvasHeight = number('Canvas Height', 400);
  const canvasWidth = number('Canvas Width', 450);
  const cropHeight = number('Crop Height', 300);
  const cropWidth = number('Crop Width', 300);
  const aspectRatio = number('Aspect Ratio', 0);
  const errorValue = action('Error');
  const onCrop = (newImgUrl: string) => {
    setCropImg(newImgUrl);
    setIsCropping(false);
  };
  const onClose = () => {
    setIsCropping(false);
  };
  const onError = (msg: string) => {
    console.debug(msg);
    errorValue(msg);
  };
  return <Container>
      {isCropping ? <CropTool // this key is to force the re-render in storybook
    key={\`\${isResizable} - \${canvasHeight} - \${canvasWidth} - \${cropHeight} - \${cropWidth} - \${aspectRatio}\`} imgUrl={photo} {...{
      title,
      onCrop,
      onClose,
      cancelBtnTxt,
      cropBtnTxt,
      isResizable,
      canvasHeight,
      canvasWidth,
      cropHeight,
      cropWidth,
      onError,
      aspectRatio
    }} /> : null}
      <NewImageArea>
        <h3>Cropped Area</h3>
        <CropResult src={cropImg || undefined} />
      </NewImageArea>
    </Container>;
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as _CropTool,y as __namedExportsOrder,_ as default};