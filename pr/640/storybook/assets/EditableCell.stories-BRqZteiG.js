import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,x as c}from"./iframe-DUfvGjia.js";import{i as l,r as u}from"./helpers-BJ1z7gqe.js";var d,f,p,m,h,g,_,v;t((()=>{d=e(o()),r(),f=a(),s(),u(),p=n(),m={title:`Tables/atoms`,component:c,decorators:[]},h=i.div`
  font-family: ${e=>e.theme.fontFamily.data};
  ${e=>e.theme.typography.table.columnData.normalImportance};
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,g={id:`id-1`,cameraName:`Camera1`},_=()=>{let[e,t]=(0,d.useState)(g),n=(0,f.select)(`Alignment`,{Left:`left`,Center:`center`,Right:`right`},`left`),r=(0,f.text)(`ToLink`,`/`);return(0,p.jsx)(h,{children:(0,p.jsx)(c,{defaultValue:e.cameraName,rowKey:e.id,saveCallback:async(n,r)=>{if(r===`id-1`){let r={...e};r.cameraName=n,await l(2e3),t(r)}},alignment:n,toLink:r})})},_.__docgenInfo={description:``,methods:[],displayName:`_EditCell`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`_EditCell`]}))();export{_ as _EditCell,v as __namedExportsOrder,m as default};