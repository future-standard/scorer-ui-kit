import{t as e}from"./react-BZJXY1be.js";import{E as t,Ft as n,Lt as r,Rt as i,St as a,W as o,Wt as s,wt as c}from"./iframe-CH2zgN-8.js";import{n as l,t as u}from"./placeholder-Cf6rKdzI.js";import{n as d,r as f}from"./helpers-k-Gf_iyx.js";import{n as p}from"./rolldown-runtime-DkW27tQK.js";var m,h,g,_,v,y,b,x,S;function C(){return(C=p((()=>{m=s(),h=e(),c(),i(),u(),d(),g=n(),_={title:`Tables/molecules`,component:a,decorators:[]},v=r.div`
  padding: 100px;
`,y=[{header:`Job Number`,sortable:!1,cellStyle:`firstColumn`},{header:`Camera Name`,sortable:!1,cellStyle:`normalImportance`,alignment:`left`},{header:`When`,sortable:!1,cellStyle:`normalImportance`,alignment:`center`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0},{header:`Temperature`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0}],b=[{id:`device-1`,jobName:`capture123`,cameraName:`Camera1`,jobTime:`Just Now`,status:`good`,statusText:`OK`,temperature:`38.2ºC`},{id:`device-2`,jobName:`capture234`,cameraName:`Camera2`,jobTime:`Just Now`,status:`good`,statusText:`OK`,temperature:`38.2ºC`},{id:`device-3`,jobName:`capture345`,cameraName:`Camera3`,jobTime:`3 mins ago`,status:`danger`,statusText:`Warning`,temperature:`38.2ºC`},{id:`device-4`,jobName:`capture456`,cameraName:`Camera4`,jobTime:`12 mins ago`,status:`danger`,statusText:`Warning`,temperature:`38.2ºC`}],x=()=>{let[e,n]=(0,h.useState)(b),[r,i]=(0,h.useState)([]),s=(0,m.object)(`ColumConfig`,y),c=(0,h.useCallback)(async(t,r)=>{let i=[...e],a=i.find(({id:e})=>e===r);a&&t.length>0&&(a.cameraName=t,await f(3e3),n(i))},[e]),u=(0,h.useCallback)(e=>e.map(({id:e,jobName:n,cameraName:r,jobTime:i,status:a,statusText:o,temperature:s})=>({id:e,header:{image:l,mediaUrl:l,mediaType:`img`},columns:[{text:n},{customComponent:(0,g.jsx)(t,{alignment:`left`,defaultValue:r,rowKey:e,saveCallback:c,toLink:`/`})},{text:i},{text:o,status:a},{text:s}]})),[c]);return(0,h.useEffect)(()=>{let t=u(e);return i(t),()=>{i([])}},[e,u]),(0,g.jsx)(v,{children:(0,g.jsx)(o,{children:(0,g.jsx)(a,{columnConfig:s,rows:r,hasThumbnail:!0})})})},x.__docgenInfo={description:``,methods:[],displayName:`_EditableTable`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [data, setData] = useState<IExampleData[]>(sampleData);
  const [rows, setRows] = useState<ITypeTableData>([]);
  const columnConfig = object('ColumConfig', columnConfigSample);
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
        }, {
          text: temperature
        }]
      };
      return row;
    });
    return newRows;
  }, [updateCameraName]);

  /**
   * If data is updated the table will be rebuild
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
}`,...x.parameters?.docs?.source}}},S=[`_EditableTable`]})))()}C();export{x as _EditableTable,S as __namedExportsOrder,_ as default};