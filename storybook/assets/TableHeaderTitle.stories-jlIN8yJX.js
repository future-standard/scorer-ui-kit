import{as as d,r,d as o,j as s,a as p}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const f={title:"Tables/atoms",component:d,decorators:[]},T=p.div`
  font-family: ${e=>e.theme.fontFamily.data};
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,t=()=>{const[e,a]=r.useState(!0),g=o.boolean("isSortActive",!0),m=o.boolean("sortable",e),n=o.boolean("ascending",e),b=o.text("header","Device Name");r.useEffect(()=>{a(n)},[n]);const u=r.useCallback(x=>{console.log("arriving",e),a(S=>!S)},[e]);return s.jsx(T,{children:s.jsx(d,{sortable:m,isSortActive:g,ascending:e,columnId:"firstColumn",indexKey:1,header:b,toggleSort:u})})};t.__docgenInfo={description:"",methods:[],displayName:"_TableHeaderTitle"};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const y=["_TableHeaderTitle"];export{t as _TableHeaderTitle,y as __namedExportsOrder,f as default};
