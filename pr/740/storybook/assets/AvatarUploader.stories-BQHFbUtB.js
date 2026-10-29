import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ButtonWithIcon-DEv36JL4.js";import{n as a,t as o}from"./DropArea-IoZkbM6O.js";import{n as s,t as c}from"./InputFileButton-ByVLLgoa.js";import{r as l,t as u}from"./Label-mM6ve_8N.js";import{d,o as f}from"./helpers-D3bl-wl9.js";import{n as p,t as m}from"./CropTool-BfoFpWqB.js";import{a as h,i as g,o as _}from"./iframe-DkCQ6b6C.js";function v(e){return(0,y.jsx)(`svg`,{width:48,height:48,"aria-hidden":`true`,...e,viewBox:`0 0 48 48`,children:(0,y.jsx)(`g`,{fill:`none`,fillRule:`evenodd`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,y.jsx)(`g`,{stroke:`#C1C1C1`,strokeWidth:`1.5`,children:(0,y.jsx)(`g`,{children:(0,y.jsx)(`g`,{children:(0,y.jsxs)(`g`,{transform:`translate(-789 -294) translate(772 277) translate(10.25 10.25) translate(7.688 7.688)`,children:[(0,y.jsx)(`rect`,{width:`37.477`,height:`43.242`,x:`4.324`,y:`1.441`,rx:`1.5`}),(0,y.jsx)(`circle`,{cx:`23.063`,cy:`17.456`,r:`7.899`}),(0,y.jsx)(`path`,{d:`M36.035 36.568c-2.537-4.814-7.53-7.828-12.972-7.828-5.442 0-10.436 3.014-12.973 7.828`})]})})})})})})}var y;function b(){return(b=e((()=>{y=n();try{v.displayName=`SvgAvatarPlaceholder`,v.__docgenInfo={description:``,displayName:`SvgAvatarPlaceholder`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/svg/AvatarPlaceholder.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{x=t(),_(),f(),b(),r(),a(),s(),l(),p(),S=n(),C=500,w=475,T=490,E=460,D=Math.round(w/C*100)/100,O=`150px`,k=`142px`,A=h.div`
  position: relative;
  width: ${k};
  ${({theme:e})=>g`
    font-family: ${e.fontFamily.ui};
  `}
  button {
    width: 100%;
  }
`,j=h.div`
  position: relative;
  margin-bottom: 17px;
  height: ${O};
  width: ${k};
`,M=g`
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
`,N=h.img`
  ${M}
  object-fit: cover;
`,P=h.div`
  color: var(--grey-10);
  font-size: 14px;
`,F=h.div`
  ${M}
  padding-top: 15px;
  ${P} {
    margin-top: 18px;
  }
`,I=h(c)`
  width: 100%;
`,L=h.div`
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 10px;
  }

`,R=({title:e=`Photograph`,photoText:t=`Drop Photo`,buttonText:n=`Select File`,buttonTextReplace:r=`Replace Photo`,uploaderCropText:a=`Crop Image`,deletePhotoText:s=`Remove`,cropToolTitle:c,cropToolCancelTxt:l,cropToolConfirmTxt:f,currentImg:p,hasCrop:h=!0,onAvatarUpdate:g=()=>{},onError:_=()=>{},onRemove:y=()=>{}})=>{let[b,k]=(0,x.useState)(p),[M,R]=(0,x.useState)(``),[z,B]=(0,x.useState)(!1),V=(0,x.useCallback)(async(e,t)=>{k(e),g(await fetch(e).then(e=>e.blob()).then(e=>new File([e],`newAvatar`,{type:t}))),B(!1)},[g]),H=(0,x.useCallback)(()=>{B(!1),R(``),URL.revokeObjectURL(M)},[M]),U=(0,x.useCallback)(e=>{if(e.length===1){if(!d(e[0])){_(`Please upload only jpeg and png file`);return}let t=URL.createObjectURL(e[0]);h?(R(t),B(!0)):(g(e[0]),k(t))}else _(`Drop only one file`)},[h,_,g]),W=(0,x.useCallback)(e=>{R(e),B(!0)},[]);(0,x.useEffect)(()=>{k(p)},[p]);let G=(0,x.useCallback)(()=>{k(``),y()},[y]);return(0,S.jsxs)(A,{children:[(0,S.jsx)(u,{labelText:e,htmlFor:`avatar-upload`}),(0,S.jsxs)(j,{children:[b?(0,S.jsx)(N,{src:b,alt:`avatar image`,crossOrigin:`anonymous`}):(0,S.jsxs)(F,{children:[(0,S.jsx)(v,{}),(0,S.jsx)(P,{children:t})]}),(p&&!h||!p)&&(0,S.jsx)(o,{height:O,dropCallback:U})]}),b?(0,S.jsxs)(L,{children:[h?(0,S.jsx)(i,{icon:`Crop`,design:`secondary`,position:`left`,size:`small`,onClick:()=>W(b),children:a}):(0,S.jsx)(I,{id:`avatar-upload`,text:r,buttonSize:`small`,buttonDesign:`secondary`,accept:`image/*`,inputCallback:U}),(0,S.jsx)(i,{icon:`Delete`,design:`secondary`,position:`left`,size:`small`,onClick:G,children:s})]}):(0,S.jsx)(I,{id:`avatar-upload`,text:n,buttonSize:`small`,accept:`image/*`,inputCallback:U}),z&&h?(0,S.jsx)(m,{imgUrl:M,onCrop:V,onClose:H,onError:_,canvasHeight:T,canvasWidth:E,cropHeight:w,cropWidth:C,aspectRatio:D,title:c,cancelBtnTxt:l,cropBtnTxt:f,isResizable:!0}):null]})};try{R.displayName=`AvatarUploader`,R.__docgenInfo={description:``,displayName:`AvatarUploader`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,methods:[],props:{title:{defaultValue:{value:`Photograph`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},photoText:{defaultValue:{value:`Drop Photo`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`photoText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},buttonText:{defaultValue:{value:`Select File`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`buttonText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},buttonTextReplace:{defaultValue:{value:`Replace Photo`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`buttonTextReplace`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolTitle:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolTitle`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolCancelTxt:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolCancelTxt`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},cropToolConfirmTxt:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`cropToolConfirmTxt`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},uploaderCropText:{defaultValue:{value:`Crop Image`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`uploaderCropText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},deletePhotoText:{defaultValue:{value:`Remove`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`deletePhotoText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},currentImg:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`currentImg`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`string`}},hasCrop:{defaultValue:{value:`true`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`hasCrop`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`boolean`}},onAvatarUpdate:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onAvatarUpdate`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`((imgFile: File) => void)`}},onError:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onError`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`((msg: string) => void)`}},onRemove:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`}],description:``,name:`onRemove`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AvatarUploader.tsx`,name:`IAvatar`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var B,V,H,U;function W(){return(W=e((()=>{z(),{fn:B}=__STORYBOOK_MODULE_TEST__,V={title:`Form/FileManagement/AvatarUploader`,component:R,tags:[`autodocs`],args:{title:`Photograph`,photoText:`Drop Photo`,buttonText:`Select File`,buttonTextReplace:`Replace Photo`,uploaderCropText:`Crop Image`,cropToolTitle:`Crop utility`,cropToolCancelTxt:`Cancel`,cropToolConfirmTxt:`Crop and Save`,deletePhotoText:`Remove`,currentImg:``,hasCrop:!0,onAvatarUpdate:B(),onError:B(),onRemove:B()}},H={},U=[`Default`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source}}}})))()}W();export{H as Default,U as __namedExportsOrder,V as default};