import{j as o}from"./emotion-unitless.esm-y1ruXoeO.js";import{r as i}from"./index-Dh2lLoQQ.js";import{c as L}from"./styled-components.browser.esm-D8a0uvnT.js";import{w as c}from"./index.modern-BCxVMgPd.js";import{d as s}from"./index-BtgrC99a.js";import{a as n}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./index-Dz_aA26r.js";import"./iframe-CQb0CZlC.js";import"./v4-CtRu48qb.js";const O={title:"Filters/molecules",component:c,decorators:[]},P=L.div``,e=()=>{const a=s.select("Language",{English:"english",Japanese:"japanese"},"japanese"),u=s.boolean("Has Page Settings",!0),p=n("layout-button-click"),d=n("page-size"),S=[10,20,50,100],[m,z]=i.useState(20),h=[{icon:"LayoutGrid",id:"grid",tooltipText:"Grid View"},{icon:"LayoutList",id:"list",tooltipText:"List View"}],y=i.useCallback(t=>{z(t)},[]);return o.jsx(P,{children:o.jsx(c,{onPageSizeChange:t=>{d(t),y(t)},pageSizeOptions:S,defaultPageSize:m,getLayout:p,layoutText:a==="english"?"Layout":"レイアウト",pageSizeText:a==="english"?"Items Per Page":"１ページのアイテム数",contentArray:h,hasPageSettings:u})})};e.__docgenInfo={description:"",methods:[],displayName:"_FilterLayout"};var r,g,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const w=["_FilterLayout"];export{e as _FilterLayout,w as __namedExportsOrder,O as default};
