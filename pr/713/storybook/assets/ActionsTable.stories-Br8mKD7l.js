import{t as e}from"./react-BZJXY1be.js";import{G as t,Gt as n,It as r,Rt as i,St as a,W as o,n as s,wt as c,zt as l}from"./iframe-Ccyt1njS.js";import{n as u,t as d}from"./placeholder-Cf6rKdzI.js";import{n as f}from"./rolldown-runtime-DkW27tQK.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=f((()=>{p=n(),m=e(),c(),l(),d(),h=r(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=i.div`
  padding: 100px;
  ${({$width:e})=>e>0&&`width: ${e}px;`}
`,v=i.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,y={title:`Tables/molecules`,component:a,decorators:[]},b=[{header:`Analysed Range`,sortable:!1,cellStyle:`normalImportance`,minWidth:200},{header:`Job Created At`,sortable:!1,cellStyle:`normalImportance`,minWidth:160},{header:`Run Time`,sortable:!1,cellStyle:`normalImportance`,width:120},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,minWidth:120},{header:`Actions`,sortable:!1,cellStyle:`normalImportance`,alignment:`right`}],x=g(`Deleting..`),S=g(`Downloading video..`),C=g(`Downloading logs`),w=g(`Retry`),T=g(`Going to config page`),E=e=>{console.debug(`Running deleting job log for device:  ${e}`),x()},D=e=>{console.debug(`Retrying job for device:  ${e}`),w()},O=e=>{console.debug(`Download video of device:  ${e}`),S()},k=e=>{console.debug(`Dowload job log for device:  ${e}`),C()},A=e=>{console.debug(`Config analysis job for device:  ${e}`),T()},j=e=>[{icon:`RetryJob`,onClick:()=>{D(e)}},{icon:`Delete`,onClick:()=>{E(e)}},{icon:`DownloadVideo`,onClick:()=>{O(e)}},{icon:`Download`,onClick:()=>{k(e)}},{icon:`ViewSettings`,onClick:()=>{A(e)}}],M=(e,t)=>[(0,h.jsx)(v,{children:`${e}   →`},`start`),(0,h.jsxs)(v,{children:[t,(0,h.jsx)(`span`,{children:` JST`})]},`end`)],N=[{id:`row1`,header:{image:u,mediaUrl:u,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,h.jsx)(t,{contentArray:M(`2020/06/11 - 16:00`,`2020/06/11 - 21:30`)})},{customComponent:(0,h.jsx)(`div`,{style:{fontStyle:`italic`},children:`Just Now`})},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(s,{buttonsConfig:j(`device1`)})}]},{id:`row2`,header:{image:u,mediaUrl:u,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,h.jsx)(t,{contentArray:M(`2020/06/11 - 13:00`,`2020/06/11 - 17:30`)})},{text:`2020/06/11 - 17:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(s,{buttonsConfig:j(`device2`)})}]},{id:`row3`,header:{image:u,mediaUrl:u,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,h.jsx)(t,{contentArray:M(`2020/05/10 - 10:00`,`2020/05/10 - 12:30`)})},{text:`2020/05/10 - 12:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,h.jsx)(s,{buttonsConfig:j(`device2`)})}]}],P=()=>{let e=(0,p.boolean)(`Has Thumbnail`,!0),t=(0,p.boolean)(`Has Type Icon`,!0),n=(0,p.boolean)(`Selectable Rows`,!0),r=(0,p.number)(`Container Width (px, 0 = fill)`,0),i=(0,p.object)(`Column Configuration`,b),[s,c]=(0,m.useState)(N),l=(0,m.useCallback)(e=>{let t=[...s];t.forEach(t=>{t._checked=e}),c(t)},[s]),u=(0,m.useCallback)((e,t)=>{let n=[...s],r=n.findIndex(e=>e.id===t);n[r]._checked=e,c(n)},[s]);return(0,h.jsx)(_,{$width:r,children:(0,h.jsx)(o,{children:(0,h.jsx)(a,{columnConfig:i,rows:s,selectable:n,selectCallback:u,toggleAllCallback:l,hasThumbnail:e,hasTypeIcon:t})})})},P.__docgenInfo={description:``,methods:[],displayName:`ActionsTable`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const hasThumbnail = boolean('Has Thumbnail', true);
  const hasTypeIcon = boolean('Has Type Icon', true);
  const selectable = boolean('Selectable Rows', true);
  const containerWidth = number('Container Width (px, 0 = fill)', 0);
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
  return <Container $width={containerWidth}>
      <ModalProvider>
        <TypeTableCustom {...{
        columnConfig,
        rows,
        selectable,
        selectCallback,
        toggleAllCallback,
        hasThumbnail,
        hasTypeIcon
      }} />
      </ModalProvider>
    </Container>;
}`,...P.parameters?.docs?.source}}},F=[`ActionsTable`]})))()}I();export{P as ActionsTable,F as __namedExportsOrder,y as default};