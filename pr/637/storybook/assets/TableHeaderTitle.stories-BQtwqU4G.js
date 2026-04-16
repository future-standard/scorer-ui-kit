import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Et as n,Ft as r,Lt as i,Pt as a,Rt as o,bt as s,st as c}from"./iframe-l0RDpzCT.js";var l,u,d,f,p,m,h;t((()=>{l=e(o()),r(),u=a(),s(),d=n(),f={title:`Tables/atoms`,component:c,decorators:[]},p=i.div`
  font-family: ${e=>e.theme.fontFamily.data};
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,m=()=>{let[e,t]=(0,l.useState)(!0),n=(0,u.boolean)(`isSortActive`,!0),r=(0,u.boolean)(`sortable`,e),i=(0,u.boolean)(`ascending`,e),a=(0,u.text)(`header`,`Device Name`);return(0,l.useEffect)(()=>{t(i)},[i]),(0,d.jsx)(p,{children:(0,d.jsx)(c,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:a,toggleSort:(0,l.useCallback)(n=>{console.log(`arriving`,e),t(e=>!e)},[e])})})},m.__docgenInfo={description:``,methods:[],displayName:`_TableHeaderTitle`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [toggleSort, setToggleSort] = useState(true);
  const isSortActive = boolean('isSortActive', true);
  const sortable = boolean('sortable', toggleSort);
  const asc = boolean('ascending', toggleSort);
  const header = text('header', 'Device Name');
  useEffect(() => {
    setToggleSort(asc);
  }, [asc]);
  const sortHandler = useCallback((indexKey: number) => {
    console.log('arriving', toggleSort);
    setToggleSort(prev => !prev);
  }, [toggleSort]);
  return <Container>
      <TableHeaderTitle sortable={sortable} isSortActive={isSortActive} ascending={toggleSort} columnId={'firstColumn'} indexKey={1} header={header} toggleSort={sortHandler} />
  </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_TableHeaderTitle`]}))();export{m as _TableHeaderTitle,h as __namedExportsOrder,f as default};