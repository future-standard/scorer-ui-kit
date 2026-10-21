import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./EditCell-D7KLWrrV.js";import{_ as a,a as o,o as s}from"./iframe-Cw1eIbNi.js";import{n as c,r as l}from"./helpers-DisBgTnj.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=a(),d=t(),r(),s(),c(),f=n(),p={title:`Tables/atoms`,component:i,decorators:[]},m=o.div`
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
`,h={id:`id-1`,cameraName:`Camera1`},g=()=>{let[e,t]=(0,d.useState)(h),n=(0,u.select)(`Alignment`,{Left:`left`,Center:`center`,Right:`right`},`left`),r=(0,u.text)(`ToLink`,`/`);return(0,f.jsx)(m,{children:(0,f.jsx)(i,{defaultValue:e.cameraName,rowKey:e.id,saveCallback:async(n,r)=>{if(r===`id-1`){let r={...e};r.cameraName=n,await l(2e3),t(r)}},alignment:n,toLink:r})})},_=[`_EditCell`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as _EditCell,_ as __namedExportsOrder,p as default};