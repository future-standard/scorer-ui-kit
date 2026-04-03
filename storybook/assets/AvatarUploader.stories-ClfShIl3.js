import{$ as s,d as o,j as r,a as A}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,I=A.div``,V={title:"Form/File Management",component:s,decorators:[]},e=()=>{const p=o.text("Uploader Title","Photograph"),T=o.text("Photo Text","Drop Photo"),x=o.text("Button Text","Select File"),i=o.text("Button Text Replace","Replace Photo"),m=o.text("Uploader Crop Text","Crop Image"),d=o.text("CropTool Title","Crop utility"),u=o.text("CropTool Cancel Text","Cancel"),C=o.text("CropTool Confirm Text","Crop and Save"),h=o.text("Delete Photo Text","Remove"),g=o.boolean("Current Image",!1),v=o.boolean("Has Crop",!0),R=n("Update Callback"),b=n("On Error"),U=n("On Remove"),P=t=>{console.log("file",t),R(t.name)},_=t=>{console.log(t),b(t)},f=()=>{U("The user has deleted Avatar image")};return r.jsx(I,{children:r.jsx(s,{onAvatarUpdate:P,currentImg:g?"https://placekitten.com/g/200/300":"",title:p,photoText:T,buttonText:x,buttonTextReplace:i,onError:_,onRemove:f,uploaderCropText:m,hasCrop:v,cropToolTitle:d,cropToolCancelTxt:u,cropToolConfirmTxt:C,deletePhotoText:h})})};e.__docgenInfo={description:"",methods:[],displayName:"_AvatarUploader"};var a,l,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["_AvatarUploader"];export{e as _AvatarUploader,S as __namedExportsOrder,V as default};
