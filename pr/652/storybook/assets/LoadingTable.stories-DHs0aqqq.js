import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,gt as a,jt as o,kt as s,vt as c}from"./iframe-YIV3yJSz.js";import{n as l,t as u}from"./placeholder-DnTErttm.js";var d,f,p,m,h,g,_,v,y,b;t((()=>{d=n(),f=e(i()),c(),s(),u(),p=r(),m={title:`Tables/molecules`,component:a,decorators:[]},h=o.div`
  padding: 100px;
`,g=[{header:`When`,groupTitle:`Time`,sortable:!1,cellStyle:`normalImportance`,minWidth:200},{header:`Status`,groupTitle:`Metadata`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0,minWidth:200},{header:`The Highest Temperature Recorded`,groupTitle:`Metadata`,sortable:!1,cellStyle:`normalImportance`,minWidth:200}],_=[{columns:[]}],v=[{id:`device-1`,header:{image:l},columns:[{text:`JustNow`},{text:`OK`,status:`good`},{text:`38.2ºC`}]},{id:`device-2`,header:{image:l},columns:[{text:`3 mins ago`},{text:`Warning`,status:`danger`},{text:`38.2ºC`}]},{id:`device-3`,header:{image:l},columns:[{text:`12 mins ago`},{text:`OK`,status:`good`},{text:`38.2ºC`}]},{id:`device-4`,header:{image:l},columns:[{text:`1 hour ago`},{text:`OK`,status:`good`},{text:`38.2ºC`}]}],y=()=>{let e=(0,d.boolean)(`IsLoading`,!0),t=(0,d.boolean)(`Show Empty Table`,!0),n=(0,d.boolean)(`Disable 1st Checkbox`,!1),r=(0,d.text)(`emptyTableTitle`,`No Data Available`),i=(0,d.text)(`emptyTableText`,`There is currently no data`),o=(0,d.text)(`loadingText`,`Loading Data..`),s=(0,d.boolean)(`Selectable Rows`,!0),c=(0,d.boolean)(`Has Header Groups`,!0),l=(0,d.object)(`Column Configuration`,g),[u,m]=(0,f.useState)(_),y=(0,f.useCallback)(e=>{m(t=>{let n=[...t];return n.forEach(t=>{t._checked=e}),n})},[]),b=(0,f.useCallback)((e,t)=>{m(n=>{let r=[...n],i=r.findIndex(e=>e.id===t);return i>-1&&(r[i]._checked=e),r})},[]);return(0,f.useEffect)(()=>(m(t?_:v),()=>{m(_)}),[t]),(0,f.useEffect)(()=>{m(e=>{let t=[...e];return t[0].checkboxDisabled=n,t})},[n]),(0,p.jsx)(h,{children:(0,p.jsx)(a,{hasHeaderGroups:c,columnConfig:l,rows:u,toggleAllCallback:y,selectable:s,selectCallback:b,isLoading:e,loadingText:o,hasThumbnail:!0,emptyTableTitle:r,emptyTableText:i})})},y.__docgenInfo={description:``,methods:[],displayName:`_LoadingTable`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const isLoading = boolean('IsLoading', true);
  const emptyTable = boolean('Show Empty Table', true);
  const disableOneCheckbox = boolean('Disable 1st Checkbox', false);
  const emptyTableTitle = text('emptyTableTitle', 'No Data Available');
  const emptyTableText = text('emptyTableText', 'There is currently no data');
  const loadingText = text('loadingText', 'Loading Data..');
  const selectable = boolean('Selectable Rows', true);
  const hasGroups = boolean('Has Header Groups', true);
  const columnConfig = object('Column Configuration', columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const toggleAllCallback = useCallback((checked: boolean) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      newRows.forEach(row => {
        row._checked = checked;
      });
      return newRows;
    });
  }, []);

  // Sent to checkbox in TableRow via Table component.
  const selectCallback = useCallback((checked: boolean, id?: string | number) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      const targetRowIndex = newRows.findIndex(row => row.id === id);
      if (targetRowIndex > -1) {
        newRows[targetRowIndex]._checked = checked;
      }
      return newRows;
    });
  }, []);
  useEffect(() => {
    if (emptyTable) {
      setRows(initialRows);
    } else {
      setRows(dataRows);
    }
    return () => {
      setRows(initialRows);
    };
  }, [emptyTable]);
  useEffect(() => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      newRows[0].checkboxDisabled = disableOneCheckbox;
      return newRows;
    });
  }, [disableOneCheckbox]);
  return <Container>
      <LoadingTable hasHeaderGroups={hasGroups} {...{
      columnConfig,
      rows,
      toggleAllCallback,
      selectable,
      selectCallback,
      isLoading,
      loadingText,
      hasThumbnail: true,
      emptyTableTitle,
      emptyTableText
    }} />
    </Container>;
}`,...y.parameters?.docs?.source}}},b=[`_LoadingTable`]}))();export{y as _LoadingTable,b as __namedExportsOrder,m as default};