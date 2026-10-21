import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ButtonWithIcon-BpG1jxDW.js";import{n as a,t as o}from"./DropArea-CebWhYLi.js";import{n as s,t as c}from"./InputFileButton-DcJpcDt3.js";import{r as l,t as u}from"./Label-_UOZbhk6.js";import{d,o as f}from"./helpers-D3bl-wl9.js";import{n as p,t as m}from"./CropTool-Bw0j-_gW.js";import{_ as h,a as g,i as _,o as v}from"./iframe-Cw1eIbNi.js";function y(e){return(0,b.jsx)(`svg`,{width:48,height:48,"aria-hidden":`true`,...e,viewBox:`0 0 48 48`,children:(0,b.jsx)(`g`,{fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,b.jsx)(`g`,{stroke:`#C1C1C1`,strokeWidth:`1.5`,children:(0,b.jsx)(`g`,{children:(0,b.jsx)(`g`,{children:(0,b.jsxs)(`g`,{transform:`translate(-789 -294) translate(772 277) translate(10.25 10.25) translate(7.688 7.688)`,children:[(0,b.jsx)(`rect`,{width:`37.477`,height:`43.242`,x:`4.324`,y:`1.441`,rx:`1.5`}),(0,b.jsx)(`circle`,{cx:`23.063`,cy:`17.456`,r:`7.899`}),(0,b.jsx)(`path`,{d:`M36.035 36.568c-2.537-4.814-7.53-7.828-12.972-7.828-5.442 0-10.436 3.014-12.973 7.828`})]})})})})})})}var b;function x(){return(x=e((()=>{b=n();try{y.displayName=`SvgAvatarPlaceholder`,y.__docgenInfo={description:``,displayName:`SvgAvatarPlaceholder`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/svg/AvatarPlaceholder.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{S=t(),v(),f(),x(),r(),a(),s(),l(),p(),C=n(),w=500,T=475,E=490,D=460,O=Math.round(T/w*100)/100,k=`150px`,A=`142px`,j=g.div`
  position: relative;
  width: ${A};
  ${({theme:e})=>_`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`,M=g.div`
  position: relative;
  margin-bottom: 17px;
  height: ${k};
  width: ${A};
`,N=_`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--grey-5);
`,P=g.img`
  ${N}
  object-fit: cover;
`,F=g.div`
  color: var(--grey-10);
  font-size: 14px;
`,I=g.div`
  ${N}
  padding-top: 15px;
  ${F} {
    margin-top: 18px;
  }
`,L=g(c)`
  width: 100%;
`,R=g.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`,z=({title:e=`Photograph`,photoText:t=`Drop Photo`,buttonText:n=`Select File`,buttonTextReplace:r=`Replace Photo`,uploaderCropText:a=`Crop Image`,deletePhotoText:s=`Remove`,cropToolTitle:c,cropToolCancelTxt:l,cropToolConfirmTxt:f,currentImg:p,hasCrop:h=!0,onAvatarUpdate:g=()=>{},onError:_=()=>{},onRemove:v=()=>{}})=>{let[b,x]=(0,S.useState)(p),[A,N]=(0,S.useState)(``),[z,B]=(0,S.useState)(!1),V=(0,S.useCallback)(async(e,t)=>{x(e),g(await fetch(e).then(e=>e.blob()).then(e=>new File([e],`newAvatar`,{type:t}))),B(!1)},[g]),H=(0,S.useCallback)(()=>{B(!1),N(``),URL.revokeObjectURL(A)},[A]),U=(0,S.useCallback)(e=>{if(e.length===1){if(!d(e[0])){_(`Please upload only jpeg and png file`);return}let t=URL.createObjectURL(e[0]);h?(N(t),B(!0)):(g(e[0]),x(t))}else _(`Drop only one file`)},[h,_,g]),W=(0,S.useCallback)(e=>{N(e),B(!0)},[]);(0,S.useEffect)(()=>{x(p)},[p]);let G=(0,S.useCallback)(()=>{x(``),v()},[v]);return(0,C.jsxs)(j,{children:[(0,C.jsx)(u,{labelText:e,htmlFor:`avatar-upload`}),(0,C.jsxs)(M,{children:[b?(0,C.jsx)(P,{src:b,alt:`avatar image`,crossOrigin:`anonymous`}):(0,C.jsxs)(I,{children:[(0,C.jsx)(y,{}),(0,C.jsx)(F,{children:t})]}),(p&&!h||!p)&&(0,C.jsx)(o,{height:k,dropCallback:U})]}),b?(0,C.jsxs)(R,{children:[h?(0,C.jsx)(i,{icon:`Crop`,design:`secondary`,position:`left`,size:`small`,onClick:()=>W(b),children:a}):(0,C.jsx)(L,{id:`avatar-upload`,text:r,buttonSize:`small`,buttonDesign:`secondary`,accept:`image/*`,inputCallback:U}),(0,C.jsx)(i,{icon:`Delete`,design:`secondary`,position:`left`,size:`small`,onClick:G,children:s})]}):(0,C.jsx)(L,{id:`avatar-upload`,text:n,buttonSize:`small`,accept:`image/*`,inputCallback:U}),z&&h?(0,C.jsx)(m,{imgUrl:A,onCrop:V,onClose:H,onError:_,canvasHeight:E,canvasWidth:D,cropHeight:T,cropWidth:w,aspectRatio:O,title:c,cancelBtnTxt:l,cropBtnTxt:f,isResizable:!0}):null]})};try{z.displayName=`AvatarUploader`,z.__docgenInfo={description:``,displayName:`AvatarUploader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,methods:[],props:{title:{defaultValue:{value:`Photograph`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},photoText:{defaultValue:{value:`Drop Photo`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`photoText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},buttonText:{defaultValue:{value:`Select File`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},buttonTextReplace:{defaultValue:{value:`Replace Photo`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`buttonTextReplace`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolTitle`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolCancelTxt:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolCancelTxt`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolConfirmTxt:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolConfirmTxt`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},uploaderCropText:{defaultValue:{value:`Crop Image`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`uploaderCropText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},deletePhotoText:{defaultValue:{value:`Remove`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`deletePhotoText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},currentImg:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`currentImg`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},hasCrop:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`hasCrop`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`boolean`}},onAvatarUpdate:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onAvatarUpdate`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`((imgFile: File) => void)`}},onError:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onError`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`((msg: string) => void)`}},onRemove:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onRemove`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var V,H,U,W,G,K,q;function J(){return(J=e((()=>{V=h(),B(),v(),H=n(),{action:U}=__STORYBOOK_MODULE_ACTIONS__,W=g.div``,G={title:`Form/File Management`,component:z,decorators:[]},K=()=>{let e=(0,V.text)(`Uploader Title`,`Photograph`),t=(0,V.text)(`Photo Text`,`Drop Photo`),n=(0,V.text)(`Button Text`,`Select File`),r=(0,V.text)(`Button Text Replace`,`Replace Photo`),i=(0,V.text)(`Uploader Crop Text`,`Crop Image`),a=(0,V.text)(`CropTool Title`,`Crop utility`),o=(0,V.text)(`CropTool Cancel Text`,`Cancel`),s=(0,V.text)(`CropTool Confirm Text`,`Crop and Save`),c=(0,V.text)(`Delete Photo Text`,`Remove`),l=(0,V.boolean)(`Current Image`,!1),u=(0,V.boolean)(`Has Crop`,!0),d=U(`Update Callback`),f=U(`On Error`),p=U(`On Remove`);return(0,H.jsx)(W,{children:(0,H.jsx)(z,{onAvatarUpdate:e=>{console.debug(`file`,e),d(e.name)},currentImg:l?`https://placekitten.com/g/200/300`:``,title:e,photoText:t,buttonText:n,buttonTextReplace:r,onError:e=>{console.debug(e),f(e)},onRemove:()=>{p(`The user has deleted Avatar image`)},uploaderCropText:i,hasCrop:u,cropToolTitle:a,cropToolCancelTxt:o,cropToolConfirmTxt:s,deletePhotoText:c})})},q=[`_AvatarUploader`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}}})))()}J();export{K as _AvatarUploader,q as __namedExportsOrder,G as default};