import{j as s}from"./emotion-unitless.esm-y1ruXoeO.js";import{r}from"./index-Dh2lLoQQ.js";import{c as u}from"./styled-components.browser.esm-D8a0uvnT.js";import{d as o}from"./index-BtgrC99a.js";import{ar as d}from"./index.modern-BCxVMgPd.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const A={title:"Tables/atoms",component:d,decorators:[]},T=u.div`
  font-family: ${e=>e.theme.fontFamily.data};
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,t=()=>{const[e,a]=r.useState(!0),g=o.boolean("isSortActive",!0),m=o.boolean("sortable",e),n=o.boolean("ascending",e),p=o.text("header","Device Name");r.useEffect(()=>{a(n)},[n]);const b=r.useCallback(f=>{console.log("arriving",e),a(S=>!S)},[e]);return s.jsx(T,{children:s.jsx(d,{sortable:m,isSortActive:g,ascending:e,columnId:"firstColumn",indexKey:1,header:p,toggleSort:b})})};t.__docgenInfo={description:"",methods:[],displayName:"_TableHeaderTitle"};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const E=["_TableHeaderTitle"];export{t as _TableHeaderTitle,E as __namedExportsOrder,A as default};
