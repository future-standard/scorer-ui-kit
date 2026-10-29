import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./TableHeaderTitle-BYL9GOwc.js";import{_ as a,a as o,o as s}from"./iframe-B9mgqNTy.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{c=a(),l=t(),r(),s(),u=n(),d={title:`Tables/atoms`,component:i,decorators:[]},f=o.div`
  font-family: var(--font-ui);
  display: table-cell;
  height: inherit;
  vertical-align:top;
  line-height: 20px;
  position: relative;
  margin: 100px;
`,p=()=>{let[e,t]=(0,l.useState)(!0),n=(0,c.boolean)(`isSortActive`,!0),r=(0,c.boolean)(`sortable`,e),a=(0,c.boolean)(`ascending`,e),o=(0,c.text)(`header`,`Device Name`);(0,l.useEffect)(()=>{t(a)},[a]);let s=(0,l.useCallback)(n=>{console.debug(`arriving ${n}`,e),t(e=>!e)},[e]);return(0,u.jsx)(f,{children:(0,u.jsx)(i,{sortable:r,isSortActive:n,ascending:e,columnId:`firstColumn`,indexKey:1,header:o,toggleSort:s})})},m=[`_TableHeaderTitle`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as _TableHeaderTitle,m as __namedExportsOrder,d as default};