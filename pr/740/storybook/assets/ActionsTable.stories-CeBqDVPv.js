import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./ActionButtons-DJfnQUU4.js";import{i as a,r as o}from"./useModal-BLX3i2BE.js";import{n as s,t as c}from"./TypeTable-Ilb0VHRQ.js";import{_ as l,a as u,o as d}from"./iframe-BmxEQ5Tp.js";import{n as f,t as p}from"./placeholder-Trrcww9-.js";var m,h,g;function _(){return(_=e((()=>{d(),m=n(),h=u.div`
  display: flex;
  flex-direction: column;
`,g=({contentArray:e})=>(0,m.jsx)(h,{children:e.map((e,t)=>(0,m.jsx)(`div`,{children:e},`element-${t}`))});try{g.displayName=`MultilineContent`,g.__docgenInfo={description:``,displayName:`MultilineContent`,filePath:`/home/runner/work/scorer-ui-kit/scorer-ui-kit/packages/ui-lib/src/Pages/molecules/MultilineContent.tsx`,methods:[],props:{contentArray:{defaultValue:null,declarations:[{fileName:`packages/ui-lib/src/Pages/molecules/MultilineContent.tsx`,name:`IMultiContent`}],description:``,name:`contentArray`,parent:{fileName:`packages/ui-lib/src/Pages/molecules/MultilineContent.tsx`,name:`IMultiContent`},required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>[]`}}},tags:{}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{v=l(),y=t(),r(),a(),_(),s(),d(),p(),b=n(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S=u.div`
  padding: 100px;
  ${({$width:e})=>e>0&&`width: ${e}px;`}
`,C=u.div`
  font-size: 12px;
  span {
    font-style: italic;
    &:lang(ja) {
      font-style: normal;
    }
  }
`,w={title:`Tables/molecules`,component:c,decorators:[]},T=[{header:`Analysed Range`,sortable:!1,cellStyle:`normalImportance`,minWidth:200},{header:`Job Created At`,sortable:!1,cellStyle:`normalImportance`,minWidth:160},{header:`Run Time`,sortable:!1,cellStyle:`normalImportance`,width:120},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,minWidth:120},{header:`Actions`,sortable:!1,cellStyle:`normalImportance`,alignment:`right`}],E=x(`Deleting..`),D=x(`Downloading video..`),O=x(`Downloading logs`),k=x(`Retry`),A=x(`Going to config page`),j=e=>{console.debug(`Running deleting job log for device:  ${e}`),E()},M=e=>{console.debug(`Retrying job for device:  ${e}`),k()},N=e=>{console.debug(`Download video of device:  ${e}`),D()},P=e=>{console.debug(`Dowload job log for device:  ${e}`),O()},F=e=>{console.debug(`Config analysis job for device:  ${e}`),A()},I=e=>[{icon:`RetryJob`,onClick:()=>{M(e)}},{icon:`Delete`,onClick:()=>{j(e)}},{icon:`DownloadVideo`,onClick:()=>{N(e)}},{icon:`Download`,onClick:()=>{P(e)}},{icon:`ViewSettings`,onClick:()=>{F(e)}}],L=(e,t)=>[(0,b.jsx)(C,{children:`${e}   →`},`start`),(0,b.jsxs)(C,{children:[t,(0,b.jsx)(`span`,{children:` JST`})]},`end`)],R=[{id:`row1`,header:{image:f,mediaUrl:f,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,b.jsx)(g,{contentArray:L(`2020/06/11 - 16:00`,`2020/06/11 - 21:30`)})},{customComponent:(0,b.jsx)(`div`,{style:{fontStyle:`italic`},children:`Just Now`})},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,b.jsx)(i,{buttonsConfig:I(`device1`)})}]},{id:`row2`,header:{image:f,mediaUrl:f,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,b.jsx)(g,{contentArray:L(`2020/06/11 - 13:00`,`2020/06/11 - 17:30`)})},{text:`2020/06/11 - 17:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,b.jsx)(i,{buttonsConfig:I(`device2`)})}]},{id:`row3`,header:{image:f,mediaUrl:f,mediaType:`img`,icon:`Play`},columns:[{customComponent:(0,b.jsx)(g,{contentArray:L(`2020/05/10 - 10:00`,`2020/05/10 - 12:30`)})},{text:`2020/05/10 - 12:30`},{text:`00:00:12`},{text:`Complete`},{customComponent:(0,b.jsx)(i,{buttonsConfig:I(`device2`)})}]}],z=()=>{let e=(0,v.boolean)(`Has Thumbnail`,!0),t=(0,v.boolean)(`Has Type Icon`,!0),n=(0,v.boolean)(`Selectable Rows`,!0),r=(0,v.number)(`Container Width (px, 0 = fill)`,0),i=(0,v.object)(`Column Configuration`,T),[a,s]=(0,y.useState)(R),l=(0,y.useCallback)(e=>{let t=[...a];t.forEach(t=>{t._checked=e}),s(t)},[a]),u=(0,y.useCallback)((e,t)=>{let n=[...a],r=n.findIndex(e=>e.id===t);n[r]._checked=e,s(n)},[a]);return(0,b.jsx)(S,{$width:r,children:(0,b.jsx)(o,{children:(0,b.jsx)(c,{columnConfig:i,rows:a,selectable:n,selectCallback:u,toggleAllCallback:l,hasThumbnail:e,hasTypeIcon:t})})})},B=[`ActionsTable`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}}})))()}V();export{z as ActionsTable,B as __namedExportsOrder,w as default};