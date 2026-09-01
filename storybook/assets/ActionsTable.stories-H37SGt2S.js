import{t as e}from"./react-BZJXY1be.js";import{Ft as t,G as n,Lt as r,Rt as i,St as a,W as o,Wt as s,n as c,wt as l}from"./iframe-C0XmBt3X.js";import{n as u,t as d}from"./placeholder-Cf6rKdzI.js";import{n as f}from"./rolldown-runtime-DkW27tQK.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=f((()=>{p=s(),m=e(),l(),i(),d(),h=t(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=r.div`
  padding: 100px;
`,v=r.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,y={title:`Tables/molecules`,component:a,decorators:[]},b=[{header:`Analysed Range`,sortable:!1,cellStyle:`normalImportance`},{header:`Job Created At`,sortable:!1,cellStyle:`normalImportance`},{header:`Run Time`,sortable:!1,cellStyle:`normalImportance`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`},{header:`Actions`,sortable:!1,cellStyle:`normalImportance`,alignment:`right`}],x=g(`Deleting..`),S=g(`Downloading video..`),C=g(`Downloading logs`),w=g(`Retry`),T=g(`Going to config page`),E=e=>{console.debug(`Running deleting job log for device:  ${e}`),x()},D=e=>{console.debug(`Retrying job for device:  ${e}`),w()},O=e=>{console.debug(`Download video of device:  ${e}`),S()},k=e=>{console.debug(`Dowload job log for device:  ${e}`),C()},A=e=>{console.debug(`Config analysis job for device:  ${e}`),T()},j=e=>[{icon:`RetryJob`,onClick:()=>{D(e)}},{icon:`Delete`,onClick:()=>{E(e)}},{icon:`DownloadVideo`,onClick:()=>{O(e)}},{icon:`Download`,onClick:()=>{k(e)}},{icon:`ViewSettings`,onClick:()=>{A(e)}}],M=(e,t)=>[(0,h.jsx)(v,{children:`${e}   →`},`start`),(0,h.jsxs)(v,{children:[t,(0,h.jsx)(`span`,{children:` JST`})]},`end`)],N=[{id:`row1`,header:{image:u,mediaUrl:u,mediaType:`img`},columns:[{customComponent:(0,h.jsx)(n,{contentArray:M(`2020/06/11 - 16:00`,`2020/06/11 - 21:30`)})},{customComponent:(0,h.jsx)(`div`,{style:{fontStyle:`italic`},children:`Just Now`})},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(c,{buttonsConfig:j(`device1`)})}]},{id:`row2`,header:{image:u,mediaUrl:u,mediaType:`img`},columns:[{customComponent:(0,h.jsx)(n,{contentArray:M(`2020/06/11 - 13:00`,`2020/06/11 - 17:30`)})},{text:`2020/06/11 - 17:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(c,{buttonsConfig:j(`device2`)})}]},{id:`row3`,header:{image:u,mediaUrl:u,mediaType:`img`},columns:[{customComponent:(0,h.jsx)(n,{contentArray:M(`2020/05/10 - 10:00`,`2020/05/10 - 12:30`)})},{text:`2020/05/10 - 12:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(c,{buttonsConfig:j(`device2`)})}]}],P=()=>{let e=(0,p.boolean)(`Has Thumbnail`,!0),t=(0,p.boolean)(`Selectable Rows`,!0),n=(0,p.object)(`Column Configuration`,b),[r,i]=(0,m.useState)(N),s=(0,m.useCallback)(e=>{let t=[...r];t.forEach(t=>{t._checked=e}),i(t)},[r]),c=(0,m.useCallback)((e,t)=>{let n=[...r],a=n.findIndex(e=>e.id===t);n[a]._checked=e,i(n)},[r]);return(0,h.jsx)(_,{children:(0,h.jsx)(o,{children:(0,h.jsx)(a,{columnConfig:n,rows:r,selectable:t,selectCallback:c,toggleAllCallback:s,hasThumbnail:e})})})},P.__docgenInfo={description:``,methods:[],displayName:`ActionsTable`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const hasThumbnail = boolean('Has Thumbnail', true);
  const selectable = boolean('Selectable Rows', true);
  const columnConfig = object('Column Configuration', columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows]);
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows]);

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
}`,...P.parameters?.docs?.source}}},F=[`ActionsTable`]})))()}I();export{P as ActionsTable,F as __namedExportsOrder,y as default};