import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./useBreakpoints-BpR8YAf1.js";import{i as a,r as o}from"./useModal-d90x0uc7.js";import{n as s,t as c}from"./EditCell-D7KLWrrV.js";import{n as l,t as u}from"./TypeTable-CpCxfsCp.js";import{_ as d,a as f,o as p}from"./iframe-Cw1eIbNi.js";import{n as m,t as h}from"./placeholder-Trrcww9-.js";import{n as g,r as _}from"./helpers-DisBgTnj.js";var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{v=d(),y=t(),l(),s(),a(),i(),p(),h(),g(),b=n(),x={title:`Tables/molecules`,component:u,decorators:[]},S=f.div`
  padding: 100px;
`,C=[{header:`Job Number`,sortable:!1,cellStyle:`firstColumn`},{header:`Camera Name`,sortable:!1,cellStyle:`normalImportance`,alignment:`left`},{header:`When`,sortable:!1,cellStyle:`normalImportance`,alignment:`center`},{header:`Status`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0},{columnId:`uptime`,header:`Uptime`,sortable:!1,cellStyle:`lowImportance`,alignment:`center`},{header:`Temperature`,sortable:!1,cellStyle:`normalImportance`,showStatus:!0}],w=[{id:`device-1`,jobName:`capture123`,cameraName:`Camera1`,jobTime:`Just Now`,status:`good`,statusText:`OK`,uptime:`3d 14h`,temperature:`38.2ºC`},{id:`device-2`,jobName:`capture234`,cameraName:`Camera2`,jobTime:`Just Now`,status:`good`,statusText:`OK`,uptime:`12h 40m`,temperature:`38.2ºC`},{id:`device-3`,jobName:`capture345`,cameraName:`Camera3`,jobTime:`3 mins ago`,status:`danger`,statusText:`Warning`,uptime:`5d 2h`,temperature:`38.2ºC`},{id:`device-4`,jobName:`capture456`,cameraName:`Camera4`,jobTime:`12 mins ago`,status:`danger`,statusText:`Warning`,uptime:`18h 05m`,temperature:`38.2ºC`}],T=()=>{let{isXXLarge:e}=r(),[t,n]=(0,y.useState)(w),[i,a]=(0,y.useState)([]),s=(0,v.object)(`ColumConfig`,C),l=e?s:s.filter(({columnId:e})=>e!==`uptime`),d=(0,y.useCallback)(async(e,r)=>{let i=[...t],a=i.find(({id:e})=>e===r);a&&e.length>0&&(a.cameraName=e,await _(3e3),n(i))},[t]),f=(0,y.useCallback)(t=>t.map(({id:t,jobName:n,cameraName:r,jobTime:i,status:a,statusText:o,uptime:s,temperature:l})=>({id:t,header:{image:m,mediaUrl:m,mediaType:`img`},columns:[{text:n},{customComponent:(0,b.jsx)(c,{alignment:`left`,defaultValue:r,rowKey:t,saveCallback:d,toLink:`/`})},{text:i},{text:o,status:a},...e?[{text:s}]:[],{text:l}]})),[d,e]);return(0,y.useEffect)(()=>{let e=f(t);return a(e),()=>{a([])}},[t,f]),(0,b.jsx)(S,{children:(0,b.jsx)(o,{children:(0,b.jsx)(u,{columnConfig:l,rows:i,hasThumbnail:!0})})})},E=[`_EditableTable`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as _EditableTable,E as __namedExportsOrder,x as default};