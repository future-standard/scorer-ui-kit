import{ao as r,d as e,r as o,j as v}from"./iframe-B-FWgcWl.js";import"./preload-helper-C1FmrZbK.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,j={title:"Misc/Molecules",component:r,decorators:[]},_=[{value:5,textValue:"5"},{value:10,textValue:"10"},{value:20,textValue:"20"},{value:30,textValue:"30"},{value:100,textValue:"100"}],t=()=>{const s=e.number("Active Page",1),[u,a]=o.useState(s),m=c("Page changed"),P=c("Items Per Page"),x=e.text("Page Text","Page:"),d=e.text("Button Text","GO"),p=e.text("Items Per Page","Items Per Page:"),b=e.number("Items Default Value",10),I=e.text("Select Width","70px"),O=e.text("SelectId","UniqID23"),h=e.number("Total Pages",20),T=e.boolean("Select Disabled",!1),C=e.object("Items Options",_),f=n=>{m(n),a(n)},D=n=>{P(n)};return o.useEffect(()=>{a(s)},[s]),v.jsx(r,{selectId:O,pageText:x,totalPages:h,activePage:u,buttonText:d,itemsText:p,selectWidth:I,selectDisabled:T,itemsDefaultValue:b,itemsOptions:C,onPageChange:f,onItemsChange:D})};t.__docgenInfo={description:"",methods:[],displayName:"_Pagination"};var i,l,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const A=["_Pagination"];export{t as _Pagination,A as __namedExportsOrder,j as default};
