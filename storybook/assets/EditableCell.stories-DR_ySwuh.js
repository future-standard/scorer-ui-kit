import{ar as s,r as f,d as r,j as l,a as g}from"./iframe-BQPDKgpJ.js";import{s as x}from"./index-BKA4gAcn.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const v={title:"Tables/atoms",component:s,decorators:[]},h=g.div`
  font-family: ${a=>a.theme.fontFamily.data};
  ${a=>a.theme.typography.table.columnData.normalImportance};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,y={id:"id-1",cameraName:"Camera1"},e=()=>{const[a,m]=f.useState(y),d=r.select("Alignment",{Left:"left",Center:"center",Right:"right"},"left"),c=r.text("ToLink","/"),p=async(u,C)=>{if(C==="id-1"){const t={...a};t.cameraName=u,await x(2e3),m(t)}};return l.jsx(h,{children:l.jsx(s,{defaultValue:a.cameraName,rowKey:a.id,saveCallback:p,alignment:d,toLink:c})})};e.__docgenInfo={description:"",methods:[],displayName:"_EditCell"};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [cameraData, setCameraData] = useState(defaultVal);
  const alignment = select('Alignment', {
    Left: "left",
    Center: "center",
    Right: "right"
  }, "left");
  const toValue = text('ToLink', '/');
  const updateCameraName = async (value: string, rowKey: string) => {
    // vefiry the row you want to update
    if (rowKey === 'id-1') {
      const updatedCell = {
        ...cameraData
      };
      updatedCell.cameraName = value;
      // Database wait example
      await sleep(2000);
      setCameraData(updatedCell);
    }
  };
  return <Container>
    <EditCell defaultValue={cameraData.cameraName} rowKey={cameraData.id} saveCallback={updateCameraName} alignment={alignment} toLink={toValue} />
  </Container>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const b=["_EditCell"];export{e as _EditCell,b as __namedExportsOrder,v as default};
