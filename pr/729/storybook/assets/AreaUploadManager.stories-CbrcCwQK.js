import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,r as i,t as a}from"./Icon-BaYDX9Su.js";import{n as o,t as s}from"./Button-CxOl84dr.js";import{n as c,t as l}from"./DropArea-DBsR6m6E.js";import{n as u,t as d}from"./InputFileButton-DE9Eb0fb.js";import{n as f,t as p}from"./PageHeader-CPSv-dtM.js";import{_ as m,a as h,o as g}from"./iframe-PEYaYO03.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{_=t(),g(),i(),v=n(),y=h.div`
  display: flex;
  align-items: center;
  margin-bottom: 27px;
  ${r} {
    display: flex;
    align-items: center;
  }
`,b=h(a)``,x=h.div`
  margin: 0 30px;
  ${r}{
    transform: rotate(45deg);
    [stroke]{
      stroke: var(--primary-7);
    }
  }
`,S=({icons:e,color:t=`dimmed`,size:n=72,weight:r=`light`,...i})=>(0,v.jsx)(y,{...i,children:e.map((e,i)=>(0,v.jsxs)(_.Fragment,{children:[i!==0&&(0,v.jsx)(x,{children:(0,v.jsx)(b,{icon:`CloseCompact`,size:22})}),(0,v.jsx)(a,{icon:e,color:t,size:n,weight:r})]},`type-upload-${e}}`))});try{S.displayName=`BigIconsSummary`,S.__docgenInfo={description:``,displayName:`BigIconsSummary`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,methods:[],props:{icons:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`}],description:``,name:`icons`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`},required:!0,tags:{},type:{name:`string[]`}},color:{defaultValue:{value:`dimmed`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`}],description:``,name:`color`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`},required:!1,tags:{},type:{name:`string`}},size:{defaultValue:{value:`72`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`}],description:``,name:`size`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`},required:!1,tags:{},type:{name:`number`}},weight:{defaultValue:{value:`light`},declarations:[{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`}],description:``,name:`weight`,parent:{fileName:`packages/ui-lib/src/Misc/atoms/BigIconsSummary.tsx`,name:`IBigIconsSummary`},required:!1,tags:{},type:{name:`enum`,raw:`"light" | "strong" | "regular" | "heavy"`,value:[{value:`"light"`},{value:`"strong"`},{value:`"regular"`},{value:`"heavy"`}]}}},tags:{}}}catch{}})))()}var w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{w=t(),g(),C(),o(),c(),u(),T=n(),E=h.div`
  font-family: ${({theme:e})=>e.fontFamily.ui};
`,D=h(l)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`,O=h.div`
  z-index: 99;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`,k=h.div`
  padding: ${({$hasFiles:e})=>e?`26px 0 20px 0`:`65px 0 42px 0`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: var(--grey-4);
  position: relative;
`,A=h.div`
  color: var(--grey-11);
  font-size: 20px;
`,j=h.div`
  font-size: 14px;
  line-height: 2.14;
  text-align: center;
  color: var(--grey-10);
  margin-top: 10px;
  max-width: 386px;
`,M=(e,t,n)=>{let r=new DataTransfer,i=new DataTransfer;for(let t=0;t<e.length;t++)n===void 0||n.length===0||n.includes(e[t].type)?r.items.add(e[t]):i.items.add(e[t]);if(t===null)return{goodFiles:r.files,rejectedFiles:i.files};let a=new DataTransfer,o=new Set;for(let e=0;e<t.length;e++){a.items.add(t[e]);let n=t[e].name;o.add(n)}for(let t=0;t<r.files.length;t++){let s=o.has(r.files[t].name),c=n===void 0||n.length===0||n.includes(e[t].type);s||!c?i.items.add(e[t]):a.items.add(r.files[t])}return{goodFiles:a.files,rejectedFiles:i.files}},N=({title:e=`Select Files`,description:t,fileIcons:n,selectFilesText:r=`Select Files`,addMoreFilesText:i=`Add More Files`,clearFilesText:a=`Clear Files`,beginUploadText:o=`Begin Upload`,allowedFileTypes:c,customComponent:l,onChangeCallback:u=()=>{},clearFilesCallback:f=()=>{},beginUploadCallback:p=()=>{}})=>{let[m,h]=(0,w.useState)(null),g=(0,w.useCallback)(e=>{if(e===null)return;let{goodFiles:t,rejectedFiles:n}=M(e,m,c);h(t),u(t,n)},[m,c,u]),_=(0,w.useCallback)(()=>{h(null),f()},[f]);return(0,T.jsx)(E,{children:(0,T.jsxs)(k,{$hasFiles:m!==null,children:[(0,T.jsx)(D,{dropCallback:g}),l||(0,T.jsxs)(w.Fragment,{children:[n&&(0,T.jsx)(S,{icons:n}),(0,T.jsx)(A,{children:e}),m===null&&(0,T.jsx)(j,{children:t})]}),(0,T.jsxs)(O,{children:[(0,T.jsx)(d,{buttonSize:`small`,text:m===null?r:i,inputCallback:g,multiple:!0,buttonDesign:m===null?`primary`:`secondary`,accept:c?.join(`, `)}),m!==null&&(0,T.jsxs)(w.Fragment,{children:[(0,T.jsx)(s,{size:`small`,onClick:p,design:`primary`,children:o}),(0,T.jsx)(s,{size:`small`,onClick:_,design:`secondary`,children:a})]})]})]})})};try{N.displayName=`AreaUploadManager`,N.__docgenInfo={description:``,displayName:`AreaUploadManager`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,methods:[],props:{title:{defaultValue:{value:`Select Files`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`title`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`description`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},fileIcons:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`fileIcons`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string[]`}},selectFilesText:{defaultValue:{value:`Select Files`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`selectFilesText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},addMoreFilesText:{defaultValue:{value:`Add More Files`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`addMoreFilesText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},clearFilesText:{defaultValue:{value:`Clear Files`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`clearFilesText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},beginUploadText:{defaultValue:{value:`Begin Upload`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`beginUploadText`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string`}},allowedFileTypes:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`allowedFileTypes`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`string[]`}},customComponent:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`customComponent`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},onChangeCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`onChangeCallback`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`((goodFiles: FileList, rejectedFiles: FileList) => void)`}},clearFilesCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`clearFilesCallback`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`(() => void)`}},beginUploadCallback:{defaultValue:{value:`() => {}`},declarations:[{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`}],description:``,name:`beginUploadCallback`,parent:{fileName:`packages/ui-lib/src/Form/organisms/AreaUploadManager.tsx`,name:`IAreaUploaderManager`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{}}}catch{}})))()}var F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{F=m(),P(),f(),g(),I=n(),{action:L}=__STORYBOOK_MODULE_ACTIONS__,R={title:`Form/File Management`,component:N,decorators:[]},z=h.div`
  margin: 20px
`,B=[`MonitoringProfile`,`RetryJob`],V=[`image/jpeg`,`image/png`,`text/csv`],H=()=>{let e=(0,F.boolean)(`Show Custom Component`,!1),t=(0,F.text)(`Title`,`Select Files`),n=(0,F.text)(`Select Files Text`,`Select Files`),r=(0,F.text)(`Description`,`To begin, drop your CSV and Images files here to continue or click Select Files below.`),i=(0,F.text)(`Add More Files Text`,`Add More files`),a=(0,F.object)(`File Icons`,B),o=L(`Input Callback`),s=(0,F.text)(`Message`,`Cleared all selected files`),c=L(`Action was clicked`),l=(0,F.object)(`Allowed File Types`,V),u=L(`Begin Upload Button Click`);return(0,I.jsx)(z,{children:(0,I.jsx)(N,{selectFilesText:n,title:t,fileIcons:a,description:r,allowedFileTypes:l,addMoreFilesText:i,onChangeCallback:(e,t)=>{console.debug(`good Files`,e),console.debug(`rejected`,t),o({goodFiles:e,rejectedFiles:t})},clearFilesCallback:()=>{c(s)},beginUploadCallback:u,customComponent:e?(0,I.jsx)(p,{title:`CustomComponent Example`,introductionText:`This is a page header component that was sent as an example of a custom component. Select multiple files`}):void 0})})},U=[`_AreaUploadManager`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}}})))()}W();export{H as _AreaUploadManager,U as __namedExportsOrder,R as default};