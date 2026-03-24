import{j as r}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as C}from"./index-Dh2lLoQQ.js";import{c as g}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as o}from"./index-BtgrC99a.js";import{aq as m}from"./index.modern-BCxVMgPd.js";import{s as x}from"./index-CTv9zpMR.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const k={title:"Tables/atoms",component:m,decorators:[]},h=g.div`
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
`,y={id:"id-1",cameraName:"Camera1"},a=()=>{const[e,s]=C.useState(y),c=o.select("Alignment",{Left:"left",Center:"center",Right:"right"},"left"),d=o.text("ToLink","/"),p=async(u,f)=>{if(f==="id-1"){const t={...e};t.cameraName=u,await x(2e3),s(t)}};return r.jsx(h,{children:r.jsx(m,{defaultValue:e.cameraName,rowKey:e.id,saveCallback:p,alignment:c,toLink:d})})};a.__docgenInfo={description:"",methods:[],displayName:"_EditCell"};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const L=["_EditCell"];export{a as _EditCell,L as __namedExportsOrder,k as default};
