import{j as D}from"./emotion-unitless.esm-y1ruXoeO.js";import{a as o}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{d as e}from"./index-BtgrC99a.js";import{r as c}from"./index-Dh2lLoQQ.js";import{an as g}from"./index.modern-BCxVMgPd.js";import"./v4-CtRu48qb.js";import"./iframe-CQb0CZlC.js";import"./index-Dz_aA26r.js";const y={title:"Misc/Molecules",component:g,decorators:[]},V=[{value:5,textValue:"5"},{value:10,textValue:"10"},{value:20,textValue:"20"},{value:30,textValue:"30"},{value:100,textValue:"100"}],t=()=>{const a=e.number("Active Page",1),[m,s]=c.useState(a),u=o("Page changed"),P=o("Items Per Page"),x=e.text("Page Text","Page:"),d=e.text("Button Text","GO"),p=e.text("Items Per Page","Items Per Page:"),b=e.number("Items Default Value",10),I=e.text("Select Width","70px"),h=e.text("SelectId","UniqID23"),f=e.number("Total Pages",20),C=e.boolean("Select Disabled",!1),O=e.object("Items Options",V),T=n=>{u(n),s(n)},v=n=>{P(n)};return c.useEffect(()=>{s(a)},[a]),D.jsx(g,{selectId:h,pageText:x,totalPages:f,activePage:m,buttonText:d,itemsText:p,selectWidth:I,selectDisabled:C,itemsDefaultValue:b,itemsOptions:O,onPageChange:T,onItemsChange:v})};t.__docgenInfo={description:"",methods:[],displayName:"_Pagination"};var i,l,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const controlledActivePage = number('Active Page', 1);
  const [currentPage, setCurrentPage] = useState(controlledActivePage);
  const buttonOnClick = action('Page changed');
  const itemsChange = action('Items Per Page');
  const pageText = text('Page Text', 'Page:');
  const buttonText = text('Button Text', 'GO');
  const itemsText = text('Items Per Page', 'Items Per Page:');
  const itemsDefaultValue = number('Items Default Value', 10);
  const selectWidth = text('Select Width', '70px');
  const selectId = text('SelectId', 'UniqID23');
  const totalPages = number('Total Pages', 20);
  const selectDisabled = boolean('Select Disabled', false);
  const itemOptionsObj = object('Items Options', ItemsOptions);
  const onPageChange = (page: number) => {
    buttonOnClick(page);
    setCurrentPage(page);
  };
  const onItemsChange = (items: number) => {
    itemsChange(items);
  };
  useEffect(() => {
    setCurrentPage(controlledActivePage);
  }, [controlledActivePage]);
  return <Pagination selectId={selectId} pageText={pageText} totalPages={totalPages} activePage={currentPage} buttonText={buttonText} itemsText={itemsText} selectWidth={selectWidth} selectDisabled={selectDisabled} itemsDefaultValue={itemsDefaultValue} itemsOptions={itemOptionsObj} onPageChange={onPageChange} onItemsChange={onItemsChange} />;
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const B=["_Pagination"];export{t as _Pagination,B as __namedExportsOrder,y as default};
