import{j as t}from"./emotion-unitless.esm-y1ruXoeO.js";import{c as M}from"./styled-components.browser.esm-D8a0uvnT.js";import{H as r,q as w}from"./index.modern-BCxVMgPd.js";import{d as e}from"./index-BtgrC99a.js";import{a as l}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-Dh2lLoQQ.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";const P={title:"Form/File Management",component:r,decorators:[]},S=M.div`
  margin: 20px
`,I=["MonitoringProfile","RetryJob"],j=["image/jpeg","image/png","text/csv"],o=()=>{const d=e.boolean("Show Custom Component",!1),p=e.text("Title","Select Files"),m=e.text("Select Files Text","Select Files"),C=e.text("Description","To begin, drop your CSV and Images files here to continue or click Select Files below."),g=e.text("Add More Files Text","Add More files"),F=e.object("File Icons",I),u=l("Input Callback"),x=e.text("Message","Cleared all selected files"),b=l("Action was clicked"),f=e.object("Allowed File Types",j),T=l("Begin Upload Button Click"),k=(s,a)=>{console.log("good Files",s),console.log("rejected",a),u({goodFiles:s,rejectedFiles:a})},h=()=>{b(x)};return t.jsx(S,{children:t.jsx(r,{selectFilesText:m,title:p,fileIcons:F,description:C,allowedFileTypes:f,addMoreFilesText:g,onChangeCallback:k,clearFilesCallback:h,beginUploadCallback:T,customComponent:d?t.jsx(w,{title:"CustomComponent Example",introductionText:"This is a page header component that was sent as an example of a custom component. Select multiple files"}):void 0})})};o.__docgenInfo={description:"",methods:[],displayName:"_AreaUploadManager"};var n,i,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const showCustomComponent = boolean('Show Custom Component', false);
  const title = text('Title', 'Select Files');
  const selectFilesText = text('Select Files Text', 'Select Files');
  const description = text('Description', 'To begin, drop your CSV and Images files here to continue or click Select Files below.');
  const addMoreFilesText = text('Add More Files Text', 'Add More files');
  const fileIcons = object('File Icons', defaultIcons);
  const showValue = action('Input Callback');
  const clearedFilesText = text('Message', 'Cleared all selected files');
  const onClearFilesBtnClick = action('Action was clicked');
  const allowedFileTypes = object('Allowed File Types', fileTypes);
  const beginUploadMsg = action('Begin Upload Button Click');
  const inputCallback = (goodFiles: FileList, rejectedFiles: FileList) => {
    console.log('good Files', goodFiles);
    console.log('rejected', rejectedFiles);
    showValue({
      goodFiles,
      rejectedFiles
    });
  };
  const clearFilesInputCallback = () => {
    onClearFilesBtnClick(clearedFilesText);
  };
  return <Container>
      <AreaUploadManager {...{
      selectFilesText,
      title,
      fileIcons,
      description,
      allowedFileTypes,
      addMoreFilesText
    }} onChangeCallback={inputCallback} clearFilesCallback={clearFilesInputCallback} beginUploadCallback={beginUploadMsg} customComponent={showCustomComponent ? <PageHeader title="CustomComponent Example" introductionText="This is a page header component that was sent as an example of a custom component. Select multiple files" /> : undefined} />
    </Container>;
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const D=["_AreaUploadManager"];export{o as _AreaUploadManager,D as __namedExportsOrder,P as default};
