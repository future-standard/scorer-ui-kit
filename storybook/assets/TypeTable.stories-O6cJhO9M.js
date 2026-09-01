import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,St as i,W as a,Wt as o,wt as s}from"./iframe-C-UcmyvH.js";import{h as c,i as l,k as u}from"./data_samples-DzVyjyFG.js";import{c as d,o as f,s as p}from"./sample_table_helpers-BsSahvRM.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b,x,S;function C(){return(C=m((()=>{h=o(),g=e(),s(),r(),c(),f(),_=t(),v=n.div`
  padding: 100px;
`,y={title:`Tables/molecules`,component:i,decorators:[],parameters:{jsx:{skip:2}}},b=d(u,`deviceName`,!0),x=()=>{let[e,t]=(0,g.useState)(b),[n,r]=(0,g.useState)(p(b)),o=(0,h.boolean)(`Has Device Status`,!0),s=(0,h.boolean)(`Has Thumbnail`,!0),c=(0,h.text)(`Close Text`,`CLOSE`),u=(0,h.boolean)(`Has Device Type Icon`,!0),f=(0,h.boolean)(`Has Header Groups`,!0),m=(0,h.boolean)(`Selectable Rows`,!0),y=(0,h.object)(`Column Configuration`,l),x=(0,g.useCallback)((e,t)=>{let i=[...n],a=i.findIndex(e=>e.id===t);i[a]._checked=e,r(i)},[n]),S=(0,g.useCallback)(e=>{let t=[...n];t.forEach(t=>{t._checked=e}),r(t)},[n]),C=(0,g.useCallback)((n,r)=>{let i=[...e],a=d(i,r,n);t(a)},[e]);return(0,g.useEffect)(()=>{r(p(e))},[e]),(0,_.jsx)(v,{children:(0,_.jsx)(a,{children:(0,_.jsx)(i,{columnConfig:y,selectable:m,rows:n,hasStatus:o,hasThumbnail:s,closeText:c,hasTypeIcon:u,defaultAscending:!0,hasHeaderGroups:f,selectCallback:x,toggleAllCallback:S,sortCallback:C})})})},x.__docgenInfo={description:``,methods:[],displayName:`_TypeTable`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState<ITableSampleData[]>(sortedByDeviceData);
  const [rows, setRows] = useState<ITypeTableData>(rowMaker(sortedByDeviceData));

  // To implement...
  const hasStatus = boolean('Has Device Status', true);
  const hasThumbnail = boolean('Has Thumbnail', true);
  const closeText = text('Close Text', 'CLOSE');
  const hasTypeIcon = boolean('Has Device Type Icon', true);
  const hasHeaderGroups = boolean('Has Header Groups', true);
  const selectable = boolean('Selectable Rows', true);
  const columnConfig = object('Column Configuration', columnConfigSample);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    const newRows = [...rows];
    const targetRowIndex = newRows.findIndex(row => row.id === id);
    newRows[targetRowIndex]._checked = checked;
    setRows(newRows);
  }, [rows]);
  const toggleAllCallback = useCallback((checked: boolean) => {
    const newRows = [...rows];
    newRows.forEach(row => {
      row._checked = checked;
    });
    setRows(newRows);
  }, [rows]);
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
      }} selectCallback={selectCallback} toggleAllCallback={toggleAllCallback} sortCallback={sortCallback} />
      </ModalProvider>
    </Container>;
}`,...x.parameters?.docs?.source}}},S=[`_TypeTable`]})))()}C();export{x as _TypeTable,S as __namedExportsOrder,y as default};