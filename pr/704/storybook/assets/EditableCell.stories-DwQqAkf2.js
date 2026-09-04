import{t as e}from"./react-BZJXY1be.js";import{E as t,Gt as n,It as r,Rt as i,wt as a,zt as o}from"./iframe-C28gtL4u.js";import{n as s,r as c}from"./helpers-D7JEnc-e.js";import{n as l}from"./rolldown-runtime-DkW27tQK.js";var u,d,f,p,m,h,g,_;function v(){return(v=l((()=>{u=n(),d=e(),a(),o(),s(),f=r(),p={title:`Tables/atoms`,component:t,decorators:[]},m=i.div`
  font-family: var(--font-ui);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: var(--grey-a11);
  margin: 100px;
  display: table-cell;
  height: 50px;
  width: 150px;
  vertical-align: middle;
  position: relative;
  line-height: 30px;
  padding: 0 2px;
`,h={id:`id-1`,cameraName:`Camera1`},g=()=>{let[e,n]=(0,d.useState)(h),r=(0,u.select)(`Alignment`,{Left:`left`,Center:`center`,Right:`right`},`left`),i=(0,u.text)(`ToLink`,`/`);return(0,f.jsx)(m,{children:(0,f.jsx)(t,{defaultValue:e.cameraName,rowKey:e.id,saveCallback:async(t,r)=>{if(r===`id-1`){let r={...e};r.cameraName=t,await c(2e3),n(r)}},alignment:r,toLink:i})})},g.__docgenInfo={description:``,methods:[],displayName:`_EditCell`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [cameraData, setCameraData] = useState(defaultVal);
  const alignment = select('Alignment', {
    Left: 'left',
    Center: 'center',
    Right: 'right'
  }, 'left');
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
}`,...g.parameters?.docs?.source}}},_=[`_EditCell`]})))()}v();export{g as _EditCell,_ as __namedExportsOrder,p as default};