import{t as e}from"./react-BZJXY1be.js";import{Dt as t,E as n,Gt as r,It as i,Rt as a,St as o,W as s,wt as c,zt as l}from"./iframe-C8iM32yd.js";import{n as u,t as d}from"./placeholder-Cf6rKdzI.js";import{n as f,r as p}from"./helpers-Cvr4c3Xq.js";import{n as m}from"./rolldown-runtime-DkW27tQK.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=m((()=>{h=r(),g=e(),c(),l(),d(),f(),_=i(),v={title:`Tables/molecules`,component:o,decorators:[]},y=a.div`
  padding: 100px;
`,b=[{header:`Job Number`,sortable:!1,cellStyle:`firstColumn`},{header:`Camera Name`,sortable:!1,cellStyle:`normalImportance`,alignment:`left`},{header:`When`,sortable:!1,cellStyle:`normalImportance`,alignment:`center`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0},{columnId:`uptime`,header:`Uptime`,sortable:!1,cellStyle:`lowImportance`,alignment:`center`},{header:`Temperature`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0}],x=[{id:`device-1`,jobName:`capture123`,cameraName:`Camera1`,jobTime:`Just Now`,status:`good`,statusText:`OK`,uptime:`3d 14h`,temperature:`38.2ºC`},{id:`device-2`,jobName:`capture234`,cameraName:`Camera2`,jobTime:`Just Now`,status:`good`,statusText:`OK`,uptime:`12h 40m`,temperature:`38.2ºC`},{id:`device-3`,jobName:`capture345`,cameraName:`Camera3`,jobTime:`3 mins ago`,status:`danger`,statusText:`Warning`,uptime:`5d 2h`,temperature:`38.2ºC`},{id:`device-4`,jobName:`capture456`,cameraName:`Camera4`,jobTime:`12 mins ago`,status:`danger`,statusText:`Warning`,uptime:`18h 05m`,temperature:`38.2ºC`}],S=()=>{let{isXXLarge:e}=t(),[r,i]=(0,g.useState)(x),[a,c]=(0,g.useState)([]),l=(0,h.object)(`ColumConfig`,b),d=e?l:l.filter(({columnId:e})=>e!==`uptime`),f=(0,g.useCallback)(async(e,t)=>{let n=[...r],a=n.find(({id:e})=>e===t);a&&e.length>0&&(a.cameraName=e,await p(3e3),i(n))},[r]),m=(0,g.useCallback)(t=>t.map(({id:t,jobName:r,cameraName:i,jobTime:a,status:o,statusText:s,uptime:c,temperature:l})=>({id:t,header:{image:u,mediaUrl:u,mediaType:`img`},columns:[{text:r},{customComponent:(0,_.jsx)(n,{alignment:`left`,defaultValue:i,rowKey:t,saveCallback:f,toLink:`/`})},{text:a},{text:s,status:o},...e?[{text:c}]:[],{text:l}]})),[f,e]);return(0,g.useEffect)(()=>{let e=m(r);return c(e),()=>{c([])}},[r,m]),(0,_.jsx)(y,{children:(0,_.jsx)(s,{children:(0,_.jsx)(o,{columnConfig:d,rows:a,hasThumbnail:!0})})})},S.__docgenInfo={description:``,methods:[],displayName:`_EditableTable`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const {
    isXXLarge
  } = useBreakpoints();
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);
  const allColumns = object('ColumConfig', columnConfigSample);
  const columnConfig = isXXLarge ? allColumns : allColumns.filter(({
    columnId
  }) => columnId !== 'uptime');
  const updateCameraName = useCallback(async (name: string, rowKey: string) => {
    const updatedData = [...data];
    const updatedRow = updatedData.find(({
      id
    }) => id === rowKey);
    if (updatedRow && name.length > 0) {
      updatedRow.cameraName = name;
      // Database wait example
      await sleep(3000);
      setData(updatedData);
    }
  }, [data]);
  const buildDataRows = useCallback((data: IExampleData[]): ITypeTableData => {
    const newRows: ITypeTableData = data.map(({
      id,
      jobName,
      cameraName,
      jobTime,
      status,
      statusText,
      uptime,
      temperature
    }) => {
      const row: IRowData = {
        id,
        header: {
          image: photo,
          mediaUrl: photo,
          mediaType: 'img'
        },
        columns: [{
          text: jobName
        }, {
          customComponent: <EditCell alignment={'left'} defaultValue={cameraName} rowKey={id} saveCallback={updateCameraName} toLink='/' />
        }, {
          text: jobTime
        }, {
          text: statusText,
          status
        }, ...(isXXLarge ? [{
          text: uptime
        }] : []), {
          text: temperature
        }]
      };
      return row;
    });
    return newRows;
  }, [updateCameraName, isXXLarge]);

  /**
   * If data is updated the table will be rebuild.
   *
   * Rebuilding in an effect, rather than deriving rows with useMemo, is what EditCell requires: it
   * reads defaultValue once, so a row object has to be recreated to show an externally changed
   * value. The side effect is that rows lag columnConfig by one render whenever the Uptime column
   * appears or disappears, which is the mismatch TypeTable has to survive.
   */

  useEffect(() => {
    const dataRows: ITypeTableData = buildDataRows(data);
    setRows(dataRows);
    return () => {
      setRows([]);
    };
  }, [data, buildDataRows]);

  // Provider should be at main Index level, it's here just for the example
  return <Container>
      <ModalProvider>
        <EditableTable {...{
        columnConfig: columnConfig,
        rows,
        hasThumbnail: true
      }} />
      </ModalProvider>
    </Container>;
}`,...S.parameters?.docs?.source}}},C=[`_EditableTable`]})))()}w();export{S as _EditableTable,C as __namedExportsOrder,v as default};