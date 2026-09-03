import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Wt as n,Y as r,wt as i}from"./iframe-CH2zgN-8.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f,p;function m(){return(m=a((()=>{o=n(),s=e(),i(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Misc/Molecules`,component:r,decorators:[]},d=[{value:5,textValue:`5`},{value:10,textValue:`10`},{value:20,textValue:`20`},{value:30,textValue:`30`},{value:100,textValue:`100`}],f=()=>{let e=(0,o.number)(`Active Page`,1),[t,n]=(0,s.useState)(e),i=l(`Page changed`),a=l(`Items Per Page`),u=(0,o.text)(`Page Text`,`Page:`),f=(0,o.text)(`Button Text`,`GO`),p=(0,o.text)(`Items Per Page`,`Items Per Page:`),m=(0,o.number)(`Items Default Value`,10),h=(0,o.text)(`Select Width`,`70px`),g=(0,o.text)(`SelectId`,`UniqID23`),_=(0,o.number)(`Total Pages`,20),v=(0,o.boolean)(`Select Disabled`,!1),y=(0,o.object)(`Items Options`,d);return(0,s.useEffect)(()=>{n(e)},[e]),(0,c.jsx)(r,{selectId:g,pageText:u,totalPages:_,activePage:t,buttonText:f,itemsText:p,selectWidth:h,selectDisabled:v,itemsDefaultValue:m,itemsOptions:y,onPageChange:e=>{i(e),n(e)},onItemsChange:e=>{a(e)}})},f.__docgenInfo={description:``,methods:[],displayName:`_Pagination`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`_Pagination`]})))()}m();export{f as _Pagination,p as __namedExportsOrder,u as default};