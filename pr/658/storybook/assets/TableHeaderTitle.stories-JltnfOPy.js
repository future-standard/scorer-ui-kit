import{a as e,n as t}from"./chunk-BneVvdWh.js";import{At as n,Lt as r,Ot as i,Rt as a,at as o,jt as s,vt as c}from"./iframe-DoElEExu.js";var l,u,d,f,p,m,h;t((()=>{l=r(),u=e(a()),c(),s(),d=i(),f={title:`Tables/atoms`,component:o,decorators:[]},p=n.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,m=()=>{let[e,t]=(0,u.useState)(!0),n=(0,l.boolean)(`isSortActive`,!0),r=(0,l.boolean)(`sortable`,e),i=(0,l.boolean)(`ascending`,e),a=(0,l.text)(`header`,`Device Name`);return(0,u.useEffect)(()=>{t(i)},[i]),(0,d.jsx)(p,{children:(0,d.jsx)(o,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:a,toggleSort:(0,u.useCallback)(n=>{console.debug(`arriving ${n}`,e),t(e=>!e)},[e])})})},m.__docgenInfo={description:``,methods:[],displayName:`_TableHeaderTitle`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_TableHeaderTitle`]}))();export{m as _TableHeaderTitle,h as __namedExportsOrder,f as default};