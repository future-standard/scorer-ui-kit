import{U as c,d as s,r as i,j as n,a as P}from"./iframe-BQPDKgpJ.js";import"./preload-helper-C1FmrZbK.js";import"@storybook/preview-api";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,O={title:"Filters/molecules",component:c,decorators:[]},m=P.div``,e=()=>{const a=s.select("Language",{English:"english",Japanese:"japanese"},"japanese"),u=s.boolean("Has Page Settings",!0),p=o("layout-button-click"),d=o("page-size"),S=[10,20,50,100],[z,h]=i.useState(20),y=[{icon:"LayoutGrid",id:"grid",tooltipText:"Grid View"},{icon:"LayoutList",id:"list",tooltipText:"List View"}],L=i.useCallback(t=>{h(t)},[]);return n.jsx(m,{children:n.jsx(c,{onPageSizeChange:t=>{d(t),L(t)},pageSizeOptions:S,defaultPageSize:z,getLayout:p,layoutText:a==="english"?"Layout":"レイアウト",pageSizeText:a==="english"?"Items Per Page":"１ページのアイテム数",contentArray:y,hasPageSettings:u})})};e.__docgenInfo={description:"",methods:[],displayName:"_FilterLayout"};var g,r,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const language = select("Language", {
    English: 'english',
    Japanese: "japanese"
  }, "japanese");
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
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const T=["_FilterLayout"];export{e as _FilterLayout,T as __namedExportsOrder,O as default};
