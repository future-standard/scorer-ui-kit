import{f as R,d as m,r as g,j as o,n as D,au as u,av as w,a as y}from"./iframe-B-FWgcWl.js";import{p as n}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,A=y.div`
  padding: 100px;
`,p=y.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,G={title:"Tables/molecules",component:R,decorators:[]},_=[{header:"Analysed Range",sortable:!1,cellStyle:"normalImportance"},{header:"Job Created At",sortable:!1,cellStyle:"normalImportance"},{header:"Run Time",sortable:!1,cellStyle:"normalImportance"},{header:"Status",sortable:!1,cellStyle:"normalImportance"},{header:"Actions",sortable:!1,cellStyle:"normalImportance",alignment:"right"}],I=a("Deleting.."),E=a("Downloading video.."),$=a("Downloading logs"),O=a("Retry"),J=a("Going to config page"),M=e=>{console.log(`Running deleting job log for device:  ${e}`),I()},P=e=>{console.log(`Retrying job for device:  ${e}`),O()},U=e=>{console.log(`Download video of device:  ${e}`),E()},V=e=>{console.log(`Dowload job log for device:  ${e}`),$()},B=e=>{console.log(`Config analysis job for device:  ${e}`),J()},b=e=>[{icon:"RetryJob",onClick:()=>{P(e)}},{icon:"Delete",onClick:()=>{M(e)}},{icon:"DownloadVideo",onClick:()=>{U(e)}},{icon:"Download",onClick:()=>{V(e)}},{icon:"ViewSettings",onClick:()=>{B(e)}}],C=(e,r)=>[o.jsx(p,{children:`${e}   →`}),o.jsxs(p,{children:[r,o.jsx("span",{children:" JST"})]})],L=[{id:"row1",header:{image:n,mediaUrl:n,mediaType:"img"},columns:[{customComponent:o.jsx(u,{contentArray:C("2020/06/11 - 16:00","2020/06/11 - 21:30")})},{customComponent:o.jsx("div",{style:{fontStyle:"italic"},children:"Just Now"})},{text:"00:00:12"},{text:"Complete"},{customComponent:o.jsx(w,{buttonsConfig:b("device1")})}]},{id:"row2",header:{image:n,mediaUrl:n,mediaType:"img"},columns:[{customComponent:o.jsx(u,{contentArray:C("2020/06/11 - 13:00","2020/06/11 - 17:30")})},{text:"2020/06/11 - 17:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:o.jsx(w,{buttonsConfig:b("device2")})}]},{id:"row3",header:{image:n,mediaUrl:n,mediaType:"img"},columns:[{customComponent:o.jsx(u,{contentArray:C("2020/05/10 - 10:00","2020/05/10 - 12:30")})},{text:"2020/05/10 - 12:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:o.jsx(w,{buttonsConfig:b("device2")})}]}],l=()=>{const e=m.boolean("Has Thumbnail",!0),r=m.boolean("Selectable Rows",!0),T=m.object("Column Configuration",_),[t,c]=g.useState(L),j=g.useCallback(d=>{const i=[...t];i.forEach(s=>{s._checked=d}),c(i)},[t,c]),k=g.useCallback((d,i)=>{const s=[...t],S=s.findIndex(v=>v.id===i);s[S]._checked=d,c(s)},[t,c]);return o.jsx(A,{children:o.jsx(D,{children:o.jsx(R,{columnConfig:T,rows:t,selectable:r,selectCallback:k,toggleAllCallback:j,hasThumbnail:e})})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionsTable"};var h,f,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const hasThumbnail = boolean("Has Thumbnail", true);
  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows, setRows]);
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows, setRows]);

  // Provider should be at main Index level, it's here just for the example
  return <Container>
      <ModalProvider>
        <TypeTableCustom {...{
        columnConfig,
        rows,
        selectable,
        selectCallback,
        toggleAllCallback,
        hasThumbnail
      }} />
      </ModalProvider>
    </Container>;
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const K=["ActionsTable"];export{l as ActionsTable,K as __namedExportsOrder,G as default};
