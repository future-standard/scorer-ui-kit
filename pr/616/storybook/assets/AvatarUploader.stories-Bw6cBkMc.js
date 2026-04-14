import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,a as o,bt as s}from"./iframe-BJPFMC_k.js";var c,l,u,d,f,p,m;e((()=>{a(),n(),s(),c=i(),l=t(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d=r.div``,f={title:`Form/File Management`,component:o,decorators:[]},p=()=>{let e=(0,c.text)(`Uploader Title`,`Photograph`),t=(0,c.text)(`Photo Text`,`Drop Photo`),n=(0,c.text)(`Button Text`,`Select File`),r=(0,c.text)(`Button Text Replace`,`Replace Photo`),i=(0,c.text)(`Uploader Crop Text`,`Crop Image`),a=(0,c.text)(`CropTool Title`,`Crop utility`),s=(0,c.text)(`CropTool Cancel Text`,`Cancel`),f=(0,c.text)(`CropTool Confirm Text`,`Crop and Save`),p=(0,c.text)(`Delete Photo Text`,`Remove`),m=(0,c.boolean)(`Current Image`,!1),h=(0,c.boolean)(`Has Crop`,!0),g=u(`Update Callback`),_=u(`On Error`),v=u(`On Remove`);return(0,l.jsx)(d,{children:(0,l.jsx)(o,{onAvatarUpdate:e=>{console.log(`file`,e),g(e.name)},currentImg:m?`https://placekitten.com/g/200/300`:``,title:e,photoText:t,buttonText:n,buttonTextReplace:r,onError:e=>{console.log(e),_(e)},onRemove:()=>{v(`The user has deleted Avatar image`)},uploaderCropText:i,hasCrop:h,cropToolTitle:a,cropToolCancelTxt:s,cropToolConfirmTxt:f,deletePhotoText:p})})},p.__docgenInfo={description:``,methods:[],displayName:`_AvatarUploader`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const title = text('Uploader Title', 'Photograph');
  const photoText = text('Photo Text', 'Drop Photo');
  const buttonText = text('Button Text', 'Select File');
  const buttonTextReplace = text('Button Text Replace', 'Replace Photo');
  const uploaderCropText = text('Uploader Crop Text', 'Crop Image');
  const cropToolTitle = text('CropTool Title', 'Crop utility');
  const cropToolCancelTxt = text('CropTool Cancel Text', 'Cancel');
  const cropToolConfirmTxt = text('CropTool Confirm Text', 'Crop and Save');
  const deletePhotoText = text('Delete Photo Text', 'Remove');
  const baseImg = boolean('Current Image', false);
  const hasCrop = boolean('Has Crop', true);
  const showValue = action('Update Callback');
  const errorValue = action('On Error');
  const onRemoveValue = action('On Remove');
  const uploadReady = (imgFile: File) => {
    console.log('file', imgFile);
    showValue(imgFile.name);
  };
  const onError = (msg: string) => {
    console.log(msg);
    errorValue(msg);
  };
  const onRemove = () => {
    onRemoveValue('The user has deleted Avatar image');
  };
  return <Container>
      <AvatarUploader onAvatarUpdate={uploadReady} currentImg={baseImg ? 'https://placekitten.com/g/200/300' : ''} {...{
      title,
      photoText,
      buttonText,
      buttonTextReplace,
      onError,
      onRemove,
      uploaderCropText,
      hasCrop,
      cropToolTitle,
      cropToolCancelTxt,
      cropToolConfirmTxt,
      deletePhotoText
    }} />
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_AvatarUploader`]}))();export{p as _AvatarUploader,m as __namedExportsOrder,f as default};