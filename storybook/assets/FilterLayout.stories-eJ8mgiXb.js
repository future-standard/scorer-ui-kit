import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,N as r,Rt as i,Wt as a,wt as o}from"./iframe-C-UcmyvH.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{c=a(),l=e(),o(),i(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Filters/molecules`,component:r,decorators:[]},p=n.div``,m=()=>{let e=(0,c.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,c.boolean)(`Has Page Settings`,!0),n=d(`layout-button-click`),i=d(`page-size`),a=[10,20,50,100],[o,s]=(0,l.useState)(20),f=[{icon:`LayoutGrid`,id:`grid`,tooltipText:`Grid View`},{icon:`LayoutList`,id:`list`,tooltipText:`List View`}],m=(0,l.useCallback)(e=>{s(e)},[]);return(0,u.jsx)(p,{children:(0,u.jsx)(r,{onPageSizeChange:e=>{i(e),m(e)},pageSizeOptions:a,defaultPageSize:o,getLayout:n,layoutText:e===`english`?`Layout`:`レイアウト`,pageSizeText:e===`english`?`Items Per Page`:`１ページのアイテム数`,contentArray:f,hasPageSettings:t})})},m.__docgenInfo={description:``,methods:[],displayName:`_FilterLayout`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h=[`_FilterLayout`]})))()}g();export{m as _FilterLayout,h as __namedExportsOrder,f as default};