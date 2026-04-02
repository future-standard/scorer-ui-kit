import{f as T,r as t,d as a,j as u,n as E,a as j}from"./iframe-Dbt4m4Aq.js";import{u as A,w as M}from"./data_samples-CN1iUX41.js";import{r as m,s as h}from"./sample_table_helpers-BSGpbfPa.js";import{e as i}from"./index-BfWBpCCZ.js";import"./preload-helper-C1FmrZbK.js";import"./placeholder-BcVwUhHh.js";const B=j.div`
  padding: 100px;
`,q={title:"Tables/molecules",component:T,decorators:[],parameters:{jsx:{skip:2}}},G=M,p=h(G,"deviceName",!0),n=()=>{const[r,y]=t.useState(p),[s,l]=t.useState(m(p)),g=a.boolean("Has Device Status",!0),f=a.boolean("Has Thumbnail",!0),D=a.text("Close Text","CLOSE"),x=a.boolean("Has Device Type Icon",!0),S=a.boolean("Has Header Groups",!0),R=a.boolean("Selectable Rows",!0),v=a.object("Column Configuration",A),I=t.useCallback((c,o)=>{const e=[...s],b=e.findIndex(d=>d.id===o);e[b]._checked=c,l(e)},[s,l]),H=t.useCallback(c=>{const o=[...s];o.forEach(e=>{e._checked=c}),l(o)},[s,l]),_=t.useCallback((c,o)=>{const e=[...r],d=h(e,o,c);y(d)},[r]);return t.useEffect(()=>{l(m(r))},[r]),u.jsx(B,{children:u.jsx(E,{children:u.jsx(T,{columnConfig:v,selectable:R,rows:s,hasStatus:g,hasThumbnail:f,closeText:D,hasTypeIcon:x,defaultAscending:!0,hasHeaderGroups:S,selectCallback:i(I),toggleAllCallback:i(H),sortCallback:i(_)})})})};n.__docgenInfo={description:"",methods:[],displayName:"_TypeTable"};var w,C,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const z=["_TypeTable"];export{n as _TypeTable,z as __namedExportsOrder,q as default};
