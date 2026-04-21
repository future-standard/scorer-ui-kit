import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,bt as a,jt as o,kt as s,vt as c,x as l,z as u}from"./iframe-CqAvHUfG.js";import{n as d,t as f}from"./placeholder-DnTErttm.js";import{n as p,r as m}from"./helpers-62T94qZR.js";var h,g,_,v,y,b,x,S,C;t((()=>{h=n(),g=e(i()),a(),s(),f(),p(),_=r(),v={title:`Tables/molecules`,component:c,decorators:[]},y=o.div`
  padding: 100px;
`,b=[{header:`Job Number`,sortable:!1,cellStyle:`firstColumn`},{header:`Camera Name`,sortable:!1,cellStyle:`normalImportance`,alignment:`left`},{header:`When`,sortable:!1,cellStyle:`normalImportance`,alignment:`center`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0},{header:`Temperature`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0}],x=[{id:`device-1`,jobName:`capture123`,cameraName:`Camera1`,jobTime:`Just Now`,status:`good`,statusText:`OK`,temperature:`38.2ºC`},{id:`device-2`,jobName:`capture234`,cameraName:`Camera2`,jobTime:`Just Now`,status:`good`,statusText:`OK`,temperature:`38.2ºC`},{id:`device-3`,jobName:`capture345`,cameraName:`Camera3`,jobTime:`3 mins ago`,status:`danger`,statusText:`Warning`,temperature:`38.2ºC`},{id:`device-4`,jobName:`capture456`,cameraName:`Camera4`,jobTime:`12 mins ago`,status:`danger`,statusText:`Warning`,temperature:`38.2ºC`}],S=()=>{let[e,t]=(0,g.useState)(x),[n,r]=(0,g.useState)([]),i=(0,h.object)(`ColumConfig`,b),a=(0,g.useCallback)(async(n,r)=>{let i=[...e],a=i.find(({id:e})=>e===r);a&&n.length>0&&(a.cameraName=n,await m(3e3),t(i))},[e]),o=(0,g.useCallback)(e=>e.map(({id:e,jobName:t,cameraName:n,jobTime:r,status:i,statusText:o,temperature:s})=>({id:e,header:{image:d,mediaUrl:d,mediaType:`img`},columns:[{text:t},{customComponent:(0,_.jsx)(l,{alignment:`left`,defaultValue:n,rowKey:e,saveCallback:a,toLink:`/`})},{text:r},{text:o,status:i},{text:s}]})),[a]);return(0,g.useEffect)(()=>(r(o(e)),()=>{r([])}),[e,o]),(0,_.jsx)(y,{children:(0,_.jsx)(u,{children:(0,_.jsx)(c,{columnConfig:i,rows:n,hasThumbnail:!0})})})},S.__docgenInfo={description:``,methods:[],displayName:`_EditableTable`},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C=[`_EditableTable`]}))();export{S as _EditableTable,C as __namedExportsOrder,v as default};