import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,vt as c,z as l}from"./iframe-l0RDpzCT.js";import{r as u,t as d}from"./helpers-C6-oK8dq.js";import{h as f,i as p,k as m}from"./data_samples-BPpc5FO9.js";import{c as h,o as g,s as _}from"./sample_table_helpers-BjFefOhJ.js";var v,y,b,x,S,C,w,T;t((()=>{v=e(o()),r(),y=a(),s(),f(),g(),u(),b=n(),x=i.div`
  padding: 100px;
`,S={title:`Tables/molecules`,component:c,decorators:[],parameters:{jsx:{skip:2}}},C=h(m,`deviceName`,!0),w=()=>{let[e,t]=(0,v.useState)(C),[n,r]=(0,v.useState)(_(C)),i=(0,y.boolean)(`Has Device Status`,!0),a=(0,y.boolean)(`Has Thumbnail`,!0),o=(0,y.text)(`Close Text`,`CLOSE`),s=(0,y.boolean)(`Has Device Type Icon`,!0),u=(0,y.boolean)(`Has Header Groups`,!0),f=(0,y.boolean)(`Selectable Rows`,!0),m=(0,y.object)(`Column Configuration`,p),g=(0,v.useCallback)((e,t)=>{let i=[...n],a=i.findIndex(e=>e.id===t);i[a]._checked=e,r(i)},[n,r]),S=(0,v.useCallback)(e=>{let t=[...n];t.forEach(t=>{t._checked=e}),r(t)},[n,r]),w=(0,v.useCallback)((n,r)=>{t(h([...e],r,n))},[e]);return(0,v.useEffect)(()=>{r(_(e))},[e]),(0,b.jsx)(x,{children:(0,b.jsx)(l,{children:(0,b.jsx)(c,{columnConfig:m,selectable:f,rows:n,hasStatus:i,hasThumbnail:a,closeText:o,hasTypeIcon:s,defaultAscending:!0,hasHeaderGroups:u,selectCallback:d(g),toggleAllCallback:d(S),sortCallback:d(w)})})})},w.__docgenInfo={description:``,methods:[],displayName:`_TypeTable`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState<ITableSampleData[]>(sortedByDeviceData);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(sortedByDeviceData));

  // To implement...
  const hasStatus = boolean("Has Device Status", true);
  const hasThumbnail = boolean("Has Thumbnail", true);
  const closeText = text("Close Text", 'CLOSE');
  const hasTypeIcon = boolean("Has Device Type Icon", true);
  const hasHeaderGroups = boolean("Has Header Groups", true);
  const selectable = boolean("Selectable Rows", true);
  const columnConfig = object("Column Configuration", columnConfigSample);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows, setRows]);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows, setRows]);
  const sortCallback = useCallback((ascending: boolean, columnId: string) => {
    const unsortedData: ITableSampleData[] = [...data];
    const validKey = columnId as keyof ITableSampleData;
    const sortedData = sortDataBy(unsortedData, validKey, ascending);
    setData(sortedData);
  }, [data]);
  useEffect(() => {
    setRows(rowMaker(data));
  }, [data]);

  // Provider should be at main Index level, it's here just for the example
  return <Container>
      <ModalProvider>
        <TypeTable {...{
        columnConfig,
        selectable,
        rows,
        hasStatus,
        hasThumbnail,
        closeText,
        hasTypeIcon,
        defaultAscending: true,
        hasHeaderGroups
      }} selectCallback={emptyCallbackForStory(selectCallback)} toggleAllCallback={emptyCallbackForStory(toggleAllCallback)} sortCallback={emptyCallbackForStory(sortCallback)} />
      </ModalProvider>
    </Container>;
}`,...w.parameters?.docs?.source}}},T=[`_TypeTable`]}))();export{w as _TypeTable,T as __namedExportsOrder,S as default};