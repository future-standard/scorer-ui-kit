import{f as T,d as e,r as n,j as m,a as L}from"./iframe-B-FWgcWl.js";import{p as r}from"./placeholder-BcVwUhHh.js";import"./preload-helper-C1FmrZbK.js";const A={title:"Tables/molecules",component:T,decorators:[]},_=L.div`
  padding: 100px;
`,D=[{header:"When",groupTitle:"Time",sortable:!1,cellStyle:"normalImportance",minWidth:200},{header:"Status",groupTitle:"Metadata",sortable:!1,cellStyle:"normalImportance",showStatus:!0,minWidth:200},{header:"The Highest Temperature Recorded",groupTitle:"Metadata",sortable:!1,cellStyle:"normalImportance",minWidth:200}],i=[{columns:[]}],O=[{id:"device-1",header:{image:r},columns:[{text:"JustNow"},{text:"OK",status:"good"},{text:"38.2ºC"}]},{id:"device-2",header:{image:r},columns:[{text:"3 mins ago"},{text:"Warning",status:"danger"},{text:"38.2ºC"}]},{id:"device-3",header:{image:r},columns:[{text:"12 mins ago"},{text:"OK",status:"good"},{text:"38.2ºC"}]},{id:"device-4",header:{image:r},columns:[{text:"1 hour ago"},{text:"OK",status:"good"},{text:"38.2ºC"}]}],l=()=>{const x=e.boolean("IsLoading",!0),d=e.boolean("Show Empty Table",!0),b=e.boolean("Disable 1st Checkbox",!1),h=e.text("emptyTableTitle","No Data Available"),R=e.text("emptyTableText","There is currently no data"),f=e.text("loadingText","Loading Data.."),C=e.boolean("Selectable Rows",!0),k=e.boolean("Has Header Groups",!0),y=e.object("Column Configuration",D),[S,t]=n.useState(i),v=n.useCallback(a=>{t(o=>{const c=[...o];return c.forEach(s=>{s._checked=a}),c})},[t]),I=n.useCallback((a,o)=>{t(c=>{const s=[...c],u=s.findIndex(E=>E.id===o);return u>-1&&(s[u]._checked=a),s})},[t]);return n.useEffect(()=>(t(d?i:O),()=>{t(i)}),[d]),n.useEffect(()=>{t(a=>{const o=[...a];return o[0].checkboxDisabled=b,o})},[b]),m.jsx(_,{children:m.jsx(T,{hasHeaderGroups:k,columnConfig:y,rows:S,toggleAllCallback:v,selectable:C,selectCallback:I,isLoading:x,loadingText:f,hasThumbnail:!0,emptyTableTitle:h,emptyTableText:R})})};l.__docgenInfo={description:"",methods:[],displayName:"_LoadingTable"};var w,p,g;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const isLoading = boolean("IsLoading", true);
  const emptyTable = boolean("Show Empty Table", true);
  const disableOneCheckbox = boolean('Disable 1st Checkbox', false);
  const emptyTableTitle = text("emptyTableTitle", "No Data Available");
  const emptyTableText = text("emptyTableText", 'There is currently no data');
  const loadingText = text("loadingText", 'Loading Data..');
  const selectable = boolean("Selectable Rows", true);
  const hasGroups = boolean('Has Header Groups', true);
  const columnConfig = object("Column Configuration", columnConfigSample);
  const [rows, setRows] = useState<ITypeTableData>(initialRows);
  const toggleAllCallback = useCallback((checked: boolean) => {
    setRows(prevRows => {
      const newRows = [...prevRows];
      newRows.forEach(row => {
        row._checked = checked;
      });
      return newRows;
    });
  }, [setRows]);

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
  }, [setRows]);
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
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const W=["_LoadingTable"];export{l as _LoadingTable,W as __namedExportsOrder,A as default};
