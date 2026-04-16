import{a as e,n as t}from"./chunk-BneVvdWh.js";import{B as n,Et as r,Ft as i,Lt as a,Pt as o,Rt as s,bt as c,t as l,vt as u,z as d}from"./iframe-BJPFMC_k.js";import{n as f,t as p}from"./placeholder-DnTErttm.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;t((()=>{m=e(s()),i(),h=o(),c(),p(),g=r(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v=a.div`
  padding: 100px;
`,y=a.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,b={title:`Tables/molecules`,component:u,decorators:[]},x=[{header:`Analysed Range`,sortable:!1,cellStyle:`normalImportance`},{header:`Job Created At`,sortable:!1,cellStyle:`normalImportance`},{header:`Run Time`,sortable:!1,cellStyle:`normalImportance`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`},{header:`Actions`,sortable:!1,cellStyle:`normalImportance`,alignment:`right`}],S=_(`Deleting..`),C=_(`Downloading video..`),w=_(`Downloading logs`),T=_(`Retry`),E=_(`Going to config page`),D=e=>{console.log(`Running deleting job log for device:  ${e}`),S()},O=e=>{console.log(`Retrying job for device:  ${e}`),T()},k=e=>{console.log(`Download video of device:  ${e}`),C()},A=e=>{console.log(`Dowload job log for device:  ${e}`),w()},j=e=>{console.log(`Config analysis job for device:  ${e}`),E()},M=e=>[{icon:`RetryJob`,onClick:()=>{O(e)}},{icon:`Delete`,onClick:()=>{D(e)}},{icon:`DownloadVideo`,onClick:()=>{k(e)}},{icon:`Download`,onClick:()=>{A(e)}},{icon:`ViewSettings`,onClick:()=>{j(e)}}],N=(e,t)=>[(0,g.jsx)(y,{children:`${e}   →`}),(0,g.jsxs)(y,{children:[t,(0,g.jsx)(`span`,{children:` JST`})]})],P=[{id:`row1`,header:{image:f,mediaUrl:f,mediaType:`img`},columns:[{customComponent:(0,g.jsx)(n,{contentArray:N(`2020/06/11 - 16:00`,`2020/06/11 - 21:30`)})},{customComponent:(0,g.jsx)(`div`,{style:{fontStyle:`italic`},children:`Just Now`})},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,g.jsx)(l,{buttonsConfig:M(`device1`)})}]},{id:`row2`,header:{image:f,mediaUrl:f,mediaType:`img`},columns:[{customComponent:(0,g.jsx)(n,{contentArray:N(`2020/06/11 - 13:00`,`2020/06/11 - 17:30`)})},{text:`2020/06/11 - 17:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,g.jsx)(l,{buttonsConfig:M(`device2`)})}]},{id:`row3`,header:{image:f,mediaUrl:f,mediaType:`img`},columns:[{customComponent:(0,g.jsx)(n,{contentArray:N(`2020/05/10 - 10:00`,`2020/05/10 - 12:30`)})},{text:`2020/05/10 - 12:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,g.jsx)(l,{buttonsConfig:M(`device2`)})}]}],F=()=>{let e=(0,h.boolean)(`Has Thumbnail`,!0),t=(0,h.boolean)(`Selectable Rows`,!0),n=(0,h.object)(`Column Configuration`,x),[r,i]=(0,m.useState)(P),a=(0,m.useCallback)(e=>{let t=[...r];t.forEach(t=>{t._checked=e}),i(t)},[r,i]);return(0,g.jsx)(v,{children:(0,g.jsx)(d,{children:(0,g.jsx)(u,{columnConfig:n,rows:r,selectable:t,selectCallback:(0,m.useCallback)((e,t)=>{let n=[...r],a=n.findIndex(e=>e.id===t);n[a]._checked=e,i(n)},[r,i]),toggleAllCallback:a,hasThumbnail:e})})})},F.__docgenInfo={description:``,methods:[],displayName:`ActionsTable`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I=[`ActionsTable`]}))();export{F as ActionsTable,I as __namedExportsOrder,b as default};