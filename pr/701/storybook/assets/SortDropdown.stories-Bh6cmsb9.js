import{t as e}from"./react-BZJXY1be.js";import{Ft as t,Lt as n,Rt as r,Wt as i,rt as a,wt as o}from"./iframe-CH2zgN-8.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{c=i(),l=e(),o(),r(),u=t(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={title:`Filters/molecules`,component:a,decorators:[],parameters:{jsx:{skip:1}}},p=n.div``,m=()=>{let e=(0,c.select)(`Language`,{English:`english`,Japanese:`japanese`},`japanese`),t=(0,l.useMemo)(()=>[{text:e===`english`?`Name`:`名前`,value:`name`},{text:e===`english`?`Status`:`ステータス`,value:`status`},{text:e===`english`?`Cost`:`価格`,value:`cost`}],[e]),[n,r]=(0,l.useState)({text:t[1].text,value:t[0].value}),[i,o]=(0,l.useState)(!0),s=(0,c.boolean)(`Is Loading`,!1),f=(0,c.select)(`Design type`,{Default:`default`,Basic:`basic`},`basic`);(0,c.object)(`Dropdown list`,t);let m=d(`new sort`),h=(0,l.useCallback)((e,t)=>{r(e),o(t),m({newSort:e,isSortAscending:t})},[m]),g=(0,l.useCallback)(()=>{let r=t.find(e=>n.value===e.value);return r?e===`english`?`Sorted by ${r.text}`:`${r.text} で`:e===`english`?`Sorted by ${n.text}`:`${n.text} で`},[t,e,n.text,n.value]);return(0,u.jsx)(p,{children:(0,u.jsx)(a,{isSortAscending:i,buttonText:g(),isLoading:s,design:f,list:t,selected:n,onSelect:h,ascendingText:e===`english`?`Ascending`:`昇順`,descendingText:e===`english`?`Descending`:`降順`})})},m.__docgenInfo={description:``,methods:[],displayName:`_SortDropdown`},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const language = select('Language', {
    English: 'english',
    Japanese: 'japanese'
  }, 'japanese');
  const dropdownList: IFilterItem[] = useMemo(() => [{
    text: language === 'english' ? 'Name' : '名前',
    value: 'name'
  }, {
    text: language === 'english' ? 'Status' : 'ステータス',
    value: 'status'
  }, {
    text: language === 'english' ? 'Cost' : '価格',
    value: 'cost'
  }], [language]);
  const [sortSelected, setSortSelected] = useState<IFilterItem>({
    text: dropdownList[1].text,
    value: dropdownList[0].value
  });
  const [isAscending, setIsAScending] = useState<boolean>(true);
  const isLoading = boolean('Is Loading', false);
  const design = select('Design type', {
    Default: 'default',
    Basic: 'basic'
  }, 'basic');
  // const buttonText = text('Button Text', \`Sorted by \${dropdownList[0].text}\`);
  const _list = object('Dropdown list', dropdownList);
  const lastSelection = action('new sort');
  const handleSelections = useCallback((newSort: IFilterItem, isSortAscending: boolean) => {
    setSortSelected(newSort);
    setIsAScending(isSortAscending);
    lastSelection({
      newSort,
      isSortAscending
    });
  }, [lastSelection]);
  const getSortedTranslation = useCallback(() => {
    const found = dropdownList.find(item => sortSelected.value === item.value);
    if (found) {
      return language === 'english' ? \`Sorted by \${found.text}\` : \`\${found.text} で\`;
    }
    return language === 'english' ? \`Sorted by \${sortSelected.text}\` : \`\${sortSelected.text} で\`;
  }, [dropdownList, language, sortSelected.text, sortSelected.value]);
  return <Container>
      <SortDropdown {...{
      isSortAscending: isAscending,
      buttonText: getSortedTranslation(),
      isLoading,
      design,
      list: dropdownList,
      selected: sortSelected,
      onSelect: handleSelections,
      ascendingText: language === 'english' ? 'Ascending' : '昇順',
      descendingText: language === 'english' ? 'Descending' : '降順'
    }} />
    </Container>;
}`,...m.parameters?.docs?.source}}},h=[`_SortDropdown`]})))()}g();export{m as _SortDropdown,h as __namedExportsOrder,f as default};