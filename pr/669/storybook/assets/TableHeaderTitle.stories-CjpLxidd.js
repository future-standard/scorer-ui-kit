import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,Mt as r,at as i,jt as a,kt as o,vt as s,zt as c}from"./iframe-cNP1dtGl.js";var l,u,d,f,p,m,h;e((()=>{l=c(),u=t(n()),s(),r(),d=o(),f={title:`Tables/atoms`,component:i,decorators:[]},p=a.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,m=()=>{let[e,t]=(0,u.useState)(!0),n=(0,l.boolean)(`isSortActive`,!0),r=(0,l.boolean)(`sortable`,e),a=(0,l.boolean)(`ascending`,e),o=(0,l.text)(`header`,`Device Name`);return(0,u.useEffect)(()=>{t(a)},[a]),(0,d.jsx)(p,{children:(0,d.jsx)(i,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:o,toggleSort:(0,u.useCallback)(n=>{console.debug(`arriving ${n}`,e),t(e=>!e)},[e])})})},m.__docgenInfo={description:``,methods:[],displayName:`_TableHeaderTitle`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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