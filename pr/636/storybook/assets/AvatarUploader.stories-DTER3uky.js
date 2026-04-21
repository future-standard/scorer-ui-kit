import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,a as r,bt as i,jt as a,kt as o}from"./iframe-CkXAfiVb.js";var s,c,l,u,d,f,p;e((()=>{s=t(),i(),o(),c=n(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u=a.div``,d={title:`Form/File Management`,component:r,decorators:[]},f=()=>{let e=(0,s.text)(`Uploader Title`,`Photograph`),t=(0,s.text)(`Photo Text`,`Drop Photo`),n=(0,s.text)(`Button Text`,`Select File`),i=(0,s.text)(`Button Text Replace`,`Replace Photo`),a=(0,s.text)(`Uploader Crop Text`,`Crop Image`),o=(0,s.text)(`CropTool Title`,`Crop utility`),d=(0,s.text)(`CropTool Cancel Text`,`Cancel`),f=(0,s.text)(`CropTool Confirm Text`,`Crop and Save`),p=(0,s.text)(`Delete Photo Text`,`Remove`),m=(0,s.boolean)(`Current Image`,!1),h=(0,s.boolean)(`Has Crop`,!0),g=l(`Update Callback`),_=l(`On Error`),v=l(`On Remove`);return(0,c.jsx)(u,{children:(0,c.jsx)(r,{onAvatarUpdate:e=>{console.debug(`file`,e),g(e.name)},currentImg:m?`https://placekitten.com/g/200/300`:``,title:e,photoText:t,buttonText:n,buttonTextReplace:i,onError:e=>{console.debug(e),_(e)},onRemove:()=>{v(`The user has deleted Avatar image`)},uploaderCropText:a,hasCrop:h,cropToolTitle:o,cropToolCancelTxt:d,cropToolConfirmTxt:f,deletePhotoText:p})})},f.__docgenInfo={description:``,methods:[],displayName:`_AvatarUploader`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
    console.debug('file', imgFile);
    showValue(imgFile.name);
  };
  const onError = (msg: string) => {
    console.debug(msg);
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
}`,...f.parameters?.docs?.source}}},p=[`_AvatarUploader`]}))();export{f as _AvatarUploader,p as __namedExportsOrder,d as default};