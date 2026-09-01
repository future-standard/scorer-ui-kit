import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,dt as a,wt as o}from"./iframe-C-UcmyvH.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m;function h(){return(h=s((()=>{c=i(),l=e(),o(),r(),u=t(),d={title:`Tables/atoms`,component:a,decorators:[]},f=n.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,p=()=>{let[e,t]=(0,l.useState)(!0),n=(0,c.boolean)(`isSortActive`,!0),r=(0,c.boolean)(`sortable`,e),i=(0,c.boolean)(`ascending`,e),o=(0,c.text)(`header`,`Device Name`);(0,l.useEffect)(()=>{t(i)},[i]);let s=(0,l.useCallback)(n=>{console.debug(`arriving ${n}`,e),t(e=>!e)},[e]);return(0,u.jsx)(f,{children:(0,u.jsx)(a,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:o,toggleSort:s})})},p.__docgenInfo={description:``,methods:[],displayName:`_TableHeaderTitle`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [toggleSort, setToggleSort] = useState(true);
  const isSortActive = boolean('isSortActive', true);
  const sortable = boolean('sortable', toggleSort);
  const asc = boolean('ascending', toggleSort);
  const header = text('header', 'Device Name');
  useEffect(() => {
    setToggleSort(asc);
  }, [asc]);
  const sortHandler = useCallback((indexKey: number) => {
    console.debug(\`arriving \${indexKey}\`, toggleSort);
    setToggleSort(prev => !prev);
  }, [toggleSort]);
  return <Container>
      <TableHeaderTitle sortable={sortable} isSortActive={isSortActive} ascending={toggleSort} columnId={'firstColumn'} indexKey={1} header={header} toggleSort={sortHandler} />
    </Container>;
}`,...p.parameters?.docs?.source}}},m=[`_TableHeaderTitle`]})))()}h();export{p as _TableHeaderTitle,m as __namedExportsOrder,d as default};