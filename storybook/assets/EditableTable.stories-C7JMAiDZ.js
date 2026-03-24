import{j as r}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as t}from"./index-DnkWte70.js";import{c as y}from"./styled-components.browser.esm-CarAhzHj.js";import{d as D}from"./index-C-6Xbh3D.js";import{y as f,c as R,aq as S}from"./index.modern-B3hCc7YS.js";import{p as c}from"./placeholder-BcVwUhHh.js";import{s as E}from"./index-DgAbGzsN.js";import"./index-nkfPnFJx.js";const V={title:"Tables/molecules",component:f,decorators:[]},I=y.div`
  padding: 100px;
`,v=[{header:"Job Number",sortable:!1,cellStyle:"firstColumn"},{header:"Camera Name",sortable:!1,cellStyle:"normalImportance",alignment:"left"},{header:"When",sortable:!1,cellStyle:"normalImportance",alignment:"center"},{header:"Status",sortable:!1,cellStyle:"normalImportance",showStatus:!0},{header:"Temperature",sortable:!1,cellStyle:"normalImportance",showStatus:!0}],k=[{id:"device-1",jobName:"capture123",cameraName:"Camera1",jobTime:"Just Now",status:"good",statusText:"OK",temperature:"38.2ºC"},{id:"device-2",jobName:"capture234",cameraName:"Camera2",jobTime:"Just Now",status:"good",statusText:"OK",temperature:"38.2ºC"},{id:"device-3",jobName:"capture345",cameraName:"Camera3",jobTime:"3 mins ago",status:"danger",statusText:"Warning",temperature:"38.2ºC"},{id:"device-4",jobName:"capture456",cameraName:"Camera4",jobTime:"12 mins ago",status:"danger",statusText:"Warning",temperature:"38.2ºC"}],n=()=>{const[o,C]=t.useState(k),[T,l]=t.useState([]),g=D.object("ColumConfig",v),d=t.useCallback(async(e,u)=>{const a=[...o],s=a.find(({id:m})=>m===u);s&&e.length>0&&(s.cameraName=e,await E(3e3),C(a))},[o]),i=t.useCallback(e=>e.map(({id:a,jobName:s,cameraName:m,jobTime:x,status:h,statusText:N,temperature:j})=>({id:a,header:{image:c,mediaUrl:c,mediaType:"img"},columns:[{text:s},{customComponent:r.jsx(S,{alignment:"left",defaultValue:m,rowKey:a,saveCallback:d,toLink:"/"})},{text:x},{text:N,status:h},{text:j}]})),[d]);return t.useEffect(()=>{const e=i(o);return l(e),()=>{l([])}},[o,i]),r.jsx(I,{children:r.jsx(R,{children:r.jsx(f,{columnConfig:g,rows:T,hasThumbnail:!0})})})};n.__docgenInfo={description:"",methods:[],displayName:"_EditableTable"};var p,b,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const q=["_EditableTable"];export{n as _EditableTable,q as __namedExportsOrder,V as default};
