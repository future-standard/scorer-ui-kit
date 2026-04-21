import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,bt as a,jt as o,kt as s,vt as c,z as l}from"./iframe-Du_t-W6m.js";import{h as u,i as d,k as f}from"./data_samples-BPpc5FO9.js";import{c as p,o as m,s as h}from"./sample_table_helpers-CTBAKgRi.js";var g,_,v,y,b,x,S,C;t((()=>{g=n(),_=e(i()),a(),s(),u(),m(),v=r(),y=o.div`
  padding: 100px;
`,b={title:`Tables/molecules`,component:c,decorators:[],parameters:{jsx:{skip:2}}},x=p(f,`deviceName`,!0),S=()=>{let[e,t]=(0,_.useState)(x),[n,r]=(0,_.useState)(h(x)),i=(0,g.boolean)(`Has Device Status`,!0),a=(0,g.boolean)(`Has Thumbnail`,!0),o=(0,g.text)(`Close Text`,`CLOSE`),s=(0,g.boolean)(`Has Device Type Icon`,!0),u=(0,g.boolean)(`Has Header Groups`,!0),f=(0,g.boolean)(`Selectable Rows`,!0),m=(0,g.object)(`Column Configuration`,d),b=(0,_.useCallback)((e,t)=>{let i=[...n],a=i.findIndex(e=>e.id===t);i[a]._checked=e,r(i)},[n]),S=(0,_.useCallback)(e=>{let t=[...n];t.forEach(t=>{t._checked=e}),r(t)},[n]),C=(0,_.useCallback)((n,r)=>{t(p([...e],r,n))},[e]);return(0,_.useEffect)(()=>{r(h(e))},[e]),(0,v.jsx)(y,{children:(0,v.jsx)(l,{children:(0,v.jsx)(c,{columnConfig:m,selectable:f,rows:n,hasStatus:i,hasThumbnail:a,closeText:o,hasTypeIcon:s,defaultAscending:!0,hasHeaderGroups:u,selectCallback:b,toggleAllCallback:S,sortCallback:C})})})},S.__docgenInfo={description:``,methods:[],displayName:`_TypeTable`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C=[`_TypeTable`]}))();export{S as _TypeTable,C as __namedExportsOrder,b as default};