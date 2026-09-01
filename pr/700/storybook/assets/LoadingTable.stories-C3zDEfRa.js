import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,St as i,Wt as a,wt as o}from"./iframe-C0XmBt3X.js";import{n as s,t as c}from"./placeholder-Cf6rKdzI.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=l((()=>{u=a(),d=e(),o(),r(),c(),f=t(),p={title:`Tables/molecules`,component:i,decorators:[]},m=n.div`
  padding: 100px;
`,h=[{header:`When`,groupTitle:`Time`,sortable:!1,cellStyle:`normalImportance`,minWidth:200},{header:`Status`,groupTitle:`Metadata`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0,minWidth:200},{header:`The Highest Temperature Recorded`,groupTitle:`Metadata`,sortable:!1,cellStyle:`normalImportance`,minWidth:200}],g=[{columns:[]}],_=[{id:`device-1`,header:{image:s},columns:[{text:`JustNow`},{text:`OK`,status:`good`},{text:`38.2ºC`}]},{id:`device-2`,header:{image:s},columns:[{text:`3 mins ago`},{text:`Warning`,status:`danger`},{text:`38.2ºC`}]},{id:`device-3`,header:{image:s},columns:[{text:`12 mins ago`},{text:`OK`,status:`good`},{text:`38.2ºC`}]},{id:`device-4`,header:{image:s},columns:[{text:`1 hour ago`},{text:`OK`,status:`good`},{text:`38.2ºC`}]}],v=()=>{let e=(0,u.boolean)(`IsLoading`,!0),t=(0,u.boolean)(`Show Empty Table`,!0),n=(0,u.boolean)(`Disable 1st Checkbox`,!1),r=(0,u.text)(`emptyTableTitle`,`No Data Available`),a=(0,u.text)(`emptyTableText`,`There is currently no data`),o=(0,u.text)(`loadingText`,`Loading Data..`),s=(0,u.boolean)(`Selectable Rows`,!0),c=(0,u.boolean)(`Has Header Groups`,!0),l=(0,u.object)(`Column Configuration`,h),[p,v]=(0,d.useState)(g),y=(0,d.useCallback)(e=>{v(t=>{let n=[...t];return n.forEach(t=>{t._checked=e}),n})},[]),b=(0,d.useCallback)((e,t)=>{v(n=>{let r=[...n],i=r.findIndex(e=>e.id===t);return i>-1&&(r[i]._checked=e),r})},[]);return(0,d.useEffect)(()=>(v(t?g:_),()=>{v(g)}),[t]),(0,d.useEffect)(()=>{v(e=>{let t=[...e];return t[0].checkboxDisabled=n,t})},[n]),(0,f.jsx)(m,{children:(0,f.jsx)(i,{hasHeaderGroups:c,columnConfig:l,rows:p,toggleAllCallback:y,selectable:s,selectCallback:b,isLoading:e,loadingText:o,hasThumbnail:!0,emptyTableTitle:r,emptyTableText:a})})},v.__docgenInfo={description:``,methods:[],displayName:`_LoadingTable`},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y=[`_LoadingTable`]})))()}b();export{v as _LoadingTable,y as __namedExportsOrder,p as default};