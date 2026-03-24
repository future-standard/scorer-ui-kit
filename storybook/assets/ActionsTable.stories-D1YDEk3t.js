import{j as e}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as m}from"./index-Dh2lLoQQ.js";import{c as R}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as g}from"./index-BtgrC99a.js";import{a}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{y,c as D,at as u,au as p}from"./index.modern-BCxVMgPd.js";import{p as t}from"./placeholder-BcVwUhHh.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";import"./index-Dz_aA26r.js";const A=R.div`
  padding: 100px;
`,C=R.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,Y={title:"Tables/molecules",component:y,decorators:[]},I=[{header:"Analysed Range",sortable:!1,cellStyle:"normalImportance"},{header:"Job Created At",sortable:!1,cellStyle:"normalImportance"},{header:"Run Time",sortable:!1,cellStyle:"normalImportance"},{header:"Status",sortable:!1,cellStyle:"normalImportance"},{header:"Actions",sortable:!1,cellStyle:"normalImportance",alignment:"right"}],_=a("Deleting.."),$=a("Downloading video.."),E=a("Downloading logs"),J=a("Retry"),M=a("Going to config page"),P=o=>{console.log(`Running deleting job log for device:  ${o}`),_()},V=o=>{console.log(`Retrying job for device:  ${o}`),J()},U=o=>{console.log(`Download video of device:  ${o}`),$()},B=o=>{console.log(`Dowload job log for device:  ${o}`),E()},H=o=>{console.log(`Config analysis job for device:  ${o}`),M()},w=o=>[{icon:"RetryJob",onClick:()=>{V(o)}},{icon:"Delete",onClick:()=>{P(o)}},{icon:"DownloadVideo",onClick:()=>{U(o)}},{icon:"Download",onClick:()=>{B(o)}},{icon:"ViewSettings",onClick:()=>{H(o)}}],b=(o,i)=>[e.jsx(C,{children:`${o}   →`}),e.jsxs(C,{children:[i,e.jsx("span",{children:" JST"})]})],L=[{id:"row1",header:{image:t,mediaUrl:t,mediaType:"img"},columns:[{customComponent:e.jsx(u,{contentArray:b("2020/06/11 - 16:00","2020/06/11 - 21:30")})},{customComponent:e.jsx("div",{style:{fontStyle:"italic"},children:"Just Now"})},{text:"00:00:12"},{text:"Complete"},{customComponent:e.jsx(p,{buttonsConfig:w("device1")})}]},{id:"row2",header:{image:t,mediaUrl:t,mediaType:"img"},columns:[{customComponent:e.jsx(u,{contentArray:b("2020/06/11 - 13:00","2020/06/11 - 17:30")})},{text:"2020/06/11 - 17:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:e.jsx(p,{buttonsConfig:w("device2")})}]},{id:"row3",header:{image:t,mediaUrl:t,mediaType:"img"},columns:[{customComponent:e.jsx(u,{contentArray:b("2020/05/10 - 10:00","2020/05/10 - 12:30")})},{text:"2020/05/10 - 12:30"},{text:"00:00:12"},{text:"Complete"},{customComponent:e.jsx(p,{buttonsConfig:w("device2")})}]}],l=()=>{const o=g.boolean("Has Thumbnail",!0),i=g.boolean("Selectable Rows",!0),T=g.object("Column Configuration",I),[n,c]=m.useState(L),j=m.useCallback(d=>{const r=[...n];r.forEach(s=>{s._checked=d}),c(r)},[n,c]),k=m.useCallback((d,r)=>{const s=[...n],v=s.findIndex(S=>S.id===r);s[v]._checked=d,c(s)},[n,c]);return e.jsx(A,{children:e.jsx(D,{children:e.jsx(y,{columnConfig:T,rows:n,selectable:i,selectCallback:k,toggleAllCallback:j,hasThumbnail:o})})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionsTable"};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Z=["ActionsTable"];export{l as ActionsTable,Z as __namedExportsOrder,Y as default};
