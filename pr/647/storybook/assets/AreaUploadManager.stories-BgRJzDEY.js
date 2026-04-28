import{n as e}from"./chunk-BneVvdWh.js";import{Lt as t,Ot as n,V as r,i,jt as a,kt as o,vt as s}from"./iframe-XcZ2CoMj.js";var c,l,u,d,f,p,m,h,g;e((()=>{c=t(),s(),o(),l=n(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Form/File Management`,component:i,decorators:[]},f=a.div`
  margin: 20px
`,p=[`MonitoringProfile`,`RetryJob`],m=[`image/jpeg`,`image/png`,`text/csv`],h=()=>{let e=(0,c.boolean)(`Show Custom Component`,!1),t=(0,c.text)(`Title`,`Select Files`),n=(0,c.text)(`Select Files Text`,`Select Files`),a=(0,c.text)(`Description`,`To begin, drop your CSV and Images files here to continue or click Select Files below.`),o=(0,c.text)(`Add More Files Text`,`Add More files`),s=(0,c.object)(`File Icons`,p),d=u(`Input Callback`),h=(0,c.text)(`Message`,`Cleared all selected files`),g=u(`Action was clicked`),_=(0,c.object)(`Allowed File Types`,m),v=u(`Begin Upload Button Click`);return(0,l.jsx)(f,{children:(0,l.jsx)(i,{selectFilesText:n,title:t,fileIcons:s,description:a,allowedFileTypes:_,addMoreFilesText:o,onChangeCallback:(e,t)=>{console.debug(`good Files`,e),console.debug(`rejected`,t),d({goodFiles:e,rejectedFiles:t})},clearFilesCallback:()=>{g(h)},beginUploadCallback:v,customComponent:e?(0,l.jsx)(r,{title:`CustomComponent Example`,introductionText:`This is a page header component that was sent as an example of a custom component. Select multiple files`}):void 0})})},h.__docgenInfo={description:``,methods:[],displayName:`_AreaUploadManager`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
    console.debug('good Files', goodFiles);
    console.debug('rejected', rejectedFiles);
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
    }} onChangeCallback={inputCallback} clearFilesCallback={clearFilesInputCallback} beginUploadCallback={beginUploadMsg} customComponent={showCustomComponent ? <PageHeader title='CustomComponent Example' introductionText='This is a page header component that was sent as an example of a custom component. Select multiple files' /> : undefined} />
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_AreaUploadManager`]}))();export{h as _AreaUploadManager,g as __namedExportsOrder,d as default};