import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,wt as a,x as o}from"./iframe-CH2zgN-8.js";import{n as s,t as c}from"./placeholder-Cf6rKdzI.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=i(),d=e(),a(),r(),c(),f=t(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m=n.div`
    margin: 20px;
`,h=n.img`
`,g=n.div``,_={title:`Form/File Management`,component:o,decorators:[],escapeHTML:!1},v=()=>{let e=(0,u.boolean)(`Is Resizable`,!0),[t,n]=(0,d.useState)(``),[r,i]=(0,d.useState)(!0),a=(0,u.text)(`Title`,`Crop Image`),c=(0,u.text)(`Cancel Button Text`,`Cancel`),l=(0,u.text)(`Crop Button Text`,`Crop and Save`),_=(0,u.number)(`Canvas Height`,400),v=(0,u.number)(`Canvas Width`,450),y=(0,u.number)(`Crop Height`,300),b=(0,u.number)(`Crop Width`,300),x=(0,u.number)(`Aspect Ratio`,0),S=p(`Error`);return(0,f.jsxs)(m,{children:[r?(0,f.jsx)(o,{imgUrl:s,title:a,onCrop:e=>{n(e),i(!1)},onClose:()=>{i(!1)},cancelBtnTxt:c,cropBtnTxt:l,isResizable:e,canvasHeight:_,canvasWidth:v,cropHeight:y,cropWidth:b,onError:e=>{console.debug(e),S(e)},aspectRatio:x},`${e} - ${_} - ${v} - ${y} - ${b} - ${x}`):null,(0,f.jsxs)(g,{children:[(0,f.jsx)(`h3`,{children:`Cropped Area`}),(0,f.jsx)(h,{src:t||void 0})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`_CropTool`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`_CropTool`]})))()}b();export{v as _CropTool,y as __namedExportsOrder,_ as default};