import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Bt as n,D as r,Mt as i,jt as a,kt as o,vt as s,zt as c}from"./iframe-C59WqszT.js";var l,u,d,f,p,m,h,g;e((()=>{l=c(),u=t(n()),s(),i(),d=o(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Filters/molecules`,component:r,decorators:[]},m=a.div``,h=()=>{let e=(0,l.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,l.boolean)(`Has Page Settings`,!0),n=f(`layout-button-click`),i=f(`page-size`),a=[10,20,50,100],[o,s]=(0,u.useState)(20),c=[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],p=(0,u.useCallback)(e=>{s(e)},[]);return(0,d.jsx)(m,{children:(0,d.jsx)(r,{onPageSizeChange:e=>{i(e),p(e)},pageSizeOptions:a,defaultPageSize:o,getLayout:n,layoutText:e===`english`?`Layout`:`レイアウト`,pageSizeText:e===`english`?`Items Per Page`:`１ページのアイテム数`,contentArray:c,hasPageSettings:t})})},h.__docgenInfo={description:``,methods:[],displayName:`_FilterLayout`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const hasPageSettings = boolean('Has Page Settings', true);
  const handleLayout = action('layout-button-click');
  const handlePageSizeChange = action('page-size');
  const sizeOptions = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(20);
  const arrayList = [{
    icon: 'LayoutGrid',
    id: 'grid',
    tooltipText: 'Grid View'
  }, {
    icon: 'LayoutList',
    id: 'list',
    tooltipText: 'List View'
  }];
  const onSizePerPageChange = useCallback((size: number) => {
    setPageSize(size);
  }, []);
  return <Container>
      <FilterLayout {...{
      onPageSizeChange: (size: number) => {
        handlePageSizeChange(size);
        onSizePerPageChange(size);
      },
      pageSizeOptions: sizeOptions,
      defaultPageSize: pageSize,
      getLayout: handleLayout,
      layoutText: language === 'english' ? 'Layout' : 'レイアウト',
      pageSizeText: language === 'english' ? 'Items Per Page' : '１ページのアイテム数',
      contentArray: arrayList,
      hasPageSettings: hasPageSettings
    }} />
    </Container>;
}`,...h.parameters?.docs?.source}}},g=[`_FilterLayout`]}))();export{h as _FilterLayout,g as __namedExportsOrder,p as default};