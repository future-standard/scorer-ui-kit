import{_ as r,d as e,j as t,P as h,a as w}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Form/File Management",component:r,decorators:[]},S=w.div`
  margin: 20px
`,I=["MonitoringProfile","RetryJob"],A=["image/jpeg","image/png","text/csv"],o=()=>{const d=e.boolean("Show Custom Component",!1),p=e.text("Title","Select Files"),m=e.text("Select Files Text","Select Files"),C=e.text("Description","To begin, drop your CSV and Images files here to continue or click Select Files below."),g=e.text("Add More Files Text","Add More files"),F=e.object("File Icons",I),u=l("Input Callback"),x=e.text("Message","Cleared all selected files"),b=l("Action was clicked"),T=e.object("Allowed File Types",A),f=l("Begin Upload Button Click"),k=(s,n)=>{console.log("good Files",s),console.log("rejected",n),u({goodFiles:s,rejectedFiles:n})},M=()=>{b(x)};return t.jsx(S,{children:t.jsx(r,{selectFilesText:m,title:p,fileIcons:F,description:C,allowedFileTypes:T,addMoreFilesText:g,onChangeCallback:k,clearFilesCallback:M,beginUploadCallback:f,customComponent:d?t.jsx(h,{title:"CustomComponent Example",introductionText:"This is a page header component that was sent as an example of a custom component. Select multiple files"}):void 0})})};o.__docgenInfo={description:"",methods:[],displayName:"_AreaUploadManager"};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["_AreaUploadManager"];export{o as _AreaUploadManager,y as __namedExportsOrder,_ as default};
