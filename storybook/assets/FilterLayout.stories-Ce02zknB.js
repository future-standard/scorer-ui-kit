import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as i}from"./index-DnkWte70.js";import{c as L}from"./styled-components.browser.esm-CarAhzHj.js";import{w as c}from"./index.modern-B3hCc7YS.js";import{d as s}from"./index-C-6Xbh3D.js";import{a as n}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-nkfPnFJx.js";import"./v4-CtRu48qb.js";const E={title:"Filters/molecules",component:c,decorators:[]},P=L.div``,e=()=>{const a=s.select("Language",{English:"english",Japanese:"japanese"},"japanese"),u=s.boolean("Has Page Settings",!0),p=n("layout-button-click"),d=n("page-size"),S=[10,20,50,100],[z,h]=i.useState(20),m=[{icon:"LayoutGrid",id:"grid",tooltipText:"Grid View"},{icon:"LayoutList",id:"list",tooltipText:"List View"}],y=i.useCallback(t=>{h(t)},[]);return o.jsx(P,{children:o.jsx(c,{onPageSizeChange:t=>{d(t),y(t)},pageSizeOptions:S,defaultPageSize:z,getLayout:p,layoutText:a==="english"?"Layout":"レイアウト",pageSizeText:a==="english"?"Items Per Page":"１ページのアイテム数",contentArray:m,hasPageSettings:u})})};e.__docgenInfo={description:"",methods:[],displayName:"_FilterLayout"};var r,g,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const O=["_FilterLayout"];export{e as _FilterLayout,O as __namedExportsOrder,E as default};
