import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Ft as n,It as r,Nt as i,St as a,Ut as o,Wt as s,j as c}from"./iframe-DB8xyy-s.js";var l,u,d,f,p,m,h,g;e((()=>{l=o(),u=t(s()),a(),r(),d=i(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Filters/molecules`,component:c,decorators:[]},m=n.div``,h=()=>{let e=(0,l.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,l.boolean)(`Has Page Settings`,!0),n=f(`layout-button-click`),r=f(`page-size`),i=[10,20,50,100],[a,o]=(0,u.useState)(20),s=[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],p=(0,u.useCallback)(e=>{o(e)},[]);return(0,d.jsx)(m,{children:(0,d.jsx)(c,{onPageSizeChange:e=>{r(e),p(e)},pageSizeOptions:i,defaultPageSize:a,getLayout:n,layoutText:e===`english`?`Layout`:`レイアウト`,pageSizeText:e===`english`?`Items Per Page`:`１ページのアイテム数`,contentArray:s,hasPageSettings:t})})},h.__docgenInfo={description:``,methods:[],displayName:`_FilterLayout`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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