import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Lt as n,Ot as r,Rt as i,W as a,bt as o}from"./iframe-DiPaNbrM.js";var s,c,l,u,d,f,p,m;t((()=>{s=n(),c=e(i()),o(),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={title:`Misc/Molecules`,component:a,decorators:[]},f=[{value:5,textValue:`5`},{value:10,textValue:`10`},{value:20,textValue:`20`},{value:30,textValue:`30`},{value:100,textValue:`100`}],p=()=>{let e=(0,s.number)(`Active Page`,1),[t,n]=(0,c.useState)(e),r=u(`Page changed`),i=u(`Items Per Page`),o=(0,s.text)(`Page Text`,`Page:`),d=(0,s.text)(`Button Text`,`GO`),p=(0,s.text)(`Items Per Page`,`Items Per Page:`),m=(0,s.number)(`Items Default Value`,10),h=(0,s.text)(`Select Width`,`70px`),g=(0,s.text)(`SelectId`,`UniqID23`),_=(0,s.number)(`Total Pages`,20),v=(0,s.boolean)(`Select Disabled`,!1),y=(0,s.object)(`Items Options`,f);return(0,c.useEffect)(()=>{n(e)},[e]),(0,l.jsx)(a,{selectId:g,pageText:o,totalPages:_,activePage:t,buttonText:d,itemsText:p,selectWidth:h,selectDisabled:v,itemsDefaultValue:m,itemsOptions:y,onPageChange:e=>{r(e),n(e)},onItemsChange:e=>{i(e)}})},p.__docgenInfo={description:``,methods:[],displayName:`_Pagination`},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m=[`_Pagination`]}))();export{p as _Pagination,m as __namedExportsOrder,d as default};