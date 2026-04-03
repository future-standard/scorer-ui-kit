import{a0 as h,d as t,r as g,j as o,a as r}from"./iframe-B-FWgcWl.js";import{p as B}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,E=r.div`
    margin: 20px;
`,S=r.img`
`,A=r.div``,w={title:"Form/File Management",component:h,decorators:[],escapeHTML:!1},n=()=>{const s=t.boolean("Is Resizable",!0),[x,I]=g.useState(""),[T,a]=g.useState(!0),b=t.text("Title","Crop Image"),v=t.text("Cancel Button Text","Cancel"),R=t.text("Crop Button Text","Crop and Save"),c=t.number("Canvas Height",400),i=t.number("Canvas Width",450),p=t.number("Crop Height",300),l=t.number("Crop Width",300),C=t.number("Aspect Ratio",0),H=f("Error"),_=e=>{I(e),a(!1)},W=()=>{a(!1)},$=e=>{console.log(e),H(e)};return o.jsxs(E,{children:[T?o.jsx(h,{imgUrl:B,title:b,onCrop:_,onClose:W,cancelBtnTxt:v,cropBtnTxt:R,isResizable:s,canvasHeight:c,canvasWidth:i,cropHeight:p,cropWidth:l,onError:$,aspectRatio:C},`${s} - ${c} - ${i} - ${p} - ${l} - ${C}`):null,o.jsxs(A,{children:[o.jsx("h3",{children:"Cropped Area"}),o.jsx(S,{src:x})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"_CropTool"};var m,u,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const y=["_CropTool"];export{n as _CropTool,y as __namedExportsOrder,w as default};
