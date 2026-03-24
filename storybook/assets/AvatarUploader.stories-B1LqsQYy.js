import{j as r}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as A}from"./styled-components.browser.esm-CarAhzHj.js";import{I as p}from"./index.modern-B3hCc7YS.js";import{a as n}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as o}from"./index-C-6Xbh3D.js";import"./index-DnkWte70.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const V=A.div``,B={title:"Form/File Management",component:p,decorators:[]},e=()=>{const s=o.text("Uploader Title","Photograph"),x=o.text("Photo Text","Drop Photo"),i=o.text("Button Text","Select File"),T=o.text("Button Text Replace","Replace Photo"),m=o.text("Uploader Crop Text","Crop Image"),d=o.text("CropTool Title","Crop utility"),u=o.text("CropTool Cancel Text","Cancel"),C=o.text("CropTool Confirm Text","Crop and Save"),h=o.text("Delete Photo Text","Remove"),g=o.boolean("Current Image",!1),v=o.boolean("Has Crop",!0),R=n("Update Callback"),f=n("On Error"),b=n("On Remove"),U=t=>{console.log("file",t),R(t.name)},P=t=>{console.log(t),f(t)},I=()=>{b("The user has deleted Avatar image")};return r.jsx(V,{children:r.jsx(p,{onAvatarUpdate:U,currentImg:g?"http://placekitten.com/g/200/300":"",title:s,photoText:x,buttonText:i,buttonTextReplace:T,onError:P,onRemove:I,uploaderCropText:m,hasCrop:v,cropToolTitle:d,cropToolCancelTxt:u,cropToolConfirmTxt:C,deletePhotoText:h})})};e.__docgenInfo={description:"",methods:[],displayName:"_AvatarUploader"};var a,l,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
      <AvatarUploader onAvatarUpdate={uploadReady} currentImg={baseImg ? 'http://placekitten.com/g/200/300' : ''} {...{
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["_AvatarUploader"];export{e as _AvatarUploader,D as __namedExportsOrder,B as default};
