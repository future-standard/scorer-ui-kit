import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,g as c}from"./iframe-Bq-bFTg_.js";import{n as l,t as u}from"./placeholder-DnTErttm.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=e(o()),r(),s(),f=a(),u(),p=n(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h=i.div`
    margin: 20px;
`,g=i.img`
`,_=i.div``,v={title:`Form/File Management`,component:c,decorators:[],escapeHTML:!1},y=()=>{let e=(0,f.boolean)(`Is Resizable`,!0),[t,n]=(0,d.useState)(``),[r,i]=(0,d.useState)(!0),a=(0,f.text)(`Title`,`Crop Image`),o=(0,f.text)(`Cancel Button Text`,`Cancel`),s=(0,f.text)(`Crop Button Text`,`Crop and Save`),u=(0,f.number)(`Canvas Height`,400),v=(0,f.number)(`Canvas Width`,450),y=(0,f.number)(`Crop Height`,300),b=(0,f.number)(`Crop Width`,300),x=(0,f.number)(`Aspect Ratio`,0),S=m(`Error`);return(0,p.jsxs)(h,{children:[r?(0,p.jsx)(c,{imgUrl:l,title:a,onCrop:e=>{n(e),i(!1)},onClose:()=>{i(!1)},cancelBtnTxt:o,cropBtnTxt:s,isResizable:e,canvasHeight:u,canvasWidth:v,cropHeight:y,cropWidth:b,onError:e=>{console.log(e),S(e)},aspectRatio:x},`${e} - ${u} - ${v} - ${y} - ${b} - ${x}`):null,(0,p.jsxs)(_,{children:[(0,p.jsx)(`h3`,{children:`Cropped Area`}),(0,p.jsx)(g,{src:t})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`_CropTool`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
    console.log(msg);
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