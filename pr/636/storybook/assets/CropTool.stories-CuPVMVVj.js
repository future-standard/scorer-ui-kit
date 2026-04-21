import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,bt as a,g as o,jt as s,kt as c}from"./iframe-CkXAfiVb.js";import{n as l,t as u}from"./placeholder-DnTErttm.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=n(),f=e(i()),a(),c(),u(),p=r(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=s.div`
    margin: 20px;
`,g=s.img`
`,_=s.div``,v={title:`Form/File Management`,component:o,decorators:[],escapeHTML:!1},y=()=>{let e=(0,d.boolean)(`Is Resizable`,!0),[t,n]=(0,f.useState)(``),[r,i]=(0,f.useState)(!0),a=(0,d.text)(`Title`,`Crop Image`),s=(0,d.text)(`Cancel Button Text`,`Cancel`),c=(0,d.text)(`Crop Button Text`,`Crop and Save`),u=(0,d.number)(`Canvas Height`,400),v=(0,d.number)(`Canvas Width`,450),y=(0,d.number)(`Crop Height`,300),b=(0,d.number)(`Crop Width`,300),x=(0,d.number)(`Aspect Ratio`,0),S=m(`Error`);return(0,p.jsxs)(h,{children:[r?(0,p.jsx)(o,{imgUrl:l,title:a,onCrop:e=>{n(e),i(!1)},onClose:()=>{i(!1)},cancelBtnTxt:s,cropBtnTxt:c,isResizable:e,canvasHeight:u,canvasWidth:v,cropHeight:y,cropWidth:b,onError:e=>{console.debug(e),S(e)},aspectRatio:x},`${e} - ${u} - ${v} - ${y} - ${b} - ${x}`):null,(0,p.jsxs)(_,{children:[(0,p.jsx)(`h3`,{children:`Cropped Area`}),(0,p.jsx)(g,{src:t})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_CropTool`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
        <CropResult src={cropImg} />
      </NewImageArea>
    </Container>;
}`,...y.parameters?.docs?.source}}},b=[`_CropTool`]}))();export{y as _CropTool,b as __namedExportsOrder,v as default};