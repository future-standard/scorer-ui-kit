import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as C}from"./index-Dh2lLoQQ.js";import{c as r}from"./styled-components.browser.esm-D8a0uvnT.js";import{J as h}from"./index.modern-BCxVMgPd.js";import{a as B}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as o}from"./index-BtgrC99a.js";import{p as E}from"./placeholder-BcVwUhHh.js";import"./index-Dz_aA26r.js";import"./v4-CtRu48qb.js";import"./iframe-CQb0CZlC.js";const S=r.div`
    margin: 20px;
`,j=r.img`
`,A=r.div``,J={title:"Form/File Management",component:h,decorators:[],escapeHTML:!1},n=()=>{const s=o.boolean("Is Resizable",!0),[x,I]=C.useState(""),[b,a]=C.useState(!0),T=o.text("Title","Crop Image"),v=o.text("Cancel Button Text","Cancel"),f=o.text("Crop Button Text","Crop and Save"),c=o.number("Canvas Height",400),i=o.number("Canvas Width",450),p=o.number("Crop Height",300),l=o.number("Crop Width",300),m=o.number("Aspect Ratio",0),R=B("Error"),H=e=>{I(e),a(!1)},W=()=>{a(!1)},$=e=>{console.log(e),R(e)};return t.jsxs(S,{children:[b?t.jsx(h,{imgUrl:E,title:T,onCrop:H,onClose:W,cancelBtnTxt:v,cropBtnTxt:f,isResizable:s,canvasHeight:c,canvasWidth:i,cropHeight:p,cropWidth:l,onError:$,aspectRatio:m},`${s} - ${c} - ${i} - ${p} - ${l} - ${m}`):null,t.jsxs(A,{children:[t.jsx("h3",{children:"Cropped Area"}),t.jsx(j,{src:x})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"_CropTool"};var g,u,d;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const L=["_CropTool"];export{n as _CropTool,L as __namedExportsOrder,J as default};
