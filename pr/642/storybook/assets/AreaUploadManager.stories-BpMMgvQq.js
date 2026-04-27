import{n as e}from"./chunk-BneVvdWh.js";import{Et as t,Ft as n,Lt as r,Pt as i,Rt as a,V as o,i as s,vt as c}from"./iframe-BHdSP_o9.js";var l,u,d,f,p,m,h,g,_;e((()=>{a(),n(),c(),l=i(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Form/File Management`,component:s,decorators:[]},p=r.div`
  margin: 20px
`,m=[`MonitoringProfile`,`RetryJob`],h=[`image/jpeg`,`image/png`,`text/csv`],g=()=>{let e=(0,l.boolean)(`Show Custom Component`,!1),t=(0,l.text)(`Title`,`Select Files`),n=(0,l.text)(`Select Files Text`,`Select Files`),r=(0,l.text)(`Description`,`To begin, drop your CSV and Images files here to continue or click Select Files below.`),i=(0,l.text)(`Add More Files Text`,`Add More files`),a=(0,l.object)(`File Icons`,m),c=d(`Input Callback`),f=(0,l.text)(`Message`,`Cleared all selected files`),g=d(`Action was clicked`),_=(0,l.object)(`Allowed File Types`,h),v=d(`Begin Upload Button Click`);return(0,u.jsx)(p,{children:(0,u.jsx)(s,{selectFilesText:n,title:t,fileIcons:a,description:r,allowedFileTypes:_,addMoreFilesText:i,onChangeCallback:(e,t)=>{console.log(`good Files`,e),console.log(`rejected`,t),c({goodFiles:e,rejectedFiles:t})},clearFilesCallback:()=>{g(f)},beginUploadCallback:v,customComponent:e?(0,u.jsx)(o,{title:`CustomComponent Example`,introductionText:`This is a page header component that was sent as an example of a custom component. Select multiple files`}):void 0})})},g.__docgenInfo={description:``,methods:[],displayName:`_AreaUploadManager`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_=[`_AreaUploadManager`]}))();export{g as _AreaUploadManager,_ as __namedExportsOrder,f as default};